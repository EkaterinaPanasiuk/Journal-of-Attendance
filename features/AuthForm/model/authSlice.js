import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api, protectedApi } from "shared/api";
import { MSG_2, MSG_3, MSG_4, MSG_5 } from "./errorsTitles";

export const fetchToken = createAsyncThunk(
  "auth/fetchToken",
  // eslint-disable-next-line
  async function ({ navigate, username, password }, { rejectWithValue }) {
    try {
      const response = await api.post("/auth/token/login/", {
        password,
        username,
      });
      navigate("/users");
      return response.data;
    } catch (e) {
      if (!e.response) {
        throw rejectWithValue(e.message);
      } else {
        return rejectWithValue(e.response.status);
      }
    }
  },
);

const initialState = {
  error: null,
  isBlocked: false,
  token: null,
};

/* eslint-disable no-param-reassign */
const authSlice = createSlice({
  extraReducers: {
    [fetchToken.fulfilled]: (state, action) => {
      const token = action.payload.auth_token;
      localStorage.setItem("token", token);
      state.token = token;
    },
    [fetchToken.pending]: (state) => {
      state.error = null;
    },
    [fetchToken.rejected]: (state, action) => {
      if (action.payload === 401) {
        state.error = MSG_2;
      } else if (action.payload === 429) {
        state.error = MSG_4;
        state.isBlocked = true;
      } else if (action.payload === 502 || action.payload === "Failed to fetch") {
        state.error = MSG_5;
      } else {
        state.error = MSG_3;
      }
    },
  },
  initialState,
  name: "auth",
  reducers: {
    removeToken(state) {
      localStorage.removeItem("token");
      state.token = null;
    },
    setToken(state, action) {
      const { token } = action.payload;
      localStorage.setItem("token", token);
      state.token = token;
    },
    setUserBlocked(state) {
      state.isBlocked = true;
    },
    setUserUnblocked(state) {
      state.isBlocked = false;
    },
  },
});
/* eslint-enable no-param-reassign */

export const { setToken, removeToken, setUserBlocked, setUserUnblocked } = authSlice.actions;

export default authSlice.reducer;

export const fetchLogout = createAsyncThunk(
  "auth/fetchLogout",
  // eslint-disable-next-line
  async function (navigate, { rejectWithValue, dispatch }) {
    try {
      const response = await protectedApi.post("/auth/token/logout/");
      return response.data;
    } catch (e) {
      if (!e.response) {
        throw rejectWithValue(e.message);
      } else {
        return rejectWithValue(e.response.status);
      }
    } finally {
      dispatch(removeToken());
      navigate("/authorization");
    }
  },
);

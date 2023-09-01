import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { protectedApi } from "shared/api";
import { formatDateTime } from "shared/lib/formatDateTime/formatDateTime";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  // eslint-disable-next-line
  async function (_, { rejectWithValue }) {
    try {
      const response = await protectedApi.get("/auth/users/me/");
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
  firstName: null,
  id: null,
  isMetodist: false,
  isSuperuser: false,
  isTeacher: false,
  lastName: null,
  lastSync: null,
  middleName: null,
  status: null,
  username: null,
};

/* eslint-disable no-param-reassign */
const userSlice = createSlice({
  extraReducers: {
    [fetchUser.fulfilled]: (state, action) => {
      state.firstName = action.payload.first_name;
      state.lastName = action.payload.last_name;
      state.lastSync = formatDateTime(action.payload.last_sync);
      state.middleName = action.payload.middle_name;
      state.id = action.payload.id;
      state.status = "resolved";
      state.username = action.payload.username;
      state.isMetodist = action.payload.is_metodist;
      state.isSuperuser = action.payload.is_superuser;
      state.isTeacher = action.payload.is_teacher;
    },
    [fetchUser.rejected]: (state) => {
      state.status = "rejected";
    },
  },
  initialState,
  name: "user",
  reducers: {
    setLastUpdate(state, action) {
      state.lastSync = formatDateTime(action.payload.last_sync);
    },
    setUser(state, action) {
      state.firstName = action.payload.first_name;
      state.lastName = action.payload.last_name;
      state.lastSync = formatDateTime(action.payload.last_sync);
      state.middleName = action.payload.middle_name;
      state.id = action.payload.id;
      state.status = "resolved";
      state.username = action.payload.username;
      state.isMetodist = action.payload.is_metodist;
      state.isSuperuser = action.payload.is_superuser;
      state.isTeacher = action.payload.is_teacher;
    },
    statusReset(state) {
      state.status = null;
    },
  },
});
/* eslint-enable no-param-reassign */

export const { setLastUpdate, setUser, statusReset } = userSlice.actions;

export default userSlice.reducer;

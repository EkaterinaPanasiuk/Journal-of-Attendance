import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { protectedApi } from "shared/api";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  // eslint-disable-next-line
  async function (_, { rejectWithValue }) {
    try {
      const response = await protectedApi.get("/auth/users/");
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

export const fetchDirections = createAsyncThunk(
  "users/fetchDirections",
  // eslint-disable-next-line
  async function (_, { rejectWithValue }) {
    try {
      const response = await protectedApi.get("/auth/study_fields/");
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
  directions: [],
  error: null,
  users: [],
};

/* eslint-disable no-param-reassign */
const usersSlice = createSlice({
  extraReducers: {
    [fetchDirections.fulfilled]: (state, action) => {
      state.directions = action.payload.map((obj) => ({
        [obj.study_field]: obj.short_study_field ? obj.short_study_field : obj.study_field,
      }));
    },
    [fetchDirections.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.users = action.payload.results
        // eslint-disable-next-line camelcase
        .filter(({ first_name, last_name }) => first_name && last_name)
        // eslint-disable-next-line camelcase
        .map(({ study_fields, ...obj }) => ({
          ...obj,
          // eslint-disable-next-line camelcase
          study_fields: study_fields.map(
            // eslint-disable-next-line camelcase
            ({ study_field, short_study_field }) => ({
              // eslint-disable-next-line camelcase
              short_study_field: short_study_field || study_field,
              // eslint-disable-next-line camelcase
              study_field,
            }),
          ),
        }));
    },
  },
  initialState,
  name: "users",
  reducers: {
    removeError(state) {
      state.error = null;
    },
    removeUsers(state) {
      state.users = [];
    },
  },
});
/* eslint-enable no-param-reassign */
export const { removeError, removeUsers } = usersSlice.actions;

export default usersSlice.reducer;

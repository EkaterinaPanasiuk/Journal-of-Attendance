import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { protectedApi } from "shared/api";

function parsArrString(str) {
  return [...new Set(str?.slice(2, -2).split("', '") ?? [])];
}

const initialState = {
  courses: [],
  email: null,
  firstName: null,
  groups: [],
  id: null,
  isActive: false,
  isMetodist: false,
  isStaff: false,
  isSuperuser: false,
  isTeacher: false,
  lastName: null,
  lastUpdate: null,
  middleName: null,
  studyFields: [],
  username: null,
};
export const fetchUserInfo = createAsyncThunk(
  "userInfo/fetchUserInfo",
  // eslint-disable-next-line
  async function ({ id, navigate }, { rejectWithValue }) {
    try {
      const response = await protectedApi.get(`/auth/users/${id}/`);
      return response.data;
    } catch (e) {
      if (!e.response) {
        throw rejectWithValue(e.message);
      } else {
        if (e.response.status === 502 || e.response.status === 504) {
          navigate("/error");
        }
        return rejectWithValue(e.response.status);
      }
    }
  },
);

/* eslint-disable no-param-reassign */
const userInfo = createSlice({
  extraReducers: {
    [fetchUserInfo.fulfilled]: (state, action) => {
      const user = action.payload;
      state.id = user.id;
      state.username = user.username;
      state.firstName = user.first_name;
      state.lastName = user.last_name;
      state.middleName = user.middle_name;
      state.isActive = user.is_active;
      state.isStaff = user.is_staff;
      state.isSuperuser = user.is_superuser;
      state.isTeacher = user.is_teacher;
      state.isMetodist = user.is_metodist;
      state.studyFields = user.study_fields;
      state.lastUpdate = user.last_update;
      state.email = user.email;
      state.groups = parsArrString(user.study_groups);
      state.courses = parsArrString(user.study_courses);
    },
  },
  initialState,
  name: "userInfo",
  reducers: {
    clearUserInfo(state) {
      state.id = initialState.id;
      state.username = initialState.username;
      state.firstName = initialState.firstName;
      state.lastName = initialState.lastName;
      state.middleName = initialState.middleName;
      state.isActive = initialState.isActive;
      state.isStaff = initialState.isStaff;
      state.isSuperuser = initialState.isSuperuser;
      state.isTeacher = initialState.isTeacher;
      state.isMetodist = initialState.isMetodist;
      state.studyFields = initialState.studyFields;
      state.lastUpdate = initialState.lastUpdate;
      state.email = initialState.email;
      state.groups = initialState.groups;
      state.courses = initialState.courses;
    },
  },
});
/* eslint-enable no-param-reassign */

export const { clearUserInfo } = userInfo.actions;

export default userInfo.reducer;

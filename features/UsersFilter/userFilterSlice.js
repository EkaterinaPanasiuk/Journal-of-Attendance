import { createSlice } from "@reduxjs/toolkit";
/* eslint-disable no-param-reassign */

const userFilterSlice = createSlice({
  initialState: {
    isCheckedAdmin: false,
    isCheckedMethod: false,
    isCheckedNoActive: false,
    isCheckedTeach: false,
  },
  name: "userFilter",
  reducers: {
    clearFilter(state) {
      state.isCheckedAdmin = false;
      state.isCheckedMethod = false;
      state.isCheckedNoActive = false;
      state.isCheckedTeach = false;
    },
    resetAll(state) {
      if (state.isCheckedAdmin && state.isCheckedMethod && state.isCheckedTeach) {
        state.isCheckedAdmin = false;
        state.isCheckedMethod = false;
        state.isCheckedTeach = false;
      }
    },
    toggleAdmin(state) {
      state.isCheckedAdmin = !state.isCheckedAdmin;
    },
    toggleMethod(state) {
      state.isCheckedMethod = !state.isCheckedMethod;
    },
    toggleNoActive(state) {
      state.isCheckedNoActive = !state.isCheckedNoActive;
    },
    toggleTeach(state) {
      state.isCheckedTeach = !state.isCheckedTeach;
    },
  },
});
/* eslint-enable no-param-reassign */
export const { clearFilter, resetAll, toggleTeach, toggleMethod, toggleAdmin, toggleNoActive } = userFilterSlice.actions;

export default userFilterSlice.reducer;

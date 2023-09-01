import { createSlice } from "@reduxjs/toolkit";

/* eslint-disable no-param-reassign */
const usersSortingSlice = createSlice({
  initialState: {
    sort: "chrono",
    sortDirection: true,
  },
  name: "usersSorting",
  reducers: {
    changeSortingType(state, action) {
      state.sort = action.payload;
      state.sortDirection = true;
    },
    clearSorting(state) {
      state.sort = "chrono";
      state.sortDirection = true;
    },
    toggleDirection(state) {
      state.sortDirection = !state.sortDirection;
    },
  },
});

export const { toggleDirection, changeSortingType, clearSorting } = usersSortingSlice.actions;

export default usersSortingSlice.reducer;

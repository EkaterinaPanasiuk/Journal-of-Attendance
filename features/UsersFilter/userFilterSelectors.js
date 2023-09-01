import { createSelector } from "@reduxjs/toolkit";

const selectUserFilterState = (state) => state.userFilter;
const selectUsers = (state) => state.users.users;

export const selectFilteredUsers = createSelector([selectUserFilterState, selectUsers], (userFilterState, users) => {
  const { isCheckedTeach, isCheckedMethod, isCheckedAdmin, isCheckedNoActive } = userFilterState;
  const isCheckedAny = isCheckedTeach || isCheckedMethod || isCheckedAdmin;
  return users.filter(
    (user) =>
      ((isCheckedNoActive && user.is_active === false) || !isCheckedNoActive) &&
      (!isCheckedAny ||
        (isCheckedTeach && user.is_teacher) ||
        (isCheckedMethod && user.is_metodist) ||
        (isCheckedAdmin && user.is_superuser)),
  );
});

export const selectIsCheckedAll = createSelector([selectUserFilterState], (userFilterState) => {
  const { isCheckedTeach, isCheckedMethod, isCheckedAdmin } = userFilterState;
  return isCheckedTeach && isCheckedMethod && isCheckedAdmin;
});

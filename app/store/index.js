import { configureStore } from "@reduxjs/toolkit";
import authReducer from "features/AuthForm/model/authSlice";
import userReducer from "pages/Routing/model/userSlice";
import usersReducer from "pages/AdminLayout/AdminUsers/usersSlice";
import userInfoReducer from "pages/AdminLayout/UserInfo/model/userInfoSlice";
import userFilterReducer from "features/UsersFilter/userFilterSlice";
import usersSortingReducer from "features/UsersSorting/usersSortingSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    userFilter: userFilterReducer,
    userInfo: userInfoReducer,
    users: usersReducer,
    usersSorting: usersSortingReducer,
  },
});

export default store;

import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "features/AuthForm/model/authSlice";
import HomePage from "pages/HomePage/HomePage";
import { AdminLayout } from "pages/AdminLayout/AdminLayout";
import { fetchUser, statusReset } from "./userSlice";

function RequireAuth() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(setToken({ token }));
    }
    dispatch(fetchUser());
    return () => {
      dispatch(statusReset());
    };
  }, [dispatch]);
  const { status, isSuperuser } = useSelector((state) => state.user);

  return status === "resolved" ? (
    isSuperuser ? (
      <AdminLayout />
    ) : (
      <HomePage />
    )
  ) : status === "rejected" ? (
    <Navigate to="/authorization" />
  ) : null;
}
export default RequireAuth;

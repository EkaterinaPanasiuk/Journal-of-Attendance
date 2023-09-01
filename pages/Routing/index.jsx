import { Routes, Route, Navigate } from "react-router-dom";
import { AdminUsers } from "pages/AdminLayout/AdminUsers/AdminUsers";
import { ErrorPage } from "pages/ErrorPage/ErrorPage";
import AuthRouter from "pages/AuthRouter/AuthRouter";
import HomePage from "pages/HomePage/HomePage";
import UserInfo from "pages/AdminLayout/UserInfo/UserInfo";
import { EditUserCard } from "features/EditUserCard/ui/EditUserCard";
import { UserCardBig } from "features/UserCardBig/ui/UserCardBig";
import ResetPasswordPage from "../ResetPasswordPage/ResetPasswordPage";
import AuthPage from "../AuthPage/AuthPage";
import RequireAuth from "./model/RequireAuth";

export function Routing() {
  return (
    <Routes>
      <Route path="/" element={<RequireAuth />}>
        <Route index path="/" element={<Navigate to="users" />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="users/:id" element={<UserInfo />}>
          <Route index element={<UserCardBig />} />
          <Route path="edit" element={<EditUserCard />} />
        </Route>
        <Route path="schedule" element={<div>schedule</div>} />
        <Route path="groups" element={<div>groups</div>} />
        <Route path="workout" element={<div>workout</div>} />
      </Route>
      <Route path="/authorization" element={<AuthRouter />}>
        <Route index element={<AuthPage />} />
        <Route path="resetPassword" element={<ResetPasswordPage />} />
      </Route>
      <Route path="/error" element={<ErrorPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

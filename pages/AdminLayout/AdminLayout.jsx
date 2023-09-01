import { Navbar } from "features/Navbar";
import { Outlet } from "react-router-dom";

export function AdminLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

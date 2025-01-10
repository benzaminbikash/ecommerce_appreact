import React from "react";
import { Navigate, Outlet } from "react-router";

function AdminProtectRoute() {
  const isAuthenticated = document.cookie.includes("token=");
  return isAuthenticated ? <Outlet /> : <Navigate to={"/admin/login"} />;
}

export default AdminProtectRoute;

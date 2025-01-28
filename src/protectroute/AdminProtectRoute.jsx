import React from "react";
import { Navigate, Outlet } from "react-router";

function AdminProtectRoute() {
  const isAuthenticated = console.log("isAuthenticated", isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to={"/admin/login"} />;
}

export default AdminProtectRoute;

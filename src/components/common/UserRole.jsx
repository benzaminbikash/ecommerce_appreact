import { Navigate, Outlet } from "react-router-dom";
import AuthRole from "./AuthRole";

const UserAuthRole = () => {
  const { isAdmin, status } = AuthRole();

  return !isAdmin && status == "user" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default UserAuthRole;

import { Navigate, Outlet } from "react-router-dom";
import AuthRole from "./AuthRole";

const AdminAuthRole = () => {
  const { isAdmin } = AuthRole();

  return isAdmin ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AdminAuthRole;

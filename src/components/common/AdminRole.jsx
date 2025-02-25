import { Navigate, Outlet } from "react-router-dom";
import AuthRole from "./AuthRole";

const AdminAuthRole = () => {
  const { isAdmin } = AuthRole();
  console.log("isAdmin", isAdmin);

  return isAdmin ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AdminAuthRole;

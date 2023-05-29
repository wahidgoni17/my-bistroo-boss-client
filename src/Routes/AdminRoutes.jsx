import React from "react";
import useAuth from "../Hooks/useAuth";
import loaderimg from '../assets/others/loader2.gif';
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
const AdminRoutes = ({children}) => {
  const { user, loader } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin()
  const location = useLocation();
  if (loader || isAdminLoading) {
    return <img src={loaderimg} alt="" />;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;

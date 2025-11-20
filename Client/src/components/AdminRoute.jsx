import React from "react";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));


  if (!userInfo) return <Navigate to="/auth" replace />;


  if (!userInfo.isAdmin) return <Navigate to="/" replace />;

  return children;
};

export default AdminRoute;

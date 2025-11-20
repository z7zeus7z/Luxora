import React from "react";
import { Navigate } from "react-router-dom";

const RedirectIfLoggedIn = ({ children }) => {
  const user = localStorage.getItem("userInfo");

  if (user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RedirectIfLoggedIn;

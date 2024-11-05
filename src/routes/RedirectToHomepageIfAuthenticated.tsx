import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


const RedirectToHomepageIfAuthenticated = () => {
  const { isAuthenticated, loading } = useAuth();
  console.log("isAuthenticated here:", isAuthenticated);

  if (loading) {
    return null;
  }

  return isAuthenticated ? <Navigate to="/homepage" replace /> : <Outlet />;
};

export default RedirectToHomepageIfAuthenticated;

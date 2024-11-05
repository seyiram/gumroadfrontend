import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import SignIn from "../components/auth/SignIn";

const RedirectToHomepageIfAuthenticated = () => {
  const { isAuthenticated, loading } = useAuth();
  console.log("isAuthenticated here:", isAuthenticated);

  if (loading) {
    return null;
  }

  return isAuthenticated ? <Navigate to="/homepage" replace /> : <SignIn />;
};

export default RedirectToHomepageIfAuthenticated;

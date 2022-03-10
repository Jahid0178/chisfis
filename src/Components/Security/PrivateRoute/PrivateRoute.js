import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  return user.email ? (
    children
  ) : (
    <Navigate to="/sign-up" state={{ from: location }} replace />
  );
};

export default PrivateRoute;

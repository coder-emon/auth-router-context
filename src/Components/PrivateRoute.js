import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { userContext } from "../UserContext/UserContext";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(userContext);
  if (user) {
    return children;
  }
  return (
    <div>
      <Navigate to="/login"></Navigate>
    </div>
  );
};

export default PrivateRoute;

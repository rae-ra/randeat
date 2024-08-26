import React from 'react';
import {Navigate} from 'react-router-dom';
import {useAuth} from "./AuthContext";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/pleaselogin" />;
};

export default PrivateRoute;


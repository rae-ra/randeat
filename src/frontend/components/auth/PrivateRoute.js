import React from 'react';
import {Navigate} from 'react-router-dom';
import {useAuth} from "./AuthContext";

const PrivateRoute = ({ children, chefOnly }) => {
  const { isAuthenticated, userIdentity} = useAuth();

  return isAuthenticated && (!chefOnly || (userIdentity.role === 'chef')) ? children : <Navigate to="/pleaselogin" />;
};

export default PrivateRoute;


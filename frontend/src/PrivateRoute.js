import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const isAuthenticated = !!localStorage.getItem('jwtToken'); // Check for JWT token

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;

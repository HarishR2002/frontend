// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('authToken'); // Check for token in localStorage

  // If no token, redirect to login page
  return token ? children : <Navigate to="/" />;
};

export default PrivateRoute;

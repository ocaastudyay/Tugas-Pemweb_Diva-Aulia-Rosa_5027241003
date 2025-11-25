// frontend/src/components/PrivateRoute.jsx

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  // Cek apakah token ada di Local Storage
  const token = localStorage.getItem('token'); 

  // Jika token ada, tampilkan halaman yang diminta (children atau Outlet)
  if (token) {
    return children ? children : <Outlet />;
  }

  // Jika token TIDAK ada, arahkan (redirect) ke halaman Login
  return <Navigate to="/login" replace />;
};

export default PrivateRoute;
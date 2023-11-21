import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
  const user = useSelector((state) => state.authSlice.user);

  if (!user) return <Navigate to="/" replace />;

  return <Outlet />;
};

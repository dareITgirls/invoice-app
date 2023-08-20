import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
	const isLoggedIn = useSelector(state => state.authSlice.isLoggedIn);

	if (!isLoggedIn) return <Navigate to='/' replace />;

	return <Outlet />;
};

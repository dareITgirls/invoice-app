import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';

import { useAuth} from '../providers/AuthProvider';

export const ProtectedRoute = () => {
    const { user } = useAuth();

    if(!user) return <Navigate to='/' replace />
    return <Outlet />
}
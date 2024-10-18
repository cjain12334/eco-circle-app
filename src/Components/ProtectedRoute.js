import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Change to default import

const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth(); // Assuming `isAuthenticated` returns true if the user is logged in

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;

/** @format */

import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from './AuthContext'

const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation(); // <--- 1. Grab current location

  if (loading) return <div>Loading...</div>;

  return isAuthenticated ? (
    <Outlet />
  ) : (
    // 2. Pass the current location into the state prop
    <Navigate to='/login' state={{ from: location }} replace />
  );
};

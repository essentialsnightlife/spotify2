import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

function ProtectedRoute({ children }: { children: React.ReactElement }) {
    const { isAuthenticated, isReady } = useAuth();
    if (!isReady) return null;
    if (!isAuthenticated) return <Navigate to="/login" replace />;

    return children;
}

export default ProtectedRoute;

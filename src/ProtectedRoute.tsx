import { Navigate } from "react-router-dom";
import { getCookie } from "@/helpers";
import { sessionCookie } from "*/constants";

interface ProtectedRouteProps {
  children: JSX.Element;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const accessToken = getCookie(sessionCookie);

  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { LogInContext } from "@/App";

function ProtectedRoute({ children }) {
  const { isLoggedIn } = useContext(LogInContext);
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;

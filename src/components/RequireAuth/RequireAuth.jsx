import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
// import { useAuth } from "../../context";

export const RequireAuth = () => {
  const location = useLocation();
  // const { authData } = useAuth();
  const { authData } = useSelector((state) => state.authReducer)
  const userID = authData._id;

  return userID ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

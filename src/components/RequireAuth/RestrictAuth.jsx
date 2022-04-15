import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../context";

export const RestrictAuth = () => {
  const location = useLocation();
  const { authData } = useAuth();
  const userID = authData._id;

  return userID ? (
    <Navigate
      to={
        location?.state?.from?.pathname ? location?.state?.from?.pathname : "/"
      }
      state={{ from: location }}
      replace
    />
  ) : (
    <Outlet />
  );
};

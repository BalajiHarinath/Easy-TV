import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const RestrictAuth = () => {
  const location = useLocation();
  const { authData } = useSelector((state) => state.authReducer);
  const userID = authData?._id;

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

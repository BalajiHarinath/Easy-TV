import "../../css/main.css";
import "./HeaderNav.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/Features/AuthSlice";
import { logoutWatchLaterVideos } from "../../redux/Features/WatchLaterSlice";
import { logoutlikedVideos } from "../../redux/Features/LikedVideoSlice";
import { useToast } from "../../context/ToastContext";

export const HeaderNav = () => {
  const { addToast } = useToast();
  const { authData } = useSelector((state) => state.authReducer);

  const encodedToken = localStorage.getItem("videoToken");

  const dispatch = useDispatch();

  return (
    <nav className="nav-header flex flex-justify-space-between flex-align-center pd-2">
      <h3>
        Easy<span className="title-header text-3xl font-semibold"> TV</span>
      </h3>
      <div className="flex flex-gap-2">
        <Link
          className="btn-transparent flex flex-column flex-justify-center flex-align-center"
          to={`${encodedToken ? "/profile" : "/login"}`}
        >
          <span className="material-icons-round icon">account_circle</span>
          <span className="text-sm">
            {authData?.firstName ? authData?.firstName : "User"}
          </span>
        </Link>
        {encodedToken && (
          <Link
            className="btn-transparent flex flex-column flex-justify-center flex-align-center"
            onClick={() => {
              dispatch(logout());
              addToast({ status: "removed", msg: "Logged out" });
              dispatch(logoutWatchLaterVideos());
              dispatch(logoutlikedVideos());
            }}
            to="/login"
          >
            <span className="material-icons-round icon">logout</span>
            <span className="text-sm">Logout</span>
          </Link>
        )}
      </div>
    </nav>
  );
};

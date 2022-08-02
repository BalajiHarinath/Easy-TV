import "../../css/main.css";
import "./Profile.css";
import { useSelector, useDispatch } from "react-redux";
import { useDocumentTitle, useScrollToTop } from "../../utils";
import { logout } from "../../redux/Features/AuthSlice";
import { logoutWatchLaterVideos } from "../../redux/Features/WatchLaterSlice";
import { logoutlikedVideos } from "../../redux/Features/LikedVideoSlice";
import { useToast } from "../../context/ToastContext";

export const Profile = () => {
  useDocumentTitle("Easy TV | Profile");
  useScrollToTop();

  const { addToast } = useToast();
  const dispatch = useDispatch();
  const { authData } = useSelector((state) => state.authReducer);

  const logoutHandler = () => {
    dispatch(logout());
    addToast({ status: "removed", msg: "Logged out" });
    dispatch(logoutWatchLaterVideos());
    dispatch(logoutlikedVideos());
  };
  return (
    <div className="main-profile">
      <div className="card-profile">
        <div className="card-profile-header">
          <h5>Profile</h5>
          <button onClick={() => logoutHandler()}>Logout</button>
        </div>
        <div className="card-profile-text">
          <p className="card-profile-text-header font-bold text-underline">
            UserDetails
          </p>
          <p>Name: {authData.firstName}</p>
          <p>Email: {authData.email}</p>
        </div>
      </div>
    </div>
  );
};

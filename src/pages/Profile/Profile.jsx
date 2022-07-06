import "../../css/main.css";
import "./Profile.css";
import { useAuth, useWatchLater, useLikedVideo } from "../../context";
import { useDocumentTitle, useScrollToTop } from "../../utils";

export const Profile = () => {
  useDocumentTitle("Easy TV | Profile");
  useScrollToTop();

  const { authData, logout } = useAuth();
  const { logoutWatchLaterVideos } = useWatchLater();
  const { logoutlikedVideos } = useLikedVideo();

  const logoutHandler = () => {
    logout();
    logoutWatchLaterVideos();
    logoutlikedVideos();
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

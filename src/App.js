import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HeaderNav, SidebarNav, RequireAuth, RestrictAuth } from "./components";
import {
  Home,
  VideoPage,
  SingleVideo,
  SignUp,
  Login,
  WatchLater,
  LikedVideos,
  History,
  Playlist,
  PlaylistDetails,
  SingleVideoPlaylist,
  Error,
} from "./pages";

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <SidebarNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<VideoPage />} />
        <Route path="/singlevideo/:videoId" element={<SingleVideo />} />
        <Route element={<RestrictAuth />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<RequireAuth />}>
          <Route path="/watchlater" element={<WatchLater />} />
          <Route path="/liked" element={<LikedVideos />} />
          <Route path="/history" element={<History />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/playlist/:playlistId" element={<PlaylistDetails />} exact/>
          <Route path="/playlist/:singleplaylistId/:singlevideoId" element={<SingleVideoPlaylist />} exact/>
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

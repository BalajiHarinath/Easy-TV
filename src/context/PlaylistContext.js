import { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { PlaylistReducer } from "../utils";
import { useToast } from "./ToastContext";
import { initialPlaylistData } from "../utils";

const PlaylistContext = createContext(initialPlaylistData);

const PlaylistProvider = ({ children }) => {
  const [playlistState, playlistDispatch] = useReducer(
    PlaylistReducer,
    initialPlaylistData
  );

  const config = {
    headers: {
      authorization: localStorage.getItem("videoToken"),
    },
  };

  const { addToast } = useToast();

  const getAllPlaylists = async () => {
    playlistDispatch({ type: "GET_ALL_PLAYLISTS_LOADING" });
    try {
      const response = await axios.get("/api/user/playlists", config);
      if (response.status === 200) {
        playlistDispatch({
          type: "GET_ALL_PLAYLISTS",
          payload: response.data.playlists,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addNewPlaylist = async (playlist) => {
    if (!localStorage.getItem("videoToken")) {
      addToast({ status: "removed", msg: "Login or SignUp first" });
    } else {
      playlistDispatch({ type: "ADD_NEW_PLAYLIST_LOADING" });
      try {
        const response = await axios.post(
          "/api/user/playlists",
          { playlist },
          config
        );
        if (response.status === 201) {
          playlistDispatch({
            type: "ADD_NEW_PLAYLIST",
            payload: response.data.playlists,
          });
          addToast({ status: "added", msg: "Playlist added" });
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const removePlaylist = async (_id) => {
    playlistDispatch({ type: "REMOVE_PLAYLIST_LOADING" });
    try {
      const response = await axios.delete(`/api/user/playlists/${_id}`, config);
      if (response.status === 200) {
        playlistDispatch({
          type: "REMOVE_PLAYLIST",
          payload: response.data.playlists,
        });
        addToast({ status: "removed", msg: "Playlist removed" });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getVideosFromPlaylist = async (_id) => {
    playlistDispatch({ type: "GET_VIDEOS_FROM_PLAYLIST_LOADING" });
    try {
      const response = await axios.get(`/api/user/playlists/${_id}`, config);
      if (response.status === 200) {
        playlistDispatch({
          type: "GET_VIDEOS_FROM_PLAYLIST",
          payload: response.data.playlist,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addVideoToPlaylist = async (_id, video) => {
    playlistDispatch({ type: "ADD_VIDEO_TO_PLAYLIST_LOADING" });
    try {
      const response = await axios.post(
        `/api/user/playlists/${_id}`,
        { video },
        config
      );
      if (response.status === 201) {
        playlistDispatch({
          type: "ADD_VIDEO_TO_PLAYLIST",
          payload: response.data.playlist,
        });
        addToast({ status: "added", msg: "Video added to playlist" });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeVideoFromPlaylist = async (playlist_id, video_id) => {
    playlistDispatch({ type: "REMOVE_VIDEO_FROM_PLAYLIST_LOADING" });
    try {
      const response = await axios.delete(
        `/api/user/playlists/${playlist_id}/${video_id}`,
        config
      );
      if (response.status === 200) {
        playlistDispatch({
          type: "REMOVE_VIDEO_FROM_PLAYLIST",
          payload: response.data.playlist,
        });
        addToast({ status: "removed", msg: "Video removed from playlist" });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const logoutPlaylist = () => {
    playlistDispatch({
      type: "LOGOUT",
      payload: { playlists: [], updatedplaylist: {}, playlist: [] },
    });
  };

  return (
    <PlaylistContext.Provider
      value={{
        getAllPlaylists,
        addNewPlaylist,
        removePlaylist,
        getVideosFromPlaylist,
        addVideoToPlaylist,
        removeVideoFromPlaylist,
        logoutPlaylist,
        playlistState,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);

export { PlaylistProvider, usePlaylist };

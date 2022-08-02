import axios from "axios";
import { Playlist } from "../../pages/Playlist/Playlist";

export const getAllPlaylistsService = async () => {
  const response = await axios.get("/api/user/playlists", {
    headers: {
      authorization: localStorage.getItem("videoToken"),
    },
  });
  return response;
};

export const addNewPlaylistService = async (playlist) => {
  const response = await axios.post(
    "/api/user/playlists",
    { playlist },
    {
      headers: {
        authorization: localStorage.getItem("videoToken"),
      },
    }
  );
  return response;
};

export const removePlaylistService = async (_id) => {
  const response = await axios.delete(`/api/user/playlists/${_id}`, {
    headers: {
      authorization: localStorage.getItem("videoToken"),
    },
  });
  return response;
};

export const getVideosFromPlaylistService = async (_id) => {
  const response = await axios.get(`/api/user/playlists/${_id}`, {
    headers: {
      authorization: localStorage.getItem("videoToken"),
    },
  });
  return response;
};

export const addVideoToPlaylistService = async (_id, video) => {
  const response = await axios.post(
    `/api/user/playlists/${_id}`,
    { video },
    {
      headers: {
        authorization: localStorage.getItem("videoToken"),
      },
    }
  );
  return response;
};

export const removeVideoFromPlaylistService = async (playlist_id, video_id) => {
  const response = await axios.delete(
    `/api/user/playlists/${playlist_id}/${video_id}`,
    {
      headers: {
        authorization: localStorage.getItem("videoToken"),
      },
    }
  );
  return response;
};

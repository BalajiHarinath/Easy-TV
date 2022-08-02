import "../../css/main.css";
import "./CardVideo.css";
import { useEffect, useState } from "react";
import React from "react";
import {
  getAllPlaylists,
  addVideoToPlaylist,
  removeVideoFromPlaylist,
} from "../../redux/Features/PlaylistSlice";
import { useToast } from "../../context/ToastContext";
import { useDispatch } from "react-redux";

export const CardVideoPlaylist = ({ playlist, item }) => {
  const [isplaylistUpdated, setIsPlaylistUpdated] = useState(false);

  const dispatch = useDispatch();
  const { addToast } = useToast();

  const inputCheckboxHandler = () => {
    const inPlaylist = playlist.videos.some((video) => video._id === item._id);
    inPlaylist
      ? dispatch(
          removeVideoFromPlaylist({
            playlist_id: playlist._id,
            video_id: item._id,
          })
        )
          .unwrap()
          .then(() =>
            addToast({ status: "removed", msg: "Video removed from playlist" })
          )
      : dispatch(addVideoToPlaylist({ _id: playlist._id, video: item }))
          .unwrap()
          .then(() =>
            addToast({ status: "added", msg: "Video added to playlist" })
          );
    setIsPlaylistUpdated(true);
  };

  useEffect(() => {
    dispatch(getAllPlaylists());
  }, [isplaylistUpdated]);

  return (
    <label className="text-sm flex flex-align-center">
      <input
        type="checkbox"
        checked={playlist.videos.some((video) => video._id === item._id)}
        onChange={() => inputCheckboxHandler()}
      />
      {playlist.title}
    </label>
  );
};

import "../../css/main.css";
import "./CardVideo.css";
import { useEffect, useState } from "react";
import React from "react";
import { usePlaylist } from "../../context";

export const CardVideoPlaylist = ({ playlist, item }) => {
  const [isplaylistUpdated, setIsPlaylistUpdated] = useState(false);

  const { getAllPlaylists, addVideoToPlaylist, removeVideoFromPlaylist } =
    usePlaylist();

  const inputCheckboxHandler = () => {
    const inPlaylist = playlist.videos.some((video) => video._id === item._id);
    inPlaylist
      ? removeVideoFromPlaylist(playlist._id, item._id)
      : addVideoToPlaylist(playlist._id, item);
    setIsPlaylistUpdated(true);
  };

  useEffect(() => {
    getAllPlaylists();
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

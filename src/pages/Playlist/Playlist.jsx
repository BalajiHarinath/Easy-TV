import "../../css/main.css";
import "./Playlist.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { usePlaylist } from "../../context";
import { CardLoader, CardPlaylist } from "../../components";
import { PageEmptyImage } from "../../Assets/index";
import { useDocumentTitle, useScrollToTop } from "../../utils";

export const Playlist = () => {
  useDocumentTitle("Easy TV | Playlists");
  useScrollToTop();

  const { getAllPlaylists, playlistState } = usePlaylist();
  const { playlistLoading, playlists, playlistError, removeplaylistLoading } =
    playlistState;

  useEffect(() => {
    getAllPlaylists();
  }, [removeplaylistLoading]);

  return (
    <main className="main-playlist">
      {playlists.length > 0 ? (
        <h4 className="title-playlist-page font-semibold pdl-3 pdt-3">
          Playlists{" "}
          <small className="videos-number-playlist-page text-base font-normal pdl-0-5">
            {playlists.length === 1
              ? "1 video"
              : `${playlists.length} playlists`}
          </small>
        </h4>
      ) : (
        <h4 className="title-playlist-page font-semibold pdl-3 pdt-3">
          Playlists Empty
        </h4>
      )}

      <div className="container-playlist-card flex flex-wrap flex-gap-3 pd-3 pdt-1">
        {playlistLoading ? (
          new Array(6).fill().map((_, id) => <CardLoader key={id} />)
        ) : playlists.length > 0 ? (
          playlists.map((playlist) => (
            <CardPlaylist playlist={playlist} key={playlist._id} />
          ))
        ) : (
          <div className="conatiner-playlist-empty">
            <img
              className="image-playlist-empty"
              src={PageEmptyImage}
              alt="Playlist-empty-img"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </main>
  );
};

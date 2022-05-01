import "../../css/main.css";
import "./PlaylistDetails.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PageEmptyImage } from "../../Assets/index";
import {
  CardVideo,
  CardLoader,
  PlaylistDetailsHeadingLoader,
} from "../../components";
import { usePlaylist } from "../../context";
import { useDocumentTitle, useScrollToTop } from "../../utils";

export const PlaylistDetails = () => {
  useDocumentTitle("Easy TV | PlaylistVideos");
  useScrollToTop();

  const { getVideosFromPlaylist, removePlaylist, playlistState } =
    usePlaylist();
  const {
    playlistLoading,
    playlist,
    removeplaylistLoading,
    removeVideoFromPlaylistLoading,
  } = playlistState;
  const { playlistId } = useParams();

  useEffect(() => {
    getVideosFromPlaylist(playlistId);
  }, [removeVideoFromPlaylistLoading]);

  useEffect(() => {
    getVideosFromPlaylist(playlistId);
  }, [removeplaylistLoading]);

  return (
    <main className="main-playlist-details">
      {playlistLoading ? (
        <div className="pdl-3 pdt-3">
          <PlaylistDetailsHeadingLoader />
        </div>
      ) : playlist?.videos?.length > 0 ? (
        <div className="position-relative">
          <button
            className="btn-clear-all font-semibold"
            onClick={() => removePlaylist(playlistId)}
          >
            Clear Playlist
          </button>
          <h4 className="title-playlist-details-page font-semibold pdl-3 pdt-3">
            {`${playlist.title} Playlist`}{" "}
            <small className="videos-number-playlist-details-page text-base font-normal pdl-0-5">
              {playlist.videos.length === 1
                ? "1 video"
                : `${playlist.videos.length} videos`}
            </small>
          </h4>
        </div>
      ) : (
        <h4 className="title-playlist-details-page font-semibold pdl-3 pdt-3">
          {playlist?.title} Playlist Empty
        </h4>
      )}
      <div className="container-playlist-details-card flex flex-gap-3 flex-wrap pd-3 pdt-1">
        {playlistLoading ? (
          new Array(6).fill().map((_, id) => <CardLoader key={id} />)
        ) : playlist?.videos?.length > 0 ? (
          playlist.videos.map((item) => (
            <CardVideo key={item._id} item={item} />
          ))
        ) : (
          <div className="conatiner-liked-videos-empty">
            <img
              className="image-watch-later"
              src={PageEmptyImage}
              alt="Watch-later-empty-img"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </main>
  );
};

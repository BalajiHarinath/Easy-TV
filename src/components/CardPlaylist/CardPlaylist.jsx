import "../../css/main.css";
import "./CardPlaylist.css";
import { Link } from "react-router-dom";
import { PlaylistEmptyImage } from "../../Assets/index";
import { useHistory, usePlaylist } from "../../context";
import { setInHistory } from "../../redux/Features/HistorySlice";
import { useSelector, useDispatch } from "react-redux";

export const CardPlaylist = ({ playlist }) => {
  // const { inHistory, setInHistory } = useHistory();
  const { inHistory } = useSelector((state) => state.historyReducer);
  const dispatch = useDispatch();

  const { removePlaylist } = usePlaylist();

  if (playlist?.videos?.length !== 0) {
    var src = playlist.videos[0].thumbnail.url;
    var alt = playlist.videos[0].thumbnail.altTxt;
  }

  return (
    <div className="card-playlist  mb-2">
      <div className="container-img-card-playlist">
        {playlist?.videos?.length === 0 ? (
          <img
            className="img-card-playlist"
            src={PlaylistEmptyImage}
            loading="lazy"
            alt="image-empty-playlist"
          />
        ) : (
          <img
            className="img-card-playlist"
            src={src}
            loading="lazy"
            alt={alt}
          />
        )}
        <Link
          className={`${
            playlist?.videos?.length === 0 ? "disable-link" : "cursor-pointer"
          } container-overlay-img-playlist-card flex flex-justify-center flex-align-center`}
          // onClick={() => setInHistory([...inHistory, playlist?.videos[0]?._id])}
          onClick={() => dispatch(setInHistory(playlist?.videos[0]?._id))}
          to={`/playlist/${playlist?._id}/${playlist?.videos[0]?._id}`}
        >
          <div className="flex flex-column">
            <span className="font-semibold">{playlist?.videos?.length}</span>
            <span className="material-icons-outlined text-4xl">
              playlist_play
            </span>
          </div>
        </Link>
        <div className="container-btn-playlist-card flex flex-column">
          <div className="font-semibold">{playlist.title}</div>
          <Link
            className="btn-view-playlist text-base btn-transparent pdt-0-5"
            to={`/playlist/${playlist._id}`}
          >
            View Playlist
          </Link>
          <button
            className="btn-remove-playlist btn-transparent"
            onClick={() => removePlaylist(playlist?._id)}
          >
            <span className="material-icons icon btn-transparent pdr-0-5">
              delete
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

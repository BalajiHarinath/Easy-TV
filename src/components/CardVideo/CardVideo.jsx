import "../../css/main.css";
import "./CardVideo.css";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useWatchLater, useHistory, usePlaylist } from "../../context";
import { CardVideoPlaylist } from "./CardVideoPlaylist";
import { ChipLoader } from "../index";

export const CardVideo = ({ item }) => {
  const [isPlay, setIsPlay] = useState(false);
  const [isMoreOptions, setIsMoreOptions] = useState(false);
  const [isSavetoPlaylistClicked, setIsSavetoPlaylistClicked] = useState(false);
  const [clickedCreateNewPlaylist, setClickedCreateNewPlaylist] =
    useState(false);
  const encodedToken = localStorage.getItem("videoToken");
  const navigate = useNavigate();

  const [playlistDetails, setPlaylistDetails] = useState({
    title: "",
    description: "",
    image: {
      src: "",
      alt: "",
    },
    isInputError: false,
  });

  const { _id, title, thumbnail, channel, profile, views, playbackTime } = item;

  const {
    getWatchLaterVideos,
    removeItemFromWatchLater,
    addItemToWatchLater,
    watchLaterVideos,
  } = useWatchLater();

  const { getAllPlaylists, addNewPlaylist, playlistState } = usePlaylist();

  const { inHistory, setInHistory } = useHistory();

  const ref = useRef(null);

  const {
    addNewplaylistLoading,
    addVideoToplaylistLoading,
    removeVideoFromPlaylistLoading,
    playlists,
    playlistError,
  } = playlistState;

  useEffect(() => {
    const clickHandler = () => {
      if (isMoreOptions) {
        setIsMoreOptions(false);
      }
    };
    document.addEventListener("click", clickHandler);

    return () => document.removeEventListener("click", clickHandler);
  }, [isMoreOptions]);

  useEffect(() => {
    const clickHandler = (event) => {
      if (
        isSavetoPlaylistClicked &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setIsSavetoPlaylistClicked(false);
      }
    };
    document.addEventListener("click", clickHandler);

    return () => document.removeEventListener("click", clickHandler);
  }, [isSavetoPlaylistClicked]);

  useEffect(() => {
    encodedToken && getWatchLaterVideos();
  }, []);

  useEffect(() => {
    encodedToken && getAllPlaylists();
  }, [
    clickedCreateNewPlaylist,
    addVideoToplaylistLoading,
    removeVideoFromPlaylistLoading,
  ]);

  useEffect(() => {
    setTimeout(() => {
      setPlaylistDetails({ ...playlistDetails, isInputError: false });
    }, 2000);
  }, [playlistDetails.isInputError]);

  const createPlaylistClickHandler = () => {
    if (playlistDetails.title === "") {
      setPlaylistDetails({ ...playlistDetails, isInputError: true });
    } else {
      setClickedCreateNewPlaylist(false);
      addNewPlaylist(playlistDetails);
      playlistDetails.title = "";
    }
    setIsSavetoPlaylistClicked(true);
  };

  return (
    <div className="container-card flex flex-column flex-gap-0-5">
      <Link
        className="container-img-thumbnail-card cursor-pointer"
        onMouseLeave={() => setIsPlay(false)}
        onMouseEnter={() => setIsPlay(true)}
        onClick={() => {
          encodedToken && setInHistory([...inHistory, item._id]);
        }}
        to={`${encodedToken ? `/singlevideo/${item._id}` : "/login"}`}
      >
        <img
          className="img-thumbnail-card"
          src={thumbnail.url}
          loading="lazy"
          alt={thumbnail.altTxt}
        />
        <div className="duration-card">{playbackTime} min</div>

        <div
          className={`${
            isPlay
              ? "container-overlay-img-thumbnail-card flex flex-justify-center flex-align-center cursor-pointer"
              : "display-none"
          }`}
          onMouseLeave={() => setIsPlay(false)}
          onMouseEnter={() => setIsPlay(true)}
        >
          <button className="btn-transparent">
            <span className="material-icons-round text-3xl">play_circle</span>
          </button>
        </div>
      </Link>

      <div className="flex flex-gap-0-5 text-card-video">
        <img
          className="img-profile-card"
          src={profile.url}
          loading="lazy"
          alt={profile.altTxt}
        />
        <div className="flex flex-column flex-gap-0-5 flex-grow-1">
          <p className="title-card-video text-sm pdt-0-5">{title}</p>
          <div className="flex flex-align-center flex-gap-0-5">
            <div className="channel-card-video flex flex-justify-start text-sm">
              {channel}
            </div>
            <span className="text-xs">{views} views</span>
          </div>
        </div>
        <button
          className={`${
            isMoreOptions ? "btn-more-vert-card-active" : " "
          } btn-more-vert-card btn-transparent flex flex-align-center flex-justify-center`}
          onClick={() => setIsMoreOptions(!isMoreOptions)}
        >
          <span className="material-icons-round ">more_vert</span>
        </button>
        <div
          className={`${
            isMoreOptions ? "container-overlay-text-video-card" : "display-none"
          }`}
        >
          <ul className="list-style-none pd-0-5">
            {encodedToken ? (
              watchLaterVideos.some((item) => item._id === _id) ? (
                <li
                  className="item-container-overlay-text-video-card flex flex-align-center"
                  onClick={() => removeItemFromWatchLater(_id)}
                >
                  <span className="material-icons-outlined icon btn-transparent pdr-0-5">
                    watch_later
                  </span>
                  <div className="btn-transparent text-sm">
                    Remove from Watch Later
                  </div>
                </li>
              ) : (
                <li
                  className="item-container-overlay-text-video-card flex flex-align-center"
                  onClick={() => addItemToWatchLater(item)}
                >
                  <span className="material-icons-outlined icon btn-transparent pdr-0-5">
                    watch_later
                  </span>
                  <div className="btn-transparent text-sm">
                    Add to Watch Later
                  </div>
                </li>
              )
            ) : (
              <li
                className="item-container-overlay-text-video-card flex flex-align-center"
                onClick={() => navigate("/login")}
              >
                <span className="material-icons-outlined icon btn-transparent pdr-0-5">
                  watch_later
                </span>
                <div className="btn-transparent text-sm">
                  Add to Watch Later
                </div>
              </li>
            )}
            <li
              className="item-container-overlay-text-video-card flex flex-align-center"
              onClick={() => {
                setIsSavetoPlaylistClicked(true);
                setIsMoreOptions(false);
              }}
            >
              <span className="material-icons-round icon btn-transparent pdr-0-5">
                playlist_add
              </span>
              <div className="btn-transparent text-sm">Save to Playlist</div>
            </li>
          </ul>
        </div>

        {/* playlist div */}
        <div
          className={`${
            isSavetoPlaylistClicked
              ? "container-playlist-video-card flex flex-column flex-gap-1"
              : "display-none"
          }`}
          ref={ref}
        >
          <div className="flex flex-justify-space-between flex-align-center">
            <span className="font-semibold">Save to...</span>
            <span
              className="material-icons-round icon btn-transparent"
              onClick={() => setIsSavetoPlaylistClicked(false)}
            >
              clear
            </span>
          </div>

          <div className="flex flex-column flex-gap-1">
            {addNewplaylistLoading ||
            addVideoToplaylistLoading ||
            removeVideoFromPlaylistLoading
              ? new Array(3).fill().map((_, id) => <ChipLoader key={id} />)
              : playlists.length > 0 &&
                playlists.map((playlist) => {
                  return (
                    <CardVideoPlaylist
                      playlist={playlist}
                      item={item}
                      key={playlist._id}
                    />
                  );
                })}
          </div>

          <div
            className="btn-transparent flex flex-justify-space-between flex-align-center text-sm font-semibold"
            onClick={() => {
              setClickedCreateNewPlaylist(true);
              setIsSavetoPlaylistClicked(true);
            }}
          >
            <span className="material-icons-round icon  pdr-0-5">add</span>
            Create new Playlist
          </div>

          <div
            className={`${
              clickedCreateNewPlaylist
                ? "flex flex-column flex-gap-0-5"
                : "display-none"
            }`}
          >
            <input
              className="input-playlist-video-card"
              autoFocus
              type="text"
              placeholder="Playlist name..."
              value={playlistDetails.title}
              onChange={(e) => {
                setPlaylistDetails({
                  ...playlistDetails,
                  title: e.target.value,
                });
                setIsSavetoPlaylistClicked(true);
              }}
            />
            {playlistDetails.isInputError && (
              <div className="input-playlist-video-card-error text-sm">
                Empty Input
              </div>
            )}
            <div className="flex flex-justify-space-between">
              <button
                className="btn-create-playlist-video-card"
                onClick={() => setClickedCreateNewPlaylist(false)}
              >
                Cancel
              </button>
              <button
                className="btn-create-playlist-video-card"
                onClick={() => createPlaylistClickHandler()}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

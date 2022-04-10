import "../../css/main.css";
import "./CardVideo.css";
import { useState, useEffect } from "react";

export const CardVideo = ({ item }) => {
  const [isPlay, setIsPlay] = useState(false);
  const [isMoreOptions, setIsMoreOptions] = useState(false);
  const { title, thumbnail, channel, profile, views, playbackTime } = item;

  useEffect(() => {
    const clickHandler = () => {
        if(isMoreOptions){
            setIsMoreOptions(false)
        }
    }
    document.addEventListener("click", clickHandler)

    return () => document.removeEventListener("click", clickHandler)
  },[isMoreOptions])


  return (
    <div className="container-card flex flex-column flex-gap-0-5">
      <div
        className="container-img-thumbnail-card cursor-pointer"
        onMouseLeave={() => setIsPlay(false)}
        onMouseEnter={() => setIsPlay(true)}
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
      </div>

      <div className="flex flex-gap-0-5 text-card-video">
        <img
          className="img-profile-card"
          src={profile.url}
          loading="lazy"
          alt={profile.altTxt}
        />
        <div className="flex flex-column flex-gap-0-5 flex-grow-1">
          <p className="text-sm pdt-0-5">{title}</p>
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
            <li className="item-container-overlay-text-video-card flex flex-align-center">
              <span className="material-icons-outlined icon btn-transparent pdr-0-5">
                watch_later
              </span>
              <div className="btn-transparent text-sm">Add to Watch Later</div>
            </li>
            <li className="item-container-overlay-text-video-card flex flex-align-center">
              <span className="material-icons-round icon btn-transparent pdr-0-5">
                playlist_add
              </span>
              <div className="btn-transparent text-sm">Save to Playlist</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

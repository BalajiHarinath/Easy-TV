import "../../css/main.css";
import "./SingleCardVideo.css";
import { useEffect } from "react";
import { useWatchLater, useLikedVideo } from "../../context";

export const SingleCardVideo = ({ singleVideo }) => {
  const {
    getWatchLaterVideos,
    removeItemFromWatchLater,
    addItemToWatchLater,
    watchLaterVideos,
  } = useWatchLater();

  const {
    getLikedVideos,
    addItemToLikedVideos,
    removeItemFromLikedVideos,
    LikedVideos,
  } = useLikedVideo();
  useEffect(() => {
    getWatchLaterVideos();
    getLikedVideos();
  }, []);

  return (
    <div>
      <iframe
        width="100%"
        height="500px"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        src={`https://www.youtube.com/embed/${singleVideo.url}`}
        title="Youtube video"
      ></iframe>
      <div className="flex flex-column pdt-1">
        <div className="flex flex-justify-space-between">
          <p className="font-semibold">{singleVideo.title}</p>
          <div className="flex flex-gap-1 text-sm">
            <span>{singleVideo.uploadTime} ago</span>
            <span>{singleVideo.views} views</span>
            <span>{singleVideo.likes} likes</span>
          </div>
        </div>

        <div className="flex flex-justify-space-between pdt-1">
          <div className="flex flex-align-center">
            <img
              className="img-profile-card"
              src={singleVideo?.profile?.url}
              loading="lazy"
              alt={singleVideo?.profile?.altTxt}
            />
            <span className="pdl-1">{singleVideo.channel}</span>
          </div>
          <div className="container-btn-single-video flex flex-gap-1">
            {LikedVideos.some((item) => item._id === singleVideo._id) ? (
              <button
                className="btn-single-video btn-single-video-active font-semibold flex flex-align-center cursor-pointer"
                onClick={() => removeItemFromLikedVideos(singleVideo._id)}
              >
                <span className="material-icons-round icon text-sm pdr-0-5 btn-transparent">
                  favorite
                </span>
                Remove from Liked Videos
              </button>
            ) : (
              <button
                className="btn-single-video font-semibold flex flex-align-center cursor-pointer"
                onClick={() => addItemToLikedVideos(singleVideo)}
              >
                <span className="material-icons-round icon text-sm pdr-0-5 btn-transparent">
                  favorite
                </span>
                Like
              </button>
            )}

            {watchLaterVideos.some((item) => item._id === singleVideo._id) ? (
              <button
                className="btn-single-video btn-single-video-active font-semibold flex flex-align-center cursor-pointer"
                onClick={() => removeItemFromWatchLater(singleVideo._id)}
              >
                <span className="material-icons-round icon text-sm pdr-0-5 btn-transparent">
                  watch_later
                </span>
                Remove from Watch Later
              </button>
            ) : (
              <button
                className="btn-single-video font-semibold flex flex-align-center cursor-pointer"
                onClick={() => addItemToWatchLater(singleVideo)}
              >
                <span className="material-icons-round icon text-sm pdr-0-5 btn-transparent">
                  watch_later
                </span>
                Watch Later
              </button>
            )}
          </div>
        </div>
        <p className="description-single-video-page text-base pdt-1">
          {singleVideo.description}
        </p>
      </div>
    </div>
  );
};

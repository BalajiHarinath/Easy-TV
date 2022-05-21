import "../../css/main.css";
import "./WatchLater.css";
import { useEffect } from "react";
import { PageEmptyImage } from "../../Assets/index";
import { CardLoader, CardWatchLater } from "../../components";
import { useLikedVideo, useWatchLater } from "../../context";
import { useDocumentTitle, useScrollToTop } from "../../utils";

export const WatchLater = () => {
  useDocumentTitle("Easy TV | WatchLater");
  useScrollToTop();

  const {
    getWatchLaterVideos,
    watchLaterVideos,
    isWatchLaterVideoLoading,
    isWatchlaterVideoError,
    watchlaterVideoErrorData,
  } = useWatchLater();

  const { getLikedVideos, LikedVideos } = useLikedVideo();

  useEffect(() => {
    getLikedVideos();
    getWatchLaterVideos();
  }, []);

  return (
    <main className="main-watchlater">
      {watchLaterVideos.length > 0 ? (
        <h4 className="title-watch-later font-semibold pdl-3 pdt-3">
          Watch Later{" "}
          <small className="videos-number-title-watch-later text-base font-normal pdl-0-5">
            {watchLaterVideos.length === 1
              ? "1 video"
              : `${watchLaterVideos.length} videos`}
          </small>
        </h4>
      ) : (
        <h4 className="title-watch-later pdl-3 pdt-3">Watch Later Empty</h4>
      )}

      <div className="container-videos-watchlater flex flex-gap-3 flex-wrap pd-3 pdt-1">
        {isWatchlaterVideoError ? <div>{watchlaterVideoErrorData}</div>
          : isWatchLaterVideoLoading ? (
          new Array(6).fill().map((_, id) => <CardLoader key={id} />)
        ) : watchLaterVideos.length > 0 ? (
          watchLaterVideos.map((item) => (
            <CardWatchLater
              key={item._id}
              item={item}
              LikedVideos={LikedVideos}
              watchLaterVideos={watchLaterVideos}
            />
          ))
        ) : (
          <div className="conatiner-watch-later-empty">
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

import "../../css/main.css";
import "./WatchLater.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { watchLaterEmptyImage } from "../../Assets/index";
import { CardLoader, CardWatchLater } from "../../components";
import { useWatchLater } from "../../context";
import { useDocumentTitle, useScrollToTop } from "../../utils";

export const WatchLater = () => {
  useDocumentTitle("Easy TV | WatchLater");
  useScrollToTop();

  const {
    getWatchLaterVideos,
    watchLaterVideos,
    isWatchLaterVideoLoading,
    watchlaterVideoError,
  } = useWatchLater();

  useEffect(() => {
    getWatchLaterVideos();
  }, []);

  return (
    <main className="main-watchlater">
      {watchLaterVideos.length > 0 ? (
        <h4 className="pdl-3 pdt-3 font-semibold">
          Watch Later{" "}
          <small className="text-base font-normal pdl-0-5">
            {watchLaterVideos.length === 1
              ? "1 video"
              : `${watchLaterVideos.length} videos`}
          </small>
        </h4>
      ) : (
        <h4 className="pdl-3 pdt-3 font-semibold">Watch Later Empty</h4>
      )}

      <div className="flex flex-gap-3 flex-wrap pd-3 pdt-1">
        {isWatchLaterVideoLoading ? (
          new Array(6).fill().map((_, id) => <CardLoader key={id} />)
        ) : watchLaterVideos.length > 0 ? (
          watchLaterVideos.map((item) => (
            <CardWatchLater key={item._id} item={item} />
          ))
        ) : (
          <div className="conatiner-watch-later-empty">
            <img
              className="image-watch-later"
              src={watchLaterEmptyImage}
              alt="Watch-later-empty-img"
            />
            <div className="btn-container-watch-later">
              <Link
                className="btn-goto-videos-watch-later cursor-pointer"
                to="/videos"
              >
                Goto Videos
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

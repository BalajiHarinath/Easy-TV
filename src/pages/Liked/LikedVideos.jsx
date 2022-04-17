import "../../css/main.css";
import "./LikedVideos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { PageEmptyImage } from "../../Assets/index";
import { CardLoader, CardLikedVideo } from "../../components";
import { useLikedVideo, useWatchLater } from "../../context";
import { useDocumentTitle, useScrollToTop } from "../../utils";

export const LikedVideos = () => {
  useDocumentTitle("Easy TV | LikedVideos");
  useScrollToTop();

  const {
    getLikedVideos,
    LikedVideos,
    isLikedVideosLoading,
    LikedVideosError,
  } = useLikedVideo();

  const { getWatchLaterVideos, watchLaterVideos } = useWatchLater();

  useEffect(() => {
    getWatchLaterVideos();
    getLikedVideos();
  }, []);

  return (
    <main className="main-liked-video-page">
      {LikedVideos.length > 0 ? (
        <h4 className="pdl-3 pdt-3 font-semibold">
          Liked{" "}
          <small className="text-base font-normal pdl-0-5">
            {LikedVideos.length === 1
              ? "1 video"
              : `${LikedVideos.length} videos`}
          </small>
        </h4>
      ) : (
        <h4 className="pdl-3 pdt-3 font-semibold">Liked Videos Empty</h4>
      )}

      <div className="flex flex-gap-3 flex-wrap pd-3 pdt-1">
        {isLikedVideosLoading ? (
          new Array(6).fill().map((_, id) => <CardLoader key={id} />)
        ) : LikedVideos.length > 0 ? (
          LikedVideos.map((item) => (
            <CardLikedVideo
              key={item._id}
              item={item}
              watchLaterVideos={watchLaterVideos}
              LikedVideos={LikedVideos}
            />
          ))
        ) : (
          <div className="conatiner-liked-videos-empty">
            <img
              className="image-watch-later"
              src={PageEmptyImage}
              alt="Watch-later-empty-img"
              loading="lazy"
            />
            <div className="btn-container-liked-video-page">
              <Link
                className="btn-goto-videos-liked-video-page cursor-pointer"
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

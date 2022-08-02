import "../../css/main.css";
import "./LikedVideos.css";
import { useEffect } from "react";
import { PageEmptyImage } from "../../Assets/index";
import { CardLoader, CardLikedVideo } from "../../components";
import { getWatchLaterVideos } from "../../redux/Features/WatchLaterSlice";
import { getLikedVideos } from "../../redux/Features/LikedVideoSlice";
import { useSelector, useDispatch } from "react-redux";
import { useDocumentTitle, useScrollToTop } from "../../utils";

export const LikedVideos = () => {
  useDocumentTitle("Easy TV | LikedVideos");
  useScrollToTop();

  const { watchLaterVideos } = useSelector((state) => state.watchLaterReducer);
  const {
    LikedVideos,
    isLikedVideosLoading,
    isLikedVideosError,
    LikedVideosErrorData,
  } = useSelector((state) => state.likedVideoReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWatchLaterVideos());
    dispatch(getLikedVideos());
  }, []);

  return (
    <main className="main-liked-video-page">
      {LikedVideos.length > 0 ? (
        <h4 className="title-liked-videos font-semibold pdl-3 pdt-3">
          Liked{" "}
          <small className="videos-number-title-liked-videos text-base font-normal pdl-0-5">
            {LikedVideos.length === 1
              ? "1 video"
              : `${LikedVideos.length} videos`}
          </small>
        </h4>
      ) : (
        <h4 className="title-liked-videos font-semibold pdl-3 pdt-3">
          Liked Videos Empty
        </h4>
      )}

      <div className="container-videos-liked flex flex-gap-3 flex-wrap pd-3 pdt-1">
        {isLikedVideosError ? (
          <div>{LikedVideosErrorData}</div>
        ) : isLikedVideosLoading ? (
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
          </div>
        )}
      </div>
    </main>
  );
};

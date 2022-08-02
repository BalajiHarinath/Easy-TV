import "../../css/main.css";
import "./SingleVideo.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  CardVideo,
  CardLoader,
  SingleVideoLoader,
  SingleCardVideo,
} from "../../components";
// import { useSingleVideo, useVideo } from "../../context";
import { getSingleVideo } from "../../redux/Features/SingleVideoSlice";
import { getAllVideos } from "../../redux/Features/VideoSlice";
import { useSelector, useDispatch } from "react-redux";
import { useDocumentTitle, useScrollToTop } from "../../utils";

export const SingleVideo = () => {
  useDocumentTitle("Easy TV | SingleVideo");
  useScrollToTop();

  const { videoId } = useParams();
  // const { getSingleVideo, singleVideo, issinglecardLoading, issinglecardError, singlecardErrorData } =
  //   useSingleVideo();
  // const { getAllVideos, allVideos, iscardLoading, iscardError, cardErrorData } = useVideo();
  const { singleVideo, issinglecardLoading, issinglecardError, singlecardErrorData } = useSelector((state) => state.singleVideoReducer)
  const { allVideos, iscardLoading, iscardError, cardErrorData } = useSelector((state) => state.videoReducer)
  const dispatch = useDispatch();

  const [filteredVideos, setFilteredVideos] = useState([]);

  useEffect(() => {
    dispatch(getSingleVideo(videoId));
    dispatch(getAllVideos());
  }, [videoId]);

  useEffect(() => {
    let tempVideos = [...allVideos].filter(
      (video) =>
        video.category === singleVideo.category && video._id !== singleVideo._id
    );
    setFilteredVideos(tempVideos);
  }, [singleVideo]);

  return (
    <main className="main-single-video">
      <div className="container-single-video-page flex flex-column pd-2 pdl-5">
        {issinglecardError ? <div>{singlecardErrorData}</div>
          :issinglecardLoading ? (
          <SingleVideoLoader />
        ) : (
          <SingleCardVideo singleVideo={singleVideo} />
        )}

        <div className="section-related-videos ml-2 pdl-1 flex flex-column flex-gap-2 ">
          <h4>Related Videos</h4>
          <div className="container-related-videos flex flex-column flex-gap-2">
            {iscardError ? <div>{cardErrorData}</div>
              :iscardLoading ? (
              new Array(4).fill().map((_, id) => <CardLoader key={id} />)
            ) : filteredVideos.length > 0 ? (
              filteredVideos.map((item) => (
                <CardVideo item={item} key={item._id} />
              ))
            ) : (
              <div>Failed to load recommended videos</div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

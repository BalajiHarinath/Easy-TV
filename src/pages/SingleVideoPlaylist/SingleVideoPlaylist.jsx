import "../../css/main.css";
import "../SingleVideo/SingleVideo.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  CardVideo,
  CardLoader,
  SingleVideoLoader,
  SingleCardVideo,
} from "../../components";
import { useSingleVideo, usePlaylist } from "../../context";
import { useDocumentTitle, useScrollToTop } from "../../utils";

export const SingleVideoPlaylist = () => {
  useDocumentTitle("Easy TV | SingleVideoPlaylist");
  useScrollToTop();

  const { singleplaylistId, singlevideoId } = useParams();

  const {
    getSingleVideo,
    singleVideo,
    issinglecardLoading,
    issinglecardError,
    singlecardErrorData,
  } = useSingleVideo();

  const { getVideosFromPlaylist, playlistState } = usePlaylist();
  const { playlistLoading, playlist } = playlistState;

  const [filteredVideos, setFilteredVideos] = useState([]);

  useEffect(() => {
    getVideosFromPlaylist(singleplaylistId);
  }, []);

  useEffect(() => {
    getSingleVideo(singlevideoId);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      let tempVideos = [...playlist?.videos].filter(
        (video) => video._id !== singlevideoId
      );
      setFilteredVideos(tempVideos);
    }, 0);
    // Used set timeout because the playlist videos
    // needs to be filtered after we fetch from getVideosFromPlaylist
  }, [playlistLoading]);

  return (
    <main className="main-single-video">
      <div className="container-single-video-page flex flex-column pd-2 pdl-5">
        {issinglecardError ? <div>{singlecardErrorData}</div>
          : issinglecardLoading ? (
          <SingleVideoLoader />
        ) : (
          <SingleCardVideo singleVideo={singleVideo} />
        )}

        <div className="section-related-videos ml-2 pdl-1 flex flex-column flex-gap-2 ">
          <h4>{playlist?.title} playlist Videos</h4>
          <div className="container-related-videos flex flex-column flex-gap-2">
            {playlistLoading ? (
              new Array(4).fill().map((_, id) => <CardLoader key={id} />)
            ) : filteredVideos.length > 0 ? (
              filteredVideos.map((item) => (
                <CardVideo item={item} key={item._id} />
              ))
            ) : (
              <div>No more videos in {playlist?.title} playlist</div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

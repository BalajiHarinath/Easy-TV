import "../../css/main.css";
import "./SingleCardVideo.css";
import { useEffect } from "react";
import { useLikedVideo, useHistory } from "../../context";
import { useSelector, useDispatch } from "react-redux";
import { getWatchLaterVideos, addItemToWatchLater, removeItemFromWatchLater } from "../../redux/Features/WatchLaterSlice";
import { getLikedVideos, addItemToLikedVideos, removeItemFromLikedVideos } from "../../redux/Features/LikedVideoSlice";
import { useToast } from "../../context/ToastContext";

export const SingleCardVideo = ({ singleVideo }) => {
  // const {
  //   getWatchLaterVideos,
  //   removeItemFromWatchLater,
  //   addItemToWatchLater,
  //   watchLaterVideos,
  // } = useWatchLater();
  const { watchLaterVideos } = useSelector((state) => state.watchLaterReducer);
  const { LikedVideos } = useSelector((state) => state.likedVideoReducer)
  const dispatch = useDispatch();
  const { addToast } = useToast();

  // const {
  //   getLikedVideos,
  //   addItemToLikedVideos,
  //   removeItemFromLikedVideos,
  //   LikedVideos,
  // } = useLikedVideo();

  const { inHistory, addVideoToHistory } = useHistory();

  useEffect(() => {
    dispatch(getWatchLaterVideos());
    dispatch(getLikedVideos());
  }, []);

  useEffect(() => {
    const frequencyOfVideosInHistory = inHistory.reduce((acc, curr) => {
      if (acc[curr]) acc[curr]++;
      else acc[curr] = 1;
      return acc;
    }, {});
    if (frequencyOfVideosInHistory[singleVideo._id] === 1) {
      addVideoToHistory(singleVideo);
    }
  }, []);

  // const addToLikedVideos = () => {
  //   console.log("liked")
  //   addItemToLikedVideos(singleVideo)
  // }

  // const removeFromLikedVideos = () => {
  //   removeItemFromLikedVideos(singleVideo._id)
  // }

  // const addToWatchLater = () => {
  //   addItemToWatchLater(singleVideo)
  // }

  // const removeFromWatchLater = () => {
  //   removeItemFromWatchLater(singleVideo._id)
  // }

  // const throttlelike = (fn, delay) => {
  //   console.log(fn, delay)

  //   let flag1 = true;
  //       return function(){
  //         console.log(flag1, delay)
  //           if(flag1){
  //               fn();
  //               flag1 = false;
  //               setTimeout(() => {
  //                   flag1 = true;
  //               }, delay)
  //           }
  //       }
  // }

  // const throttleremovelike = (fn, delay) => {
  //   console.log("disliked")
  //   let flag2 = true;
  //   return function(){
  //       if(flag2){
  //           fn();
  //           flag2 = false;
  //           setTimeout(() => {
  //               flag2 = true;
  //           },delay)
  //       }
  //   }
  // }

  // const throttleaddtowatchlater = (fn, delay) => {
  //   let flag3 = true;
  //   return function(){
  //       if(flag3){
  //           fn();
  //           flag3 = false;
  //           setTimeout(() => {
  //               flag3 = true;
  //           },delay)
  //       }
  //   }
  // }

  // const throttleremovefromwatchlater = (fn, delay) => {
  //   let flag4 = true;
  //   return function(){
  //       if(flag4){
  //           fn();
  //           flag4 = false;
  //           setTimeout(() => {
  //               flag4 = true;
  //           },delay)
  //       }
  //   }
  // }

  //   const throttleCartItem = (fn, delay) => {
  //     let flag = true;
  //     return function(){
  //         if(flag){
  //             fn();
  //             flag = false;
  //             setTimeout(() => {
  //                 flag = true;
  //             }, delay)
  //         }
  //     }
  // }

  // const addToLikedVideosThrottle = throttleCartItem(addToLikedVideos, 2500);

  // const addToLikedVideosThrottle = throttlelike(addToLikedVideos, 4000)
  // const removeFromLikedVideosThrottle = throttleremovelike(removeFromLikedVideos, 4000)
  // const addToWatchLaterVideosThrottle = throttleaddtowatchlater(addToWatchLater, 4000)
  // const removeFromWatchLaterVideosThrottle = throttleremovefromwatchlater(removeFromWatchLater, 4000)

  return (
    <div>
      <iframe
        className="iframe-single-card-video"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
        src={`https://www.youtube.com/embed/${singleVideo.url}`}
        title="Youtube video"
      ></iframe>
      <div className="container-text-single-video-card flex flex-column pdt-1">
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
                onClick={() => dispatch(removeItemFromLikedVideos(singleVideo._id)).unwrap().then(() => addToast({ status: "removed", msg: "Removed from liked videos" }))}
                // onClick={removeFromLikedVideosThrottle}
              >
                <span className="material-icons-round icon text-sm pdr-0-5 btn-transparent">
                  favorite
                </span>
                Like
              </button>
            ) : (
              <button
                className="btn-single-video font-semibold flex flex-align-center cursor-pointer"
                onClick={() => dispatch(addItemToLikedVideos(singleVideo)).unwrap().then(() => addToast({ status: "added", msg: "Added to liked videos" }))}
                // onClick={addToLikedVideosThrottle}
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
                onClick={() => dispatch(removeItemFromWatchLater(singleVideo._id)).unwrap().then(() => addToast({ status: "removed", msg: "Removed from watch later" }))}
                // onClick={removeFromWatchLaterVideosThrottle}
              >
                <span className="material-icons-round icon text-sm pdr-0-5 btn-transparent">
                  watch_later
                </span>
                Watch Later
              </button>
            ) : (
              <button
                className="btn-single-video font-semibold flex flex-align-center cursor-pointer"
                onClick={() => dispatch(addItemToWatchLater(singleVideo)).unwrap().then(() => addToast({ status: "added", msg: "Added to watch later" }))}
                // onClick={addToWatchLaterVideosThrottle}
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

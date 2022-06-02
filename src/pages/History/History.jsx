import "../../css/main.css";
import "./History.css";
import { useEffect } from "react";
import { PageEmptyImage } from "../../Assets/index";
import { CardLoader, CardHistory } from "../../components";
import { useHistory } from "../../context";
import { useDocumentTitle, useScrollToTop } from "../../utils";

export const History = () => {
  useDocumentTitle("Easy TV | History");
  useScrollToTop();

  const {
    getHistoryVideos,
    clearHistory,
    HistoryData,
    isHistoryLoading,
    isHistoryError,
    HistoryErrorData,
    setInHistory,
  } = useHistory();

  useEffect(() => {
    getHistoryVideos();
  }, []);

  return (
    <main className="main-history">
      {HistoryData.length > 0 ? (
        <div className="position-relative">
          <button
            className="btn-clear-all font-semibold"
            onClick={() => {clearHistory();
              setInHistory([])}}
          >
            Clear All
          </button>
          <h4 className="title-history font-semibold pdl-3 pdt-3">
            History{" "}
            <small className="videos-number-title-history text-base font-normal pdl-0-5">
              {HistoryData.length === 1
                ? "1 video"
                : `${HistoryData.length} videos`}
            </small>
          </h4>
        </div>
      ) : (
        <h4 className="title-history font-semibold pdl-3 pdt-3">
          History Empty
        </h4>
      )}
      <div className="container-videos-history flex flex-gap-3 flex-wrap pd-3 pdt-1">
        {/* {isHistoryError && <div>{HistoryErrorData}</div>} */}
        {isHistoryLoading && ( new Array(6).fill().map((_, id) => <CardLoader key={id} />))}
        {HistoryData.length > 0 && !isHistoryLoading &&(
          HistoryData.map((item) => <CardHistory key={item._id} item={item} />)) }
        {HistoryData.length === 0 && !isHistoryLoading &&(
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

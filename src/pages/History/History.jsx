import "../../css/main.css";
import "./History.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
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
    HistoryError,
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
            onClick={() => clearHistory()}
          >
            Clear All
          </button>
          <h4 className="pdl-3 pdt-3 font-semibold">
            History{" "}
            <small className="text-base font-normal pdl-0-5">
              {HistoryData.length === 1
                ? "1 video"
                : `${HistoryData.length} videos`}
            </small>
          </h4>
        </div>
      ) : (
        <h4 className="pdl-3 pdt-3 font-semibold">History Empty</h4>
      )}
      <div className="flex flex-gap-3 flex-wrap pd-3 pdt-1">
        {isHistoryLoading ? (
          new Array(6).fill().map((_, id) => <CardLoader key={id} />)
        ) : HistoryData.length > 0 ? (
          HistoryData.map((item) => <CardHistory key={item._id} item={item} />)
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

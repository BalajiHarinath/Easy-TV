import "../../css/main.css";
import "./Videos.css";
import { useState, useEffect } from "react";
import { CardLoader, CardVideo, ChipLoader } from "../../components";
import { useVideo, useCategory } from "../../context";
import { useDocumentTitle, useScrollToTop } from "../../utils";

export const VideoPage = () => {
  useDocumentTitle("Easy TV | Videos");
  useScrollToTop();

  const { getAllVideos, allVideos, cardLoading, iscardError, cardErrorData } =
    useVideo();
  const {
    getCategories,
    categoryData,
    ischipLoading,
    ischipError,
    chipErrorData,
    selectedCategory,
    setSelectedCategory,
  } = useCategory();

  const [filteredVideos, setFilteredVideos] = useState([]);

  useEffect(() => {
    getCategories();
    getAllVideos();
  }, []);

  useEffect(() => {
    let tempVideos = [...allVideos];
    if (selectedCategory == "All") {
      setFilteredVideos(tempVideos);
    } else {
      tempVideos = tempVideos.filter(
        (item) => item.category === selectedCategory
      );
      setFilteredVideos(tempVideos);
    }
  }, [selectedCategory]);

  return (
    <main className="main-videopage flex flex-column pdt-1 pdb-1 pdl-3 pdr-2">
      <div className="flex flex-column">
        <h4>Categories</h4>
        <div className="spacer-1"></div>
        <div className="container-category flex flex-gap-2">
          {ischipError ? <div>{chipErrorData}</div>
          : !ischipLoading
            ? categoryData.map((item) => (
                <button
                  className={`${
                    item.categoryName === selectedCategory
                      ? "selected-category"
                      : ""
                  } btn-category font-semibold`}
                  key={item._id}
                  onClick={() => setSelectedCategory(item.categoryName)}
                >
                  {item.categoryName}
                </button>
              ))
            : new Array(5).fill().map((_, id) => <ChipLoader key={id} />)}
        </div>
        <div className="spacer-3"></div>

        <div className="container-videos flex flex-wrap flex-gap-2">
          {iscardError ? <div>{cardErrorData}</div>
            :!cardLoading
            ? filteredVideos.length > 0
              ? filteredVideos.map((item) => (
                  <CardVideo item={item} key={item._id} />
                ))
              : allVideos.map((item) => (
                  <CardVideo item={item} key={item._id} />
                ))
            : new Array(12).fill().map((_, id) => <CardLoader key={id} />)}
        </div>
      </div>
    </main>
  );
};

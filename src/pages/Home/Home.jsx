import "../../css/main.css";
import "./Home.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { heroImage } from "../../Assets/index.js";
import { CardLoader, CardVideo, ChipLoader } from "../../components";
import { useVideo, useCategory } from "../../context";
import { getCategories, setSelectedCategory } from "../../redux/Features/CategorySlice";
import { getAllVideos } from "../../redux/Features/VideoSlice";
import { useSelector, useDispatch } from "react-redux";
import { useDocumentTitle, useScrollToTop } from "../../utils";

export const Home = () => {
  useDocumentTitle("Easy TV | Home");
  useScrollToTop();

  // const { getAllVideos, allVideos, cardLoading, iscardError, cardErrorData } = useVideo();
  // const {
  //   getCategories,
  //   categoryData,
  //   ischipLoading,
  //   ischipError,
  //   chipErrorData,
  //   setSelectedCategory,
  // } = useCategory();
  const { allVideos, iscardLoading, iscardError, cardErrorData } = useSelector((state) => state.videoReducer)
  const { categoryData, ischipLoading, ischipError, chipErrorData } = useSelector((state) => state.categoryReducer)
  const dispatch = useDispatch();

  let mustWatchVideos = [];
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getAllVideos());
  }, []);

  const getMustWatchVideos = () => allVideos.filter((item) => item.isMustWatch);
  mustWatchVideos = getMustWatchVideos();

  return (
    <main className="main-home flex flex-column pdt-1 pdb-1 pdl-3 pdr-2">
      <div className="container-hero">
        <img
          className="image-hero"
          src={heroImage}
          loading="lazy"
          alt="hero-image"
        />
        <div className="text-hero flex flex-column flex-justify-center flex-align-center flex-gap-1">
          <p className="font-bold text-3xl">Learn Frontend with top </p>
          <p className="font-bold text-3xl">class videos from Easy TV</p>
          <Link className="btn-hero font-bold text-base" to="/videos">
            Videos
          </Link>
        </div>
      </div>

      <div className="spacer-3 spacer-small-screen-1"></div>

      <div className="flex flex-column">
        <h4>Categories</h4>
        <div className="spacer-1"></div>
        <div className="container-category flex flex-gap-2">
          {ischipError ? <div>{chipErrorData}</div>
            :!ischipLoading
            ? categoryData.map((item) => (
                <Link
                  className="btn-category font-semibold"
                  key={item._id}
                  onClick={() => dispatch(setSelectedCategory(item.categoryName))}
                  to="/videos"
                >
                  {item.categoryName}
                </Link>
              ))
            : new Array(5).fill().map((_, id) => <ChipLoader key={id} />)}
        </div>
      </div>

      <div className="spacer-3"></div>

      <h4 className="title-must-watch-videos-home">Must Watch Videos</h4>
      <div className="spacer-1"></div>
      <div className="container-must-watch-videos flex flex-wrap flex-gap-2">
        {iscardError ? <div>{cardErrorData}</div> 
          :!iscardLoading
          ? mustWatchVideos.map((item) => (
              <CardVideo item={item} key={item._id} />
            ))
          : new Array(4).fill().map((_, id) => <CardLoader key={id} />)}
      </div>

      <div className="spacer-4"></div>
    </main>
  );
};

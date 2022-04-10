import "../../css/main.css";
import "./CardLoader.css";

export const CardLoader = () => {
  return (
    <div className="container-empty-card flex flex-column flex-gap-0-5">
      <div className="container-img-thumbnail-card-empty cursor-pointer"></div>

      <div className="flex flex-gap-0-5 text-card-video pd-0-5">
        <div className="img-profile-card-empty"></div>
        <div className="flex flex-column flex-gap-0-5">
          <div className="text-card-empty"></div>
          <div className="text-card-empty"></div>
          <div className="text-card-empty-short"></div>
        </div>
        <div className="btn-vert-more-card-empty"></div>
      </div>
    </div>
  );
};

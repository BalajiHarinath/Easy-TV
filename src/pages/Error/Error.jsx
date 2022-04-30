import "../../css/main.css";
import "./Error.css";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "../../utils";

export const Error = () => {
  useDocumentTitle("Easy TV | Page Not Found");
  return (
    <main className="main-error">
      <div className="container-text flex flex-column flex-justify-center flex-align-center flex-gap-1">
        <p className="font-bold text-2xl">Page Not Found</p>
        <Link
          className="btn-solid btn-medium text-base flex flex-align-center flex-justify-center"
          to="/"
        >
          Home
        </Link>
      </div>
    </main>
  );
};

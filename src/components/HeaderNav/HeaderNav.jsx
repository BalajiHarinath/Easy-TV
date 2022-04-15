import "../../css/main.css";
import "./HeaderNav.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context";

export const HeaderNav = () => {
  const { authData, logout } = useAuth();

  return (
    <nav className="nav-header flex flex-justify-space-between flex-align-center pd-2">
      <h3>
        Easy<span className="title-header text-3xl font-semibold"> TV</span>
      </h3>
      <div className="flex flex-grow-1 flex-justify-center">
        <div className="flex flex-align-center">
          <button className="btn-transparent flex flex-align-center">
            <span className="material-icons-round btn-search flex flex-align-center pdl-0-5 pdr-0-5 text-lg">
              search
            </span>
          </button>
          <input
            className="input-search pdl-0-5 pdr-0-5"
            type="text"
            placeholder="What are you looking for..."
          />
        </div>
      </div>
      <div className="flex flex-gap-2">
        <Link
          className="btn-transparent flex flex-column flex-justify-center flex-align-center"
          to="/login"
        >
          <span className="material-icons-round icon">account_circle</span>
          <span className="text-sm">
            {authData.firstName ? authData.firstName : "User"}
          </span>
        </Link>
        <Link
          className="btn-transparent flex flex-column flex-justify-center flex-align-center"
          onClick={() => logout()}
          to="/login"
        >
          <span className="material-icons-round icon">logout</span>
          <span className="text-sm">Logout</span>
        </Link>
      </div>
    </nav>
  );
};

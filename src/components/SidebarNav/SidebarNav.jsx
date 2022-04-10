import "../../css/main.css";
import "./SidebarNav.css";
import { Link, useLocation } from "react-router-dom";
import { SidebarNavData } from "./SidebarNavData";

export const SidebarNav = () => {
  const location = useLocation();
  return (
    <aside className="container-sidebar">
      <ul className="list-style-none">
        {SidebarNavData.map(({ _id, name, icon, link }) => {
          return (
            <Link
              className={`${
                location.pathname === link ? "item-sidebar-active" : ""
              } item-sidebar flex flex-align-center pd-1`}
              key={_id}
              to={link}
            >
              <span className="material-icons-round icon btn-transparent pdr-1">
                {icon}
              </span>
              <div className="btn-transparent text-xl">{name}</div>
            </Link>
          );
        })}
      </ul>
    </aside>
  );
};

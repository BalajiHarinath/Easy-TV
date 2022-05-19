import "../../css/main.css";
import "./SidebarNav.css";
import { NavLink } from "react-router-dom";
import { SidebarNavData } from "./SidebarNavData";

export const SidebarNav = () => {
  return (
    <aside className="container-sidebar">
      <ul className="list-sidebar list-style-none">
        {SidebarNavData.map(({ _id, name, icon, link }) => {
          return (
            <li key={_id}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? " item-sidebar flex flex-align-center pd-1 item-sidebar-active"
                    : "item-sidebar flex flex-align-center pd-1"
                }
                to={link}
              >
                <span className="material-icons-round icon icon-sidebar-small-screen btn-transparent pdr-1">
                  {icon}
                </span>
                <div className="btn-transparent text-xl text-sidebar-small-screen">
                  {name}
                </div>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

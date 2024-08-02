import { NavLink } from "react-router-dom";
import "./MenuList.css";

function MenuList() {
  return (
    <>
      <ul className="menu">
        <NavLink
          className="menu__link "
          to="/company"
          style={({ isActive }) => ({
            color: isActive ? "#1890FF" : "",
            backgroundColor: isActive ? "#E6F7FF" : "",
          })}
        >
          <div className="menu__link_copmany"></div>
          <p className="menu__link-name">Компания</p>
        </NavLink>
        <NavLink
          className="menu__link "
          to="/projects"
          style={({ isActive }) => ({
            color: isActive ? "#1890FF" : "",
            backgroundColor: isActive ? "#E6F7FF" : "",
          })}
        >
          <div className="menu__link_projects"></div>
          <p className="menu__link-name">Проекты</p>
        </NavLink>
        <NavLink
          className="menu__link "
          to="/catalogs"
          style={({ isActive }) => ({
            color: isActive ? "#1890FF" : "",
            backgroundColor: isActive ? "#E6F7FF" : "",
          })}
        >
          <div className="menu__link_catalogs"></div>
          <p className="menu__link-name">Каталог</p>
        </NavLink>
      </ul>
      <NavLink
        className="menu__link "
        to="/settings"
        style={({ isActive }) => ({
          color: isActive ? "#1890FF" : "",
          backgroundColor: isActive ? "#E6F7FF" : "",
        })}
      >
        <div className="menu__link_settings"></div>
      </NavLink>
    </>
  );
}

export default MenuList;

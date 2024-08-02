import MenuList from "../MenuList/MenuList";
import "./SideBar.css";

function SideBar() {
  return (
    <nav className="sidebar">
      <div className="sidebar__container">
        <MenuList></MenuList>
      </div>
    </nav>
  );
}

export default SideBar;

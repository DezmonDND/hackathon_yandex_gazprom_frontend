import SideBar from "../../components/SideBar/SideBar";
import "./Main.css";

function Main({ children }) {
  return (
    <main className="main">
      <SideBar></SideBar>
      <section className="content">{children}</section>
    </main>
  );
}

export default Main;

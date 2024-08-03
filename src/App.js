import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Catalogs from "./pages/Catalogs/Catalogs";
import Company from "./pages/Company/Company";
import Projects from "./pages/Projects/Projects";
import Burger from "./pages/Burger/Burger";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/company" element={<Company></Company>}></Route>
        <Route path="/projects" element={<Projects></Projects>}></Route>
        <Route path="/catalogs" element={<Catalogs></Catalogs>}></Route>
        <Route path="/settings" element={<Burger></Burger>}></Route>
      </Routes>
    </div>
  );
}

export default App;

import Catalogue from "./Pages/Catalogue";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Tiles from "./Pages/Tiles";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Catalogue" element={<Catalogue />} />
        <Route path="/Tiles" element={<Tiles />} />
      </Routes>
    </div>
  );
}

export default App;

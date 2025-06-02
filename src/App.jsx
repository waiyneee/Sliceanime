import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Popular from "./components/Popular";
import Airing from "./components/Airing";
import AnimeDescriptor from "./components/AnimeDescryptor";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Popular" element={<Popular rendered="Popular" />} />
        <Route path="/Airing" element={<Airing rendered="airing" />} />
        <Route path="/anime/:id" element={<AnimeDescriptor />} />
        
      </Routes>
    </>
  );
}

export default App;

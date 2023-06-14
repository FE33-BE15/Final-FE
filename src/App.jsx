import { Route, Routes } from "react-router-dom";
import "./App.css";
import ArtikelPage from "./pages/ArtikelPage";

import HomePage from "./pages/HomePage";
import DetailArtikelPage from "./pages/DetailArtikelPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Artikel" element={<ArtikelPage />} />
        <Route path="/Artikel/detail" element={<DetailArtikelPage />} />
      </Routes>
    </>
  );
}
export default App;

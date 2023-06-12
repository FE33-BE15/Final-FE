import { Route, Routes } from "react-router-dom";
import "./App.css";
import ArtikelPage from "./pages/ArtikelPage";

import HomePage from "./pages/HomePage";
import TrackingPage from "./pages/TrackingPage";
import FoodDataPage from "./pages/FoodDataPage";
import DetailArtikelPage from "./pages/DetailArtikelPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Artikel" element={<ArtikelPage />} />
        <Route path="/Tracking" element={<TrackingPage />} />
        <Route path="/Tracking/AddFood" element={<FoodDataPage />} />
        <Route path="/Artikel/detail" element={<DetailArtikelPage />} />
      </Routes>
    </>
  );
}
export default App;

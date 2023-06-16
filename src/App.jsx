import { Route, Routes } from "react-router-dom";
import "./App.css";
import ArtikelPage from "./pages/ArtikelPage";
import HomePage from "./pages/HomePage";
import DetailArtikelPage from "./pages/DetailArtikelPage";
import TrackingPage from "./pages/TrackingPage";
import FoodDataPage from "./pages/FoodDataPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Artikel" element={<ArtikelPage />} />
        <Route path="/Artikel/detail" element={<DetailArtikelPage />} />
        <Route path="/Tracking" element={<TrackingPage />} />
        <Route path="/Tracking/AddFood" element={<FoodDataPage />} />
        
      </Routes>
    </>
  );
}
export default App;

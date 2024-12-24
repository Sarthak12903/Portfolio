import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./pages/HeroSection/HeroSection";
import Sidebar from "./components/Sidebar/Sidebar";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="flex">
          <Sidebar />
          <Routes>
            <Route path="/" element={<HeroSection />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

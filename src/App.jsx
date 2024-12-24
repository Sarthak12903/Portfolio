import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./pages/HeroSection/HeroSection";
import Sidebar from "./components/Sidebar/Sidebar";
import About from "./pages/About/About";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="flex select-none">
          <Sidebar />
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

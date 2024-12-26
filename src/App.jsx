import HeroSection from "./pages/HeroSection/HeroSection";
import Sidebar from "./components/Sidebar/Sidebar";
import About from "./pages/About/About";
import Resume from "./pages/Resume/Resume";
export default function App() {
  return (
    <div className="flex flex-col select-none overflow-x-hidden">
      <Sidebar />
      <HeroSection />
      <About />
      <Resume />
    </div>
  );
}

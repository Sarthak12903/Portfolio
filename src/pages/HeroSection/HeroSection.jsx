import About from "../About/About";

export default function HeroSection() {
  return (
    <div>
      <div className="relative h-screen w-[100vw]  bg-blue-950 bg-cover bg-left ">
        <div className="absolute inset-0 bg-[url('/ME.HEIC')]   bg-no-repeat bg-right" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 h-full ml-72 flex flex-col justify-center items-start px-20">
          <h1 className="text-6xl font-bold text-white mb-4">
            Sarthak Bhalerao
          </h1>
          <p className="text-3xl text-white">
            I'm <span className="text-blue-400 ">Developer</span>
          </p>
        </div>
      </div>
      <About />
    </div>
  );
}

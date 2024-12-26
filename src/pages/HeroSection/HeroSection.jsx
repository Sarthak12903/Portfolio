import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <div
      id="home"
      className="bg-[url('/background.avif')] bg-no-repeat bg-cover  text-white h-screen flex items-center justify-center"
    >
      <div className="flex justify-end gap-56 mr-56 items-center w-full">
        <div className="flex flex-col space-y-3">
          <h1 className="text-6xl">Sarthak Bhalerao</h1>
          <p className="text-2xl">
            I'm <span className="text-blue-400">Full stack developer</span>
          </p>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="w-32 p-2 text-center cursor-pointer rounded-lg hover:bg-white/[0.2] active:scale-95 bg-blue-950 "
          >
            Know More
          </Link>
        </div>
        <div className="relative ">
          <img src="/ME.jpeg" className="w-[30rem] h-[38rem] rounded-3xl" />
          <div className="absolute inset-0 bg-black/[0.4] rounded-3xl"></div>
        </div>
      </div>
    </div>
  );
}

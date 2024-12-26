import { CgProfile } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlinePerson } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { MdMessage } from "react-icons/md";
import { SiGoogledocs } from "react-icons/si";
import { Link } from "react-scroll";

export default function Sidebar() {
  return (
    <div className="bg-[#040b14] fixed z-30 select-none w-72 h-[100vh] text-white flex flex-col justify-start p-16 items-center space-y-8">
      <div className="flex flex-col justify-center items-center space-y-4">
        {(
          <img
            src="/Sarthak.jpeg"
            className="w-26 h-26 rounded-full border-8 border-slate-700 cursor-pointer"
          />
        ) || <CgProfile className="w-24 h-24" />}
        <h1 className="text-2xl">Sarthak Bhalerao</h1>
        <div className="flex space-x-4">
          <div
            className="bg-white/[0.2] w-12 h-12 flex active:scale-90 hover:text-black hover:bg-sky-300 justify-center items-center cursor-pointer rounded-full"
            title="X"
          >
            <a
              href="https://x.com/SarthakB1209"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="w-6 h-6" />
            </a>
          </div>
          <div
            className="bg-white/[0.2] w-12 h-12 flex active:scale-90 hover:text-black hover:bg-sky-300 justify-center items-center cursor-pointer rounded-full"
            title="GitHub"
          >
            <a
              href="https://github.com/Sarthak12903"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
          <div
            className="bg-white/[0.2] w-12 h-12 flex active:scale-90 hover:text-black hover:bg-sky-300 justify-center items-center cursor-pointer rounded-full"
            title="Linkedin"
          >
            <a
              href="https://www.linkedin.com/in/sarthak-bhalerao12/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
          <div
            className="bg-white/[0.2] w-12 h-12 flex active:scale-90 hover:text-black hover:bg-sky-300 justify-center items-center cursor-pointer rounded-full"
            title="Instagram"
          >
            <a
              href="https://www.instagram.com/sarthak_b03/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagramSquare className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="space-y-6  text-xl w-64 flex flex-col justify-start items-start">
        <Link
          to="home"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
          className="group flex justify-start items-center space-x-4 hover:bg-white/[0.2] w-full p-4 rounded-xl active:scale-95 cursor-pointer"
        >
          <IoHomeOutline className="w-7 h-7 text-gray-400 group-[.active]:hidden group-hover:text-blue-400 group-active:scale-105 transition" />

          <IoHomeOutline className="w-7 h-7 text-blue-400 hidden  group-[.active]:block transition" />
          <h2 className="text-gray-400 group-hover:text-white group-[.active]:text-white">
            Home
          </h2>
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
          className="group flex justify-start items-center space-x-4 hover:bg-white/[0.2] w-full p-4 rounded-xl active:scale-95 cursor-pointer"
        >
          <MdOutlinePerson className="w-7 h-7 text-gray-400 group-[.active]:hidden group-hover:text-blue-400 group-active:scale-105 transition" />
          <MdOutlinePerson className="w-7 h-7 text-blue-400 hidden group-[.active]:block transition" />
          <h2 className="text-gray-400 group-hover:text-white group-[.active]:text-white">
            About
          </h2>
        </Link>
        <Link
          to="resume"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
          className="group flex justify-start items-center space-x-4 hover:bg-white/[0.2] w-full p-4 rounded-xl active:scale-95 cursor-pointer"
        >
          <SiGoogledocs className="w-7 h-7 text-gray-400 group-[.active]:hidden group-hover:text-blue-400 group-active:scale-105 transition" />
          <SiGoogledocs className="w-7 h-7 text-blue-400 hidden group-[.active]:block transition" />
          <h2 className="text-gray-400 group-hover:text-white group-[.active]:text-white">
            Resume
          </h2>
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
          className="group flex justify-start items-center space-x-4 hover:bg-white/[0.2] w-full p-4 rounded-xl active:scale-95 cursor-pointer"
        >
          <GrProjects className="w-7 h-7 text-gray-400 group-[.active]:hidden group-hover:text-blue-400 group-active:scale-105 transition" />
          <GrProjects className="w-7 h-7 text-blue-400 hidden group-[.active]:block transition" />
          <h2 className="text-gray-400 group-hover:text-white group-[.active]:text-white">
            Projects
          </h2>
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
          className="group flex justify-start items-center space-x-4 hover:bg-white/[0.2] w-full p-4 rounded-xl active:scale-95 cursor-pointer"
        >
          <MdMessage className="w-7 h-7 text-gray-400 group-[.active]:hidden group-hover:text-blue-400 group-active:scale-105 transition" />
          <MdMessage className="w-7 h-7 text-blue-400 hidden group-[.active]:block transition" />
          <h2 className="text-gray-400 group-hover:text-white group-[.active]:text-white">
            Contact
          </h2>
        </Link>
      </div>
    </div>
  );
}

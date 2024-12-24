import { CgProfile } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink, Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlinePerson } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { MdMessage } from "react-icons/md";
import { SiGoogledocs } from "react-icons/si";
export default function Sidebar() {
  return (
    <div className="bg-[#040b14] fixed z-50 select-none w-72 h-[100vh] text-white flex flex-col justify-start p-16 items-center space-y-8 ">
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
            <Link to={"https://x.com/SarthakB1209"} target="_blank">
              <FaXTwitter className="w-6 h-6" />
            </Link>
          </div>
          <div
            className="bg-white/[0.2] w-12 h-12 flex active:scale-90 hover:text-black hover:bg-sky-300 justify-center items-center cursor-pointer rounded-full"
            title="GitHub"
          >
            <Link to={"https://github.com/Sarthak12903"} target="_blank">
              <FaGithub className="w-6 h-6" />
            </Link>
          </div>
          <div
            className="bg-white/[0.2] w-12 h-12 flex active:scale-90 hover:text-black hover:bg-sky-300 justify-center items-center cursor-pointer rounded-full"
            title="Linkedin"
          >
            <Link
              to={"https://www.linkedin.com/in/sarthak-bhalerao12/"}
              target="_blank"
            >
              <FaLinkedin className="w-6 h-6" />
            </Link>
          </div>
          <div
            className="bg-white/[0.2] w-12 h-12 flex active:scale-90 hover:text-black hover:bg-sky-300 justify-center items-center cursor-pointer rounded-full"
            title="Instagram"
          >
            <Link to={"https://www.instagram.com/sarthak_b03/"} target="_blank">
              <FaInstagramSquare className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className=" space-y-6 text-xl w-64  flex flex-col justify-start items-start  ">
        <NavLink
          to={"/"}
          className="flex justify-start items-center space-x-4 hover:bg-white/[0.2] w-full p-4 rounded-xl active:scale-95"
        >
          {({ isActive }) => (
            <>
              <IoHomeOutline
                className={`w-7 h-7  ${
                  isActive ? "text-blue-400 " : "text-gray-400"
                }`}
              />
              <h2 className={`${isActive ? "text-white" : "text-gray-400"}`}>
                Home
              </h2>
            </>
          )}
        </NavLink>
        <NavLink
          to={"/about"}
          className="flex justify-start items-center space-x-4 hover:bg-white/[0.2] w-full p-4 rounded-xl active:scale-95"
        >
          {({ isActive }) => (
            <>
              <MdOutlinePerson
                className={`w-7 h-7 ${
                  isActive ? "text-blue-400" : "text-gray-400"
                }`}
              />
              <h2 className={`${isActive ? "text-white" : "text-gray-400"}`}>
                About
              </h2>
            </>
          )}
        </NavLink>
        <NavLink
          to={"/resume"}
          className="flex justify-start items-center space-x-4 hover:bg-white/[0.2] w-full p-4 rounded-xl active:scale-95"
        >
          {({ isActive }) => (
            <>
              <SiGoogledocs
                className={`w-7 h-7 ${
                  isActive ? "text-blue-400" : "text-gray-400"
                }`}
              />
              <h2 className={`${isActive ? "text-white" : "text-gray-400"}`}>
                Resume
              </h2>
            </>
          )}
        </NavLink>
        <NavLink
          to={"/projects"}
          className="flex justify-start items-center space-x-4 hover:bg-white/[0.2] w-full p-4 rounded-xl active:scale-95"
        >
          {({ isActive }) => (
            <>
              {" "}
              <GrProjects
                className={`w-7 h-7 ${
                  isActive ? "text-blue-400" : "text-gray-400"
                }`}
              />
              <h2 className={`${isActive ? "text-white" : "text-gray-400"}`}>
                Projects
              </h2>
            </>
          )}
        </NavLink>
        <NavLink
          to={"/contact"}
          className="flex justify-start items-center space-x-4 hover:bg-white/[0.2] w-full p-4 rounded-xl active:scale-95"
        >
          {({ isActive }) => (
            <>
              <MdMessage
                className={`w-7 h-7 ${
                  isActive ? "text-blue-400" : "text-gray-400"
                }`}
              />
              <h2 className={`${isActive ? "text-white" : "text-gray-400"}`}>
                Contact
              </h2>
            </>
          )}
        </NavLink>
      </div>
    </div>
  );
}

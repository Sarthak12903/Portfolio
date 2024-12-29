import { IoIosArrowForward } from "react-icons/io";
import SkillsSection from "../../components/SkillsSection/SkillsSection";
const about = [
  {
    id: 1,
    type: "Birthday: ",
    value: "12th September 2003",
  },
  {
    id: 2,
    type: "Available for: ",
    value: "Job/Internship And Freelancing",
  },
  {
    id: 3,
    type: "Phone: ",
    value: "7972188032",
  },
  {
    id: 4,
    type: "City: ",
    value: "Pune, India",
  },
];
const about1 = [
  {
    id: 5,
    type: "Age: ",
    value: new Date().getFullYear() - 2003,
  },
  {
    id: 6,
    type: "Degree: ",
    value: "Bachelor of Engineering",
  },
  {
    id: 7,
    type: "Email: ",
    value: "sarthak12903@gmail.com",
  },
  {
    id: 4,
    type: "College: ",
    value: "JSPM Bhivarabai Sawant Institute Of Technology and Research",
  },
];
export default function About() {
  return (
    <div
      id="about"
      className="ml-72 p-9 w-[84%] h-screen space-y-12 flex flex-col"
    >
      <div className="space-y-4">
        <h1 className="text-4xl font-bold pb-3 broder border-b-2 border-yellow-300 inline-block">
          About
        </h1>
        <p>
          My name is Sarthak Bhalerao, and I am a Full-stack Developer from
          India. I am passionate about creating diverse websites and learning
          programming languages. I possess a comprehensive understanding of
          HTML, CSS, JavaScript, React.js, Node.js, Express.js, and C++.
          Additionally, I am eager to explore opportunities for collaboration
          and contribute my skills to your team.
        </p>
      </div>
      <div className="flex space-x-14">
        <img src="/Sarthak.jpeg" className="rounded-xl" />
        <div className="flex flex-col space-y-4">
          <h1 className="font-semibold text-3xl">Full Stack Developer</h1>
          <p>
            Passionate about creating user-centric designs and scalable web
            solutions. Experienced in delivering high-quality applications with
            an emphasis on functionality and design.
          </p>
          <div className="flex gap-14">
            <div className="flex ">
              <ul className="space-y-5 ">
                {about.map((value) => (
                  <li key={value.id} className="flex items-center  space-x-2">
                    <IoIosArrowForward />
                    <p>
                      <span className="font-semibold">{value.type} </span>
                      {value.value}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <ul className="space-y-5 ">
                {about1.map((value) => (
                  <li key={value.id} className="flex items-center  space-x-2">
                    <IoIosArrowForward />
                    <p>
                      <span className="font-semibold">{value.type} </span>
                      {value.value}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p>
            Dedicated to achieving excellence in every project, I focus on
            creating innovative and efficient solutions tailored to clients'
            needs. Let's collaborate to build something amazing!
          </p>
        </div>
      </div>
      <div>
        <SkillsSection />
      </div>
    </div>
  );
}

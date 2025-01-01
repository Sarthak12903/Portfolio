import React, { useEffect, useRef } from "react";

const SkillsSection = () => {
  const progressRefs = useRef([]);

  const skills = [
    { name: "HTML", percentage: 100 },
    { name: "CSS", percentage: 90 },
    { name: "JAVASCRIPT", percentage: 85 },
    { name: "Reactjs", percentage: 90 },
    { name: "Nodejs", percentage: 70 },
    { name: "Expressjs", percentage: 80 },
    { name: "MongoDB", percentage: 75 },
    { name: "PostgreSQL", percentage: 100 },
    { name: "Typescript", percentage: 70 },
    { name: "C++", percentage: 50 },
  ];

  useEffect(() => {
    progressRefs.current.forEach((ref, index) => {
      if (ref) {
        setTimeout(() => {
          ref.style.width = `${skills[index].percentage}%`;
        }, index * 200);
      }
    });
  }, []);

  const SkillBar = ({ skill, index }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-700">
          {skill.name}
        </span>
        <span className="text-sm text-gray-500">{skill.percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          ref={(el) => (progressRefs.current[index] = el)}
          className="h-2.5 rounded-full bg-blue-500 transition-all duration-1000 ease-out"
          style={{ width: "0%" }}
        ></div>
      </div>
    </div>
  );

  const middleIndex = Math.ceil(skills.length / 2);

  return (
    <section className="max-w-full mx-auto bg-blue-100 p-6 rounded-xl">
      <h2 className="text-4xl font-bold mb-4">Skills</h2>
      <p className="text-gray-600 mb-8">
        Enclosed are statistics demonstrating my expertise in the following
        technologies and the depth of my knowledge in each area.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {skills.slice(0, middleIndex).map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} />
          ))}
        </div>
        <div className="space-y-4">
          {skills.slice(middleIndex).map((skill, index) => (
            <SkillBar
              key={skill.name}
              skill={skill}
              index={index + middleIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

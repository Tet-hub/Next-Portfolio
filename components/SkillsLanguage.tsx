import React from "react";

interface SkillData {
  skill: string;
  level: string;
}

interface Props {
  skills: SkillData[];
}

const SkillsLanguage: React.FC<Props> = ({ skills }) => {
  const levels = skills.map((skill) => skill.level);

  if (skills.length !== levels.length) {
    console.error("Skills and levels arrays must have the same length.");
    return null;
  }

  return (
    <div className="mb-8">
      {skills.map((skill, index) => (
        <h1
          key={index}
          className="p-5 w-[100%] uppercase bg-gray-600 rounded-sm text-white my-2 text-[20px] font-bold relative overflow-hidden"
        >
          {skill.skill}
          <span
            className={`${skill.level} left-0 right-0 bottom-0 h-[6px] absolute bg-[#55e6a5]`}
          ></span>
        </h1>
      ))}
    </div>
  );
};

export default SkillsLanguage;

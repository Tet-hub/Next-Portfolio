import React from "react";
import Image from "next/image";
interface SkillData {
  skill: string;
  logo: string;
}

interface Props {
  skills: SkillData[];
}

const SkillsLanguage: React.FC<Props> = ({ skills }) => {
  return (
    <div className="mb-[3rem]">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="p-5 flex items-center uppercase bg-gray-600 rounded-sm text-white my-2 text-[20px] font-bold"
        >
          <span className="mr-2">
            <Image src={skill.logo} alt={skill.skill} width={60} height={60} />
          </span>
          {skill.skill}
        </div>
      ))}
    </div>
  );
};

export default SkillsLanguage;

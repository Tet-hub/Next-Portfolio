import React from "react";
import SkillsLanguage from "./SkillsLanguage";
import skillsData from "@/constants/skills.data";

const SkillSet = () => {
  return (
    <div className="pb-[3rem] bg-[#09101a]">
      <h1 className="heading mb-10">
        Ski<span className="text-yellow-500">lls</span>
      </h1>
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        {skillsData.map((data, index) => (
          <SkillsLanguage key={index} skills={[data]} />
        ))}
      </div>
    </div>
  );
};

export default SkillSet;

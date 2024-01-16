import React from "react";
import SkillsLanguage from "./SkillsLanguage";
import skillsData from "@/constants/skills.data";

const SkillSet = () => {
  return (
    <div className="section-header bg-[#02050a]" id="skills">
      <h1 className="heading mb-10">
        Ski<span className="yellow-text">lls</span>
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

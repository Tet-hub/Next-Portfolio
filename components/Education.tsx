import React from "react";
import EducationItems from "./EducationItems";
import educationData from "@/constants/education.data";

const Education = () => {
  return (
    <div className="pt-[2rem] md:pt-[8rem] pb-[3rem] bg-[#09101a]">
      <h1 className="heading mb-16">
        Edu<span className="text-yellow-500">cation</span>
      </h1>
      <div className="w-[80%] mx-auto pt-4[rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        {educationData.map((data, index) => (
          <div key={index}>
            <EducationItems level={data.level} year={data.year} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;

import React from "react";
import EducationItems from "./EducationItems";
import educationData from "@/constants/education.data";

const Education = () => {
  return (
    <div className="section-header bg-[#121121]" id="education">
      <h1 className="heading mb-16">
        Edu<span className="yellow-text">cation</span>
      </h1>
      <div className="w-[80%] mx-auto pt-4[rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        {educationData.map((data, index) => (
          <div key={index}>
            <EducationItems
              level={data.level}
              year={data.year}
              course={data.course}
              school={data.school}
              address={data.address}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;

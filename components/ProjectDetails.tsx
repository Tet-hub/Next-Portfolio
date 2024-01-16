import React from "react";
import ProjectSlider from "./ProjectSlider";

const ProjectDetails = () => {
  return (
    <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem]">
      <h1 className="heading">
        Project <span className="text-yellow-500">Details</span>
      </h1>
      <div className="pb-[4rem] w-[80%] mx-auto">
        <ProjectSlider />
      </div>
    </div>
  );
};

export default ProjectDetails;

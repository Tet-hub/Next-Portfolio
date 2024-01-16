import React from "react";
import ProjectSlider from "./ProjectSlider";

const ProjectDetails = () => {
  return (
    <div className="section-header bg-[#121121]" id="projects">
      <h1 className="heading">
        Project <span className="yellow-text">Details</span>
      </h1>
      <div className="pb-[4rem] w-[80%] mx-auto">
        <ProjectSlider />
      </div>
    </div>
  );
};

export default ProjectDetails;

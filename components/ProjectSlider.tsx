import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectContainer from "./ProjectContainer";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const ProjectSlider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      <ProjectContainer
        image="/images/projects/konbini-index.png"
        title="KonbiniSense"
        lines={[
          { label: "Frontend", value: "React Native" },
          { label: "Backend", value: "Node JS w/ Firebase" },
          { label: "Finished", value: "December 21, 2023" },
          { label: "Role", value: ["Frontend", "Backend"] },
          { label: "Type", value: "Mobile" },
        ]}
      />
      <ProjectContainer
        image="/images/projects/epharmascripts-index.png"
        title="E-PharmaScripts"
        lines={[
          {
            label: "Frontend",
            value: "React JS, React Native, SCSS, Bootstrap",
          },
          { label: "Backend", value: "Node JS w/ Firebase" },
          { label: "Finished", value: "December 13, 2023" },
          { label: "Role", value: ["Frontend", "Backend"] },
          { label: "Type", value: ["Mobile", "Web"] },
        ]}
      />
      <ProjectContainer
        image="/images/projects/bookhub-index.png"
        title="BookHub"
        lines={[
          { label: "Frontend", value: "ASP.NET" },
          { label: "Backend", value: "C# w/ SQL SERVER" },
          { label: "Finished", value: "December 11, 2023" },
          { label: "Role", value: ["UI/UX", "Frontend", "Backend"] },
          { label: "Type", value: "Web" },
        ]}
      />

      <ProjectContainer
        image="/images/projects/gocantini-index.png"
        title="Go-Cantini"
        lines={[
          { label: "Frontend", value: ["Html", "CSS", "Bootstrap"] },
          { label: "Backend", value: "PHP w/ XAMPP" },
          { label: "Finished", value: "May 20, 2023" },
          { label: "Role", value: ["Frontend", "Backend"] },
          { label: "Type", value: "Web" },
        ]}
      />
    </Carousel>
  );
};

export default ProjectSlider;

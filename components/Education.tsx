import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AcademicCapIcon } from "@heroicons/react/20/solid";
import educationData from "@/constants/education.data";

const Education = () => {
  return (
    <div className="section-header bg-[#121121]" id="education">
      <h1 className="heading mb-16">
        Edu<span className="yellow-text">cation</span>
      </h1>
      <VerticalTimeline>
        {educationData.map((data, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "transparent",
              border: "1px solid",
              color: "white",
              fontWeight: "bold",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date={data.year}
            iconStyle={{ background: "rgb(96 165 250)", color: "#fff" }}
            icon={<AcademicCapIcon className="text-black" />}
          >
            <div className="gray-text">
              <h3 className="blue-text text-2xl">{data.level}</h3>
              <hr className="my-2" />
              <h4 className="">School: {data.school}</h4>
              <p>Address: {data.address}</p>
              <p>Course: {data.course}</p>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Education;

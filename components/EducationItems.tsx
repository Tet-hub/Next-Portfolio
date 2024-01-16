import React from "react";

interface Props {
  level: string;
  year: string;
  course: string;
  school: string;
  address: string;
}

const EducationItems = ({ level, year, course, school, address }: Props) => {
  return (
    <div className="mb-[4rem] md:mb-[8rem]">
      <span className="px-[2rem] blue-text py-[0.9rem] font-bold text-[18px] border-b-[2px] border-blue-400">
        {year}
      </span>
      <h1 className="mt-[2rem] uppercase font-semibold mb-[1rem] text-[16px] sm:text-[25px] md:text-[30px] text-white">
        {level}
      </h1>
      <p className="gray-text font-normal w-[80%] text-[17px]">
        <span className="blue-text">Course: </span>
        {course}
      </p>
      <p className="gray-text font-normal w-[80%] text-[17px]">
        <span className="blue-text">School: </span>
        School {school}
      </p>
      <p className="gray-text font-normal w-[80%] text-[17px]">
        <span className="blue-text">Address: </span>
        {address}
      </p>
    </div>
  );
};

export default EducationItems;

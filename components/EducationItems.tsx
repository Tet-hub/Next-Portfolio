import React from "react";

interface Props {
  level: string;
  year: string;
}

const EducationItems = ({ level, year }: Props) => {
  return (
    <div className="mb-[4rem] md:mb-[8rem]">
      <span className="px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold text-[18px] border-b-[2px] border-[#55e6a5]">
        {year}
      </span>
      <h1 className="mt-[2rem] uppercase font-semibold mb-[1rem] text-[16px] sm:text-[25px] md:text-[30px] text-white">
        {level}
      </h1>
      <p className="text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolorum
        molestias facilis itaque impedit. Deserunt laudantium tempora debitis
        velit, accusamus accusantium dolore ipsa vitae vel illum nihil eius enim
        impedit?
      </p>
    </div>
  );
};

export default EducationItems;

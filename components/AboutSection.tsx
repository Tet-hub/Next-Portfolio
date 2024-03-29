import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="section-header bg-[#121121]" id="about">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div className="order-2 lg:order-1">
          <h1 className="text-[20px] font-bold uppercase blue-text mb-[1rem]">
            About Me
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[2rem] font-bold text-white">
            Strive not to be a <span className="blue-text">success </span>
            but rather to be of <span className="yellow-text">value</span>
          </h2>
          <div className="flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-[80%]">
              In addition to my passion for web development, I like to watch
              movies and read books. I like to lose myself in a good story from
              time to time because it lets me explore new ideas, interact with
              people, and utilize my imagination freely.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center order-1">
          <div className="relative mt-[1rem] h-[300px] w-[300px] lg:h-[400px] lg:w-[400px]">
            <Image
              src="/images/about.jpg"
              alt="user"
              fill={true}
              className="relative z-[11] w-[100%]"
            />
            <div className="relative h-[300px] w-[300px] lg:h-[400px] lg:w-[400px] z-[10] blue-bg top-[-1rem] right-[-1rem] lg:top-[-2rem] lg:right-[-2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

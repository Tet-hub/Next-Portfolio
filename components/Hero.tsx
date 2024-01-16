import React from "react";
import Particle from "./Particles";
import Image from "next/image";
import {
  ArrowDownTrayIcon,
  PhoneArrowDownLeftIcon,
} from "@heroicons/react/20/solid";

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] pt-[10vh] bg-cover bg-center">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            <span className="text-white text-2xl">DEVE</span>
            <span className="text-yellow-400 text-2xl">LOPER</span>
            <hr className="b-2 border-yellow-500" />
            HI, I'M<span className="text-yellow-400"> JAY MAR!</span>
          </h1>
          <p className="mt-[1rem] text-[17px] text-gray-200">
            Social Media Logo here -----------------
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
              <p>Download CV</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
            <button className="px-[2rem] hover:bg-[#55e6a5] hover:text-black transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-transparent border border-1 border-[#55e6a5] text-white flex items-center space-x-2">
              <p>Contact me</p>
              <PhoneArrowDownLeftIcon className="w-[1.6rem] h-[1.7rem]" />
            </button>
            {/* <button className="flex items-center space-x-2">
              <PhoneArrowDownLeftIcon className="w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200 text-[#55e6a5]" />
              <p className="text-[20px] font-semibold text-white">Contact Me</p>
            </button> */}
          </div>
        </div>
        <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]">
          <Image
            src="/images/u1.jpg"
            alt="me"
            className="object-cover rounded-full"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

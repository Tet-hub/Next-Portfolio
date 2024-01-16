import React from "react";
import Particle from "./Particles";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-[100vh] bg-[url('/images/banner.jpg')] pt-[10vh] bg-cover bg-center">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            <span className="text-white text-2xl">DEVE</span>
            <span className="yellow-text text-2xl">LOPER</span>
            <hr className="b-2 yellow-text" />
            HI, I'M<span className="yellow-text"> JAY MAR!</span>
          </h1>
          <p className="mt-[1rem] text-[17px] text-gray-200">
            Social Media Logo here -----------------
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <Link
              className="px-[2rem] hover:yellow-bg transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase blue-bg text-black flex items-center space-x-2"
              href="images/cv/Rebanda-Jay-Mar-P.-CV.pdf"
              target="_blank"
              download="Rebanda-Jay-Mar-P.-CV.pdf"
            >
              <p>Download CV</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </Link>
          </div>
        </div>
        <div className="w-[500px] hidden yellow-bg relative lg:flex items-center rounded-full h-[500px]">
          <Image
            src="/images/gradpic.jpg"
            alt="me"
            className="rounded-full"
            fill={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

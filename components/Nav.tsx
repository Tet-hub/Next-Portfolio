import { Bars2Icon } from "@heroicons/react/20/solid";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  const router = useRouter();

  return (
    <div className="w-[100%] fixed z-[1000] h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <Link href="#hero" passHref>
          <h1
            className={`flex-[0.6] cursor-pointer text-[25px] text-white font-bold`}
          >
            PORT
            <span className="text-yellow-500">FOLIO</span>
          </h1>
        </Link>
        <Link href="#about" passHref>
          <div
            className={`nav-link ${
              router.asPath === "/#about"
                ? "text-yellow-500 border-b-2 border-yellow-400"
                : ""
            }`}
          >
            About
          </div>
        </Link>
        <Link href="#education" passHref>
          <div
            className={`nav-link ${
              router.asPath === "/#education"
                ? "text-yellow-500 border-b-2 border-yellow-400"
                : ""
            }`}
          >
            Education
          </div>
        </Link>
        <Link href="#skills" passHref>
          <div
            className={`nav-link ${
              router.asPath === "/#skills"
                ? "text-yellow-500 border-b-2 border-yellow-400"
                : ""
            }`}
          >
            Skills
          </div>
        </Link>
        <Link href="#projects" passHref>
          <div
            className={`nav-link ${
              router.asPath === "/#projects"
                ? "text-yellow-500 border-b-2 border-yellow-400"
                : ""
            }`}
          >
            Projects
          </div>
        </Link>
        <Link href="#certificates" passHref>
          <div
            className={`nav-link ${
              router.asPath === "/#certificates"
                ? "text-yellow-500 border-b-2 border-yellow-400"
                : ""
            }`}
          >
            Certificates
          </div>
        </Link>
        <div onClick={openNav}>
          <Bars2Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
        </div>
      </div>
    </div>
  );
};

export default Nav;

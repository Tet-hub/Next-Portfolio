import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";
import Link from "next/link";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <Link href="#hero" passHref onClick={closeNav}>
          <div className="nav-link-mobile">Home</div>
        </Link>
        <Link href="#about" passHref onClick={closeNav}>
          <div className="nav-link-mobile">About</div>
        </Link>
        <Link href="#services" passHref onClick={closeNav}>
          <div className="nav-link-mobile">Services</div>
        </Link>
        <Link href="#education" passHref onClick={closeNav}>
          <div className="nav-link-mobile">Education</div>
        </Link>
        <Link href="#skills" passHref onClick={closeNav}>
          <div className="nav-link-mobile">Skills</div>
        </Link>
        <Link href="#projects" passHref onClick={closeNav}>
          <div className="nav-link-mobile">Projects</div>
        </Link>
        <Link href="#certificates" passHref onClick={closeNav}>
          <div className="nav-link-mobile">Certificates</div>
        </Link>
      </div>
      <div
        onClick={closeNav}
        className="absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;

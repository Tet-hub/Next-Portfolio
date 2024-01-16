import { Bars2Icon } from "@heroicons/react/20/solid";
import React from "react";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="w-[100%] fixed z-[1000] h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          PORT<span className="text-yellow-500">FOLIO</span>
        </h1>
        <div className="nav-link">Home</div>
        {/* <div className="nav-link">Services</div> */}
        <div className="nav-link">About</div>
        <div className="nav-link">Project</div>
        <div className="nav-link">Certificates</div>
        {/* <div className="nav-link">Contact</div> */}
        <div onClick={openNav}>
          <Bars2Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
        </div>
      </div>
    </div>
  );
};

export default Nav;

import React from "react";
import serviceData from "@/constants/Services.data";

const Services = () => {
  return (
    <div className="section-header bg-[#02050a]" id="services">
      <p className="heading">
        What <span className="yellow-text">I</span> can{" "}
        <span className="yellow-text">Do</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-stretch gap-[3rem] mt-[4rem] text-black">
        {serviceData.map((card) => (
          <div
            key={card.id}
            className={` hover:scale-110 transform transition-all duration-300 ${
              card.id === 1
                ? "hover:-rotate-6"
                : card.id === 3
                ? "hover:rotate-6"
                : ""
            } blue-bg shadow-3xl uppercase font-semibold text-center p-[2rem] flex flex-col h-[80%]`}
          >
            {card.icon}
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              {card.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

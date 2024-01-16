import React from "react";
import serviceData from "@/constants/Services.data";

const Services = () => {
  return (
    <div className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]">
      <p className="heading">
        What <span className="text-yellow-400">I</span> can{" "}
        <span className="text-yellow-400">Do</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-stretch gap-[3rem] mt-[4rem] text-white">
        {serviceData.map((card) => (
          <div
            key={card.id}
            className={`flex-grow hover:scale-110 transform transition-all duration-300 ${
              card.id === 1
                ? "hover:-rotate-6"
                : card.id === 3
                ? "hover:rotate-6"
                : ""
            } bg-yellow-600 shadow-3xl uppercase font-semibold text-center p-[2rem] flex flex-col h-full`}
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

import Image from "next/image";
import React from "react";
import imagePaths from "@/constants/certificates.data";

const Certificates = () => {
  return (
    <div className="section-header bg-[#02050a]" id="certificates">
      <h1 className="heading">
        Certi<span className="yellow-text">ficates</span>
      </h1>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        {imagePaths.map((path, index) => (
          <div key={index}>
            <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
              <Image
                src={path}
                alt={`portfolio-${index + 1}`}
                fill={true}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;

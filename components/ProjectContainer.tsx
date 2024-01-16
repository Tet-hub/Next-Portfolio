import React from "react";
import Image from "next/image";

interface Line {
  label: string;
  value: string | string[];
}

interface Props {
  image: string;
  title: string;
  frontend?: string;
  backend?: string;
  dateFinished?: string;
  role?: string;
  tag?: string;
  lines?: Line[];
}

const ProjectContainer = ({ image, title, lines = [] }: Props) => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center">
      <div className="md:w-[60%] order-1">
        <Image
          src={image}
          alt={title}
          layout="responsive"
          objectFit="contain"
          width={200}
          height={200}
          className="mx-auto mt-14 md:mb-0 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 px-[1rem]"
        />
      </div>
      <div className="md:w-1/2 order-2 text-left">
        <div className="text-white w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">
          <h1 className="text-3xl blue-text uppercase mt-4 md:mt-0">{title}</h1>
          <div className="text-base">
            {lines.map(({ label, value }, index) => (
              <p key={index} className="my-2">
                <span className="blue-text">{label}: </span>
                {Array.isArray(value) ? (
                  <span className="opacity-80">{value.join(", ")}</span>
                ) : (
                  <span className="opacity-80">{value}</span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;

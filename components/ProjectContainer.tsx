import React from "react";
import Image from "next/image";
import Link from "next/link";

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
  github?: string;
  link?: string;
}

const ProjectContainer = ({
  image,
  title,
  lines = [],
  github,
  link,
}: Props) => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center">
      <div className="md:w-[60%] order-1 relative group">
        <div className="relative group">
          <Image
            src={image}
            alt={title}
            layout="responsive"
            objectFit="contain"
            width={200}
            height={200}
            className="mx-auto mt-14 md:mb-0 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 px-[1rem] transition-all duration-300 group-hover:z-10"
          />
          <div className="absolute inset-0 bg-gray-500 opacity-0 group-hover:opacity-80 transition-opacity duration-300 mx-4"></div>
        </div>

        {/* Icons on hover */}
        <div className="p-2 absolute bottom-0 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex">
          <Link
            className="text-white mx-1 border border-1 rounded-full hover:border-blue-300 hover:border-2"
            href={github || ""}
            target="_blank"
          >
            <Image
              src="/images/github.png"
              alt="github"
              height={35}
              width={35}
              className="m-2"
            />
          </Link>
          <Link
            className="text-white mx-1 border border-1 rounded-full hover:border-blue-300 hover:border-2"
            href={link || ""}
            target="_blank"
          >
            <Image
              src="/images/links.png"
              alt="link"
              height={35}
              width={35}
              className="m-2"
            />
          </Link>
        </div>
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

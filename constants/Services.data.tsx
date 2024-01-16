import {
  CodeBracketIcon,
  CodeBracketSquareIcon,
  RocketLaunchIcon,
} from "@heroicons/react/20/solid";

interface CardData {
  id: number;
  icon: React.ReactElement;
  title: string;
}

const serviceData: CardData[] = [
  {
    id: 1,
    icon: (
      <CodeBracketIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
    ),
    title: "Frontend",
  },
  {
    id: 2,
    icon: (
      <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
    ),
    title: "Backend",
  },
  {
    id: 3,
    icon: (
      <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
    ),
    title: "Fullstack",
  },
];

export default serviceData;

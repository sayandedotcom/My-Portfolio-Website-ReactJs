import { FaCloud, FaDatabase, FaNetworkWired } from "react-icons/fa";
import { SlGraph } from "react-icons/sl";
import { CgBrackets } from "react-icons/cg";
import { SiWindowsxp } from "react-icons/si";
import { MdEngineering } from "react-icons/md";
import "./skills.css";
const className = "skills-dark-icons";
const subjectsDark = [
  {
    name: "Object-Oriented Programming",
    src: <CgBrackets className={className} />,
    value: 80,
  },
  {
    name: "Data Structures & Algorithms",
    src: <SlGraph className={className} />,
    value: 80,
  },
  {
    name: "RDBMS",
    src: <FaDatabase className={className} />,
    value: 80,
  },
  {
    name: "Software Engineering",
    src: <MdEngineering className={className} />,
    value: 80,
  },
  {
    name: "Cloud Computing",
    src: <FaCloud className={className} />,
    value: 65,
  },
  {
    name: "Operating System",
    src: <SiWindowsxp className={className} />,
    value: 60,
  },
  {
    name: "Computer Networks",
    src: <FaNetworkWired className={className} />,
    value: 60,
  },
];
export default subjectsDark;

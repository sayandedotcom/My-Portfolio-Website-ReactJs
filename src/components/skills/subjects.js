import OOP from "../../assests/computer-subjects-images/icons8-object-48.png";
import DSA from "../../assests/computer-subjects-images/svg-dsa.svg";
import RDBMS from "../../assests/computer-subjects-images/svg-database.svg";
import SE from "../../assests/computer-subjects-images/svg-software-engineering.svg";
import Cloud from "../../assests/computer-subjects-images/svg-cloud-computing.svg";
import OS from "../../assests/computer-subjects-images/svg-operating-system.svg";
import CN from "../../assests/computer-subjects-images/svg-computer-networks.svg";
import { FaCloud, FaDatabase, FaNetworkWired } from "react-icons/fa";
import { SlGraph } from "react-icons/sl";
import { CgBrackets } from "react-icons/cg";
import { SiWindowsxp } from "react-icons/si";
import { MdEngineering } from "react-icons/md";
import "./skills.css";
const className = "skills-dark-icons";
const Subjects = [
  {
    name: "Object-Oriented Programming",
    icon: <CgBrackets className={className} />,
    svg: OOP,
    value: 80,
  },
  {
    name: "Data Structures & Algorithms",
    icon: <SlGraph className={className} />,
    svg: DSA,
    value: 80,
  },
  {
    name: "RDBMS",
    icon: <FaDatabase className={className} />,
    svg: RDBMS,
    value: 80,
  },
  {
    name: "Software Engineering",
    icon: <MdEngineering className={className} />,
    svg: SE,
    value: 80,
  },
  {
    name: "Cloud Computing",
    icon: <FaCloud className={className} />,
    svg: Cloud,
    value: 65,
  },
  {
    name: "Operating System",
    icon: <SiWindowsxp className={className} />,
    svg: OS,
    value: 60,
  },

  {
    name: "Computer Networks",
    icon: <FaNetworkWired className={className} />,
    svg: CN,
    value: 60,
  },
];
export default Subjects;

import { FaJava, FaPhp, FaPython } from "react-icons/fa";
import { SiGraphql, SiMysql } from "react-icons/si";
import { GrGolang } from "react-icons/gr";
const className = "skills-dark-icons";
const languagesDark = [
  {
    name: "Java",
    src: <FaJava className={className} />,
    value: 80,
  },
  {
    name: "SQL / PL-SQL",
    src: <SiMysql className={className} />,
    value: 80,
  },
  {
    name: "PHP",
    src: <FaPhp className={className} />,
    value: 60,
  },
  {
    name: "Python",
    src: <FaPython className={className} />,
    value: 30,
  },
  {
    name: "GraphQL",
    src: <SiGraphql className={className} />,
    value: 80,
  },
  {
    name: "Go",
    src: <GrGolang className={className} />,
    value: 30,
  },
];
export default languagesDark;

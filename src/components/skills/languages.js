import Java from "../../assests/languages-svg/svg-java.svg";
import Python from "../../assests/languages-svg/svg-python.svg";
import SQL from "../../assests/languages-svg/svg-mysql.svg";
import PHP from "../../assests/languages-svg/svg-php.svg";
import GraphQL from "../../assests/languages-svg/svg-graphql.svg";
import Go from "../../assests/languages-svg/svg-golang.svg";
import { FaJava, FaPhp, FaPython } from "react-icons/fa";
import { SiGraphql, SiMysql } from "react-icons/si";
import { GrGolang } from "react-icons/gr";
const className = "skills-dark-icons";
const languages = [
  {
    name: "Java",
    icon: <FaJava className={className} />,
    svg: Java,
    value: 80,
  },
  {
    name: "SQL / PL-SQL",
    icon: <SiMysql className={className} />,
    svg: SQL,
    value: 80,
  },
  {
    name: "PHP",
    icon: <FaPhp className={className} />,
    svg: PHP,
    value: 60,
  },
  {
    name: "Python",
    icon: <FaPython className={className} />,
    svg: Python,
    value: 30,
  },
  {
    name: "GraphQL",
    icon: <SiGraphql className={className} />,
    svg: GraphQL,
    value: 80,
  },
  {
    name: "Go",
    icon: <GrGolang className={className} />,
    svg: Go,
    value: 30,
  },
];
export default languages;

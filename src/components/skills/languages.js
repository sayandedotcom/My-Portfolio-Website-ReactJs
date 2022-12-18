import Java from "../../assests/svg-java.svg";
import Python from "../../assests/svg-python.svg";
import SQL from "../../assests/svg-mysql.svg";
import PHP from "../../assests/svg-php.svg";
import GraphQL from "../../assests/svg-graphql.svg";
import Go from "../../assests/svg-golang.svg";

const languages = [
  {
    name: "Java",
    src: Java,
    value: 80,
  },
  {
    name: "SQL / PL-SQL",
    src: SQL,
    value: 80,
  },
  {
    name: "PHP",
    src: PHP,
    value: 60,
  },
  {
    name: "Python",
    src: Python,
    value: 30,
  },
  {
    name: "GraphQL",
    src: GraphQL,
    value: 80,
  },
  {
    name: "Go",
    src: Go,
    value: 30,
  },
];
export default languages;

import {
  FaGitAlt,
  FaGithub,
  FaJira,
  FaNpm,
  FaYarn,
  FaNode,
  FaLinux,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiFirebase,
  SiExpress,
  SiLinux,
  SiMongodb,
  SiPostman,
  SiKubernetes,
  SiJenkins,
  SiUnrealengine,
} from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import "./skills.css";
const className = "skills-dark-icons";

const toolsDark = [
  {
    name: "Git VCS",
    src: <FaGitAlt className={className} />,
    value: 80,
  },
  {
    name: "GitHub",
    src: <FaGithub className={className} />,
    value: 80,
  },
  {
    name: "Jira",
    src: <FaJira className={className} />,
    value: 70,
  },
  {
    name: "Firebase",
    src: <SiFirebase className={className} />,
    value: 80,
  },
  {
    name: "NPM",
    src: <FaNpm className={className} />,
    value: 80,
  },
  {
    name: "Yarn",
    src: <FaYarn className={className} />,
    value: 80,
  },
  {
    name: "ExpressJS",
    src: <SiExpress className={className} />,
    value: 50,
  },
  {
    name: "NodeJs",
    src: <DiNodejs className={className} />,
    value: 50,
  },
  {
    name: "MongoDB",
    src: <SiMongodb className={className} />,
    value: 60,
  },
  {
    name: "Postman",
    src: <SiPostman className={className} />,
    value: 80,
  },
  {
    name: "Linux OS",
    src: <SiLinux className={className} />,
    value: 80,
  },
  // {
  //   name: "Heroku",
  //   src:< className={className}/>,
  //   value: 80,
  // },
  // {
  //   name: "Netlify",
  //   src:< className={className}/>,
  //   value: 80,
  // },
  {
    name: "Docker",
    src: <FaDocker className={className} />,
    value: 60,
  },
  {
    name: "Docker",
    src: <SiKubernetes className={className} />,
    value: 60,
  },
  {
    name: "Docker",
    src: <SiJenkins className={className} />,
    value: 60,
  },
  {
    name: "AWS",
    src: <FaAws className={className} />,
    value: 20,
  },
  {
    name: "Unreal Engine",
    src: <SiUnrealengine className={className} />,
    value: 40,
  },
];
export default toolsDark;

import Git from "../../assests/tools-svgs/svg-git.svg";
import GitHub from "../../assests/tools-svgs/svg-github.svg";
import Jira from "../../assests/tools-svgs/svg-jira.svg";
import Firebase from "../../assests/tools-svgs/svg-firebase.svg";
import NPM from "../../assests/tools-svgs/svg-npm.svg";
import Yarn from "../../assests/tools-svgs/svg-yarn.svg";
import ExpressJS from "../../assests/tools-svgs/svg-express-js.svg";
import NodeJs from "../../assests/tools-svgs/svg-nodejs.svg";
import MongoDB from "../../assests/tools-svgs/svg-mongodb.svg";
import Postman from "../../assests/tools-svgs/svg-postman.svg";
// import Heroku from "../../assests/tools-svgs/svg-heroku.svg";
// import Netlify from "../../assests/tools-svgs/svg-netlify.svg";
import Linux from "../../assests/tools-svgs/svg-linux.svg";
import Docker from "../../assests/tools-svgs/svg-docker.svg";
import Kubernetes from "../../assests/tools-svgs/svg-kubernetes.svg";
import Jenkins from "../../assests/tools-svgs/svg-jenkins.svg";
import UnrealEngine from "../../assests/tools-svgs/svg-unreal-engine.svg";
import AWS from "../../assests/tools-svgs/svg-amazon-web-services.svg";
import {
  FaGitAlt,
  FaGithub,
  FaJira,
  FaNpm,
  FaYarn,
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
const Tools = [
  {
    name: "Git VCS",
    icon: <FaGitAlt className={className} />,
    svg: Git,
    value: 80,
  },
  {
    name: "GitHub",
    icon: <FaGithub className={className} />,
    svg: GitHub,
    value: 80,
  },
  {
    name: "Jira",
    icon: <FaJira className={className} />,
    svg: Jira,
    value: 70,
  },
  {
    name: "Firebase",
    icon: <SiFirebase className={className} />,
    svg: Firebase,
    value: 80,
  },
  {
    name: "NPM",
    icon: <FaNpm className={className} />,
    svg: NPM,
    value: 80,
  },
  {
    name: "Yarn",
    icon: <FaYarn className={className} />,
    svg: Yarn,
    value: 80,
  },
  {
    name: "ExpressJS",
    icon: <SiExpress className={className} />,
    svg: ExpressJS,
    value: 50,
  },
  {
    name: "NodeJs",
    icon: <DiNodejs className={className} />,
    svg: NodeJs,
    value: 50,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className={className} />,
    svg: MongoDB,
    value: 60,
  },
  {
    name: "Postman",
    icon: <SiPostman className={className} />,
    svg: Postman,
    value: 80,
  },
  {
    name: "Linux OS",
    icon: <SiLinux className={className} />,
    svg: Linux,
    value: 80,
  },
  // {
  //   name: "Heroku",
  //   icon: <FaGitAlt className={className} />,
  //   svg: Heroku,
  //   value: 80,
  // },

  //  {
  //    name: "Netlify",
  // icon:<FaGitAlt className={className} />,
  // svg: Netlify,
  //   value: 80,
  //  },
  {
    name: "Docker",
    icon: <FaDocker className={className} />,
    svg: Docker,
    value: 60,
  },
  {
    name: "Kubernetes",
    icon: <SiKubernetes className={className} />,
    svg: Kubernetes,
    value: 60,
  },
  {
    name: "Jenkins",
    icon: <SiJenkins className={className} />,
    svg: Jenkins,
    value: 60,
  },
  {
    name: "AWS",
    icon: <FaAws className={className} />,
    svg: AWS,
    value: 20,
  },
  {
    name: "Unreal Engine",
    icon: <SiUnrealengine className={className} />,
    svg: UnrealEngine,
    value: 40,
  },
];
export default Tools;

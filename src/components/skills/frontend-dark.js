import {
  FaHtml5,
  FaSass,
  FaJs,
  FaVuejs,
  FaReact,
  FaBootstrap,
  FaFigma,
} from "react-icons/fa";
import {
  SiLess,
  SiRedux,
  SiReduxsaga,
  SiReactrouter,
  SiEslint,
  SiWebpack,
  SiBabel,
  SiCss3,
  SiNextdotjs,
  SiTailwindcss,
  SiMaterialui,
  SiChakraui,
  SiStyledcomponents,
  SiJest,
  SiGatsby,
  SiPwa,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import "./skills.css";
const className = "skills-dark-icons";
const frontendDark = [
  {
    name: "HTML 5",
    src: <FaHtml5 className={className} />,
    value: 80,
  },
  {
    name: "CSS 3",
    src: <SiCss3 className={className} />,
    value: 80,
  },
  {
    name: "SASS",
    src: <FaSass className={className} />,
    value: 70,
  },
  {
    name: "Less",
    src: <SiLess className={className} />,
    value: 50,
  },
  {
    name: "JavaScript",
    src: <FaJs className={className} />,
    value: 70,
  },
  {
    name: "TypeScript",
    src: <SiTypescript className={className} />,
    value: 60,
  },
  {
    name: "ESLint",
    src: <SiEslint className={className} />,
    value: 57,
  },
  {
    name: "Webpack",
    src: <SiWebpack className={className} />,
    value: 50,
  },
  {
    name: "Babel",
    src: <SiBabel className={className} />,
    value: 80,
  },
  {
    name: "Vue Js",
    src: <FaVuejs className={className} />,
    value: 45,
  },
  {
    name: "React Js",
    src: <FaReact className={className} />,
    value: 90,
  },
  {
    name: "React Router",
    src: <SiReactrouter className={className} />,
    value: 90,
  },
  {
    name: " Redux / Redux Toolkit",
    src: <SiRedux className={className} />,
    value: 80,
  },
  {
    name: "Redux Saga",
    src: <SiReduxsaga className={className} />,
    value: 70,
  },
  {
    name: "Next Js",
    src: <SiNextdotjs className={className} />,
    value: 40,
  },
  {
    name: "Bootstrap",
    src: <FaBootstrap className={className} />,
    value: 80,
  },
  {
    name: "Tailwind CSS",
    src: <SiTailwindcss className={className} />,
    value: 80,
  },
  {
    name: "MaterialUI",
    src: <SiMaterialui className={className} />,
    value: 80,
  },
  {
    name: "Chakra UI",
    src: <SiChakraui className={className} />,
    value: 80,
  },
  {
    name: "Styled Components",
    src: <SiStyledcomponents className={className} />,
    value: 80,
  },
  {
    name: "React Query",
    src: <TbBrandReactNative className={className} />,
    value: 60,
  },
  // {
  //   name: "React Testing Library",
  //   src: RTL,
  //   value: 80,
  // },
  {
    name: "Jest",
    src: <SiJest className={className} />,
    value: 50,
  },
  //   {
  //     name: "Flux",
  //     src: Flux,
  //     value: 80,
  //   },
  {
    name: "Gatsby Js",
    src: <SiGatsby className={className} />,
    value: 80,
  },
  {
    name: "React Native",
    src: <FaReact className={className} />,
    value: 30,
  },
  {
    name: "Progressive Web Apps",
    src: <SiPwa className={className} />,
    value: 30,
  },
  {
    name: "Figma",
    src: <FaFigma className={className} />,
    value: 80,
  },
];

export default frontendDark;

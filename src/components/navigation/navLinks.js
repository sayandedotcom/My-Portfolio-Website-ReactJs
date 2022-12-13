import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
const navLinks = [
  {
    to: "about",
    name: "About Me",
    icon: <PersonRoundedIcon />,
  },
  {
    to: "skills",
    name: "Skills",
    icon: <CodeRoundedIcon />,
  },
  {
    to: "education",
    name: "Education",
    icon: <SchoolRoundedIcon />,
  },
  {
    to: "projects",
    name: "Projects",
    icon: <AttachFileRoundedIcon />,
  },
  {
    to: "contactme",
    name: "Contact Me",
    icon: <PhoneRoundedIcon />,
  },
];
export default navLinks;

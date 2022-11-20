import "./navigation.css";
import {
  FaChevronCircleRight,
  FaEnvelope,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
const className = "fonts";
const footerLinks = [
  {
    id: 1,
    name: "Home",
    href: "/",
    fonts: <FaChevronCircleRight />,
  },
  {
    id: 2,
    name: "About",
    href: "/about",
    fonts: <FaChevronCircleRight />,
  },
  {
    id: 3,
    name: "Skills",
    href: "/skills",
    fonts: <FaChevronCircleRight />,
  },
  {
    id: 4,
    name: "Educations",
    href: "/education",
    fonts: <FaChevronCircleRight />,
  },
  {
    id: 5,
    name: "Projects",
    href: "/projects",
    fonts: <FaChevronCircleRight />,
  },
  {
    id: 6,
    name: "Contact Me",
    href: "/contactme",
    fonts: <FaChevronCircleRight />,
  },
  {
    id: 7,
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100010494277272",
    fonts: <FaFacebook className={className} />,
  },
  {
    id: 8,
    name: "Instagram",
    href: "https://www.instagram.com/sayande._/",
    fonts: <FaInstagram className={className} />,
  },
  {
    id: 9,
    name: "Twitter",
    href: "https://twitter.com/sayande2002",
    fonts: <FaTwitter className={className} />,
  },
  {
    id: 10,
    name: "GitHub",
    href: "https://github.com/sayande2002",
    fonts: <FaGithub className={className} />,
  },
  {
    id: 11,
    name: "Linkedin",
    href: "https://www.linkedin.com/in/sayande/",
    fonts: <FaLinkedin className={className} />,
  },
  {
    id: 12,
    name: "Mail",
    href: "mailto:sayandeten@gmail.com",
    fonts: <FaEnvelope className={className} />,
  },
  {
    id: 13,
    name: "Whatsapp",
    href: "https://wa.me/+917439891451",
    fonts: <FaWhatsapp className={className} />,
  },
];
export default footerLinks;

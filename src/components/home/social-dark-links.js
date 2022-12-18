import {
  FaEnvelope,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaWhatsapp,
  FaFileAlt,
} from "react-icons/fa";
import ResumePDF from "../../assests/SayanDeCV.pdf";
const className = "home-dark-icons";
const socialDark = [
  {
    name: "My Facebook",
    link: "https://www.facebook.com/profile.php?id=100010494277272",
    fonts: <FaFacebook className={className} />,
  },
  {
    name: "My Instagram",
    link: "https://www.instagram.com/sayande._/",
    fonts: <FaInstagram className={className} />,
  },
  {
    name: "My Twitter",
    link: "https://twitter.com/sayande2002",
    fonts: <FaTwitter className={className} />,
  },
  {
    name: "My GitHub",
    link: "https://github.com/sayande2002",
    fonts: <FaGithub className={className} />,
  },
  {
    name: "My Linkedin",
    link: "https://www.linkedin.com/in/sayande/",
    fonts: <FaLinkedin className={className} />,
  },
  {
    name: "My Mail",
    link: "mailto:sayandeten@gmail.com",
    fonts: <FaEnvelope className={className} />,
  },
  {
    name: "Resume / CV",
    link: ResumePDF,
    fonts: <FaFileAlt className={className} />,
  },
  {
    name: "My Whatsapp",
    link: "https://wa.me/+917439891451",
    fonts: <FaWhatsapp className={className} />,
  },
];
export default socialDark;

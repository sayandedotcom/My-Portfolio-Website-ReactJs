import GitHub from "../../assests/social-media-svgs/svg-github.svg";
import Facebook from "../../assests/social-media-svgs/svg-facebook.svg";
import Instagram from "../../assests/social-media-svgs/svg-instagram.svg";
import Twitter from "../../assests/social-media-svgs/svg-twitter.svg";
import Mail from "../../assests/social-media-svgs/svg-gmail.svg";
import Linkedin from "../../assests/social-media-svgs/svg-linkedin.svg";
import Resume from "../../assests/social-media-svgs/svg-resume.svg";
import ResumePDF from "../../assests/SayanDeCV.pdf";
import WhatsApp from "../../assests/social-media-svgs/svg-whatsapp.svg";
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
const className = "home-dark-icons";

const socialicons = [
  {
    name: "My Facebook",
    link: "https://www.facebook.com/profile.php?id=100010494277272",
    icons: <FaFacebook className={className} />,
    src: Facebook,
  },
  {
    name: "My Instagram",
    link: "https://www.instagram.com/sayande._/",
    icons: <FaInstagram className={className} />,
    src: Instagram,
  },
  {
    name: "My Twitter",
    link: "https://twitter.com/SayanDe_10",
    icons: <FaTwitter className={className} />,
    src: Twitter,
  },
  {
    name: "My GitHub",
    link: "https://github.com/sayande2002",
    icons: <FaGithub className={className} />,
    src: GitHub,
  },
  {
    name: "My Linkedin",
    link: "https://www.linkedin.com/in/sayande/",
    icons: <FaLinkedin className={className} />,
    src: Linkedin,
  },
  {
    name: "My Mail",
    link: "mailto:sayandeten@gmail.com",
    icons: <FaEnvelope className={className} />,
    src: Mail,
  },
  {
    name: "Resume / CV",
    link: ResumePDF,
    icons: <FaFileAlt className={className} />,
    src: Resume,
  },
  {
    name: "My WhatsApp",
    link: "https://wa.me/+917439891451",
    icons: <FaWhatsapp className={className} />,
    src: WhatsApp,
  },
];
export default socialicons;

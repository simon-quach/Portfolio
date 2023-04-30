import { Link } from "react-scroll";
import { motion } from "framer-motion";
import BackButton from "../assets/x-solid.svg";

// Configration for all React Scroll Animations
const scrollConfig = {
  spy: true,
  smooth: true,
  offset: 0,
  duration: 700,
};

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <motion.div
      className="bg-white h-screen w-screen flex flex-col justify-center items-center text-center font-semibold text-[20px] fixed bottom-0 right-0 z-20 gap-[32px]"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          type: "spring",
          bounce: 0,
          duration: 0.5,
          delay: 0,
        },
      }}
      viewport={{ once: true }}
    >
      <img
        src={BackButton}
        alt="backButton"
        className="w-6 fixed top-5 right-6 cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <Link
        to="about"
        spy={scrollConfig.spy}
        smooth={scrollConfig.smooth}
        offset={-72} // -72 because of the height of the navbar
        duration={scrollConfig.duration}
        className="cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        About
      </Link>
      <Link
        to="skills"
        spy={scrollConfig.spy}
        smooth={scrollConfig.smooth}
        offset={-72} // -72 because of the height of the navbar
        duration={scrollConfig.duration}
        className="cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        Skills
      </Link>
      <Link
        to="projects"
        spy={scrollConfig.spy}
        smooth={scrollConfig.smooth}
        offset={-72} // -72 because of the height of the navbar
        duration={scrollConfig.duration}
        className="cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        Projects
      </Link>
      <Link
        to="contact"
        spy={scrollConfig.spy}
        smooth={scrollConfig.smooth}
        offset={-72} // -72 because of the height of the navbar
        duration={scrollConfig.duration}
        className="cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        Contact
      </Link>
      <motion.a
        href="/resume.pdf"
        target="_blank"
        className="cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        Resume
      </motion.a>
    </motion.div>
  );
};

export default Navbar;

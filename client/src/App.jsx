// Colors: Main = #1E72D9, Secondary = #458DE5, Black = #1b1b1b
import { useState } from "react";
import {
  Navbar,
  Home,
  About,
  Skills,
  Projects,
  Contact,
  Footer,
  MobileNav,
} from "./components";
import { GithubLogo, LinkedInLogo, MailLogo } from "./assets/logos";
import { motion } from "framer-motion";

import "./App.css";

function App() {
  // Scroll to top on page load
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the mobile menu [true, false]

  return (
    <div className="bg-[#f4f9ff]">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen && (
        <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}

      <main className="flex flex-col items-center relative text-[#1b1b1b] bg-[#f4f9ff]">
        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              type: "spring",
              bounce: 0,
              duration: 1.5,
              delay: 1,
            },
          }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center justify-center gap-4 fixed bottom-[8rem] left-[50px] z-[2]">
            <motion.a
              href="https://github.com/simon-quach"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={GithubLogo} alt="github-logo" className="w-[30px]" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/simon-quach/"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={LinkedInLogo}
                alt="linkedin-logo"
                className="w-[30px]"
              />
            </motion.a>
            <motion.a
              href="mailto: simonquach.tech@gmail.com"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={MailLogo} alt="mail-logo" className="w-[24px]" />
            </motion.a>
          </div>
          <div className="fixed w-[4px] h-[100px] bg-[#1b1b1b] bottom-0 left-[64px]"></div>
          <div className="fixed w-[4px] h-[100px] bg-[#1b1b1b] bottom-0 right-[64px]"></div>
        </motion.div>

        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;

import { Link } from 'react-scroll';
import { useScrollDirection } from '../hooks';
import MenuIcon from '../assets/menu-icon.svg';
import { motion } from 'framer-motion';

// Configration for all React Scroll Animations
const scrollConfig = {
  spy: true,
  smooth: true,
  offset: 0,
  duration: 700
}

const Navbar = () => {
  const scrollDirection = useScrollDirection(); // Returns a value of 'up' or 'down'

  return (
    <motion.div 
      className={`transition-all duration-500 sticky ${ scrollDirection === "down" ? "-top-72" : "top-0"} h-[72px] w-full px-[20px] flex justify-center items-center bg-white shadow-sm z-10`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: {
        type: "spring",
        bounce: 0,
        duration: 1.5,
        delay: 0
      } }}
      viewport={{ once: true }}
    >
      <div className='w-full h-full flex justify-between items-center text-center'>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to='home'
            spy={scrollConfig.spy}
            smooth={scrollConfig.smooth}
            offset={-72} // -72 because of the height of the navbar
            duration={scrollConfig.duration}
          >
            <img className='w-[56px] cursor-pointer ml-[-4px]' src="/portfolio-logo.svg" alt="img" />
          </Link>
        </motion.div>
        
        <div className='hidden sm:flex items-center justify-center text-[16px] gap-[32px] relative'>
          <Link 
            to='about'
            spy={scrollConfig.spy}
            smooth={scrollConfig.smooth}
            offset={scrollConfig.offset}
            duration={scrollConfig.duration}
            className='cursor-pointer'
          >
            About
          </Link>
          <Link 
            to='skills'
            spy={scrollConfig.spy}
            smooth={scrollConfig.smooth}
            offset={scrollConfig.offset}
            duration={scrollConfig.duration}
            className='cursor-pointer'
          >
            Skills
          </Link>
          <Link 
            to='projects'
            spy={scrollConfig.spy}
            smooth={scrollConfig.smooth}
            offset={scrollConfig.offset}
            duration={scrollConfig.duration}
            className='cursor-pointer'
          >
            Projects
          </Link>
          <Link 
            to='contact'
            spy={scrollConfig.spy}
            smooth={scrollConfig.smooth}
            offset={scrollConfig.offset}
            duration={scrollConfig.duration}
            className='cursor-pointer'
          >
            Contact
          </Link>
          <motion.a 
            href='/resume.pdf' 
            target='_blank' 
            className='cursor-pointer bg-[#1e72d9] text-white px-4 py-2 rounded-lg'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
          </motion.a>
        </div>
        <img src={MenuIcon} alt="menu-icon" className='w-8 sm:hidden block' />
      </div>
    </motion.div>
  )
}

export default Navbar
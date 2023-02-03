import { useState } from 'react';
import { Link } from 'react-scroll';

// Configration for all React Scroll Animations
const scrollConfig = {
  spy: true,
  smooth: true,
  offset: 0,
  duration: 500
}

const Navbar = () => {
  return (
    <nav className='transition-all fixed top-0 h-[72px] w-full px-[40px] flex justify-center items-center'>
      <div className='w-full h-full flex justify-between items-center text-center'>
        <Link
          to='home'
          spy={scrollConfig.spy}
          smooth={scrollConfig.smooth}
          offset={scrollConfig.offset}
          duration={scrollConfig.duration}
        >
          <img className='w-[56px] cursor-pointer' src="/portfolio-logo.svg" alt="img" />
        </Link>
        
        <div className='hidden md:flex text-[16px] gap-[32px] relative'>
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
          <Link 
            to='resume'
            spy={scrollConfig.spy}
            smooth={scrollConfig.smooth}
            offset={scrollConfig.offset}
            duration={scrollConfig.duration}
            className='cursor-pointer'
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
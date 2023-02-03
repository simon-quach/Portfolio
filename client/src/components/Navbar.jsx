import { Link } from 'react-scroll';

// Configration for all React Scroll Animations
const scrollConfig = {
  spy: true,
  smooth: true,
  offset: 0,
  duration: 700
}

const Navbar = () => {
  return (
    <nav className='transition-all sticky top-0 h-[72px] w-full px-[40px] flex justify-center items-center bg-white shadow-sm z-10'>
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
        
        <div className='hidden md:flex items-center justify-center text-[16px] gap-[32px] relative'>
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
          <a href='/resume.pdf' target='_blank' className='cursor-pointer bg-[#1e72d9] hover:bg-[#3485e9] text-white px-4 py-2 rounded-lg'>
            Resume
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
import ProfilePicture from '../assets/pfp.jpg'

const About = () => {
  return (
    <div id='about' className='max-w-[1100px] w-full h-screen flex flex-col justify-center items-center gap-[48px]'>
      <div className='text-[80px] font-bold text-center cursor-default'>
        <div className=''>
          Hello, I'm
        </div>
        <div className='text-[#1e72d9]'>
          Simon Quach
        </div>
      </div>
      <div className='group relative rounded-[6rem]'>
        <div className='absolute bottom-[0px] left-[0px] transition-all duration-300 ease-in-out group-hover:bottom-[-32px] group-hover:left-[24px] w-[12rem] h-[12rem] rounded-[6rem] bg-[rgb(186,211,241)]'></div>
        <div className='absolute bottom-[0px] left-[0px] transition-all duration-300 ease-in-out group-hover:bottom-[-20px] group-hover:left-[20px] w-[12rem] h-[12rem] rounded-[6rem] bg-[rgb(146,189,243)]'></div>
        <div className='absolute bottom-[6px] left-[-6px] transition-all duration-300 ease-in-out group-hover:bottom-[-8px] group-hover:left-[10px] w-[12rem] h-[12rem] rounded-[6rem] bg-[#1e72d9]'></div>

        <div className='absolute bottom-[0px] left-[0px] transition-all duration-300 ease-in-out group-hover:bottom-[32px] group-hover:left-[-24px] w-[12rem] h-[12rem] rounded-[6rem] bg-[rgb(186,211,241)]'></div>
        <div className='absolute bottom-[0px] left-[0px] transition-all duration-300 ease-in-out group-hover:bottom-[20px] group-hover:left-[-20px] w-[12rem] h-[12rem] rounded-[6rem] bg-[rgb(146,189,243)]'></div>
        <div className='absolute bottom-[-6px] left-[6px] transition-all duration-300 ease-in-out group-hover:bottom-[8px] group-hover:left-[-10px] w-[12rem] h-[12rem] rounded-[6rem] bg-[#1e72d9]'></div>
        
        <img src={ProfilePicture} alt="profile-picture" className='w-[12rem] rounded-[6rem] relative'/>

      </div>
      <div className='text-[20px] text-[#718194]'>
        Frontend Developer
      </div>
      
    </div>
  )
}

export default About
import ProfilePicture from '../assets/pfp.jpg'

const Home = () => {
  return (
    <div id='home' className='w-full h-[calc(100vh-72px)] relative flex flex-col justify-center items-center gap-[48px] cursor-default text-center'>
      <div className='absolute w-[24px] h-[18rem] rounded-l-lg bg-[#1e72d9] bottom-[5%] right-0'></div>
      <div className='absolute w-[24px] h-[18rem] rounded-r-lg bg-[#1e72d9] top-[5%] left-0'></div> 
      
      <div className='text-[72px] md:text-[80px] font-bold text-[#1b1b1b]'>
        <div>
          Hello, I'm
        </div>
        <div className='text-[#1e72d9]'>
          Simon Quach
        </div>
      </div>
      <div className='group relative rounded-[6rem]'>
        <div className='absolute bottom-[0px] left-[0px] transition-all duration-300 ease-in-out group-hover:bottom-[-32px] group-hover:left-[24px] w-[12rem] h-[12rem] rounded-[6rem] bg-[#bad3f1]'></div>
        <div className='absolute bottom-[0px] left-[0px] transition-all duration-300 ease-in-out group-hover:bottom-[-20px] group-hover:left-[20px] w-[12rem] h-[12rem] rounded-[6rem] bg-[#92bdf3]'></div>
        <div className='absolute bottom-[6px] left-[-6px] transition-all duration-300 ease-in-out group-hover:bottom-[-8px] group-hover:left-[10px] w-[12rem] h-[12rem] rounded-[6rem] bg-[#1e72d9]'></div>

        <div className='absolute bottom-[0px] left-[0px] transition-all duration-300 ease-in-out group-hover:bottom-[32px] group-hover:left-[-24px] w-[12rem] h-[12rem] rounded-[6rem] bg-[#bad3f1]'></div>
        <div className='absolute bottom-[0px] left-[0px] transition-all duration-300 ease-in-out group-hover:bottom-[20px] group-hover:left-[-20px] w-[12rem] h-[12rem] rounded-[6rem] bg-[#92bdf3]'></div>
        <div className='absolute bottom-[-6px] left-[6px] transition-all duration-300 ease-in-out group-hover:bottom-[8px] group-hover:left-[-10px] w-[12rem] h-[12rem] rounded-[6rem] bg-[#1e72d9]'></div>
        
        <img src={ProfilePicture} alt="profile-picture" className='w-[12rem] rounded-[6rem] relative'/>

      </div>
      <div className='text-[20px] text-[#718194]'>
        Frontend Developer, Undergraduate
      </div>
      
    </div>
  )
}

export default Home
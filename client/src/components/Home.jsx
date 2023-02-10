import ProfilePicture from '../assets/pfp.jpg'
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div id='home' className='w-full h-[calc(100vh-72px)] relative flex flex-col justify-center items-center gap-[48px] cursor-default text-center'>
      <motion.div 
        className='absolute sm:block hidden w-[24px] h-[18rem] rounded-l-lg bg-[#1e72d9] bottom-[5%] right-0'
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0, transition: {
          type: "spring",
          bounce: 0,
          duration: 1.5,
          delay: 0.8
        } }}
        viewport={{ once: true }}
      ></motion.div>
      <motion.div 
        className='absolute sm:block hidden w-[24px] h-[18rem] rounded-r-lg bg-[#1e72d9] top-[5%] left-0'
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0, transition: {
          type: "spring",
          bounce: 0,
          duration: 1.5,
          delay: 0.6
        } }}
        viewport={{ once: true }}
      ></motion.div> 
      
      <div className='text-[40px] sm:text-[80px] font-bold text-[#1b1b1b]'>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0, transition: {
            type: "spring",
            bounce: 0,
            duration: 1.5,
            delay: 0
          } }}
          viewport={{ once: true }}
        >
          Hello, I'm
        </motion.div>
        <motion.div
          className='text-[#1e72d9]'
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0, transition: {
            type: "spring",
            bounce: 0,
            duration: 1.5,
            delay: 0.1
          } }}
          viewport={{ once: true }}
        >
          Simon Quach
        </motion.div>
      </div>
      <motion.div 
        className='group relative rounded-[6rem]'
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0, transition: {
          type: "spring",
          bounce: 0,
          duration: 1.5,
          delay: 0.2
        } }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className='absolute bottom-[0px] left-[0px] transition-all duration-300 ease-in-out group-hover:bottom-[-32px] group-hover:left-[24px] w-[12rem] h-[12rem] rounded-[6rem] bg-[#bad3f1]'></div>
        <div className='absolute bottom-[0px] left-[0px] transition-all duration-300 ease-in-out group-hover:bottom-[-20px] group-hover:left-[20px] w-[12rem] h-[12rem] rounded-[6rem] bg-[#92bdf3]'></div>
        <div className='absolute bottom-[6px] left-[-6px] transition-all duration-300 ease-in-out group-hover:bottom-[-8px] group-hover:left-[10px] w-[12rem] h-[12rem] rounded-[6rem] bg-[#1e72d9]'></div>

        <div className='absolute bottom-[0px] left-[0px] transition-all duration-300 ease-in-out group-hover:bottom-[32px] group-hover:left-[-24px] w-[12rem] h-[12rem] rounded-[6rem] bg-[#bad3f1]'></div>
        <div className='absolute bottom-[0px] left-[0px] transition-all duration-300 ease-in-out group-hover:bottom-[20px] group-hover:left-[-20px] w-[12rem] h-[12rem] rounded-[6rem] bg-[#92bdf3]'></div>
        <div className='absolute bottom-[-6px] left-[6px] transition-all duration-300 ease-in-out group-hover:bottom-[8px] group-hover:left-[-10px] w-[12rem] h-[12rem] rounded-[6rem] bg-[#1e72d9]'></div>
        
        <img src={ProfilePicture} alt="profile-picture" className='w-[12rem] rounded-[6rem] relative'/>
      </motion.div>
      <motion.div
        className='text-[16px] sm:text-[20px] text-[#718194] mb-[5rem]'
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0, transition: {
          type: "spring",
          bounce: 0,
          duration: 1.5,
          delay: 0.3
        } }}
        viewport={{ once: true }}
      >
        Frontend Developer, Undergraduate
      </motion.div>
    </div>
  )
}

export default Home
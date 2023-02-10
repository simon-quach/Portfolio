import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div id='contact' className='px-[10%] w-full h-auto pt-[100px] pb-[200px] text-center bg-[#1e72d9] text-[#f4f9ff]'>
      <motion.div
        className='flex flex-col justify-center items-center'
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0, transition: {
          type: "spring",
          bounce: 0,
          duration: 1.5,
          delay: 0.3
        } }}
        viewport={{ once: true }}
      >
        <div className="sm:text-[60px] text-[32px] font-bold">-Get In Touch-</div>
        <div className="text-[20px]">
          Do you have a great idea for a project or just want to say hello? Don't hesitate to reach out and send me a message!
        </div>
        <motion.a
          href='mailto: simonquach.tech@gmail.com' 
          target='_blank' 
          className='cursor-pointer bg-[#f4f9ff] text-[#1e72d9] px-4 py-2 rounded-lg shadow-md block mt-6 w-[9rem]'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send a message
        </motion.a>
        <div>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact
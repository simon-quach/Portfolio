import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <div id='skills' className='px-[10%] md:px-[15%] mt-[-150px] w-full h-auto text-center'>
      <motion.div 
      className='bg-white shadow-md rounded-lg text-[20px] px-[2rem] py-[4rem] flex flex-col justify-center items-center'
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0, transition: {
        type: "spring",
        bounce: 0,
        duration: 1.5,
        delay: 0.3
      } }}
      viewport={{ once: true }}
      >
        
        <div className='font-bold text-[32px] mb-[2rem]'>- Skills -</div>
        
        <div className='flex flex-col md:flex-row justify-around w-full gap-[2rem]'>

          <div className='flex flex-col items-center gap-[1rem]'>
            <div className="font-bold text-[24px]">
              Languages
            </div>
            <ul className='flex flex-col gap-[0.5rem]'>
              <li>Python</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>HTML/CSS</li>
              <li>Java</li>
              <li>C++</li>
              <li>C#</li>
            </ul>
          </div>

          <div className='flex flex-col items-center gap-[1rem]'>
            <div className="font-bold text-[24px]">
              Frameworks
            </div>
            <ul className='flex flex-col gap-[0.5rem]'>
              <li>ReactJS</li>
              <li>Bootstrap</li>
              <li>TailwindCSS</li>
              <li>Node.js</li>
              <li>Express.js</li>
            </ul>
          </div>

          <div className='flex flex-col items-center gap-[1rem]'>
            <div className="font-bold text-[24px]">
              Libraries
            </div>
            <ul className='flex flex-col gap-[0.5rem]'>
              <li>Tensorflow</li>
              <li>Mongoose</li>
              <li>Beautiful Soup</li>
              <li>OpenCV</li>
              <li>NumPy</li>
              <li>Matplotlib</li>
              <li>Pandas</li>
              <li>Selenium</li>
            </ul>
          </div>

          <div className='flex flex-col items-center gap-[1rem]'>
            <div className="font-bold text-[24px]">
              Other
            </div>
            <ul className='flex flex-col gap-[0.5rem]'>
              <li>Firebase</li>
              <li>Axios</li>
              <li>Bash</li>
              <li>Git</li>
              <li>MongoDB</li>
              <li>Vite</li>
              <li>Vercel</li>
              <li>discord.js</li>
              <li>Cloudinary</li>
            </ul>
          </div>

        </div>
      </motion.div>
    </div>
  )
}

export default Skills
import { motion } from 'framer-motion'

const Skills = () => {
  const languages = ['Python', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Java', 'C++', 'C#'];
  const frameworks = ['ReactJS', 'NextJS', 'Bootstrap', 'TailwindCSS', 'Node.js', 'Express.js'];
  const libraries = ['Tensorflow', 'Mongoose', 'Beautiful Soup', 'OpenCV', 'NumPy', 'Matplotlib', 'Pandas', 'Selenium'];
  const other = ['Firebase', 'Axios', 'Bash', 'Git', 'MongoDB', 'Vite', 'Vercel', 'discord.js'];

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
              {languages.map((language, index) => {
                return <li key={index}>{language}</li>
              })}
            </ul>
          </div>

          <div className='flex flex-col items-center gap-[1rem]'>
            <div className="font-bold text-[24px]">
              Frameworks
            </div>
            <ul className='flex flex-col gap-[0.5rem]'>
              {frameworks.map((framework, index) => {
                return <li key={index}>{framework}</li>
              })}
            </ul>
          </div>

          <div className='flex flex-col items-center gap-[1rem]'>
            <div className="font-bold text-[24px]">
              Libraries
            </div>
            <ul className='flex flex-col gap-[0.5rem]'>
              {libraries.map((library, index) => {
                return <li key={index}>{library}</li>
              })}
            </ul>
          </div>

          <div className='flex flex-col items-center gap-[1rem]'>
            <div className="font-bold text-[24px]">
              Other
            </div>
            <ul className='flex flex-col gap-[0.5rem]'>
              {other.map((item, index) => {
                return <li key={index}>{item}</li>
              })}
            </ul>
          </div>

        </div>
      </motion.div>
    </div>
  )
}

export default Skills
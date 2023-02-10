import { motion } from 'framer-motion'

const About = () => {
  return (
    <div id='about' className='px-[10%] w-full h-auto text-[#f4f9ff] pt-[100px] pb-[250px] flex flex-col justify-center bg-[#1e72d9]'>
      <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0, transition: {
        type: "spring",
        bounce: 0,
        duration: 1.5,
        delay: 0.3
      } }}
      viewport={{ once: true }}
      >
        <div className="text-[32px] font-bold">
          - About Me -
        </div>
        <br />
        <div className="text-[20px]">
          I'm a 1st year Mathematics student at <span className="font-bold">Orange Coast College</span>.
          I am expected to transfer to a four year university for Fall 2023!
          <br />
          <br />
          I started learning the basics of web development and Python in 2018, and recently began learning React in July of 2022.
          I am currently seeking Software Engineering internship positions for the Summer 2023!
          <br />
          <br />
          In my downtime, I like to produce music! I created my <a href="https://open.spotify.com/artist/3SMVcm2yTCliC2bm6hSdFr" target="_blank" className="font-bold bg-[#104d98] hover:bg-[#69a0e3] rounded-sm cursor-pointer">Spotify</a>
          and <a href="https://youtube.com/c/tropistact" target="_blank" className="font-bold bg-[#104d98] hover:bg-[#69a0e3] rounded-sm cursor-pointer">Youtube</a> accounts in 2017, originally creating melodic house music, but now I switched over to producing
          melodic dubstep.
        </div>
      </motion.div>
    </div>
  )
}

export default About
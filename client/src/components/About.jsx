const About = () => {
  return (
    <div id='about' className='px-[10%] w-full h-auto text-white pt-[100px] pb-[250px] flex flex-col justify-center bg-[#1e72d9]'>
      <div className="text-[32px] font-bold">- About Me -</div>
      <br />
      <div className="text-[20px]">
        I'm a 1st year Mathematics student at <span className="font-bold text-[#ffffff]">Orange Coast College</span>.
        I am expected to transfer to a four year university for Fall 2023!
        <br />
        <br />
        I started learning the basics of web development and Python in 2018, and recently began learning React in July of 2022.
        I am currently seeking Software Engineering internship positions for the Summer 2023!
        <br />
        <br />
        In my downtime, I like to produce music! I created my <a className="font-bold bg-[#104d98] hover:bg-[#69a0e3] rounded-sm cursor-pointer">Spotify</a>
        and <a target='_blank' className="font-bold bg-[#104d98] hover:bg-[#69a0e3] rounded-sm cursor-pointer">Youtube</a> accounts in 2017, originally creating melodic house music, but now I switched over to producing
        melodic dubstep.
      </div>
    </div>
  )
}

export default About
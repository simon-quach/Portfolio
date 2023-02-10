const ProjectCard = ({ title, subheading, technologies, description, image, github, link}) => {
  return (
    <a href={link} target="_blank" className="bg-white w-[100%] max-w-[1000px] h-auto flex flex-col lg:flex-row rounded-xl shadow-md cursor-pointer">
      <img src={image} alt="project-image" className="self-center w-auto h-auto max-w-[100%] lg:max-w-[60%] rounded-t-xl lg:rounded-l-xl" />
      <div className="w-[100%] px-[2rem] py-[1rem]">
        <div className="text-[#718194] text-[16px] font-semibold">{subheading}</div>
        <div className="text-[24px] font-bold">{title}</div>
        <div className="flex flex-wrap gap-2 text-[14px]">
          {technologies.map((technology, index) => (
            <div key={index} className="bg-[#1e72d9] px-1 text-white rounded-md">{technology}</div>
          ))}
        </div>
        <div className="mt-[1rem]">
          {description}
        </div>
      </div>
    </a>
  )
}

export default ProjectCard
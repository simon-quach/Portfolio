import { ProjectCard } from '.'
import { AiImageGenerator, GroupGroove, SearchThatRecipe, PaddyPlantPrognosis } from "../assets/project-pictures"

const projects = [
  {
    title: 'Group Groove',
    subheading: 'PERSONAL PROJECT',
    technologies: ["ReactJS", "TailwindCSS", "Express", "Node.js", "MongoDB", "iTunes API"],
    description: 'Group Groove strikes the perfect balance between crowd control and DJ control, resulting in a seamless and enjoyable musical experience for everyone.',
    image: GroupGroove,
    github: 'https://github.com/simon-quach/Group-Groove',
    link: 'https://group-groove.vercel.app/'
  },
  {
    title: 'Paddy Plant Prognosis',
    subheading: 'WINNER AT HACKRITHMITIC 2 (2023)',
    technologies: ["ReactJS", "TailwindCSS", "Flask", "TensorFlow", "Keras"],
    description: 'The revolutionary app that uses cutting-edge computer vision technology to help farmers quickly and accurately identify diseases in their paddy crops.',
    image: PaddyPlantPrognosis,
    github: 'https://github.com/simon-quach/PaddyPlantPrognosis',
    link: 'https://www.paddyplantprognosis.tech/'
  },
  {
    title: 'AI Image Generator',
    subheading: 'PERSONAL PROJECT',
    technologies: ["ReactJS", "TailwindCSS", "Express", "Node.js", "MongoDB", "Cloudinary", "DALL-E AI API"],
    description: 'Using the power of DALL-E AI from OpenAI, this application allows you to create your own images using your own prompts.',
    image: AiImageGenerator,
    github: 'https://github.com/simon-quach/ai-image-generation',
    link: 'https://ai-image-generation-inky.vercel.app/'
  },
  {
    title: 'Search That Recipe!',
    subheading: 'PERSONAL PROJECT',
    technologies: ["ReactJS", "JavaScript", "HTML/CSS", "Bootstrap", "Firebase", "Edamam API"],
    description: 'This web application uses a recipe search API from Edamam to search for over 2.3 million recipes.',
    image: SearchThatRecipe,
    github: 'https://github.com/simon-quach/search-that-recipe',
    link: 'https://search-that-recipe.web.app/'
  },
]

const Projects = () => {
  return (
    <div id='projects' className='px-[10%] w-full h-auto py-[100px] flex flex-col justify-center items-center'>
      <div className="text-[32px] font-bold">- Things I've Built -</div>
      <br />
      <div className="flex md:flex-row flex-col justify-center items-center flex-wrap w-full gap-4">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            title={project.title} 
            subheading={project.subheading} 
            technologies={project.technologies} 
            description={project.description}
            image={project.image}
            github={project.github}
            link={project.link}
            />
        ))}
      </div>
    </div>
  )
}

export default Projects
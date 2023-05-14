import { ProjectCard } from ".";
import {
  SinkOrSwim,
  AiImageGenerator,
  SearchThatRecipe,
  PaddyPlantPrognosis,
  GitPT,
  MonkeySign,
} from "../assets/project-pictures";
import { motion } from "framer-motion";

// Project information list
const projects = [
  {
    title: "GitPT",
    subheading: "WINNER AT UCSB SBHACK 2023",
    technologies: [
      "NextJS",
      "TypeScript",
      "Node.js",
      "Express",
      "OpenAI GPT-3",
      "GitHub API",
      "MongoDB",
    ],
    description: "Decoding Complex Codebases, One Chat at a Time",
    image: GitPT,
    github: "https://github.com/simon-quach/GitPT",
    link: "https://gitpt.simonpquach.com/",
  },
  {
    title: "MonkeySign",
    subheading: "WINNER AT UCR CITRUSHACK 2023",
    technologies: [
      "ReactJS",
      "TailwindCSS",
      "Flask",
      "Socket.io",
      "Tensorflow",
    ],
    description:
      "MonkeySign is an innovative, game-like platform designed to teach American Sign Language (ASL) in a fun and interactive manner.",
    image: MonkeySign,
    github: "https://github.com/simon-quach/MonkeySign",
    link: "https://monkeysign.simonpquach.com/",
  },
  {
    title: "Sink or Swim",
    subheading: "WINNER AT NOR CAL SPRING HACKS (2023)",
    technologies: [
      "NextJS",
      "TypeScript",
      "TailwindCSS",
      "Flask",
      "TensorFlow",
      "Keras",
      "OpenAI GPT-3",
    ],
    description:
      "Web application that combines machine learning and storytelling, utilizing a custom trained recurrent neural network to predict a user's chances of survival on the Titanic based on user inputted factors.",
    image: SinkOrSwim,
    github: "https://github.com/simon-quach/sink-or-swim",
    link: "https://sinkorswim.simonpquach.com/",
  },
  {
    title: "Paddy Plant Prognosis",
    subheading: "WINNER AT HACKRITHMITIC 2 (2023)",
    technologies: ["ReactJS", "TailwindCSS", "Flask", "TensorFlow", "Keras"],
    description:
      "The revolutionary app that uses cutting-edge computer vision technology to help farmers quickly and accurately identify diseases in their paddy crops.",
    image: PaddyPlantPrognosis,
    github: "https://github.com/simon-quach/PaddyPlantPrognosis",
    link: "https://www.paddyplantprognosis.tech.com/",
  },
  {
    title: "AI Image Generator",
    subheading: "PERSONAL PROJECT",
    technologies: [
      "ReactJS",
      "TailwindCSS",
      "Express",
      "Node.js",
      "MongoDB",
      "Cloudinary",
      "DALL-E AI API",
    ],
    description:
      "Using the power of DALL-E AI from OpenAI, this application allows you to create your own images using your own prompts.",
    image: AiImageGenerator,
    github: "https://github.com/simon-quach/ai-image-generation",
    link: "https://ai-image-generation-a7yzn20bq-simon-quach.vercel.app",
  },
  {
    title: "Search That Recipe!",
    subheading: "PERSONAL PROJECT",
    technologies: [
      "ReactJS",
      "JavaScript",
      "HTML/CSS",
      "Bootstrap",
      "Firebase",
      "Edamam API",
    ],
    description:
      "This web application uses a recipe search API from Edamam to search for over 2.3 million recipes.",
    image: SearchThatRecipe,
    github: "https://github.com/simon-quach/search-that-recipe",
    link: "https://search-that-recipe.web.app/",
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="px-[10%] w-full h-auto py-[100px] flex flex-col justify-center items-center"
    >
      <motion.div
        className="text-[32px] font-bold"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            bounce: 0,
            duration: 1.5,
            delay: 0.3,
          },
        }}
        viewport={{ once: true }}
      >
        - Things I've Built -
      </motion.div>
      <br />
      <div className="flex md:flex-row flex-col justify-center items-center flex-wrap w-full gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                bounce: 0,
                duration: 1.5,
                delay: 0.3,
              },
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
          >
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
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

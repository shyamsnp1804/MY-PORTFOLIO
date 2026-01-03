import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PageLoader from "../components/PageLoader";

const Projects = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built with React and Tailwind CSS, featuring dark mode and responsive design.",
      link: "#",
    },
    {
      title: "Task Manager App",
      desc: "A full-stack MERN application to manage daily tasks with JWT auth and CRUD operations.",
      link: "#",
    },
    {
      title: "Recipe Finder",
      desc: "Search recipes using external API with React, context, and search filtering.",
      link: "https://github.com/shyamsnp1804/Recipe-App-Veggie-Bite",
    },
  ];

  return (
    <>
      {loading && <PageLoader />}

      <motion.section
        className="min-h-screen px-6 py-24 
          bg-white text-black 
          dark:bg-gradient-to-b dark:from-[#0f0c29] dark:via-[#302b63] dark:to-[#24243e] dark:text-white
          transition-colors duration-500"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-4xl font-bold uppercase">Projects</h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto my-4 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg font-medium max-w-2xl mx-auto">
            A showcase of the projects I have worked on, highlighting my skills and experience in various technologies
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 dark:bg-[#1f1b3a] rounded-xl p-6 shadow-lg 
                hover:shadow-purple-300/50 dark:hover:shadow-purple-500/50 
                transition"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-pink-600 dark:text-pink-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default Projects;

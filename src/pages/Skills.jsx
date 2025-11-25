import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import PageLoader from "../components/PageLoader";
import { SkillsInfo } from "../constants/skills";

const Skills = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <PageLoader />}

      <motion.section
        id="skills"
        className="min-h-screen px-6 py-24 bg-white text-black dark:bg-gradient-to-b dark:from-[#0f0c29] dark:via-[#302b63] dark:to-[#24243e] dark:text-white transition-colors duration-300"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Title */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#8245ec]">
            SKILLS
          </h2>
          <div className="w-28 h-1 bg-[#8245ec] mx-auto mt-2 rounded"></div>
          <p className="text-gray-700 dark:text-gray-300 mt-4 text-lg max-w-2xl mx-auto font-medium">
            A collection of my technical skills and expertise honed through various projects and experiences
          </p>
        </motion.div>

        {/* Skill Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {SkillsInfo.map((category, index) => (
            <Tilt
              key={category.title}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.02}
              transitionSpeed={1000}
              gyroscope={true}
              className="w-full"
            >
              <motion.div
                className="bg-[#f9f9f9] dark:bg-[#121212] border border-[#8245ec3d] shadow-[0_0_20px_#8245ec50] rounded-2xl px-8 py-6 transition"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.2 }}
              >
                <h3 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-6">
                  {category.title}
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-full bg-white dark:bg-[#1a1a1a] hover:bg-gray-100 dark:hover:bg-[#262626] transition"
                    >
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                      />
                      <span className="text-sm sm:text-base text-gray-800 dark:text-gray-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Tilt>
          ))}
        </motion.div>
      </motion.section>
    </>
  );
};

export default Skills;

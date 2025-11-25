import { useEffect, useState } from "react";
import { education } from "../constants/education";
import PageLoader from "../components/PageLoader";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const Education = () => {
  const [loading, setLoading] = useState(true);
  const { darkMode } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <PageLoader />;

  return (
    <motion.section
      id="education"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`min-h-screen px-[12vw] md:px-[7vw] lg:px-[16vw] py-24 font-sans 
        ${
          darkMode
            ? "bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
            : "bg-white text-black"
        }`}
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="mt-4 text-lg font-semibold text-gray-500 dark:text-gray-300">
          My education has been a journey of learning and development.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-purple-400 h-full"></div>

        {education.map((edu, index) => (
         <motion.div
  key={edu.id}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: index * 0.2 }}
  viewport={{ once: true }}
  className={`relative flex flex-col sm:flex-row items-center mb-20 ${
    index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
  }`}
>
  {/* Timeline Circle */}
  <div
    className="absolute sm:left-1/2 left-[14px] transform sm:-translate-x-1/2 -translate-x-1/2 z-10"
    style={{ top: "0.5rem" }}
  >
    <div className="bg-white dark:bg-gray-800 border-4 border-purple-600 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center shadow-md overflow-hidden">
      <img
        src={edu.img}
        alt={edu.school}
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  </div>

  {/* Card */}
  <div
    className={`relative w-full sm:max-w-md p-6 sm:p-8 rounded-2xl shadow-lg border z-0
      ${
        darkMode
          ? "bg-gray-900 border-white text-gray-300"
          : "bg-gray-100 border-gray-300 text-gray-800"
      }
      shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105
      ${index % 2 === 0 ? "sm:ml-[60px]" : "sm:mr-[60px]"}
      mt-8 sm:mt-0`}
  >
    <h3 className="text-xl font-semibold">{edu.degree}</h3>
    <h4 className="text-sm">{edu.school}</h4>
    <p className="text-sm text-gray-400 dark:text-gray-500">{edu.date}</p>

    <p className="mt-4 font-bold">Grade: {edu.grade}</p>
    <p className="mt-2 text-sm">{edu.desc}</p>
  </div>
</motion.div>

        ))}
      </div>
    </motion.section>
  );
};

export default Education;

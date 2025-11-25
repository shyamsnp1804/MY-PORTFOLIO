import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import profileImg from "../assets/photosnp.jpg";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";


const Home = () => {
  return (
    <motion.section
      className="min-h-screen 
        bg-white text-black 
        dark:bg-gradient-to-b dark:from-[#0f0c29] dark:via-[#302b63] dark:to-[#24243e] dark:text-white 
        px-6 py-12 flex flex-col-reverse md:flex-row items-center justify-center gap-10 
        transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Left Content */}
      <motion.div
        className="max-w-xl"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Hey, I'm <span className="text-pink-500">Shyam Narayan Pandey</span>
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl font-semibold mb-6 text-purple-600 dark:text-purple-400"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Typewriter
            words={[
              "MERN Stack Developer",
              "Frontend Enthusiast",
              "Open Source Contributor",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.h2>

        <motion.p
          className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          I'm a <span className="text-blue-600 dark:text-blue-400">Computer Science Engineer</span> passionate about building performant, scalable, and visually appealing applications using <span className="text-blue-600 dark:text-blue-400">React, Node.js</span>, and modern tools.
        </motion.p>

        <motion.p
          className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          As an <span className="text-green-600 dark:text-green-400">open-source contributor</span>, I’m always striving to improve my skills through projects and challenges.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="/contact"
            className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-lg hover:scale-105 transition"
          >
            Let’s Build Together →
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-6 py-2 rounded-full border border-purple-500 text-purple-600 dark:text-purple-400 hover:bg-purple-500 hover:text-white transition"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex gap-6 text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="https://github.com/shyamsnp1804"
            target="_blank"
            className="hover:text-pink-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-blue-500"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="hover:text-cyan-400"
          >
            <FaTwitter />
          </a>
        </motion.div>
      </motion.div>

      {/* Right Profile Image */}
      <motion.div
        className="relative flex justify-center items-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        {/* Rotating Gradient Ring */}
        <motion.div
          className="absolute w-80 h-80 rounded-full border-[6px] border-transparent bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 animate-spin-slow"
          style={{
            backgroundClip: "padding-box",
            WebkitMaskImage: "radial-gradient(circle, white 60%, transparent 61%)",
            zIndex: 0,
          }}
        />

        {/* Pulsing Glow Behind */}
        <motion.div
          className="absolute w-72 h-72 rounded-full bg-pink-400 blur-2xl opacity-30"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ zIndex: 0 }}
        />

        {/* Profile Image */}
        <div className="w-72 h-72 rounded-full border-[10px] border-yellow-400 bg-white overflow-hidden shadow-[0_0_30px_#e879f9] relative z-10">
          <img src={profileImg} alt="Shyam" className="w-full h-full object-cover" />
        </div>
      </motion.div>
      
    </motion.section>
  );
};

export default Home;

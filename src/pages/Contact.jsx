import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PageLoader from "../components/PageLoader";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <PageLoader />}

      <motion.section
        className="relative min-h-screen px-6 py-24 bg-white text-black dark:bg-gradient-to-b dark:from-[#0f0c29] dark:via-[#302b63] dark:to-[#24243e] dark:text-white transition-colors duration-300"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {/* Heading */}
          <motion.h2
            className="text-4xl font-bold tracking-wide uppercase"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            CONTACT
          </motion.h2>

          {/* Underline */}
          <div className="w-24 h-1 bg-purple-500 mx-auto my-4 rounded-full"></div>

          {/* Subtitle */}
          <motion.p
            className="mb-12 text-lg font-semibold text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            I’d love to hear from you—reach out for any opportunities or questions!
          </motion.p>

          {/* Email Button */}
          <motion.a
            href="mailto:snp18032004@gmail.com"
            className="inline-block px-6 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105 transition mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Connect With Me 🚀
          </motion.a>

          {/* Social Links with Icons */}
          <motion.div
            className="flex justify-center gap-8 text-3xl text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <a
              href="https://github.com/shyamsnp1804"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 dark:hover:text-blue-300 transition"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Contact;

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PageLoader from "../components/PageLoader"; 

const Blog = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const blogs = [
    {
      title: "How I Built My Portfolio with React & Tailwind",
      summary:
        "In this post, I share my process and structure behind building a modern portfolio website using React, React Router, and Tailwind CSS.",
      link: "#",
    },
    {
      title: "Understanding the MERN Stack in 2024",
      summary:
        "This article breaks down each part of the MERN stack and how you can use them together to build scalable full-stack applications.",
      link: "#",
    },
    {
      title: "10 Tips to Ace Your Frontend Interviews",
      summary:
        "Here are the most effective techniques I used to crack frontend interviews — including topics to focus on and how to structure your answers.",
      link: "#",
    },
  ];

  return (
    <>
      {loading && <PageLoader />}

      <motion.section
        className="min-h-screen px-6 py-12 bg-white text-black dark:bg-gradient-to-b dark:from-[#0f0c29] dark:via-[#302b63] dark:to-[#24243e] dark:text-white transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-10 text-center text-pink-500"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My Blog
          </motion.h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-100 dark:bg-[#1f1b3a] p-6 rounded-xl shadow-lg hover:shadow-pink-500/50 transition"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.2 }}
              >
                <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-3">
                  {blog.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{blog.summary}</p>
                <a
                  href={blog.link}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Read More →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Blog;

import { motion } from "framer-motion";

const PageLoader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-[#0f0c29]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex space-x-2">
        {[...Array(3)].map((_, i) => (
          <motion.span
            key={i}
            className="w-4 h-4 rounded-full bg-pink-500 shadow-lg"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default PageLoader;

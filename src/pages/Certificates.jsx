import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PageLoader from '../components/PageLoader'; 

const certificates = [
  {
    title: 'React Developer Certification',
    issuer: 'Sheryians Coding School',
    date: 'May 2025',
    link: 'https://sheryians.com/certificates/verify/be69695a-c6a1-4b40-a412-9dfdf67ddcd9',
  },
  {
    title: 'Mern FullStack Web Development',
    issuer: 'Sheryians Coding School',
    date: 'March 2023',
    link: 'https://sheryians.com/certificates/verify/39dd7465-fbed-4cd0-bf90-104bc7ebdc02',
  },
  {
    title: 'Frontend Web Development',
    issuer: 'Udemy',
    date: 'January 2023',
    link: 'https://www.udemy.com/certificate/frontend-web',
  },
];

const Certificates = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <PageLoader />}

      <motion.div
        className="min-h-screen 
          bg-white text-black 
          dark:bg-gradient-to-b dark:from-[#0f0c29] dark:via-[#302b63] dark:to-[#24243e] dark:text-white 
          px-6 py-12 flex flex-col-reverse md:flex-row items-center justify-center gap-10 
          transition-colors duration-300"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="text-center mb-8 text-3xl md:text-4xl font-bold text-indigo-900 dark:text-indigo-200 tracking-wide">
            My Certificates
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-br from-slate-50 to-indigo-100 dark:from-[#23243a] dark:to-[#2e3260]
                  rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700
                  p-6 flex flex-col gap-2 transition-transform duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.2 }}
              >
                <h3 className="text-indigo-700 dark:text-indigo-300 text-lg font-semibold mb-1">
                  {cert.title}
                </h3>
                <p className="text-slate-700 dark:text-slate-200 text-sm mb-2">
                  <span className="font-semibold">Issuer:</span> {cert.issuer}
                  <br />
                  <span className="font-semibold">Date:</span> {cert.date}
                </p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-indigo-400 text-white rounded-lg font-semibold shadow-md hover:from-indigo-700 hover:to-indigo-500 transition-colors duration-200 text-sm"
                >
                  View Certificate
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Certificates;

"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center text-center py-20 text-white"
    >
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hi! I’m <span className="text-5xl font-bold">Sagarika</span>
      </motion.h1><br></br>

      <motion.h1
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Web Developer | UI/UX Designer | AI Enthusiast
      </motion.h1>

       <motion.p
        className="text-lg text-white-600 dark:text-white-300 max-w-xl mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        A passionate Web Developer dedicated to crafting responsive, user-friendly designs, while actively exploring the frontiers of AI and Machine Learning to build innovative digital experiences.
      </motion.p>

 <motion.div
        className="flex gap-6 mt-8 text-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <a
          href="https://linkedin.com/in/Sagarika Bhagat"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Sagarika311"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition"
        >
          <FaGithub />
        </a>
      </motion.div>
    </section>
  );
}

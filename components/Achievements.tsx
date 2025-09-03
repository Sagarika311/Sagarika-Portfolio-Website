"use client";
import { motion } from "framer-motion";
import { FaAward, FaCertificate, FaGoogleDrive } from "react-icons/fa";

export default function Achievements() {
  const achievements = [
    "Smart India Hackathon 2023 Finalist",
    "Google Cloud Certified – Cloud Digital Leader",
  ];

  const certifications = [
    "Generative AI: Introduction and Applications – IBM",
    "Machine Learning: Regression – University of Washington",
    "Python Data Visualization – Rice University",
    "Solving ML Regression Problems with AWS AutoGluon – Coursera Project Network",
    "Python for Data Science, AI & Development – IBM",
    "Introduction to Applied Machine Learning – Alberta Machine Intelligence Institute",
    "Programming Foundations with JavaScript, HTML and CSS – Duke University",
  ];

  return (
    <section
      id="achievements"
      className="py-16 px-6 bg-gray-900 flex justify-center rounded-3xl shadow-2xl"
    >
      <div>
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-white">
          Achievements & Certifications
        </h2>
        <br></br>
        {/* ✅ Google Drive Link Icon */}
        <div className="flex justify-center mt-4 mb-12">
          <a
            href="https://drive.google.com/drive/folders/1zDsMdksiBc9KdRmfn-E4O77nUNd4QzjD"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg shadow-md transition"
          >
            <FaGoogleDrive className="text-green-400 text-xl" />
            <span>View Certificates</span>
          </a>
        </div>

        {/* Achievements */}
        <motion.div
          className="mb-10 p-6 bg-gray-700 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-white">
            <FaAward className="text-yellow-400" /> Achievements
          </h3>
          <ul className="space-y-3 text-gray-200">
            {achievements.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 text-yellow-400">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="p-6 bg-gray-700 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-white">
            <FaCertificate className="text-blue-400" /> Certifications
          </h3>
          <ul className="space-y-3 text-gray-200">
            {certifications.map((cert, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 text-blue-400">•</span>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

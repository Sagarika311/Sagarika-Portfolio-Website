"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Chatbot for Customer Service",
      desc: "Chatbot built using Flask, OpenAI API, Pandas, NLTK, and Scikit-learn to provide natural language responses, supported by ML/NLP tools for data-driven query handling.",
      link: "https://github.com/Sagarika311/Chatbot-for-Customer-Service",
      tech: ["Flask", "OpenAI API", "Pandas", "NLP", "ML"],
    },
    {
      title: "Sentiment Analysis of Product Reviews",
      desc: "Classifies product reviews as positive or negative using Random Forest and NLP techniques with a Flask interface.",
      link: "https://github.com/Sagarika311/Sentiment-Analysis-of-Product-Reviews",
      tech: ["Flask", "Random Forest", "Pandas", "Numpy", "RegEx"],
    },
    {
      title: "Credit Card Fraud Detection",
      desc: "Detects fraudulent transactions using Random Forest, handling imbalanced datasets and analyzing correlations.",
      link: "https://github.com/Sagarika311/Credit-Card-Fraud-Detection-using-ML",
      tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
    },
    {
      title: "Spam Email Detector",
      desc: "Uses NLP and a Naive Bayes classifier to detect spam emails, improving security and reducing phishing risks.",
      link: "https://github.com/Sagarika311/Spam-Email-Detector",
      tech: ["Python", "Naive Bayes", "NLP", "Scikit-learn",  "NLTK"],
    },
  ];

  return (
    <section id="projects" className="py-16 px-6 bg-gray-900 rounded-3xl">
      <h2 className="text-3xl font-bold mb-12 text-center text-white">Projects</h2>
      <div className="rounded-6xl grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="p-6 rounded-3xl shadow-xl bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 hover:shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col justify-between"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-3 text-white">{p.title}</h3>
              <p className="text-gray-300 mb-5">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block px-6 py-2 text-white font-medium rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300 text-center"
            >
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

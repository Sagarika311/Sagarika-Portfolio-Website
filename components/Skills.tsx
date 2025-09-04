"use client";
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaFigma,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMysql,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiOpencv,
  SiTailwindcss,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiPostman,
  SiGooglecloud,
  SiJupyter,
  SiWordpress,
  SiMongodb,
  SiNextdotjs,
} from "react-icons/si";
import { MdOutlineDesignServices } from "react-icons/md";
import { VscVscode } from "react-icons/vsc";
import { MdOutlineScience } from "react-icons/md"; // Placeholder for Keras
import { SiExpress, SiStreamlit, SiDocker, SiNetlify,} from "react-icons/si";
import { SiPlotly } from "react-icons/si"; // used as proxy for Matplotlib
import { MdBrush } from "react-icons/md";
import { HiOutlinePresentationChartBar } from "react-icons/hi";
import { FiPenTool, FiLayout } from "react-icons/fi";

const categories = {
  Languages: [
    { name: "Java", icon: <FaJava className="text-red-600" /> },
    { name: "Python", icon: <FaPython className="text-yellow-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  ],
  "Web Frameworks & Libraries": [
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-700 dark:text-white" /> }, // add
    { name: "Django", icon: <SiDjango className="text-green-700" /> },
    { name: "Flask", icon: <SiFlask className="text-gray-700" /> },
    { name: "FastAPI", icon: <SiFastapi className="text-green-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
  ],
  "AI, Machine Learning & Data Science": [
    { name: "TensorFlow", icon: <SiTensorflow className="text-orange-400" /> },
    { name: "Keras", icon: <MdOutlineScience className="text-red-500" /> }, // Added with placeholder
    { name: "PyTorch", icon: <SiPytorch className="text-red-500" /> },
    { name: "Scikit-learn", icon: <SiScikitlearn className="text-yellow-500" /> },
    { name: "Pandas", icon: <SiPandas className="text-blue-400" /> },
    { name: "NumPy", icon: <SiNumpy className="text-blue-500" /> },
    // { name: "OpenCV", icon: <SiOpencv className="text-green-400" /> },
    { name: "Streamlit", icon: <SiStreamlit className="text-pink-600" /> }, // added
    { name: "Seaborn", icon: <MdOutlineScience className="text-cyan-600" /> }, // Added
    { name: "Matplotlib", icon: <SiPlotly className="text-blue-600" /> }, // Using Plotly icon as substitute Added
    // { name: "NLTK", icon: <MdOutlineScience className="text-green-700" /> }, // Added
  ],
  "UI/UX & Design": [
  { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
  { name: "Adobe XD", icon: <MdOutlineDesignServices className="text-pink-400" /> },
  // { name: "Sketch", icon: <MdBrush className="text-yellow-400" /> },
  { name: "Wireframing", icon: <FiLayout className="text-gray-400" /> },
  { name: "Prototyping", icon: <FiPenTool className="text-indigo-400" /> },
  { name: "User Research", icon: <HiOutlinePresentationChartBar className="text-green-500" /> },
],
  "Tools & Platforms": [
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-800 dark:text-white" /> },
    { name: "VSCode", icon: <VscVscode className="text-blue-500" /> },
    { name: "Jupyter Notebook", icon: <SiJupyter className="text-orange-500" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-600" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Docker", icon: <SiDocker className="text-blue-500" /> }, // added 
  ],
  "Cloud & CMS": [
    { name: "WordPress", icon: <SiWordpress className="text-blue-600" /> },
    { name: "Netlify", icon: <SiNetlify className="text-cyan-500" /> },// added
    { name: "GCP", icon: <SiGooglecloud className="text-blue-500" /> },
    { name: "AWS", icon: <FaAws className="text-yellow-500" /> },
  ],
};

export default function Skills() {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">Skills</h2>
      <div className="space-y-12">
        {Object.entries(categories).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-6 text-white">{category}</h3>
            <div className="flex flex-wrap gap-8">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  <div className="text-5xl mb-2 transition-transform duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-bold text-gray-200 dark:text-gray-300 transition-colors duration-300 group-hover:text-white">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

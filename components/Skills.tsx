"use client";

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
  SiExpress,
  SiStreamlit,
  SiDocker,
  SiNetlify,
  SiPlotly, // proxy for Matplotlib
} from "react-icons/si";
import { MdOutlineScience } from "react-icons/md"; // placeholder for Keras, Seaborn, NLTK

const skills = [
  {
    category: "Languages",
    items: [{ name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> }],
  },
  {
    category: "Databases",
    items: [{ name: "MySQL", icon: <SiMysql className="text-blue-600" /> }],
  },
  {
    category: "Machine Learning",
    items: [
      { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" /> },
      { name: "PyTorch", icon: <SiPytorch className="text-red-500" /> },
      { name: "Scikit-learn", icon: <SiScikitlearn className="text-yellow-500" /> },
      { name: "Pandas", icon: <SiPandas className="text-purple-500" /> },
      { name: "NumPy", icon: <SiNumpy className="text-blue-400" /> },
      { name: "OpenCV", icon: <SiOpencv className="text-green-500" /> },
      { name: "Matplotlib", icon: <SiPlotly className="text-pink-500" /> }, // proxy
      { name: "Seaborn", icon: <MdOutlineScience className="text-cyan-600" /> }, // placeholder
      { name: "NLTK", icon: <MdOutlineScience className="text-green-700" /> }, // placeholder
      { name: "Keras", icon: <MdOutlineScience className="text-red-600" /> }, // placeholder
    ],
  },
  {
    category: "Frameworks",
    items: [
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Django", icon: <SiDjango className="text-green-700" /> },
      { name: "Flask", icon: <SiFlask className="text-gray-600" /> },
      { name: "FastAPI", icon: <SiFastapi className="text-teal-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-black" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
    ],
  },
  {
    category: "Cloud & CMS",
    items: [
      { name: "Google Cloud", icon: <SiGooglecloud className="text-blue-400" /> },
      { name: "WordPress", icon: <SiWordpress className="text-blue-600" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      { name: "Streamlit", icon: <SiStreamlit className="text-pink-500" /> },
      { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
      { name: "Netlify", icon: <SiNetlify className="text-green-500" /> },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      { name: "Jupyter", icon: <SiJupyter className="text-orange-400" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-gray-900 to-black text-white" id="skills">
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {skills.map((skillCategory) => (
          <div key={skillCategory.category} className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">{skillCategory.category}</h3>
            <ul className="space-y-3">
              {skillCategory.items.map((skill) => (
                <li key={skill.name} className="flex items-center space-x-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

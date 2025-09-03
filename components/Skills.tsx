"use client";
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaFigma,
} from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiTypescript,
  SiMysql,
  SiTensorflow,
  SiPytorch,
  SiKeras,
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
  SiAdobexd,
  SiSketch,
  SiMongodb,
  SiNextdotjs,
  SiSass
} from "react-icons/si";
import { MdOutlineDesignServices } from "react-icons/md";
import { VscVscode } from "react-icons/vsc";

const categories = {
  Languages: [
    /*{ name: "C", icon: <SiC className="text-blue-600" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },*/
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
  { name: "Django", icon: <SiDjango className="text-green-700" /> },
  { name: "Flask", icon: <SiFlask className="text-gray-700" /> },
  { name: "FastAPI", icon: <SiFastapi className="text-green-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
  /*{ name: "Sass", icon: <SiSass className="text-pink-500" /> },   
  { name: "PHP", icon: <FaPhp className="text-indigo-500" /> },
  { name: "Keras", icon: <SiKeras className="text-red-400" /> },
  { name: "Matplotlib", icon: <MdOutlineDesignServices className="text-pink-400" /> },
  { name: "Seaborn", icon: <MdOutlineDesignServices className="text-teal-400" /> },
  { name: "NLTK", icon: <MdOutlineDesignServices className="text-purple-500" /> },*/
],
  "AI, Machine Learning & Data Science": [
  { name: "TensorFlow", icon: <SiTensorflow className="text-orange-400" /> },
  { name: "PyTorch", icon: <SiPytorch className="text-red-500" /> },
  { name: "Scikit-learn", icon: <SiScikitlearn className="text-yellow-500" /> },
  { name: "Pandas", icon: <SiPandas className="text-blue-400" /> },
  { name: "NumPy", icon: <SiNumpy className="text-blue-500" /> },
  { name: "OpenCV", icon: <SiOpencv className="text-green-400" /> },
  ],
  "UI/UX & Design": [
    { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
    { name: "Adobe XD", icon: <SiAdobexd className="text-pink-400" /> },
    { name: "Wireframing", icon: <MdOutlineDesignServices className="text-gray-400" /> },
    { name: "Prototyping", icon: <MdOutlineDesignServices className="text-indigo-400" /> },
    /*{ name: "Sketch", icon: <SiSketch className="text-yellow-400" /> },
    { name: "User Research", icon: <MdOutlineDesignServices className="text-blue-400" /> },*/
  ],
  "Tools & Platforms": [
  { name: "Git ", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "GitHub ", icon: <FaGithub className="text-gray-800 dark:text-white" /> },
  { name: "VSCode ", icon: <VscVscode className="text-blue-500" /> },
  { name: "Jupyter Notebook ", icon: <SiJupyter className="text-orange-500" /> },
  { name: "Postman ", icon: <SiPostman className="text-orange-600" /> },
  { name: "MySQL ", icon: <SiMysql className="text-blue-700" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> }, 
],
  " ": [  
  { name: "WordPress", icon: <SiWordpress className="text-blue-600" /> },
  { name: "GCP", icon: <SiGooglecloud className="text-blue-500" /> },
  { name: "AWS", icon: <FaAws className="text-yellow-500" /> },]
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
                  <div className="text-5xl mb-2 transition-transform transform group-hover:scale-125">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-bold text-black-700 dark:text-black-300">
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


/*export default function Skills() {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">Skills</h2>
      { }
      <div className="p-6 border rounded-2xl shadow-md bg-white dark:bg-gray-800">
    <div className="space-y-12">
      {Object.entries(categories).map(([category, skills]) => (
        <div key={category}>
          <h3 className="text-xl font-semibold mb-6 border-b pb-2">{category}</h3>
          <div className="flex flex-wrap gap-8">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="text-5xl mb-2 transition-transform transform group-hover:scale-125">
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}*/

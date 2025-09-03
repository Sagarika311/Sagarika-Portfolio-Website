export default function Resume() {
  return (
    <section id="resume" className="py-16 text-center text-white">
      <h2 className="text-3xl font-bold mb-4 text-white">Resume</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6 text-white">
        You can view or download my detailed CV below.
      </p>
      <div className="flex gap-4 justify-center">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl shadow-lg 
                     hover:from-green-600 hover:to-green-700 hover:scale-105 transform transition-all duration-300"
        >
          View Resume
        </a>
        <a
          href="/resume.pdf"
          download
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg 
                     hover:from-blue-600 hover:to-blue-700 hover:scale-105 transform transition-all duration-300"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

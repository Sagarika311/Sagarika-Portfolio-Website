import { FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-16 text-center text-white">
      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6 text-white">
        I’m open to collaborations, new opportunities, or a friendly conversation. Let’s connect!
      </p>

      {/* Contact Button */}
      <a
        href="/contact"
        className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg 
                   hover:from-blue-600 hover:to-blue-700 hover:scale-105 transform transition-all duration-300"
      >
        <FaEnvelope className="text-lg" />
        Contact Me
      </a>
    </section>
  );
}

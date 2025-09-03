"use client";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-6 text-white bg-black/40 fixed top-0 left-0 w-full z-50 backdrop-blur-md">
      <h1 className="text-2xl font-bold">Developed by Sagarika</h1>

      <div className="flex gap-6 items-center font-serif">
        {/* Resume direct link */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          <b>Resume</b>
        </a>

        {/* Contact direct link */}
        <a href="/contact" className="hover:underline">
          <b>Contact</b>
        </a>
      </div>
    </nav>
  );
}

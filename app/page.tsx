import Navbar from "@/components/Navbar"; 
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/footer";
import FloatingSticker from "@/components/FloatingSticker";

export default function Home() {
  return (
    <>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-20"
      >
        <source src="/background1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional Overlay for better text visibility */}
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>

      {/* Main Content */}
      <main className="relative max-w-5xl mx-auto px-6 z-10">
        <Navbar /><br></br>
        <Hero />
        <Projects />
        <Skills />
        <Achievements />
        <Resume />
        <Contact />

        {/* Sticker */}
       // <FloatingSticker />
      
      </main>

      {/* Footer */}
  <Footer />
    </>
  );
}

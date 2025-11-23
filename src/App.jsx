import { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { profile } from "./data/profile";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import AnimatedBackground from "./components/AnimatedBackground";

function App() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    
    const handleMouseMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen text-slate-50 dark:text-slate-50 text-slate-900 
                      transition-colors duration-300">
        {/* INTERACTIVE BACKGROUND */}
        <AnimatedBackground mouse={mouse} />

        <div className="relative z-10">
          <Navbar />

          <main className="snap-y snap-mandatory h-screen overflow-y-scroll relative z-10">
            <section id="home" className="snap-start min-h-screen flex items-center">
              <Hero profile={profile} />
            </section>

            <section id="about" className="snap-start min-h-screen flex items-center">
              <About profile={profile} />
            </section>

            <section id="experience" className="snap-start min-h-screen flex items-center">
              <Experience experience={profile.experience} />
            </section>

            <section id="projects" className="snap-start min-h-screen flex items-center">
              <Projects projects={profile.projects} />
            </section>

            <section id="achievements" className="snap-start min-h-screen flex items-center">
              <Achievements achievements={profile.achievements} />
            </section>

            <section id="contact" className="snap-start min-h-screen flex items-center">
              <Contact profile={profile} />
            </section>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Profiles from "@/components/Profiles";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--background)", color: "var(--foreground)" }}>
      <CustomCursor />
      <Navbar />
      
      <div style={{ display: "flex", flexDirection: "column", gap: "6rem", paddingBottom: "5rem" }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Profiles />
        <Contact />
      </div>

      <footer style={{ 
        textAlign: "center", 
        padding: "1.5rem 0", 
        fontSize: "0.875rem", 
        color: "#888", 
        borderTop: "1px solid var(--glass-border)", 
        backgroundColor: "rgba(5,5,5,0.8)", 
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)"
      }}>
        <p>© {new Date().getFullYear()} Krishan Roy. Built with Next.js, Framer Motion & Three.js.</p>
      </footer>
    </main>
  );
}

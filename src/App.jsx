import { Suspense, lazy, useEffect, useMemo, useState } from "react";
import AnimatedBackground from "./components/AnimatedBackground";
import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
import LoadingShell from "./components/LoadingShell";
import ScrollProgress from "./components/ScrollProgress";
import { navItems } from "./data/portfolio";
import { useScrollSpy } from "./hooks/useScrollSpy";
import Hero from "./sections/Hero";

const About = lazy(() => import("./sections/About"));
const Projects = lazy(() => import("./sections/Projects"));
const Journey = lazy(() => import("./sections/Journey"));
const Skills = lazy(() => import("./sections/Skills"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sectionIds = useMemo(() => navItems.map((item) => item.href.slice(1)), []);
  const { activeSection, isSticky } = useScrollSpy(sectionIds);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isMenuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isMenuOpen]);

  useEffect(() => {
    const closeOnWideScreen = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeOnWideScreen);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("resize", closeOnWideScreen);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <div className="page-shell">
      <AnimatedBackground />
      <div className="noise-overlay" />
      <ScrollProgress />
      <CustomCursor />
      <Header
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        isSticky={isSticky}
        onCloseMenu={() => setIsMenuOpen(false)}
        onToggleMenu={() => setIsMenuOpen((current) => !current)}
      />

      <main className="relative z-10">
        <Hero />
        <Suspense fallback={<LoadingShell />}>
          <About />
          <Projects />
          <Journey />
          <Skills />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}

import { useEffect, useState } from "react";

export function useScrollSpy(ids, offset = 180) {
  const [activeSection, setActiveSection] = useState(ids[0] ?? "");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const updateFromScroll = () => {
      setIsSticky(window.scrollY > 80);

      const scrollPosition = window.scrollY + offset;
      const currentSection = ids.find((id) => {
        const section = document.getElementById(id);
        if (!section) return false;

        return (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        );
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    updateFromScroll();
    window.addEventListener("scroll", updateFromScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateFromScroll);
  }, [ids, offset]);

  return { activeSection, isSticky };
}

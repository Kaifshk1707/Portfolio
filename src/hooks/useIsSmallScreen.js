import { useEffect, useState } from "react";

const smallScreenQuery = "(max-width: 639px)";

export function useIsSmallScreen() {
  const [isSmallScreen, setIsSmallScreen] = useState(() =>
    typeof window === "undefined" ? false : window.matchMedia(smallScreenQuery).matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(smallScreenQuery);
    const updateScreenSize = () => setIsSmallScreen(mediaQuery.matches);

    updateScreenSize();
    mediaQuery.addEventListener("change", updateScreenSize);

    return () => mediaQuery.removeEventListener("change", updateScreenSize);
  }, []);

  return isSmallScreen;
}

import { useEffect, useState } from "react";

export function useTypedText(words, pause = 1300) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const isComplete = !isDeleting && charIndex === currentWord.length;
    const isEmpty = isDeleting && charIndex === 0;
    const delay = isComplete ? pause : isDeleting ? 34 : 58;

    const timer = window.setTimeout(() => {
      if (isComplete) {
        setIsDeleting(true);
        return;
      }

      if (isEmpty) {
        setIsDeleting(false);
        setWordIndex((current) => (current + 1) % words.length);
        return;
      }

      setCharIndex((current) => current + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [charIndex, isDeleting, pause, wordIndex, words]);

  return words[wordIndex].slice(0, charIndex);
}

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 160, damping: 28 });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[80] h-1 origin-left bg-gradient-to-r from-neon via-mint to-acid shadow-[0_0_20px_rgba(57,255,136,0.7)]"
      style={{ scaleX, width: "100%" }}
    />
  );
}

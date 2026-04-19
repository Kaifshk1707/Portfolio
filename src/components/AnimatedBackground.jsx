import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useIsSmallScreen } from "../hooks/useIsSmallScreen";

const particles = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  size: 3 + (index % 5) * 2,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 53) % 100}%`,
  delay: (index % 6) * 0.45,
}));

export default function AnimatedBackground() {
  const isSmallScreen = useIsSmallScreen();
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 24]);
  const backgroundMotion = shouldReduceMotion || isSmallScreen ? undefined : { y, rotate };
  const visibleParticles = isSmallScreen ? [] : particles;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute inset-[-10%] bg-[radial-gradient(circle_at_30%_20%,rgba(57,255,136,0.14),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(24,213,176,0.12),transparent_26%),linear-gradient(135deg,#030907,#07110f_45%,#010302)] sm:inset-[-20%]"
        style={backgroundMotion}
      />
      <div className="absolute inset-0 bg-hero-grid bg-[length:64px_64px] opacity-[0.1] sm:opacity-[0.16]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,9,7,0.34)_58%,#030907_100%)]" />

      {visibleParticles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-neon shadow-[0_0_22px_rgba(57,255,136,0.75)]"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.left,
            top: particle.top,
          }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [0, -36, 0],
                  opacity: [0.16, 0.72, 0.16],
                  scale: [1, 1.45, 1],
                }
          }
          transition={{
            duration: 5 + (particle.id % 5),
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

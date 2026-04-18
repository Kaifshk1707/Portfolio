import { motion } from "framer-motion";
import { useMousePosition } from "../hooks/useMousePosition";

export default function CustomCursor() {
  const { x, y, active } = useMousePosition();

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-4 w-4 rounded-full bg-neon mix-blend-difference md:block"
        animate={{ x: x - 8, y: y - 8, opacity: active ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 520, damping: 36, mass: 0.4 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[89] hidden h-24 w-24 rounded-full border border-neon/30 bg-neon/5 blur-[1px] md:block"
        animate={{ x: x - 48, y: y - 48, opacity: active ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 28, mass: 0.7 }}
      />
    </>
  );
}

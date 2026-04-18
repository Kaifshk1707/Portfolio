import { motion } from "framer-motion";

export default function SectionHeader({ eyebrow, title, highlight, description }) {
  return (
    <motion.div
      className="mx-auto mb-14 max-w-3xl text-center"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="mb-4 text-xs font-black uppercase tracking-[0.42em] text-neon/80">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
        {title} <span className="gradient-text">{highlight}</span>
      </h2>
      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-smoke sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}

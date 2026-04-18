import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="section-inner">
        <SectionHeader
          eyebrow="Selected Work"
          title="Projects"
          highlight="that shipped"
          description="Mobile applications across social, messaging, e-commerce, utility, and management workflows."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-card card-grid neon-border group relative min-h-[25rem] overflow-hidden rounded-[28px] bg-white/[0.055] p-7 shadow-glass backdrop-blur-2xl"
              initial={{ opacity: 0, y: 44, rotateX: -8, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.72, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -12, scale: 1.018, rotateX: 2, rotateY: index % 2 === 0 ? -2 : 2 }}
            >
              <span className="absolute left-7 right-7 top-0 h-px bg-gradient-to-r from-transparent via-neon/80 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              <span className="absolute bottom-7 left-7 h-8 w-8 rounded-bl-2xl border-b border-l border-neon/0 transition duration-500 group-hover:border-neon/60" />
              <span className="absolute right-7 top-7 h-8 w-8 rounded-tr-2xl border-r border-t border-neon/0 transition duration-500 group-hover:border-neon/60" />
              <div className="relative z-10">
                <div className="mb-8 flex items-center justify-between">
                  <motion.div
                    className="grid h-16 w-16 place-items-center rounded-3xl bg-neon text-3xl text-ink shadow-glow"
                    whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
                    transition={{ duration: 0.45 }}
                  >
                    <i className={`bx ${project.icon}`} />
                  </motion.div>
                  <span className="text-xs font-black uppercase tracking-[0.28em] text-neon/70">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-black text-white">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-smoke">{project.description}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.stack.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-bold text-smoke"
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.18 + techIndex * 0.04 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              <motion.div
                className="absolute -bottom-20 -right-16 h-48 w-48 rounded-full bg-neon/10 blur-3xl transition group-hover:bg-neon/20"
                animate={{ scale: [1, 1.16, 1], opacity: [0.55, 0.9, 0.55] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import { skillGroups } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="section-inner">
        <SectionHeader
          eyebrow="Skill System"
          title="Built around"
          highlight="mobile craft"
          description="Focused skills for performance, UI quality, state management, and production delivery."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              className="skill-card relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.055] p-7 shadow-glass backdrop-blur-2xl"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: groupIndex * 0.08 }}
            >
              <div className="relative z-10 mb-8 flex items-center gap-4">
                <div className="grid h-16 w-16 place-items-center rounded-3xl bg-neon text-3xl text-ink shadow-glow">
                  <i className={`bx ${group.icon}`} />
                </div>
                <h3 className="font-display text-2xl font-black text-white">{group.title}</h3>
              </div>

              <div className="relative z-10 grid gap-6">
                {group.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between">
                      <p className="font-bold text-white">{skill.name}</p>
                      <p className="text-sm font-black text-neon">{skill.level}%</p>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-neon to-acid shadow-glow"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.15 + index * 0.08 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

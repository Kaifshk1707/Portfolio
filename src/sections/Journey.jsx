import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import { journeySteps } from "../data/portfolio";

export default function Journey() {
  return (
    <section id="journey" className="section-padding relative">
      <div className="section-inner">
        <SectionHeader
          eyebrow="My Journey"
          title="Growth through"
          highlight="real builds"
          description="A cleaner story of education, internship, professional projects, and skill evolution."
        />

        <div className="relative">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-white/10 lg:block" />
          <motion.div
            className="absolute left-5 top-0 hidden w-px bg-gradient-to-b from-neon via-mint to-transparent lg:block"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="grid gap-6">
            {journeySteps.map((step, index) => (
              <motion.article
                key={step.title}
                className="journey-card card-grid group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.055] p-6 shadow-glass backdrop-blur-2xl lg:ml-16 lg:grid lg:grid-cols-[0.5fr_1fr_0.45fr] lg:items-center lg:gap-8"
                initial={{ opacity: 0, x: index % 2 === 0 ? -38 : 38, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                whileHover={{ x: 8, borderColor: "rgba(57,255,136,0.42)" }}
              >
                <motion.span
                  className="absolute -left-[4.35rem] top-8 hidden h-10 w-10 rounded-full border border-neon/30 bg-ink shadow-glow lg:grid lg:place-items-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 240, damping: 18, delay: 0.15 + index * 0.08 }}
                >
                  <motion.span
                    className="h-3 w-3 rounded-full bg-neon"
                    animate={{ scale: [1, 1.55, 1], opacity: [1, 0.45, 1] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: index * 0.25 }}
                  />
                </motion.span>
                <div className="relative z-10">
                  <p className="text-xs font-black uppercase tracking-[0.32em] text-neon">{step.eyebrow}</p>
                  <h3 className="mt-3 font-display text-3xl font-black text-white">{step.title}</h3>
                </div>
                <p className="relative z-10 mt-5 text-base leading-8 text-smoke lg:mt-0">
                  {step.description}
                </p>
                <div className="relative z-10 mt-6 lg:mt-0">
                  <p className="mb-3 text-sm font-black uppercase tracking-[0.24em] text-acid">
                    {step.period}
                  </p>
                  <div className="h-3 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-neon to-acid shadow-glow"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${step.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.08 }}
                    />
                  </div>
                  <p className="mt-2 text-right text-xs font-black text-neon">{step.progress}%</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

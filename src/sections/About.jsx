import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import profileImage from "../../assets/image/home.jpg";
import SectionHeader from "../components/SectionHeader";
import { aboutParagraphs } from "../data/portfolio";

const profileBadges = [
  { label: "3+ Years", className: "-left-6 top-10" },
  { label: "RN Dev", className: "-right-5 top-28" },
  { label: "Mobile UI", className: "bottom-24 -left-7" },
];

export default function About() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 24 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 24 });
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-7, 7]);
  const imageX = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const imageY = useTransform(smoothY, [-0.5, 0.5], [-8, 8]);

  const handleProfileMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    mouseY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const resetProfileMove = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="about" className="section-padding relative">
      <div className="section-inner">
        <SectionHeader
          eyebrow="About Me"
          title="Mobile apps with"
          highlight="polished motion"
          description="Real-world mobile work, clean architecture, and product thinking in one profile."
        />

        <div className="grid items-center gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <motion.div
            className="relative mx-auto w-full max-w-md"
            style={{ y }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="profile-frame relative"
              style={{ rotateX, rotateY, transformPerspective: 1100 }}
              onPointerMove={handleProfileMove}
              onPointerLeave={resetProfileMove}
              whileHover={{ scale: 1.015 }}
              transition={{ type: "spring", stiffness: 160, damping: 22 }}
            >
              <div className="absolute -inset-7 rounded-[42px] bg-[conic-gradient(from_180deg,rgba(57,255,136,0.38),transparent,rgba(199,255,71,0.32),transparent,rgba(57,255,136,0.38))] opacity-60 blur-2xl" />
              <motion.div
                className="absolute -inset-3 rounded-[36px] border border-neon/30"
                animate={{ rotate: [0, 1.5, 0, -1.5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute -left-5 top-10 h-28 w-3 rounded-full bg-neon shadow-glow" />
              <div className="absolute -bottom-5 right-10 h-3 w-32 rounded-full bg-acid/80 shadow-[0_0_28px_rgba(199,255,71,0.45)]" />

              {profileBadges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  className={`absolute z-20 hidden rounded-2xl border border-white/10 bg-ink/80 px-4 py-3 text-xs font-black uppercase tracking-[0.2em] text-neon shadow-glass backdrop-blur-xl sm:block ${badge.className}`}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3.8 + index * 0.45,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.28,
                  }}
                >
                  {badge.label}
                </motion.div>
              ))}

              <div className="profile-shell card-grid relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.055] p-4 shadow-glass backdrop-blur-2xl">
                <span className="profile-corner left-4 top-4 border-l border-t" />
                <span className="profile-corner right-4 top-4 border-r border-t" />
                <span className="profile-corner bottom-4 left-4 border-b border-l" />
                <span className="profile-corner bottom-4 right-4 border-b border-r" />

                <div className="relative overflow-hidden rounded-[24px] bg-ink">
                  <motion.img
                    src={profileImage}
                    alt="Shaikh Kaif"
                    className="h-[32rem] w-full object-cover object-center contrast-[1.05] saturate-[0.9]"
                    loading="lazy"
                    style={{
                      x: imageX,
                      y: imageY,
                      scale: 1.06,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-neon/5" />
                  <motion.div
                    className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/10 to-transparent"
                    animate={{ y: [-90, 420] }}
                    transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.2 }}
                  />
                </div>

                <div className="relative z-10 mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-ink/70 px-4 py-3">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.22em] text-white">
                      Shaikh Kaif
                    </p>
                    <p className="mt-1 text-xs font-bold text-smoke">React Native Developer</p>
                  </div>
                  <span className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-neon">
                    <span className="h-2 w-2 rounded-full bg-neon shadow-glow" />
                    Online
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className="grid gap-5">
            {aboutParagraphs.map((paragraph, index) => (
              <motion.p
                key={paragraph}
                className="glass-card p-6 text-base leading-8 text-smoke sm:text-lg"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

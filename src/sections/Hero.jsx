import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import resumePdf from "../../assets/Shaikh_Kaif.pdf";
import MagneticButton from "../components/MagneticButton";
import { heroStats, marqueeItems, socialLinks, techIcons } from "../data/portfolio";
import { useTypedText } from "../hooks/useTypedText";

const typedWords = [
  "React Native Developer | Mobile UI Specialist",
  "Scalable Mobile App Builder",
  "Performance-focused UI Engineer",
];

const heroLines = ["Hi, I'm", "Shaikh Kaif"];
const craftNotes = ["Production Apps", "Smooth UI", "Scalable Architecture"];

export default function Hero() {
  const typedText = useTypedText(typedWords);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 90, damping: 22 });
  const smoothY = useSpring(mouseY, { stiffness: 90, damping: 22 });
  const orbX = useTransform(smoothX, [-0.5, 0.5], [-28, 28]);
  const orbY = useTransform(smoothY, [-0.5, 0.5], [-22, 22]);
  const textX = useTransform(smoothX, [-0.5, 0.5], [14, -14]);
  const textY = useTransform(smoothY, [-0.5, 0.5], [10, -10]);

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    mouseY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  return (
    <section
      id="home"
      className="section-padding relative flex min-h-screen items-center overflow-hidden pt-32"
      onPointerMove={handlePointerMove}
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_35%,rgba(57,255,136,0.14),transparent_34%),linear-gradient(115deg,rgba(57,255,136,0.08),transparent_42%)]" />
      <div className="hero-scanline absolute inset-x-0 top-0 z-[1] h-px bg-gradient-to-r from-transparent via-neon to-transparent opacity-70" />
      <motion.div
        className="absolute right-[-10rem] top-24 h-[34rem] w-[34rem] rounded-full border border-neon/20 bg-neon/10 blur-2xl"
        style={{ x: orbX, y: orbY }}
      />

      <div className="section-inner relative z-10 grid items-center gap-14 lg:grid-cols-[1.04fr_0.96fr]">
        <motion.div
          style={{ x: textX, y: textY }}
          initial={{ opacity: 0, y: 42 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="chip mb-6 inline-flex"
            initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            Available for mobile app roles
          </motion.div>
          <h1 className="font-display text-5xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-7xl lg:text-8xl">
            {heroLines.map((line, index) => (
              <span className="block overflow-hidden pb-2" key={line}>
                <motion.span
                  className={index === 1 ? "gradient-text inline-block" : "inline-block"}
                  initial={{ y: "110%", rotateX: -35, filter: "blur(8px)" }}
                  animate={{ y: 0, rotateX: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.9,
                    delay: 0.18 + index * 0.13,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
          <p className="mt-7 min-h-9 text-xl font-bold text-neon sm:text-2xl">
            {typedText}
            <span className="ml-1 inline-block h-6 w-0.5 translate-y-1 bg-acid" />
          </p>
          <motion.p
            className="mt-7 max-w-2xl text-lg leading-9 text-smoke"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.54 }}
          >
            I build smooth, scalable, production-ready mobile applications with React Native,
            TypeScript, Firebase, Redux Toolkit, and performance-first UI architecture.
          </motion.p>

          <motion.div
            className="mt-7 flex flex-wrap gap-3"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.09, delayChildren: 0.66 } },
            }}
          >
            {craftNotes.map((note) => (
              <motion.span
                key={note}
                className="rounded-full border border-neon/20 bg-neon/[0.06] px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-neon/85"
                variants={{
                  hidden: { opacity: 0, y: 14, scale: 0.92 },
                  show: { opacity: 1, y: 0, scale: 1 },
                }}
              >
                {note}
              </motion.span>
            ))}
          </motion.div>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <MagneticButton href="#projects">View Projects</MagneticButton>
            <MagneticButton href={resumePdf} download="Shaikh_Kaif_Resume" variant="ghost">
              Download Resume
            </MagneticButton>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass-card group relative overflow-hidden rounded-3xl p-4"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon/70 to-transparent opacity-0 transition group-hover:opacity-100" />
                <p className="text-3xl font-black text-white">{stat.value}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-smoke">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-orbit relative mx-auto grid aspect-square w-full max-w-[38rem] place-items-center"
          initial={{ opacity: 0, scale: 0.88, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="absolute inset-8 rounded-full border border-neon/20 bg-white/[0.035] shadow-glass backdrop-blur-2xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-2 rounded-full border border-dashed border-neon/15"
            animate={{ rotate: [0, 18, 0], scale: [1, 1.025, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-20 rounded-full border border-acid/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.i
            className="bx bxl-react relative z-10 text-[13rem] text-neon drop-shadow-[0_0_34px_rgba(57,255,136,0.42)] sm:text-[17rem]"
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />

          {techIcons.map((item, index) => (
            <motion.div
              key={item.label}
              className={`absolute ${item.position} group grid h-20 w-20 place-items-center rounded-3xl border border-white/10 bg-ink/70 text-4xl text-acid shadow-glass backdrop-blur-2xl`}
              animate={{ y: [0, -16, 0], rotate: [0, index % 2 === 0 ? 4 : -4, 0] }}
              transition={{ duration: 4 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
              title={item.label}
            >
              <i className={`bx ${item.icon}`} />
              <span className="pointer-events-none absolute -bottom-9 whitespace-nowrap rounded-full border border-white/10 bg-ink/90 px-3 py-1 text-[0.62rem] font-black uppercase tracking-[0.18em] text-smoke opacity-0 transition group-hover:opacity-100">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 z-10 overflow-hidden border-y border-white/10 bg-white/[0.035] py-4 backdrop-blur-xl">
        <div className="marquee-track flex gap-8 whitespace-nowrap text-sm font-black uppercase tracking-[0.34em] text-smoke">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center gap-8">
              {item}
              <span className="h-2 w-2 rounded-full bg-neon shadow-glow" />
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-24 right-6 z-20 hidden flex-col gap-3 lg:flex">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.label}
            className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.055] text-xl text-smoke transition hover:border-neon/60 hover:text-neon hover:shadow-glow"
          >
            <i className={`bx ${link.icon}`} />
          </a>
        ))}
      </div>
    </section>
  );
}

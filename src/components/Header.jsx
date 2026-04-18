import { motion } from "framer-motion";
import clsx from "clsx";
import { navItems } from "../data/portfolio";

export default function Header({ activeSection, isMenuOpen, isSticky, onCloseMenu, onToggleMenu }) {
  return (
    <motion.header
      className={clsx(
        "fixed left-0 top-0 z-50 w-full border-b transition duration-300",
        isSticky ? "border-white/10 bg-ink/78 py-3 backdrop-blur-2xl" : "border-transparent bg-transparent py-5"
      )}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-20">
        <a
          href="#home"
          onClick={onCloseMenu}
          className="font-display text-xl font-black uppercase tracking-[0.18em] text-white sm:text-2xl"
        >
          Shaikh<span className="text-neon">.</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={clsx(
                "relative text-sm font-bold uppercase tracking-[0.22em] transition",
                activeSection === item.href.slice(1) ? "text-neon" : "text-smoke hover:text-white"
              )}
            >
              {item.label}
              {activeSection === item.href.slice(1) && (
                <motion.span
                  layoutId="active-nav"
                  className="absolute -bottom-3 left-0 h-0.5 w-full rounded-full bg-neon shadow-glow"
                />
              )}
            </a>
          ))}
        </nav>

        <button
          className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-2xl text-white lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          onClick={onToggleMenu}
        >
          <i className={clsx("bx", isMenuOpen ? "bx-x" : "bx-menu")} />
        </button>
      </div>

      <motion.nav
        className="mx-5 mt-4 overflow-hidden rounded-3xl border border-white/10 bg-ink/94 backdrop-blur-2xl lg:hidden"
        initial={false}
        animate={isMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.28 }}
      >
        <div className="grid gap-2 p-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onCloseMenu}
              className={clsx(
                "rounded-2xl px-4 py-3 text-sm font-black uppercase tracking-[0.22em]",
                activeSection === item.href.slice(1)
                  ? "bg-neon text-ink"
                  : "text-smoke hover:bg-white/[0.06] hover:text-white"
              )}
            >
              {item.label}
            </a>
          ))}
        </div>
      </motion.nav>
    </motion.header>
  );
}

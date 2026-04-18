import { socialLinks } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-5 py-8 sm:px-8 lg:px-12 xl:px-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <p className="text-sm font-medium text-smoke">
          Copyright &copy; 2024 by Shaikh Kaif | All Rights Reserved.
        </p>
        <div className="flex gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.055] text-xl text-smoke transition hover:border-neon/60 hover:text-neon"
            >
              <i className={`bx ${link.icon}`} />
            </a>
          ))}
          <a
            href="#home"
            aria-label="Scroll back to top"
            className="grid h-11 w-11 place-items-center rounded-2xl bg-neon text-xl text-ink shadow-glow"
          >
            <i className="bx bx-up-arrow-alt" />
          </a>
        </div>
      </div>
    </footer>
  );
}

import { motion } from "framer-motion";
import clsx from "clsx";

export default function MagneticButton({
  as = "a",
  href,
  children,
  variant = "primary",
  className,
  disabled = false,
  ...props
}) {
  const Component = motion[as] ?? motion.a;

  return (
    <Component
      href={href}
      whileHover={disabled ? undefined : { y: -4, scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      className={clsx(
        "group relative inline-flex min-h-14 items-center justify-center overflow-hidden rounded-2xl px-7 py-4 text-sm font-black uppercase tracking-[0.24em] transition",
        variant === "primary"
          ? "bg-neon text-ink shadow-glow"
          : "border border-neon/35 bg-white/[0.055] text-neon backdrop-blur-xl",
        disabled && "cursor-not-allowed opacity-60",
        className
      )}
      disabled={disabled}
      aria-disabled={disabled}
      {...props}
    >
      <span className="absolute inset-0 translate-x-[-120%] bg-white/30 transition duration-700 group-hover:translate-x-[120%]" />
      <span className="relative z-10">{children}</span>
    </Component>
  );
}

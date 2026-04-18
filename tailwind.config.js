/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Poppins", "system-ui", "sans-serif"],
        display: ["Poppins", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#030907",
        graphite: "#07110f",
        glass: "rgba(255, 255, 255, 0.07)",
        neon: "#39ff88",
        mint: "#18d5b0",
        acid: "#c7ff47",
        smoke: "#a8b8ae",
      },
      boxShadow: {
        glow: "0 0 36px rgba(57, 255, 136, 0.28)",
        glass: "0 24px 80px rgba(0, 0, 0, 0.38)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(57,255,136,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,136,0.08) 1px, transparent 1px)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -18px, 0)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.04)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        marquee: "marquee 24s linear infinite",
      },
    },
  },
  plugins: [],
};

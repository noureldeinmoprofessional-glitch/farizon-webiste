import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    // Farizon VI color system — Starry Gray + Ultra White primary,
    // Dark/Light Gray neutral, Evolution Blue + gradient as identification.
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: "#000000",
      starry: {
        DEFAULT: "#51516A",
        900: "#2B2B3A",
        800: "#3B3B4E",
        700: "#45455B",
        600: "#51516A",
        500: "#6B6B85",
      },
      ink: {
        DEFAULT: "#333333",
        soft: "#4A4A4A",
        muted: "#6E6E7A",
      },
      mist: {
        DEFAULT: "#BCC8D7",
        50: "#F6F8FB",
        100: "#EEF2F7",
        200: "#DCE3EC",
        300: "#BCC8D7",
      },
      blue: {
        DEFAULT: "#000FD7",
        600: "#000FD7",
        500: "#2233E6",
      },
      orange: {
        DEFAULT: "#FF6432",
      },
      yellow: {
        DEFAULT: "#FFC832",
      },
    },
    fontFamily: {
      sans: ["var(--font-open-sans)", "Arial", "Helvetica", "sans-serif"],
    },
    extend: {
      maxWidth: {
        container: "1440px",
        wide: "1600px",
        prose: "680px",
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 6vw, 4.5rem)", { lineHeight: "0.98", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-l": ["clamp(2.5rem, 5vw, 4rem)", { lineHeight: "1.0", letterSpacing: "-0.02em", fontWeight: "700" }],
        h1: ["clamp(2.25rem, 4.2vw, 3.25rem)", { lineHeight: "1.05", letterSpacing: "-0.015em", fontWeight: "700" }],
        h2: ["clamp(1.875rem, 3.2vw, 2.625rem)", { lineHeight: "1.1", letterSpacing: "-0.01em", fontWeight: "700" }],
        h3: ["clamp(1.5rem, 2.2vw, 2rem)", { lineHeight: "1.15", fontWeight: "700" }],
        h4: ["1.5rem", { lineHeight: "1.2", fontWeight: "700" }],
        h5: ["1.25rem", { lineHeight: "1.25", fontWeight: "700" }],
      },
      letterSpacing: {
        eyebrow: "0.18em",
      },
      spacing: {
        section: "clamp(5rem, 10vw, 8rem)",
        "section-lg": "clamp(6rem, 13vw, 11rem)",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
      },
      boxShadow: {
        s: "0 4px 16px rgba(0,0,0,0.08)",
        m: "0 12px 32px rgba(0,0,0,0.10)",
        l: "0 24px 64px rgba(0,0,0,0.14)",
      },
      transitionTimingFunction: {
        standard: "cubic-bezier(0.2, 0.65, 0.3, 1)",
      },
      transitionDuration: {
        fast: "180ms",
        base: "320ms",
        slow: "650ms",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #FFC832 0%, #FF6432 100%)",
      },
    },
  },
  plugins: [],
};

export default config;

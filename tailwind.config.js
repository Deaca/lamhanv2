/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom colors
        custom: {
          orange: "#FF8E33",
          "dark-orange": "#E67300", // Darker orange for contrast
          teal: "#2DD4BF", // Teal for buttons and accents
          white: "#FFFFFF",
          "dark-gray": "#333333",
          "light-gray": "#F5F5F5",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "pattern-dots": "radial-gradient(#2DD4BF 2px, transparent 2px)",
        "pattern-lines": "repeating-linear-gradient(45deg, #2DD4BF, #2DD4BF 2px, transparent 2px, transparent 10px)",
        "pattern-noise":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          "pattern-grid":
          "linear-gradient(to right, rgba(255, 142, 51, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 142, 51, 0.1) 1px, transparent 1px)",
        "pattern-diagonal":
          "repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.25) 1px, transparent 1px, transparent 6px)",
        "pattern-circles":
          "radial-gradient(rgba(255, 255, 255, 0.2) 8px, transparent 8px), radial-gradient(rgba(255, 255, 255, 0.15) 15px, transparent 15px)",
        "pattern-zigzag":
          "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%) 0 0, linear-gradient(225deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%) 0 0, linear-gradient(315deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%) 0 0, linear-gradient(45deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%) 0 0",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}


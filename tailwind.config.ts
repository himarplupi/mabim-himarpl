import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        bonobo: ["var(--font-bonobo)", ...fontFamily.serif],
        zelda: ["var(--font-zelda)", ...fontFamily.serif],
        "rock-n-roll-one": ["var(--font-rock-n-roll-one)", ...fontFamily.sans],
        "sheikah-complete": [
          "var(--font-sheikah-complete)",
          ...fontFamily.sans,
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#7CAD35",
          foreground: "#F5FAEB",
          50: "#F5FAEB",
          100: "#E8F4D3",
          200: "#D3EAAC",
          300: "#B7DA7C",
          400: "#92C445",
          500: "#7CAD35",
          600: "#5F8A26",
          700: "#496A21",
          800: "#3C551F",
          900: "#34481F",
          950: "#1A270C",
        },
        secondary: {
          DEFAULT: "#577574",
          foreground: "#F5F8F7",
          50: "#F5F8F7",
          100: "#DFE8E7",
          200: "#BFD0CE",
          300: "#97B1AE",
          400: "#6A8785",
          500: "#577574",
          600: "#445D5C",
          700: "#394C4B",
          800: "#303F3F",
          900: "#2B3636",
          950: "#161D1D",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
} satisfies Config;

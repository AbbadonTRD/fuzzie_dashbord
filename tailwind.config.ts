// import type { Config } from "tailwindcss";

// const config = {
//   darkMode: ["class"],
//   content: [
//     "./pages/**/*.{ts,tsx}",
//     "./components/**/*.{ts,tsx}",
//     "./app/**/*.{ts,tsx}",
//     "./src/**/*.{ts,tsx}",
//   ],
//   prefix: "",
//   theme: {
//     container: {
//       center: true,
//       padding: "2rem",
//       screens: {
//         "2xl": "1400px",
//       },
//     },
//     extend: {
//       colors: {
//         cream: "#F5F5F5",
//         gravel: "#4E4E4E",
//         iridium: "#3F3F3F",
//         orange: "#FFA947",
//         peach: "#FFE0BD",
//         platinum: "#E6E6E6",
//         ghost: "#CDCDCD",
//         grandis: "#FFC989",
//         porcelain: "#F1F1F1",
//         ironside: "#636363",
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         primary: {
//           DEFAULT: "hsl(var(--primary))",
//           foreground: "hsl(var(--primary-foreground))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//         },
//         destructive: {
//           DEFAULT: "hsl(var(--destructive))",
//           foreground: "hsl(var(--destructive-foreground))",
//         },
//         muted: {
//           DEFAULT: "hsl(var(--muted))",
//           foreground: "hsl(var(--muted-foreground))",
//         },
//         accent: {
//           DEFAULT: "hsl(var(--accent))",
//           foreground: "hsl(var(--accent-foreground))",
//         },
//         popover: {
//           DEFAULT: "hsl(var(--popover))",
//           foreground: "hsl(var(--popover-foreground))",
//         },
//         card: {
//           DEFAULT: "hsl(var(--card))",
//           foreground: "hsl(var(--card-foreground))",
//         },
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//       keyframes: {
//         scroll: {
//           to: {
//             transform: "translate(calc(-50% - 0.5rem))",
//           },
//         },
//         spotlight: {
//           "0%": {
//             opacity: "0",
//             transform: "translate(-72%, -62%) scale(0.5)",
//           },
//           "100%": {
//             opacity: "1",
//             transform: "translate(-50%,-40%) scale(1)",
//           },
//         },
//         moveHorizontal: {
//           "0%": {
//             transform: "translateX(-50%) translateY(-10%)",
//           },
//           "50%": {
//             transform: "translateX(50%) translateY(10%)",
//           },
//           "100%": {
//             transform: "translateX(-50%) translateY(-10%)",
//           },
//         },
//         moveInCircle: {
//           "0%": {
//             transform: "rotate(0deg)",
//           },
//           "50%": {
//             transform: "rotate(180deg)",
//           },
//           "100%": {
//             transform: "rotate(360deg)",
//           },
//         },
//         moveVertical: {
//           "0%": {
//             transform: "translateY(-50%)",
//           },
//           "50%": {
//             transform: "translateY(50%)",
//           },
//           "100%": {
//             transform: "translateY(-50%)",
//           },
//         },
//         "accordion-down": {
//           from: { height: "0" },
//           to: { height: "var(--radix-accordion-content-height)" },
//         },
//         "accordion-up": {
//           from: { height: "var(--radix-accordion-content-height)" },
//           to: { height: "0" },
//         },
//         "caret-blink": {
//           "0%,70%,100%": { opacity: "1" },
//           "20%,50%": { opacity: "0" },
//         },
//         "open-sidebar": {
//           from: { width: "60px" },
//           to: { width: "300px" },
//         },
//         "close-sidebar": {
//           from: { width: "300px" },
//           to: { width: "60px" },
//         },
//         "fade-in": {
//           from: { opacity: "0" },
//           to: { opacity: "1" },
//         },
//       },
//       animation: {
//         scroll:
//           "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
//         spotlight: "spotlight 2s ease .75s 1 forwards",
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//         "caret-blink": "caret-blink 1.25s ease-out infinite",
//         "open-sidebar": "open-sidebar 0.2s ease-out",
//         "close-sidebar": "close-sidebar 0.2s ease-out",
//         "fade-in": "fade-in 0.2s ease-out",
//         first: "moveVertical 30s ease infinite",
//         second: "moveInCircle 20s reverse infinite",
//         third: "moveInCircle 40s linear infinite",
//         fourth: "moveHorizontal 40s ease infinite",
//         fifth: "moveInCircle 20s ease infinite",
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate")],
// } satisfies Config;

// export default config;

/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const mergedConfig = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
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
        // Existing Colors from the First Config
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

        // Additional Colors from the First Config
        "washed-blue-50": "#f0f3ff",
        "washed-blue-100": "#d0daff",
        "washed-blue-200": "#bac9ff",
        "washed-blue-300": "#9ab0ff",
        "washed-blue-400": "#86a1ff",
        "washed-blue-500": "#6889ff",
        "washed-blue-600": "#5f7de8",
        "washed-blue-700": "#4a61b5",
        "washed-blue-800": "#394b8c",
        "washed-blue-900": "#2c3a6b",
        "washed-purple-50": "#f8f7ff",
        "washed-purple-100": "#e8e7ff",
        "washed-purple-200": "#dddcff",
        "washed-purple-300": "#cecbff",
        "washed-purple-400": "#c5c1ff",
        "washed-purple-500": "#b6b2ff",
        "washed-purple-600": "#a6a2e8",
        "washed-purple-700": "#817eb5",
        "washed-purple-800": "#64628c",
        "washed-purple-900": "#4c4b6b",
        "primary-blue-50": "#e6f0ff",
        "primary-blue-100": "#b2d1ff",
        "primary-blue-200": "#8cbaff",
        "primary-blue-300": "#589bff",
        "primary-blue-400": "#3787ff",
        "primary-blue-500": "#0569ff",
        "primary-blue-600": "#0560e8",
        "primary-blue-700": "#044bb5",
        "primary-blue-800": "#033a8c",
        "primary-blue-900": "#022c6b",
        "primary-purple-50": "#f1e6ff",
        "primary-purple-100": "#d3b0ff",
        "primary-purple-200": "#bd8aff",
        "primary-purple-300": "#9f54ff",
        "primary-purple-400": "#8d33ff",
        "primary-purple-500": "#7000ff",
        "primary-purple-600": "#6600e8",
        "primary-purple-700": "#5000b5",
        "primary-purple-800": "#3e008c",
        "primary-purple-900": "#2f006b",

        // Neutrals from Both Configs (Merged)
        "Neutrals/neutrals-1": "#ffffff",
        "Neutrals/neutrals-2": "#fcfcfd",
        "Neutrals/neutrals-3": "#f5f5f6",
        "Neutrals/neutrals-4": "#f0f0f1",
        "Neutrals/neutrals-5": "#d9d9dc",
        "Neutrals/neutrals-6": "#c0bfc4",
        "Neutrals/neutrals-7": "#8d8c95",
        "Neutrals/neutrals-8": "#5b5966",
        "Neutrals/neutrals-9": "#464553",
        "Neutrals/neutrals-10": "#282637",
        "Neutrals/neutrals-11": "#201f30",
        "Neutrals/neutrals-12": "#161427",
        "Neutrals/neutrals-13": "#020014",

        // Brand Colors from the First Config
        "brand-washedPurple": "#b5b2ff",
        "brand-washedBlue": "#6889ff",
        "brand-primaryBlue": "#0469ff",
        "brand-primaryPurple": "#7000ff",
        "brand-dark": "#030014",

        // Additional Colors from the Second Config
        cream: "#F5F5F5",
        gravel: "#4E4E4E",
        iridium: "#3F3F3F",
        orange: "#FFA947",
        peach: "#FFE0BD",
        platinum: "#E6E6E6",
        ghost: "#CDCDCD",
        grandis: "#FFC989",
        porcelain: "#F1F1F1",
        ironside: "#636363",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        // Combined Keyframes from Both Configs
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "open-sidebar": {
          from: { width: "60px" },
          to: { width: "300px" },
        },
        "close-sidebar": {
          from: { width: "300px" },
          to: { width: "60px" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        // Combined Animations from Both Configs
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "open-sidebar": "open-sidebar 0.2s ease-out",
        "close-sidebar": "close-sidebar 0.2s ease-out",
        "fade-in": "fade-in 0.2s ease-out",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
      },
    },
  },
  // plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default mergedConfig;

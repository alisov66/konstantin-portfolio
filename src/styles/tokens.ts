import { spacing } from "./spacing";

export const tokens = {
  colors: {
    background: {
      beige: "var(--bg-beige)",
      gray: "var(--bg-gray)",
      violet: "var(--bg-violet)",
    },

    text: {
      primary: "var(--text-primary)",
      secondary: "var(--text-secondary)",
      tertiary: "var(--text-tertiary)",
      inverted: "var(--text-inverted)",
      accent: "var(--text-accent)",
    },

    button: {
      primary: {
        default: "var(--button-primary)",
        hover: "var(--button-primary-hover)",
        text: "var(--button-primary-text)",
      },

      secondary: {
        default: "var(--button-secondary)",
        hover: "var(--button-secondary-hover)",
        selected: "var(--button-secondary-selected)",
        text: "var(--button-secondary-text)",
        selectedText: "var(--button-secondary-selected-text)",
      },
    },

    border: {
      primary: "var(--border-primary)",
    },
  },

  spacing,

  grid: {
    columns: 12,
    gutter: 20,
    margin: 120,
  },

  breakpoints: {
    mobile: 390,
    tablet: 768,
    laptop: 1280,
    desktop: 1440,
    desktopXL: 1728,
  },
} as const;

export type Tokens = typeof tokens;
export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
} as const;

const rawTypography = {
  heading: {
    h1: {
      fontSize: 56,
      lineHeight: 64,
      fontWeight: fontWeight.medium,
    },

    h2: {
      fontSize: 40,
      lineHeight: 48,
      fontWeight: fontWeight.medium,
    },

    h3: {
      fontSize: 36,
      lineHeight: 44,
      fontWeight: fontWeight.semibold,
    },

    h4: {
      fontSize: 28,
      lineHeight: 36,
      fontWeight: fontWeight.semibold,
    },

    h5: {
      fontSize: 20,
      lineHeight: 24,
      fontWeight: fontWeight.semibold,
    },
  },

  article: {
    heading: {
      h1: {
        fontSize: 56,
        lineHeight: 64,
        fontWeight: fontWeight.semibold,
      },

      h2: {
        fontSize: 36,
        lineHeight: 44,
        fontWeight: fontWeight.semibold,
      },

      h3: {
        fontSize: 28,
        lineHeight: 36,
        fontWeight: fontWeight.semibold,
      },
    },

    body: {
      paragraph: {
        fontSize: 20,
        lineHeight: 36,
        fontWeight: fontWeight.regular,
      },
    },
  },

  body: {
    mediumBold: {
      fontSize: 20,
      lineHeight: 28,
      fontWeight: fontWeight.semibold,
    },

    medium: {
      fontSize: 20,
      lineHeight: 28,
      fontWeight: fontWeight.regular,
    },

    small: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: fontWeight.regular,
    },
  },

  button: {
    medium: {
      fontSize: 16,
      lineHeight: 20,
      fontWeight: fontWeight.medium,
    },
  },
} as const;

export const typography = {
  raw: rawTypography,
  fontWeight,

  heading: rawTypography.heading,

  article: {
    h1: rawTypography.article.heading.h1,
    h2: rawTypography.article.heading.h2,
    h3: rawTypography.article.heading.h3,
    paragraph: rawTypography.article.body.paragraph,
  },

  body: rawTypography.body,
  button: rawTypography.button,
} as const;

export type TypographyToken = typeof typography;

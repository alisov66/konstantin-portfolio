const rawTypography = {
  font: {
    family: "Work Sans",
  },

  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
  },

  heading: {
    h1: {
      fontSize: 56,
      lineHeight: 64,
    },

    h2: {
      fontSize: 40,
      lineHeight: 48,
    },

    h3: {
      fontSize: 36,
      lineHeight: 44,
    },

    h4: {
      fontSize: 28,
      lineHeight: 36,
    },

    h5: {
      fontSize: 20,
      lineHeight: 24,
    },
  },

  article: {
    h1: {
      fontSize: 56,
      lineHeight: 64,
    },

    h2: {
      fontSize: 36,
      lineHeight: 44,
    },

    h3: {
      fontSize: 28,
      lineHeight: 36,
    },

    paragraph: {
      fontSize: 20,
      lineHeight: 36,
      paragraphSpacing: 12,
    },
  },

  body: {
    medium: {
      fontSize: 20,
      lineHeight: 28,
    },

    small: {
      fontSize: 16,
      lineHeight: 24,
    },
  },

  button: {
    medium: {
      fontSize: 16,
      lineHeight: 20,
    },
  },
} as const;

export const fontWeight = rawTypography.fontWeight;

export const typography = {
  raw: rawTypography,
  font: rawTypography.font,
  fontWeight,

  heading: {
    h1: {
      ...rawTypography.heading.h1,
      fontWeight: fontWeight.medium,
    },

    h2: {
      ...rawTypography.heading.h2,
      fontWeight: fontWeight.medium,
    },

    h3: {
      ...rawTypography.heading.h3,
      fontWeight: fontWeight.semibold,
      paragraphSpacing: rawTypography.article.paragraph.paragraphSpacing,
    },

    h4: {
      ...rawTypography.heading.h4,
      fontWeight: fontWeight.semibold,
      paragraphSpacing: rawTypography.article.paragraph.paragraphSpacing,
    },

    h5: {
      ...rawTypography.heading.h5,
      fontWeight: fontWeight.semibold,
      paragraphSpacing: rawTypography.article.paragraph.paragraphSpacing,
    },
  },

  article: {
    h1: {
      ...rawTypography.article.h1,
      fontWeight: fontWeight.semibold,
    },

    h2: {
      ...rawTypography.article.h2,
      fontWeight: fontWeight.semibold,
    },

    h3: {
      ...rawTypography.article.h3,
      fontWeight: fontWeight.semibold,
      paragraphSpacing: rawTypography.article.paragraph.paragraphSpacing,
    },

    paragraph: {
      ...rawTypography.article.paragraph,
      fontWeight: fontWeight.regular,
    },

    paragraphSemibold: {
      ...rawTypography.article.paragraph,
      fontWeight: fontWeight.semibold,
    },
  },

  body: {
    mediumBold: {
      ...rawTypography.body.medium,
      fontWeight: fontWeight.semibold,
      paragraphSpacing: rawTypography.article.paragraph.paragraphSpacing,
    },

    medium: {
      ...rawTypography.body.medium,
      fontWeight: fontWeight.regular,
      paragraphSpacing: 8,
    },

    small: {
      ...rawTypography.body.small,
      fontWeight: fontWeight.regular,
      paragraphSpacing: 4,
    },
  },

  button: {
    medium: {
      ...rawTypography.button.medium,
      fontWeight: fontWeight.medium,
      paragraphSpacing: rawTypography.article.paragraph.paragraphSpacing,
    },
  },
} as const;

export type TypographyToken = typeof typography;

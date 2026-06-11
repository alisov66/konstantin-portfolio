export const grid = {
  desktop: {
    viewportWidth: 1728,
    columns: 12,
    margin: 120,
    gutter: 20,
    contentWidth: 1488,
  },
} as const;

export type GridToken = typeof grid;
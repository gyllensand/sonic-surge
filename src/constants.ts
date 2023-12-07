export const COLORS = [
  "#ffffff",
  "#dc202e",
  "#2d338b",
  "#76306b",
  "#ea8c2d",
  "#c06e86",
  "#0f9ebe",
  "#1c6ff1",
  "#eb3434",
  "#cb4e4d",
  "#ffce00",
  "#ff48e6",
  "#bd22a8",
  "#30f8a0",
  "#249582",
];

export const BG_COLORS = ["#000000", "#000000", "#111111", "#040b2d"];

export const LIGHT_BG_COLORS = ["#ffffff", "#fff6d1"];

export enum Type {
  BackToBack = 0,
  Facing = 1,
  Winding = 2,
}

export enum ColorMode {
  Plain = 0,
  PlainDiff = 1,
  Separated = 2,
  Gradient = 3,
  EveryOther = 4,
}

export enum Direction {
  Left = "left",
  Right = "right",
}
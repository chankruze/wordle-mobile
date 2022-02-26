/*
Author: chankruze (chankruze@gmail.com)
Created: Fri Feb 25 2022 17:31:50 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

export const colors = {
  black: "#121214",
  darkgrey: "#3A3A3D",
  grey: "#818384",
  lightgrey: "#D7DADC",
  primary: "#538D4E",
  secondary: "#B59F3B",
};

export const colorsToEmoji = {
  [colors.darkgrey]: "⬛",
  [colors.primary]: "🟩",
  [colors.secondary]: "🟧",
};

export const ENTER = "ENTER";
export const CLEAR = "CLEAR";
export const NUMBER_OF_TRIES = 6;

export const keys = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  [ENTER, "z", "x", "c", "v", "b", "n", "m", CLEAR],
];

export const GAME_STATE = {
  PLAYING: "playing",
  WON: "won",
  LOST: "lost",
};

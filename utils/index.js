/*
Author: chankruze (chankruze@gmail.com)
Created: Fri Feb 25 2022 18:25:55 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

export const getDayOfTheYear = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);
  return day;
};

export const copyArray = (arr) => [...arr.map((rows) => [...rows])];

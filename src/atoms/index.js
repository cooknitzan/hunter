import { atom } from "recoil";

export const moviesState = atom({
  key: "movies",
  default: [],
});
export const dataState = atom({
  key: "data",
  default: [],
});

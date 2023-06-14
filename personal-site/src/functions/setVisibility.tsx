import { Timer } from "../types/timer";

export const setVisibility = (threshold: number, currentTime: Timer) => {
  return threshold >= currentTime.milliseconds ? true : false;
};

import { Timer } from "../interfaces/timer";

export const setVisibility = (threshold: number, currentTime: Timer) => {
  return threshold >= currentTime.milliseconds ? true : false;
};

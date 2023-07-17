import { BarDestination } from "../types/barDestination";

const createAnimation = (barPosition: BarDestination) => {
  const topMove = [
    { top: "0%", opacity: "0" },
    { top: `${barPosition.top}px`, opacity: "1", offset: 0.2 },
    { top: `${barPosition.top}px`, offset: 0.5 },
    { top: "0%", offset: 0.55 },
    { opacity: "0", offset: 1 },
  ];

  const bottomMove = [
    { top: "99.2%", opacity: "0" },
    { top: `${barPosition.bottom}px`, opacity: "1", offset: 0.2 },
    { top: `${barPosition.bottom}px`, offset: 0.5 },
    { top: "99.2%", offset: 0.55 },
    { opacity: "0", offset: 1 },
  ];
  const leftMove = [
    { left: "0%", opacity: "0" },
    { left: `${barPosition.left}px`, opacity: "1", offset: 0.2 },
    { left: `${barPosition.left}px`, offset: 0.5 },
    { left: "0%", offset: 0.55 },
    { opacity: "0", offset: 1 },
  ];
  const rightMove = [
    { left: "99.6%", opacity: "0" },
    { left: `${barPosition.right}px`, opacity: "1", offset: 0.2 },
    { left: `${barPosition.right}px`, offset: 0.5 },
    { left: "99.6%", offset: 0.55 },
    { opacity: "0", offset: 1 },
  ];
  return [topMove, bottomMove, leftMove, rightMove];
};

export { createAnimation };

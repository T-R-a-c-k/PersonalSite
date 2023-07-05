const technicalTopMove = [
  { top: "0%", opacity: "0" },
  { top: "29%", opacity: "1", offset: 0.2 },
  { top: "29%", offset: 0.5 },
  { top: "0%", offset: 0.55 },
  { opacity: "0", offset: 1 },
];
const technicalBottomMove = [
  { top: "99.2%", opacity: "0" },
  { top: "37%", opacity: "1", offset: 0.2 },
  { top: "37%", offset: 0.5 },
  { top: "99.2%", offset: 0.55 },
  { opacity: "0", offset: 1 },
];
const technicalLeftMove = [
  { left: "0%", opacity: "0" },
  { left: "75.5%", opacity: "1", offset: 0.2 },
  { left: "75.5%", offset: 0.5 },
  { left: "0%", offset: 0.55 },
  { opacity: "0", offset: 1 },
];
const technicalRightMove = [
  { left: "99.6%", opacity: "0" },
  { left: "80%", opacity: "1", offset: 0.2 },
  { left: "80%", offset: 0.5 },
  { left: "99.6%", offset: 0.55 },
  { opacity: "0", offset: 1 },
];

export {
  technicalTopMove,
  technicalBottomMove,
  technicalLeftMove,
  technicalRightMove,
};

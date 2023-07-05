const employmentTopMove = [
  { top: "0%", opacity: "0" },
  { top: "40%", opacity: "1", offset: 0.2 },
  { top: "40%", offset: 0.5 },
  { top: "0%", offset: 0.55 },
  { opacity: "0", offset: 1 },
];
const employmentBottomMove = [
  { top: "99.2%", opacity: "0" },
  { top: "49%", opacity: "1", offset: 0.2 },
  { top: "49%", offset: 0.5 },
  { top: "99.2%", offset: 0.55 },
  { opacity: "0", offset: 1 },
];
const employmentLeftMove = [
  { left: "0%", opacity: "0" },
  { left: "36%", opacity: "1", offset: 0.2 },
  { left: "36%", offset: 0.5 },
  { left: "0%", offset: 0.55 },
  { opacity: "0", offset: 1 },
];
const employmentRightMove = [
  { left: "99.6%", opacity: "0" },
  { left: "42%", opacity: "1", offset: 0.2 },
  { left: "42%", offset: 0.5 },
  { left: "99.6%", offset: 0.55 },
  { opacity: "0", offset: 1 },
];

export {
  employmentTopMove,
  employmentBottomMove,
  employmentLeftMove,
  employmentRightMove,
};

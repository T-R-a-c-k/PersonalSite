const educationTopMove = [
  { top: "0%", opacity: "0" },
  { top: "12%", opacity: "1", offset: 0.2 },
  { top: "12%", offset: 0.5 },
  { top: "0%", offset: 0.55 },
  { opacity: "0", offset: 1 },
];
const educationBottomMove = [
  { top: "99.2%", opacity: "0" },
  { top: "21%", opacity: "1", offset: 0.2 },
  { top: "21%", offset: 0.5 },
  { top: "99.2%", offset: 0.55 },
  { opacity: "0", offset: 1 },
];
const educationLeftMove = [
  { left: "0%", opacity: "0" },
  { left: "30%", opacity: "1", offset: 0.2 },
  { left: "30%", offset: 0.5 },
  { left: "0%", offset: 0.55 },
  { opacity: "0", offset: 1 },
];
const educationRightMove = [
  { left: "99.6%", opacity: "0" },
  { left: "36%", opacity: "1", offset: 0.2 },
  { left: "36%", offset: 0.5 },
  { left: "99.6%", offset: 0.55 },
  { opacity: "0", offset: 1 },
];

export {
  educationTopMove,
  educationBottomMove,
  educationLeftMove,
  educationRightMove,
};

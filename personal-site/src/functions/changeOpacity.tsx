let opacity = 1;
const changeOpacity = (
  timerSeconds: number,
  startAfterSeconds: number,
  endAfterSeconds: number
) => {
  if (timerSeconds! > startAfterSeconds) {
    const divisor = 1 / (endAfterSeconds - startAfterSeconds) / 100;
    opacity = opacity - divisor;
    return opacity;
  } else return 1;
};

export { changeOpacity };

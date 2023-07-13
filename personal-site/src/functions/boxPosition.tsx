const BOX_POSITION = (width: number) => {
  return width > 650 ? { left: 40, top: 20 } : { left: 0, top: 20 };
};

export { BOX_POSITION };

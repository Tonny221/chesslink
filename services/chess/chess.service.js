const isTileBlack = (row, col, flipColors = false) => {
  const isBlack = row % 2 !== 0 ? col % 2 === 0 : col % 2 !== 0;
  return flipColors ? !isBlack : isBlack;
};

const isTileWhite = (row, col, flipColors = false) => {
  return !isTileBlack(row, col, flipColors);
};

export { isTileBlack, isTileWhite };

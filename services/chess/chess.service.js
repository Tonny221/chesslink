export const isTileBlack = (row, col) => {
  return row % 2 === 0 ? col % 2 === 0 : col % 2 !== 0;
};

export const isTileWhite = (row, col) => {
  return !isTileBlack(row, col);
};

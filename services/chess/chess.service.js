import { isEven, isOdd } from "@utils/helpers/math";

const isTileBlack = (row, col, flipColors = false) => {
  const isBlack = isEven(row) ? isOdd(col) : isEven(col);
  return flipColors ? isBlack : !isBlack;
};

const isTileWhite = (row, col, flipColors = false) => {
  return !isTileBlack(row, col, flipColors);
};

export { isTileBlack, isTileWhite };

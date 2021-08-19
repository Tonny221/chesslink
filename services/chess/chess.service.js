import * as _ from "lodash";

import {
  BISHOP,
  BLACK,
  KING,
  KNIGHT,
  PAWN,
  QUEEN,
  ROOK,
  WHITE,
} from "@utils/constants";
import ChessPiece from "./chessPiece/chessPiece.service";

/**
 * name string is the name of the mode / preset for this board
 * board object is the board options
 * - height, width of the board
 * - flipColors if true changes all the black tile to white and vise-versa
 */
const classicOptions = {
  name: "classic",
  board: { height: 8, width: 8, flipColors: false },
};

const chess = (options = classicOptions) => {
  const data = {};
  data.options = options;
  data.board = [...Array(options.board.width)].map((e) =>
    Array(options.board.height).fill(null)
  );

  const initData = initBoard(data);
  return initData;
};

const getWidth = (data) => {
  return data.options.board.width;
};

const getHeight = (data) => {
  return data.options.board.height;
};

const initBoard = (data) => {
  const newData = _.cloneDeep(data);
  const width = getWidth(newData);
  const height = getHeight(newData);
  const board = newData.board;

  //make first line of classic chess white
  board[0][0] = new ChessPiece(ROOK, WHITE);
  board[0][width - 1] = new ChessPiece(ROOK, WHITE);
  board[0][1] = new ChessPiece(KNIGHT, WHITE);
  board[0][width - 2] = new ChessPiece(KNIGHT, WHITE);
  board[0][2] = new ChessPiece(BISHOP, WHITE);
  board[0][width - 3] = new ChessPiece(BISHOP, WHITE);
  board[0][3] = new ChessPiece(QUEEN, WHITE);
  board[0][width - 4] = new ChessPiece(KING, WHITE);
  //make second line white pawns
  board[1] = [...Array(width).fill(new ChessPiece(PAWN, WHITE))];

  //make first line of classic black
  board[height - 1][0] = new ChessPiece(ROOK, BLACK);
  board[height - 1][width - 1] = new ChessPiece(ROOK, BLACK);
  board[height - 1][1] = new ChessPiece(KNIGHT, BLACK);
  board[height - 1][width - 2] = new ChessPiece(KNIGHT, BLACK);
  board[height - 1][2] = new ChessPiece(BISHOP, BLACK);
  board[height - 1][width - 3] = new ChessPiece(BISHOP, BLACK);
  board[height - 1][3] = new ChessPiece(QUEEN, BLACK);
  board[height - 1][width - 4] = new ChessPiece(KING, BLACK);
  //make the second line black pawns
  board[height - 2] = [...Array(width).fill(new ChessPiece(PAWN, BLACK))];

  return newData;
};

const isTileBlack = (row, col, flipColors = false) => {
  const isBlack = row % 2 !== 0 ? col % 2 === 0 : col % 2 !== 0;
  return flipColors ? !isBlack : isBlack;
};

const isTileWhite = (row, col, flipColors = false) => {
  return !isTileBlack(row, col, flipColors);
};

const move = (data, from, to) => {
  const [fromRow, fromCol] = from;
  const [toRow, toCol] = to;

  const newData = _.cloneDeep(data);

  const board = newData.board;
  board[toRow][toCol] = board[fromRow][fromCol];
  board[fromRow][fromCol] = null;
  newData.board = board;

  return newData;
};

export { chess, getWidth, getHeight, isTileBlack, isTileWhite, move };

export default chess;

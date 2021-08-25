import React from "react";
import Image from "next/image";
import {
  blackKing,
  blackQueen,
  blackRook,
  blackBishop,
  blackKnight,
  blackPawn,
  whiteKing,
  whiteQueen,
  whiteRook,
  whiteBishop,
  whiteKnight,
  whitePawn,
} from "@assets/images/chess-pieces/index.js";
import {
  BISHOP,
  KING,
  KNIGHT,
  PAWN,
  QUEEN,
  ROOK,
  WHITE,
} from "@utils/constants";

const getImageByColorAndType = (type, color) => {
  const isWhite = color === WHITE;
  switch (type) {
    case KING:
      return isWhite ? whiteKing : blackKing;
    case QUEEN:
      return isWhite ? whiteQueen : blackQueen;
    case ROOK:
      return isWhite ? whiteRook : blackRook;
    case BISHOP:
      return isWhite ? whiteBishop : blackBishop;
    case KNIGHT:
      return isWhite ? whiteKnight : blackKnight;
    case PAWN:
      return isWhite ? whitePawn : blackPawn;

    default:
      return null;
  }
};

const ChessPiece = ({ type, color, onClick }) => {
  const image = getImageByColorAndType(type, color);
  return image ? (
    <Image src={image} onClick={onClick} />
  ) : (
    <div>{`${color}-${type}`}</div>
  );
};

export default ChessPiece;

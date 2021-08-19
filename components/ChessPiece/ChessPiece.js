import React from "react";
import Image from "next/image";
import { blackBishop, whiteBishop } from "@assets/images/chess-pieces/index.js";

const getImageByColorAndType = (type, color) => {
  switch (type) {
    case "bishop":
      return color === "white" ? whiteBishop : blackBishop;

    default:
      return null;
  }
};

const ChessPiece = ({ type, color, size }) => {
  const image = getImageByColorAndType(type, color);
  return image ? <Image src={image} height={size} width={size} /> : null;
};

export default ChessPiece;

import ChessPiece from "@components/ChessPiece/ChessPiece";
import React from "react";
import Tile from "./Tile/Tile.styles";

const ChessBoard = () => {
  const data = [[], [], [], [], [], [], [], []];
  return (
    <div>
      <Tile>
        <ChessPiece />
      </Tile>
    </div>
  );
};

export default ChessBoard;

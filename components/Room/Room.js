import ChessBoard from "@components/ChessBoard/ChessBoard";
import chess, { move } from "@services/chess/chess.service";
import React, { useEffect, useState } from "react";

const Room = () => {
  const [chessData, setChessData] = useState(chess());

  const movePiece = (from, to) => {
    setChessData(move(chessData, from, to));
  };
  return (
    <>
      <ChessBoard chessData={chessData} movePiece={movePiece} />
    </>
  );
};

export default Room;

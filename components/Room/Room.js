import ChessBoard from "@components/ChessBoard/ChessBoard";
import Background from "@components/Background/Background.styles";
import chess, { move } from "@services/chess/chess.service";
import React, { useEffect, useState } from "react";

const Room = () => {
  const [chessData, setChessData] = useState(chess());

  const movePiece = (from, to) => {
    setChessData(move(chessData, from, to));
  };
  return (
    <Background>
      <ChessBoard chessData={chessData} movePiece={movePiece} />
    </Background>
  );
};

export default Room;

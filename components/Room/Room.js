import ChessBoard from "@components/ChessBoard/ChessBoard";
import React, { useEffect, useState } from "react";
import * as ChessJS from "chess.js";
const Chess = typeof ChessJS === "function" ? ChessJS : ChessJS.Chess;

const Room = () => {
  const [chess, setChess] = useState();

  useEffect(() => {
    const chess = new Chess();
    console.log(chess);
    setChess(chess);
  }, []);

  const movePiece = (move) => {
    const moveRes = chess.move(move);
    console.log("moveRes", moveRes);
  };

  const getAllMoves = (chessPiecePos) => {
    return chess.moves(chessPiecePos);
  };

  return (
    <>
      {chess && (
        <ChessBoard
          chess={chess}
          movePiece={movePiece}
          getAllMoves={getAllMoves}
        />
      )}
    </>
  );
};

export default Room;

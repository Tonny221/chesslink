import ChessBoard from "@components/ChessBoard/ChessBoard";
import React, { useEffect, useState } from "react";
import * as ChessJS from "chess.js";
const Chess = typeof ChessJS === "function" ? ChessJS : ChessJS.Chess;

const Room = () => {
  const [isPlayerWhite, setIsPlayerWhite] = useState(false);
  const [chess, setChess] = useState();

  useEffect(() => {
    const chess = new Chess();
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
      <button onClick={() => setIsPlayerWhite(!isPlayerWhite)}>
        change view
      </button>
      {chess && (
        <ChessBoard
          chess={chess}
          movePiece={movePiece}
          getAllMoves={getAllMoves}
          isBoardReversed={isPlayerWhite}
        />
      )}
    </>
  );
};

export default Room;

import ChessBoard from "@components/ChessBoard/ChessBoard";
import React from "react";

const Room = () => {
  const gridSize = 8;
  const data = [...Array(gridSize)].map((e) => Array(gridSize).fill(1));

  return (
    <>
      <ChessBoard data={data} />
    </>
  );
};

export default Room;

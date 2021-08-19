import { React, Fragment } from "react";
import ChessPiece from "@components/ChessPiece/ChessPiece";
import { Row, Tile } from "./ChessBoard.styles";
import { isTileBlack } from "@services/chess/chess.service";

const ChessBoard = ({ data }) => {
  return (
    <>
      {data.map((row, rowIndex) => {
        return (
          <Row key={rowIndex}>
            {row.map((chesspiece, colIndex) => {
              return (
                <Tile
                  key={rowIndex * data.length + colIndex}
                  isBlack={isTileBlack(rowIndex, colIndex)}
                >
                  {(true || chesspiece) && (
                    <ChessPiece
                      type={chesspiece.type || "bishop"}
                      color={chesspiece.color || "black"}
                    />
                  )}
                </Tile>
              );
            })}
          </Row>
        );
      })}
    </>
  );
};

export default ChessBoard;

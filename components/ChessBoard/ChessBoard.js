import { React, useState } from "react";
import ChessPiece from "@components/ChessPiece/ChessPiece";
import { Row, Tile, BoardContainer } from "./ChessBoard.styles";
import { isTileBlack } from "@services/chess/chess.service";
import useWindowSize from "@hooks/useWindowSize";
import useDebounce from "@hooks/useDebounce";

const ChessBoard = ({ chess, movePiece, getAllMoves, isBoardReversed }) => {
  const windowSize = useWindowSize();
  const debouncedWindowSize = useDebounce(windowSize, 50);

  // TODO: move this to a centerlized file with all the config maybe even redux
  const blackTileColor = "#a27035";
  const whiteTileColor = "#F0E1D1";

  const calculateTileSize = (windowSize) => {
    const smallestDimension = Math.min(windowSize.width, windowSize.height);
    const isPhone = smallestDimension < 500;
    return (smallestDimension / 8) * (isPhone ? 1 : 0.8);
  };

  return (
    <BoardContainer isBoardReversed={isBoardReversed}>
      {chess
        .board()
        .reverse()
        .map((row, rowIndex) => {
          return (
            <Row key={rowIndex}>
              {row.map((chessPiece, colIndex) => {
                return (
                  <Tile
                    key={rowIndex * row.length + colIndex}
                    onClick={() => console.log([rowIndex + 1, colIndex + 1])}
                    color={
                      isTileBlack(rowIndex, colIndex)
                        ? blackTileColor
                        : whiteTileColor
                    }
                    size={calculateTileSize(debouncedWindowSize)}
                  >
                    {chessPiece && (
                      <ChessPiece
                        type={chessPiece.type}
                        color={chessPiece.color}
                        size={calculateTileSize(debouncedWindowSize)}
                      />
                    )}
                  </Tile>
                );
              })}
            </Row>
          );
        })}
    </BoardContainer>
  );
};

export default ChessBoard;

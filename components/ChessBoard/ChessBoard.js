import { React } from "react";
import ChessPiece from "@components/ChessPiece/ChessPiece";
import { Row, Tile, BoardContainer } from "./ChessBoard.styles";
import { getWidth, isTileBlack } from "@services/chess/chess.service";

const ChessBoard = ({ chessData, movePiece }) => {
  return (
    <BoardContainer>
      {chessData.board.map((row, rowIndex) => {
        return (
          <Row key={rowIndex}>
            {row.map((chessPiece, colIndex) => {
              return (
                <Tile
                  key={rowIndex * getWidth(chessData) + colIndex}
                  isBlack={isTileBlack(rowIndex, colIndex)}
                >
                  {chessPiece && (
                    <ChessPiece
                      type={chessPiece.type}
                      color={chessPiece.color}
                      onClick={() => {
                        movePiece(
                          [rowIndex, colIndex],
                          [rowIndex + 1, colIndex]
                        );
                      }}
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

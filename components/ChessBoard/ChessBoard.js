import { React } from "react";
import ChessPiece from "@components/ChessPiece/ChessPiece";
import { Row, Tile, BoardContainer } from "./ChessBoard.styles";
import { isTileBlack } from "@services/chess/chess.service";

const ChessBoard = ({ chess, movePiece, getAllMoves }) => {
  const size = 4;
  return (
    <BoardContainer>
      {chess.board().map((row, rowIndex) => {
        return (
          <Row key={rowIndex}>
            {row.map((chessPiece, colIndex) => {
              return (
                <Tile
                  key={rowIndex * row.length + colIndex}
                  color={
                    isTileBlack(rowIndex, colIndex) ? "rebeccapurple" : "gold"
                  }
                  size={size}
                >
                  {chessPiece && (
                    <ChessPiece
                      type={chessPiece.type}
                      color={chessPiece.color}
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

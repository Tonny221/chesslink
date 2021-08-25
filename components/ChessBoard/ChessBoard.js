import { React } from "react";
import ChessPiece from "@components/ChessPiece/ChessPiece";
import { Row, Tile, BoardContainer } from "./ChessBoard.styles";
import { isTileBlack } from "@services/chess/chess.service";
import useWindowSize from "@hooks/useWindowSize";
import useDebounce from "@hooks/useDebounce";

const ChessBoard = ({ chess, movePiece, getAllMoves }) => {
  const windowSize = useWindowSize();
  const debouncedWindowSize = useDebounce(windowSize, 50);

  // TODO: move this to a centerlized file with all the config maybe even redux
  const blackTileColor = "rebeccapurple";
  const whiteTileColor = "gold";

  const calculateTileSize = (windowSize) => {
    const smallestDimension = Math.min(windowSize.width, windowSize.height);
    const isPhone = smallestDimension < 500;
    return (smallestDimension / 8) * (isPhone ? 1 : 0.8);
  };

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

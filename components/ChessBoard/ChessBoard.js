import ChessPiece from "@components/ChessPiece/ChessPiece";
import { React, Fragment } from "react";
import { Row, Tile } from "./ChessBoard.styles";
import { isTileBlack } from "@services/chess/chess.service";

const ChessBoard = ({ data }) => {
  const rowLength = data.length;
  return (
    <Fragment>
      {[...Array(rowLength)].map((e, x) => {
        return (
          <Row key={x}>
            {[...Array(rowLength)].map((e, y) => {
              return (
                <Tile key={y} isBlack={isTileBlack(x, y)}>
                  <ChessPiece />
                </Tile>
              );
            })}
          </Row>
        );
      })}
    </Fragment>
  );
};

export default ChessBoard;

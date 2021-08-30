import styled from "styled-components";

const Tile = styled.div(({ color, size }) => {
  const cssSize = `${size || 16}px`;
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: cssSize,
    width: cssSize,
    backgroundColor: color,
  };
});

const Row = styled.div(() => {
  return {
    display: "flex",
    flexDirection: "row",
  };
});

const BoardContainer = styled.div(({ isBoardReversed }) => {
  return {
    display: "flex",
    flexDirection: isBoardReversed ? "column" : "column-reverse",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  };
});

export { Tile, Row, BoardContainer };

import styled from "styled-components";

const Tile = styled.div(({ isBlack }) => {
  const cssSize = `4rem`;
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: cssSize,
    height: cssSize,
    backgroundColor: isBlack ? "dodgerblue" : "gold",
  };
});

const Row = styled.div(() => {
  return {
    display: "flex",
    flexDirection: "row",
  };
});

const BoardContainer = styled.div(() => {
  return {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
});

export { Tile, Row, BoardContainer };

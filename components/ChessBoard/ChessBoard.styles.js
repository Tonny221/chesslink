import styled from "styled-components";

const Tile = styled.div(({ isBlack }) => {
  const size = "4rem";
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: size,
    height: size,
    backgroundColor: isBlack ? "green" : "red",
  };
});

const Row = styled.div(() => {
  return {
    display: "flex",
  };
});

export { Tile, Row };

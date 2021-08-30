import { isTileBlack, isTileWhite } from "./chess.service";

describe("Tile Colors tests", () => {
  test("isTileWhite with row 1 col 4 should return true", () => {
    expect(isTileWhite(0, 3)).toBe(true);
  });
  test("isTileBlack with row 1 col 1 should return true", () => {
    expect(isTileBlack(0, 0)).toBe(true);
  });
});

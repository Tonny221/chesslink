import { isTileBlack, isTileWhite } from "./chess.service";

describe("Tile Colors tests", () => {
  test("isTileBlack with row 3 col 3 should return true", () => {
    expect(isTileBlack(2, 2)).toBe(true);
  });
  test("isTileBlack with row 2 col 3 should return false", () => {
    expect(isTileBlack(1, 2)).toBe(false);
  });
  test("isTileWhite with row 2 col 3 should return true", () => {
    expect(isTileWhite(1, 2)).toBe(true);
  });
});

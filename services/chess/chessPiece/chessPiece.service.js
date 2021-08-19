class ChessPiece {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }
  isBlack() {
    return this.color === "black";
  }
  isWhite() {
    return !this.isBlack();
  }
}

export default ChessPiece;

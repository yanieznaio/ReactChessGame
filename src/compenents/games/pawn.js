const pawnMoove = (chessGame, PiecePosition, color) => {
  var diagonalLeftUp = [];
  var diagonalRightUp = [];
  var up = [];
  var canEat = [];

  const letters = "abcdefgh";

  const checkIfcanBeEat = (square) => {
    return chessGame[square].occupiedColor !== color;
  };

  const checkIfMovePossible = (square) => {
    return chessGame[square].occupiedPiece === undefined;
  };
};

export { pawnMoove };

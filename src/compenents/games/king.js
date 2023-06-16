const kingMoove = (chessGame, PiecePosition, color) => {
  var diagonal = (LeftUp = []);
  var diagonalLeftDown = [];
  var diagonalRightUp = [];
  var diagonalRightDown = [];
  var canEat = [];
  const letters = "abcdefgh";

  const checkIfcanBeEat = (square) => {
    return chessGame[square].occupiedColor !== color;
  };

  const checkIfMovePossible = (square) => {
    return chessGame[square].occupiedPiece === undefined;
  };
};

export { kingMoove };

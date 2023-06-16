const queenMoove = (chessGame, PiecePosition, color) => {
  var diagonalLeftUp = [];
  var diagonalLeftDown = [];
  var diagonalRightUp = [];
  var diagonalRightDown = [];
  var forward = [];
  var downward = [];
  var left = [];
  var right = [];
  var canEat = [];
  const letters = "abcdefgh";

  const checkIfcanBeEat = (square) => {
    return chessGame[square].occupiedColor !== color;
  };

  const checkIfMovePossible = (square) => {
    return chessGame[square].occupiedPiece === undefined;
  };
};

export { queenMoove };

const knightMoove = (chessGame, PiecePosition, color) => {
  var leftUp = [];
  var leftDown = [];
  var rightUp = [];
  var rightDown = [];
  var canEat = [];

  const letters = "abcdefgh";

  const checkIfcanBeEat = (square) => {
    return chessGame[square].occupiedColor !== color;
  };

  const checkIfMovePossible = (square) => {
    return chessGame[square].occupiedPiece === undefined;
  };
};

export { knightMoove };

const bishopMove = (chessGame, piecePosition, color) => {
  var diagonalLeftUp = [];
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

  //upRight for white || downLeft for black
  if (
    (color === "white" && piecePosition[1] < 8) ||
    (color === "black" && piecePosition[1] > 1)
  ) {
    var letterIndex = letters.indexOf(piecePosition[0]) + 1;
    for (
      let i = parseInt(piecePosition[1]) + 1, n = letterIndex;
      i <= 8 && n <= 7;
      i++, n++
    ) {
      var pos = letters[n].concat(i);
      if (!checkIfMovePossible(pos, color)) {
        if (checkIfcanBeEat(pos)) {
          canEat.push(pos);
        }
        break;
      } else {

      }
    }
  }

  return;
};

export { bishopMove };

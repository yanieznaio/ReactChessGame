const knightMoove = (chessGame, piecePosition, color) => {
  var lMove = [];
  var canEat = [];

  const moves = [
    [-1, +2],
    [-2, +1],
    [-2, -1],
    [-1, -2],
    [+1, +2],
    [+2, +1],
    [+2, -1],
    [+1, -2],
  ];

  const letters = "abcdefgh";

  const checkIfcanBeEat = (square) => {
    return chessGame[square].occupiedColor !== color;
  };

  const checkIfMovePossible = (square) => {
    return chessGame[square].occupiedPiece;
  };

  moves.forEach((move) => {
    let letterIndex = letters.indexOf(piecePosition[0]) + move[0];

    let num = parseInt(piecePosition[1]) + move[1];
    if (letters[letterIndex] && num > 0 && num <= 8) {
      let pos = letters[letterIndex].concat(num);

      if (!!checkIfMovePossible(pos)) {
        if (checkIfcanBeEat(pos)) {
          canEat.push(pos);
        }
      } else {
        lMove.push(pos);
      }
    }
  });

  return [lMove, canEat];
};

export { knightMoove };

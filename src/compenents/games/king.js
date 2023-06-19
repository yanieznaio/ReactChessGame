const kingMoove = (chessGame, piecePosition, color) => {
  var diagonalLeftUp;
  var diagonalLeftDown;
  var diagonalRightUp;
  var diagonalRightDown;
  var right;
  var left;
  var up;
  var down;
  var canEat = [];
  var nextpos = [];
  var nextmove = [];
  const letters = "abcdefgh";

  const checkIfcanBeEat = (square) => {
    return chessGame[square].occupiedColor !== color;
  };

  const checkIfMovePossible = (square) => {
    return chessGame[square]?.occupiedPiece;
  };

  // left
  if (color === "white") {
    diagonalLeftUp = letters[letters.indexOf(piecePosition[0]) - 1]?.concat(
      parseInt(piecePosition[1]) + 1
    );
    diagonalRightUp = letters[letters.indexOf(piecePosition[0]) + 1]?.concat(
      parseInt(piecePosition[1]) + 1
    );
    left = letters[letters.indexOf(piecePosition[0]) - 1]?.concat(
      parseInt(piecePosition[1])
    );
    right = letters[letters.indexOf(piecePosition[0]) + 1]?.concat(
      parseInt(piecePosition[1])
    );
    diagonalLeftDown = letters[letters.indexOf(piecePosition[0]) - 1]?.concat(
      parseInt(piecePosition[1]) - 1
    );
    diagonalRightDown = letters[letters.indexOf(piecePosition[0]) + 1]?.concat(
      parseInt(piecePosition[1]) - 1
    );
    down = piecePosition[0].concat(parseInt(piecePosition[1]) - 1);
    up = piecePosition[0].concat(parseInt(piecePosition[1]) + 1);
  }
  if (color === "black") {
    diagonalLeftUp = letters[letters.indexOf(piecePosition[0]) + 1]?.concat(
      parseInt(piecePosition[1]) - 1
    );
    diagonalRightUp = letters[letters.indexOf(piecePosition[0]) - 1]?.concat(
      parseInt(piecePosition[1]) - 1
    );
    left = letters[letters.indexOf(piecePosition[0]) + 1]?.concat(
      parseInt(piecePosition[1])
    );
    right = letters[letters.indexOf(piecePosition[0]) - 1]?.concat(
      parseInt(piecePosition[1])
    );
    diagonalLeftDown = letters[letters.indexOf(piecePosition[0]) - 1]?.concat(
      parseInt(piecePosition[1]) - 1
    );
    diagonalRightDown = letters[letters.indexOf(piecePosition[0]) + 1]?.concat(
      parseInt(piecePosition[1]) - 1
    );
    down = piecePosition[0].concat(parseInt(piecePosition[1]) + 1);
    up = piecePosition[0].concat(parseInt(piecePosition[1]) - 1);
  }
  nextpos.push(
    diagonalLeftUp,
    diagonalLeftDown,
    diagonalRightUp,
    diagonalRightDown,
    left,
    right,
    up,
    down
  );
  console.log(nextpos);

  nextpos.forEach((pos) => {
    console.log(checkIfMovePossible(pos));
    if (checkIfMovePossible(pos)) {
      if (checkIfcanBeEat(pos)) {
        canEat.push(pos);
      }
    } else {
      nextmove.push(pos);
    }
  });

  return [nextmove, canEat];
};

export { kingMoove };

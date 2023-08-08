const getKingPos = (chessGame, colorTurn) => {
  var kingpos = Object.keys(chessGame).reduce(function (result, square) {
    if (
      chessGame[square].occupiedPiece === "king" &&
      chessGame[square].occupiedColor !== colorTurn
    ) {
      return square;
    }
    return result;
  });
  return kingpos;
};

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
    // Check if the king is not in the leftmost column (not at 'a')
    if (letters.indexOf(piecePosition[0]) > 0) {
      left = letters[letters.indexOf(piecePosition[0]) - 1].concat(
        parseInt(piecePosition[1])
      );
      // Check if the king is not in the rightmost column (not at 'h')
      if (letters.indexOf(piecePosition[0]) < 7) {
        diagonalLeftUp = letters[letters.indexOf(piecePosition[0]) - 1].concat(
          parseInt(piecePosition[1]) + 1
        );
        diagonalLeftDown = letters[
          letters.indexOf(piecePosition[0]) - 1
        ].concat(parseInt(piecePosition[1]) - 1);
      }
    }
    // Check if the king is not in the rightmost column (not at 'h')
    if (letters.indexOf(piecePosition[0]) < 7) {
      right = letters[letters.indexOf(piecePosition[0]) + 1].concat(
        parseInt(piecePosition[1])
      );
      // Check if the king is not in the leftmost column (not at 'a')
      if (letters.indexOf(piecePosition[0]) > 0) {
        diagonalRightUp = letters[letters.indexOf(piecePosition[0]) + 1].concat(
          parseInt(piecePosition[1]) + 1
        );
        diagonalRightDown = letters[
          letters.indexOf(piecePosition[0]) + 1
        ].concat(parseInt(piecePosition[1]) - 1);
      }
    }

    // Correct the up move for white king
    if (parseInt(piecePosition[1]) < 8) {
      up = piecePosition[0].concat(parseInt(piecePosition[1]) + 1);
    }
  }
  if (color === "black") {
    if (parseInt(piecePosition[1]) > 1) {
      diagonalLeftUp = letters[letters.indexOf(piecePosition[0]) + 1]?.concat(
        parseInt(piecePosition[1]) - 1
      );
      diagonalRightUp = letters[letters.indexOf(piecePosition[0]) - 1]?.concat(
        parseInt(piecePosition[1]) - 1
      );
      up = piecePosition[0].concat(parseInt(piecePosition[1]) - 1);
    }
    if (parseInt(piecePosition[1]) < 8) {
      diagonalLeftDown = letters[letters.indexOf(piecePosition[0]) - 1]?.concat(
        parseInt(piecePosition[1]) - 1
      );
      diagonalRightDown = letters[
        letters.indexOf(piecePosition[0]) + 1
      ]?.concat(parseInt(piecePosition[1]) - 1);
      down = piecePosition[0].concat(parseInt(piecePosition[1]) + 1);
    }
    left = letters[letters.indexOf(piecePosition[0]) + 1]?.concat(
      parseInt(piecePosition[1])
    );
    right = letters[letters.indexOf(piecePosition[0]) - 1]?.concat(
      parseInt(piecePosition[1])
    );
  }

  const validDiagonalSquares = [
    diagonalLeftUp,
    diagonalLeftDown,
    diagonalRightUp,
    diagonalRightDown,
  ].filter(
    (square) =>
      square &&
      square.length === 2 &&
      letters.includes(square[0]) &&
      /[1-8]/.test(square[1])
  );
  nextpos.push(...validDiagonalSquares, left, right, up, down);

  nextpos.forEach((pos) => {
    if (!!checkIfMovePossible(pos)) {
      if (checkIfcanBeEat(pos)) {
        canEat.push(pos);
      }
    } else {
      nextmove.push(pos);
    }
  });

  return [nextmove, canEat];
};

export { kingMoove, getKingPos };

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
    return chessGame[square].occupiedPiece;
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

      if (!!checkIfMovePossible(pos)) {
        if (checkIfcanBeEat(pos)) {
          canEat.push(pos);
        }
        break;
      }

      color === "white"
        ? diagonalRightUp.push(pos)
        : diagonalLeftDown.push(pos);
    }
  }

  //downRight for white // upleft got black
  if (
    (color === "white" && piecePosition[1] > 1) ||
    (color === "black" && piecePosition[1] > 1)
  ) {
    var letterIndex = letters.indexOf(piecePosition[0]) + 1;
    for (
      let i = parseInt(piecePosition[1]) - 1, n = letterIndex;
      i >= 1 && n <= 7;
      i--, n++
    ) {
      var pos = letters[n].concat(i);

      if (!!checkIfMovePossible(pos)) {
        if (checkIfcanBeEat(pos)) {
          canEat.push(pos);
        }
        break;
      }
      color === "white"
        ? diagonalRightDown.push(pos)
        : diagonalLeftUp.push(pos);
    }
  }

  //left up for white || downright for black
  if (
    (color === "white" && piecePosition[1] < 8) ||
    (color === "black" && piecePosition[1] < 8)
  ) {
    var letterIndex = letters.indexOf(piecePosition[0]) - 1;
    for (
      let i = parseInt(piecePosition[1]) + 1, n = letterIndex;
      i <= 8 && n >= 0;
      i++, n--
    ) {
      var pos = letters[n].concat(i);

      if (!!checkIfMovePossible(pos)) {
        if (checkIfcanBeEat(pos)) {
          canEat.push(pos);
        }
        break;
      }
      color === "white"
        ? diagonalLeftUp.push(pos)
        : diagonalRightDown.push(pos);
    }
  }

  //leftDown for white || rightup for black
  if (
    (color === "white" && piecePosition[1] > 1) ||
    (color === "black" && piecePosition[1] > 1)
  ) {
    var letterIndex = letters.indexOf(piecePosition[0]) - 1;
    for (
      let i = parseInt(piecePosition[1]) - 1, n = letterIndex;
      i >= 1 && n >= 0;
      i--, n--
    ) {
      var pos = letters[n].concat(i);

      if (!!checkIfMovePossible(pos)) {
        if (checkIfcanBeEat(pos)) {
          canEat.push(pos);
        }
        break;
      }
      color === "white"
        ? diagonalLeftDown.push(pos)
        : diagonalRightUp.push(pos);
    }
  }
  return [
    [
      ...diagonalLeftDown,
      ...diagonalRightUp,
      ...diagonalRightDown,
      ...diagonalLeftUp,
    ],
    canEat,
  ];
};

export { bishopMove };

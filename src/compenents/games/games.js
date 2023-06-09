//rook
const rookMove = (chessGame, pieceName, color) => {
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
    return chessGame[square].occupiedPiece;
  };

  //forward //backward for black
  if (
    (color === "white" && pieceName[1] < 8) ||
    (color === "black" && pieceName[1] > 1)
  ) {
    for (let i = parseInt(pieceName[1]) + 1; i <= 8; i++) {
      var square = pieceName[0].concat(i);
      if (!!checkIfMovePossible(square, color)) {
        if (checkIfcanBeEat(square)) {
          canEat.push(square);
        }

        break;
      }

      color === "white" ? forward.push(square) : downward.push(square);
    }
    //backward //forward for black
    if (
      (color === "white" && pieceName[1] > 1) ||
      (color === "black" && pieceName[1] < 8)
    ) {
      for (let i = parseInt(pieceName[1]) - 1; i > 0; i--) {
        var square = pieceName[0].concat(i);

        if (!!checkIfMovePossible(square, color)) {
          if (checkIfcanBeEat(square)) {
            canEat.push(square);
          }
          break;
        }

        color === "white" ? downward.push(square) : forward.push(square);
      }
    }

    //left
    if (
      (color === "white" && pieceName[0] !== "a") ||
      (color === "black") & (pieceName[0] != "h")
    ) {
      for (let i = letters.indexOf(pieceName[0]) - 1; i >= 0; i--) {
        var square = letters[i].concat(pieceName[1]);
        if (!!checkIfMovePossible(square, color)) {
          if (checkIfcanBeEat(square)) {
            canEat.push(square);
          }
          break;
        }

        color === "white" ? left.push(square) : right.push(square);
      }
    }

    //right
    if (
      (color === "white" && pieceName[0] !== "h") ||
      (color === "black") & (pieceName[0] != "a")
    ) {
      for (let i = letters.indexOf(pieceName[0]) + 1; i < 8; i++) {
        var square = letters[i].concat(pieceName[1]);
        if (!!checkIfMovePossible(square, color)) {
          if (checkIfcanBeEat(square)) {
            canEat.push(square);
          }
          break;
        }

        color === "white" ? right.push(square) : left.push(square);
      }
    }

    //ajouter un tableau des pieces
    return [[...forward, ...downward, ...left, ...right], [...canEat]];
  }
};

export { rookMove };

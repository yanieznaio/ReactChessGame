import { Piece } from "../echiquier/EchiquierElements";

const pawnMoove = (chessGame, piecePosition, color) => {
  var up = [];
  var canEat = [];

  const letters = "abcdefgh";

  const checkIfcanBeEat = (square) => {
    return chessGame[square].occupiedColor !== color;
  };

  const checkIfMovePossible = (square) => {
    return chessGame[square]?.occupiedPiece;
  };

  if (parseInt(piecePosition[1]) < 8 && color === "white") {
    const nextPos = piecePosition[0].concat(parseInt(piecePosition[1]) + 1);
    if (piecePosition[1] === "2") {
      //2 move possible
      var nextnextPos = piecePosition[0].concat(parseInt(piecePosition[1]) + 2);
    }
    if (!checkIfMovePossible(nextPos)) {
      up.push(nextPos, nextnextPos);
    }

    //check if piece can be eat

    var diagonalleftUpPos = letters[
      letters.indexOf(piecePosition[0]) - 1
    ]?.concat(parseInt(piecePosition[1]) + 1);
    var diagonalrightUpPos = letters[
      letters.indexOf(piecePosition[0]) + 1
    ]?.concat(parseInt(piecePosition[1]) + 1);

    if (checkIfMovePossible(diagonalleftUpPos)) {
      if (checkIfcanBeEat(diagonalleftUpPos)) {
        canEat.push(diagonalleftUpPos);
      }
    }
    if (checkIfMovePossible(diagonalrightUpPos)) {
      if (checkIfcanBeEat(diagonalrightUpPos)) {
        canEat.push(diagonalrightUpPos);
      }
    }
  }

  if (parseInt(piecePosition[1]) > 1 && color === "black") {
    const nextPos = piecePosition[0].concat(parseInt(piecePosition[1]) - 1);

    if (color === "black" && piecePosition[1] === "7") {
      //2 move possible
      var nextnextPos = piecePosition[0].concat(parseInt(piecePosition[1]) - 2);
    }
    if (!checkIfMovePossible(nextPos)) {
      up.push(nextPos, nextnextPos);
    }

    //check if piece can be eat

    var diagonalleftUpPos = letters[
      letters.indexOf(piecePosition[0]) - 1
    ]?.concat(parseInt(piecePosition[1]) - 1);
    var diagonalrightUpPos = letters[
      letters.indexOf(piecePosition[0]) + 1
    ]?.concat(parseInt(piecePosition[1]) - 1);
    console.log(diagonalleftUpPos);
    console.log(checkIfMovePossible(diagonalleftUpPos));
    console.log(diagonalrightUpPos);
    console.log(checkIfMovePossible(diagonalrightUpPos));
    if (checkIfMovePossible(diagonalleftUpPos)) {
      if (checkIfcanBeEat(diagonalleftUpPos)) {
        canEat.push(diagonalleftUpPos);
      }
    }
    if (checkIfMovePossible(diagonalrightUpPos)) {
      if (checkIfcanBeEat(diagonalrightUpPos)) {
        canEat.push(diagonalrightUpPos);
      }
    }
  }

  return [up, canEat];
};

export { pawnMoove };

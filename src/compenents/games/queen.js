import { bishopMove } from "./bishop";
import { rookMove } from "./games";

const queenMoove = (chessGame, piecePosition, color) => {
  var diagonalMove = bishopMove(chessGame, piecePosition, color);
  var rookmove = rookMove(chessGame, piecePosition, color);

  return [
    [...diagonalMove[0], ...rookmove[0]],
    [...diagonalMove[1], ...rookmove[1]],
  ];
};

export { queenMoove };

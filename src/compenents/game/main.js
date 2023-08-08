import { bishopMove } from "./bishop";
import { knightMoove } from "./knight";
import { rookMove } from "./rook";
import { queenMoove } from "./queen";
import { getKingPos, kingMoove } from "./king";
import { pawnMoove } from "./pawn";

const getMove = async (piece, chessGame, colorTurn) => {
  var newMove;

  const occupiedPiece = chessGame[piece].occupiedPiece;

  switch (occupiedPiece) {
    case "bishop":
      newMove = bishopMove(chessGame, piece, colorTurn);
      break;
    case "knight":
      newMove = knightMoove(chessGame, piece, colorTurn);
      break;
    case "rook":
      newMove = rookMove(chessGame, piece, colorTurn);
      break;
    case "king":
      newMove = kingMoove(chessGame, piece, colorTurn);
      break;
    case "queen":
      newMove = queenMoove(chessGame, piece, colorTurn);
      break;
    default:
      newMove = pawnMoove(chessGame, piece, colorTurn);
  }

  return newMove;
};

export { getMove };

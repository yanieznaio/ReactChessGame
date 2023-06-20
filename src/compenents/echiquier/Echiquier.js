import {
  Container,
  ChessPlate,
  Column,
  Row,
  Piece,
  WhiteInfo,
  BlackInfo,
  ScoreWhite,
  ScoreBlack,
  ColorTurn,
} from "./EchiquierElements";
import { FaChessPawn } from "react-icons/fa";
import { useContext } from "react";
import { StateContext } from "../StateProvider";
import { rookMove } from "../games/games.js";
import { bishopMove } from "../games/bishop";
import { knightMoove } from "../games/knight";
import { pawnMoove } from "../games/pawn";
import { kingMoove } from "../games/king";
import { queenMoove } from "../games/queen";
const Echiquier = () => {
  const {
    chessGame,
    setChessGame,
    pieceChoice,
    setPieceChoice,
    possibleMove,
    setPossibleMove,
    possibleEat,
    setPossibleEat,
    winWhite,
    setWinWhite,
    setWinBlack,
    winBlack,
    colorTurn,
    setColorTurn,
  } = useContext(StateContext);
  const letters = "abcdefgh";

  const handleClick = (piece) => {
    if (chessGame[piece].occupiedColor === colorTurn) {
      setPieceChoice(piece);
      var newMove;
      console.log(chessGame[piece].occupiedPiece);
      switch (chessGame[piece].occupiedPiece) {
        case "bishop":
          newMove = bishopMove(
            chessGame,
            piece,
            chessGame[piece].occupiedColor
          );
          break;
        case "knight":
          newMove = knightMoove(
            chessGame,
            piece,
            chessGame[piece].occupiedColor
          );
          break;
        case "rook":
          newMove = rookMove(chessGame, piece, chessGame[piece].occupiedColor);
          break;
        case "king":
          newMove = kingMoove(chessGame, piece, chessGame[piece].occupiedColor);
          break;
        case "queen":
          newMove = queenMoove(
            chessGame,
            piece,
            chessGame[piece].occupiedColor
          );
          break;
        default:
          newMove = pawnMoove(chessGame, piece, chessGame[piece].occupiedColor);
      }

      console.log(newMove);

      setPossibleMove(newMove[0]);
      setPossibleEat(newMove[1]);
    }
    return;
  };

  const handleEat = (piece, color) => {
    color === "white"
      ? setWinBlack([...winWhite, piece.icon])
      : setWinWhite([...winBlack, piece.icon]);
  };

  const handleMove = (square) => {
    if (possibleMove.includes(square)) {
      const piece = chessGame[pieceChoice];

      setChessGame({
        ...chessGame,
        [pieceChoice]: {
          occupiedPiece: "",
          occupiedColor: "",
          icon: "",
        },
        [square]: {
          occupiedPiece: piece.occupiedPiece,
          occupiedColor: piece.occupiedColor,
          icon: piece.icon,
        },
      });

      setPossibleEat([]);
      setColorTurn(colorTurn === "white" ? "black" : "white");
    } else if (possibleEat.includes(square)) {
      const piece = chessGame[pieceChoice];
      handleEat(chessGame[square], chessGame[square].occupiedColor);
      setChessGame({
        ...chessGame,
        [pieceChoice]: {
          occupiedPiece: undefined,
          occupiedColor: undefined,
          icon: undefined,
        },
        [square]: {
          occupiedPiece: piece.occupiedPiece,
          occupiedColor: piece.occupiedColor,
          icon: piece.icon,
        },
      });

      setPossibleMove([]);
      setPossibleEat([]);
      setColorTurn(colorTurn === "white" ? "black" : "white");
    } else {
      return;
    }
  };
  return (
    <Container>
      <ColorTurn>Player: {colorTurn}</ColorTurn>
      <ChessPlate>
        {[...Array(8)].map((x, i) => (
          <Column key={i} name={letters[i]}>
            {letters[i]}

            {[...Array(8)].map((x, n) => (
              <Row
                key={n}
                name={letters[i].concat(n + 1)}
                greenBorder={possibleMove.includes(letters[i].concat(n + 1))}
                white={
                  (i % 2 === 0 && n % 2 === 0) || (i % 2 !== 0 && n % 2 !== 0)
                }
                onClick={() => handleMove(letters[i].concat(n + 1))}
              >
                <Piece
                  onClick={() => handleClick(letters[i].concat(n + 1))}
                  green={pieceChoice === letters[i].concat(n + 1)}
                  color={chessGame[letters[i].concat(n + 1)]?.occupiedColor}
                >
                  {chessGame[letters[i].concat(n + 1)].icon}
                </Piece>
              </Row>
            ))}
          </Column>
        ))}
      </ChessPlate>
      <BlackInfo>
        <ScoreBlack>Black win: {winBlack.length}</ScoreBlack>
        <p>{winBlack}</p>
      </BlackInfo>
      <WhiteInfo>
        <ScoreWhite>White win : {winWhite.length}</ScoreWhite>
        <p>{winWhite}</p>
      </WhiteInfo>
    </Container>
  );
};

export default Echiquier;

//placer les pieces

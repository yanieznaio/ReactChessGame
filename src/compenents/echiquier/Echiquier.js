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
} from "./EchiquierElements";
import { FaChessPawn } from "react-icons/fa";
import { useContext } from "react";
import { StateContext } from "../StateProvider";
import { rookMove } from "../games/games.js";
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
  } = useContext(StateContext);
  const letters = "abcdefgh";

  const handleClick = (piece) => {
    setPieceChoice(piece);

    const newPossibleMove = rookMove(
      chessGame,
      piece,
      chessGame[piece].occupiedColor
    );

    setPossibleMove(newPossibleMove[0]);

    setPossibleEat(newPossibleMove[1]);
  };

  const handleEat = (piece, color) => {
    console.log(piece);
    color === "white"
      ? setWinWhite([...winWhite, piece[2]])
      : setWinBlack([...winBlack, piece[2]]);
    console.log(winWhite);
    console.log(winBlack);
  };

  const handleMove = (square) => {
    if (possibleMove.includes(square)) {
      const piece = chessGame[pieceChoice];
      setChessGame((prevState) => ({
        ...prevState,
        pieceChoice: {
          occupiedPiece: undefined,
          occupiedColor: undefined,
          icon: undefined,
        },
        square: {
          occupiedPiece: piece.occupiedPiece,
          occupiedColor: piece.occupiedColor,
          icon: piece.icon,
        },
      }));

      setPossibleMove([]);
      setPossibleEat([]);
    } else if (possibleEat.includes(square)) {
      const piece = chessGame[square];

      handleEat(piece, piece.occupiedColor);
      setChessGame((prevState) => ({
        ...prevState,
        pieceChoice: {
          occupiedPiece: undefined,
          occupiedColor: undefined,
          icon: undefined,
        },
        square: {
          occupiedPiece: piece.occupiedPiece,
          occupiedColor: piece.occupiedColor,
          icon: piece.icon,
        },
      }));

      setPossibleMove([]);
      setPossibleEat([]);
    } else {
      return "";
    }
    console.log(chessGame);
  };
  return (
    <Container>
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
                  color={chessGame[letters[i].concat(n + 1)]?.color}
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

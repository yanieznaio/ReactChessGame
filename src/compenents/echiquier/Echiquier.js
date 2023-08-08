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
  Title,
  InfoContainer,
} from "./EchiquierElements";
import { FaChessPawn } from "react-icons/fa";
import { useContext, useEffect, useRef } from "react";
import { StateContext } from "../StateProvider";
import { rookMove } from "../game/rook";
import { bishopMove } from "../game/bishop";
import { knightMoove } from "../game/knight";
import { pawnMoove } from "../game/pawn";
import { getKingPos, kingMoove } from "../game/king";
import { queenMoove } from "../game/queen";
import { getMove } from "../game/main";
import PawnPromotion from "./PawnPromotion";
import WinMessage from "../WinMessage";
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
    check,
    setCheck,
    pawnPromotion,
    setPawnPromotion,
    lastMove,
    setLastMove,
    gameOver,
    setGameOver,
    winner,
    setWinner,
  } = useContext(StateContext);
  const letters = "abcdefgh";
  const colorTurnRef = useRef(colorTurn);
  useEffect(() => {
    if (gameOver) {
      console.log("game Over", winner, "win");
    }
  }, [gameOver, winner]);

  useEffect(() => {
    if (lastMove !== null && chessGame[lastMove]?.occupiedPiece === "pawn") {
      if (colorTurnRef.current === "white" && parseInt(lastMove[1]) === 8) {
        setPawnPromotion("white");
      } else if (
        colorTurnRef.current === "black" &&
        parseInt(lastMove[1]) === 1
      ) {
        setPawnPromotion("black");
      } else {
        setPawnPromotion(null);
      }
    } else {
      setPawnPromotion(null);
    }
  }, [lastMove, chessGame, setPawnPromotion]);

  useEffect(() => {
    colorTurnRef.current = colorTurn;
  }, [colorTurn]);

  const checkIfKingMated = async (kingPos, chessGame, colorTurn) => {
    const kingNextMove = await getMove(kingPos, chessGame, colorTurn);
    console.log("next move", kingNextMove);
  };
  const seeIfKingInCheck = async (square, chessGame, colorTurn) => {
    const kingPos = getKingPos(chessGame, colorTurn);
    const lastMoveNextMove = await getMove(square, chessGame, colorTurn);

    if (lastMoveNextMove[1].includes(kingPos)) {
      checkIfKingMated(kingPos, chessGame, colorTurn);

      setCheck(colorTurn === "white" ? "black" : "white");
    } else {
      setCheck(false);
    }
    setLastMove(square);
    setColorTurn(colorTurn === "white" ? "black" : "white");
  };

  const handleClick = async (piece) => {
    if (chessGame[piece].occupiedColor === colorTurn) {
      setPieceChoice(piece);
      const newMove = await getMove(piece, chessGame, colorTurn);

      setPossibleMove(newMove[0]);
      setPossibleEat(newMove[1]);
    }
  };

  const handleEat = (piece) => {
    colorTurn === "white"
      ? setWinWhite([...winWhite, piece.icon])
      : setWinBlack([...winBlack, piece.icon]);
  };

  const handleMove = async (square) => {
    if (possibleMove.includes(square)) {
      const piece = chessGame[pieceChoice];
      const updatedChessGame = {
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
      };
      setChessGame(updatedChessGame);
      setPossibleMove([]);
      setPossibleEat([]);
      seeIfKingInCheck(square, updatedChessGame, colorTurn);
      setColorTurn(colorTurn === "white" ? "black" : "white");
    } else if (possibleEat.includes(square)) {
      const piece = chessGame[pieceChoice];
      handleEat(chessGame[square]);
      const updatedChessGame = {
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
      };

      setChessGame(updatedChessGame);
      setPossibleMove([]);
      setPossibleEat([]);
      seeIfKingInCheck(square, updatedChessGame, colorTurn);
    } else {
      return;
    }
  };

  const seeIfDisabled = (square) => {
    if (check === colorTurn && chessGame[square].occupiedPiece !== "king") {
      return true;
    }
    return false;
  };
  return (
    <Container>
      <InfoContainer>
        <BlackInfo>
          <ScoreBlack>Black win: {winBlack.length}</ScoreBlack>
          <p>{winBlack}</p>
        </BlackInfo>

        <Title>ChessGame</Title>
        {check && <p>{check} in Check</p>}
        <WhiteInfo>
          <ScoreWhite>White win : {winWhite.length}</ScoreWhite>
          <p>{winWhite}</p>
        </WhiteInfo>
      </InfoContainer>
      {pawnPromotion && <PawnPromotion />}
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
                <>
                  <Piece
                    key={n}
                    onClick={() => handleClick(letters[i].concat(n + 1))}
                    green={pieceChoice === letters[i].concat(n + 1)}
                    color={chessGame[letters[i].concat(n + 1)]?.occupiedColor}
                    disabled={seeIfDisabled(letters[i].concat(n + 1))}
                  >
                    {chessGame[letters[i].concat(n + 1)].icon}
                  </Piece>
                </>
              </Row>
            ))}
          </Column>
        ))}
      </ChessPlate>
    </Container>
  );
};

export default Echiquier;

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

  const handleClick = (pieceName) => {
    setPieceChoice(pieceName);
    //const possibleMove = checkPossibleMove(pieceName)
    const color = chessGame.filter((ele) => ele.name === pieceName)[0].color;
    const newPossibleMove = rookMove(chessGame, pieceName, color);

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
      const piece = chessGame.find((ele) => ele.name === pieceChoice).occupied;
      const color = chessGame.find((ele) => ele.name === pieceChoice).color;

      const newChessGame = chessGame
        .map((ele) =>
          ele.name === pieceChoice
            ? { ...ele, occupied: undefined, color: "" }
            : ele
        )
        .map((x) =>
          x.name === square ? { ...x, occupied: piece, color: color } : x
        );
      setChessGame(newChessGame);
      setPossibleMove([]);
      setPossibleEat([]);
    } else if (possibleEat.includes(square)) {
      const piece = chessGame.find((ele) => ele.name === pieceChoice).occupied;
      const color = chessGame.find((ele) => ele.name === pieceChoice).color;
      const pieceEat = chessGame.find((ele) => ele.name === square).occupied;
      handleEat(pieceEat, color);
      const newChessGame = chessGame
        .map((ele) =>
          ele.name === pieceChoice
            ? { ...ele, occupied: undefined, color: "" }
            : ele
        )
        .map((x) =>
          x.name === square ? { ...x, occupied: piece, color: color } : x
        );

      setChessGame(newChessGame);
      setPossibleMove([]);
      setPossibleEat([]);
    } else {
      return "";
    }
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
                {chessGame
                  .filter((ele) => ele.name == letters[i].concat(n + 1))
                  .map((ele) => (
                    <>
                      <Piece
                        onClick={() => handleClick(ele.name)}
                        green={pieceChoice === ele.name}
                        color={ele.color}
                      >
                        {ele.occupied}
                      </Piece>
                    </>
                  ))}
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

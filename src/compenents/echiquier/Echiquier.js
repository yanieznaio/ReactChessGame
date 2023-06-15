import { Container, ChessPlate, Column, Row, Piece } from "./EchiquierElements";
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
  } = useContext(StateContext);
  const letters = "abcdefgh";

  const handleClick = (pieceName) => {
    setPieceChoice(pieceName);
    //const possibleMove = checkPossibleMove(pieceName)
    const color = chessGame.filter((ele) => ele.name === pieceName)[0].color;
    const newPossibleMove = rookMove(chessGame, pieceName, color);
    console.log(newPossibleMove);
    setPossibleMove(newPossibleMove[0]);
    console.log(possibleMove);
    setPossibleEat(newPossibleMove[1]);
  };

  const handleMove = (square) => {
    if (possibleMove.includes(square) || possibleEat.includes(square)) {
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
    </Container>
  );
};

export default Echiquier;

//placer les pieces

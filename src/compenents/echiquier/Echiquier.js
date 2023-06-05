import { Container, ChessPlate, Column, Row, Piece } from "./EchiquierElements";
import { FaChessPawn } from "react-icons/fa";
import { useContext } from "react";
import { StateContext } from "../StateProvider";
const Echiquier = () => {
  const { chessGame, setChessGame, pieceChoice, setPieceChoice, possibleMove, setPossibleMove } =
    useContext(StateContext);
  const letters = "abcdefgh";
  
  
  
  const checkPossibleMove = (currPos) => {
    const prevLetter = letters[letters.indexOf(currPos[0]) -1]
    const nextLetter = letters[letters.indexOf(currPos[0]) +1]
    const nextMove = [
      currPos[0].concat(parseInt(currPos[1]) + 1),
      prevLetter.concat(parseInt(currPos[1]) + 1),
      nextLetter.concat(parseInt(currPos[1]) + 1)
    ]
    setPossibleMove(nextMove)
  }
  
  
  const handleClick = (pieceName) => {
    setPieceChoice(pieceName)
    const possibleMove = checkPossibleMove(pieceName)
    const color = chessGame.filter((ele) => ele.name === pieceName)[0].color;
    const piece = chessGame.filter((ele) => ele.name === pieceName)[0].occupied;
    console.log(color);
   /*  const nextpos =
      color === "white"
        ? pieceName[0].concat(parseInt(pieceName[1]) + 1)
        : pieceName[0].concat(parseInt(pieceName[1]) - 1);

    const newChessGame = chessGame
      .map((ele) =>
        ele.name === pieceName ? { ...ele, occupied: "", color: "" } : ele
      )
      .map((x) =>
        x.name === nextpos ? { ...x, occupied: piece, color: color } : x
      );

    console.log(newChessGame);
    setChessGame(newChessGame); */
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
                greenBorder = {possibleMove.includes(letters[i].concat(n+1))}
                white={
                  (i % 2 === 0 && n % 2 === 0) || (i % 2 !== 0 && n % 2 !== 0)
                }
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

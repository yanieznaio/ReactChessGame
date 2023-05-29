import { Container, ChessPlate, Column, Row, Piece } from "./EchiquierElements";
import { FaChessPawn } from "react-icons/fa";
import { useContext } from "react";
import { StateContext } from "../StateProvider";
const Echiquier = () => {
  const { chessGame, setChessGame, pieceChoice, setPieceChoice } =
    useContext(StateContext);
  const letters = "abcdefgh";

  console.log(chessGame);

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
                white={
                  (i % 2 === 0 && n % 2 === 0) || (i % 2 !== 0 && n % 2 !== 0)
                }
              >
                {chessGame
                  .filter((ele) => ele.name == letters[i].concat(n + 1))
                  .map((ele) => (
                    <>
                      <Piece
                        onClick={() => setPieceChoice(ele.name)}
                        green={pieceChoice === ele.name}
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

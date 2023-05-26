import { Container, Column, Row } from "./EchiquierElements";
import { FaChessPawn } from "react-icons/fa";
import { useContext } from "react";
import { StateContext } from "../StateProvider";
const Echiquier = () => {
  const { chessGame, setChessGame } = useContext(StateContext);
  const letters = "abcdefgh";

  console.log(chessGame);

  return (
    <Container>
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
                  <p>{ele.name}</p>
                ))}
            </Row>
          ))}
        </Column>
      ))}
    </Container>
  );
};

export default Echiquier;

//placer les pieces

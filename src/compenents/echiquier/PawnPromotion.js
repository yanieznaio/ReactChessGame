import styled from "styled-components";
import { FaChessBishop, FaChessKnight } from "react-icons/fa";
import { TbChessRookFilled } from "react-icons/tb";
import { GiChessQueen } from "react-icons/gi";
import { useContext } from "react";
import { StateContext } from "../StateProvider";

const piecesChoice = [
  {
    piece: "bishop",
    icon: <FaChessBishop />,
  },
  {
    piece: "rook",
    icon: <TbChessRookFilled />,
  },
  {
    piece: "queen",
    icon: <GiChessQueen />,
  },
  {
    piece: "knight",
    icon: <FaChessKnight />,
  },
];
const PawnPromotion = () => {
  const {
    lastMove,
    pawnPromotion,
    setPawnPromotion,
    chessGame,
    setChessGame,
    colorTurn,
    setColorTurn,
  } = useContext(StateContext);

  const handleClick = (piece) => {
    const newPiece = piecesChoice.find((x) => x.piece === piece);

    setChessGame({
      ...chessGame,
      [lastMove]: {
        occupiedPiece: newPiece.piece,
        occupiedColor: pawnPromotion, // Utilisez colorTurn au lieu de pawnPromotion
        icon: newPiece.icon,
      },
    });

    setPawnPromotion(false);
  };

  return (
    <>
      <Background />
      <Container>
        <h2>Pawn Promotion</h2>
        <h3>Choose a piece:</h3>

        <PiecesChoiceContainer>
          {piecesChoice &&
            piecesChoice.map((piece, i) => (
              <Piece onClick={() => handleClick(piece.piece)} key={i}>
                {piece.icon}
              </Piece>
            ))}
        </PiecesChoiceContainer>
      </Container>
    </>
  );
};

export default PawnPromotion;

const Container = styled.div`
  position: absolute;
  background: white;
  top: 25%;
  border-radius: 20px;
  padding: 2rem;
`;

const PiecesChoiceContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  gap: 1rem;
`;

const Background = styled.div`
  background: black;
  opacity: 0.5;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Piece = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  opacity: 0.7;
  font-size: 2rem;
  &:hover {
    opacity: 1;
  }
`;

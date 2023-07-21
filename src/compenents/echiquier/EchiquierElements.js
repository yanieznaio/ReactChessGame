import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  background: rgb(84, 84, 197, 0.4);
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
`;
export const ColorTurn = styled.h2`
  color: green;
  font-size: 1rem;
`;
export const ChessPlate = styled.div`
  display: grid;

  height: 50%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  grid-template-columns: repeat(8, 70px);

  @media screen and (max-width: 800px) {
  }
`;

export const Column = styled.div`
  display: flex;

  flex-direction: column-reverse;
  justify-content: space-evenly;
`;

export const Row = styled.div`
  width: 100%;
  height: 70px;
  background: ${(props) => (props.white ? "#B1B2FF" : "#D2DAFF")};
  color: ${(props) => props.color};
  font-size: 1.2rem;
  box-sizing: border-box;
  border: ${(props) => (props.greenBorder ? "4px solid green" : "")};
`;

export const Piece = styled.p`
  color: ${(props) => (props.green ? "green" : props.color)};
  cursor: grab;
`;

export const BlackInfo = styled.div`
  color: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
`;
export const WhiteInfo = styled.div`
  border-radius: 12px;
  display: flex;
  align-items: center;
`;

export const ScoreWhite = styled.h3`
  color: white;
  display: flex;
`;

export const ScoreBlack = styled.h3`
  color: black;
  display: flex;
`;

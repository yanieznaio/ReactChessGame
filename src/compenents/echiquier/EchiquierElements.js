import styled from "styled-components";
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
`;
export const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  background: rgb(84, 84, 197, 0.4);
  gap: 10px;

  align-items: center;
  justify-content: space-between;
`;
export const ColorTurn = styled.h2`
  color: green;
`;

export const Title = styled.p`
  color: white;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  font-size: 2rem;
`;
export const ChessPlate = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  display: flex;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

export const Row = styled.div`
  background: ${(props) => (props.white ? "#B1B2FF" : "#D2DAFF")};
  color: ${(props) => props.color};
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  border: ${(props) => (props.greenBorder ? "3px solid green" : "")};
  display: flex;
  justify-content: center;
`;

export const Piece = styled.button`
  background: none;
  border: none;
  color: ${(props) => (props.green ? "green" : props.color)};
  cursor: grab;
  font-size: 1.2rem;
`;

export const BlackInfo = styled.div`
  color: white;
  border-radius: 12px;
`;
export const WhiteInfo = styled.div`
  border-radius: 12px;
`;

export const ScoreWhite = styled.h3`
  color: white;
`;

export const ScoreBlack = styled.h3`
  color: black;
`;

import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ChessPlate = styled.div`
  display: grid;

  height: 50%;
  border: 1px solid;
  grid-template-columns: repeat(8, 70px);

  @media screen and (max-width: 800px) {
  }
`;

export const Column = styled.div`
  border: 1px solid;
  background: pink;
  display: flex;

  flex-direction: column-reverse;
  justify-content: space-evenly;
`;

export const Row = styled.div`
  width: 100%;
  height: 70px;
  background: ${(props) => (props.white ? "#394867" : "#B2C8DF")};
  color: ${(props) => props.color};
  font-size: 1.2rem;
  border: ${props => props.greenBorder ? '4px solid green' : ''}
  
  
`;

export const Piece = styled.p`
  color: ${(props) => props.green ? 'green' : props.color};
  cursor: grab;
  

`;

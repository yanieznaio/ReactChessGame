import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 600px;
  height: 600px;
  margin: auto;
  border: 1px solid;
  grid-template-columns: repeat(8, 1fr);

  @media screen and (max-width: 800px) {
    width: 100%;
    height: auto;
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
  height: 100px;
  background: ${(props) => (props.white ? "black" : "white")};
  color: ${(props) => (props.white ? "white" : "black")};
`;

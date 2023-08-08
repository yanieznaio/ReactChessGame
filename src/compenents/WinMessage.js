import styled from "styled-components";

const WinMessage = ({ winner }) => {
  return (
    <>
      <Background />
      <Container>
        <h1>Chess mate , {winner} win</h1>
      </Container>
    </>
  );
};

export default WinMessage;

const Container = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 20px;
  position: absolute;
  top: 25%;
`;

const Background = styled.div`
  background: black;
  opacity: 0.3;
  position: absolute;

  height: 100vh;
  width: 100vw;
`;

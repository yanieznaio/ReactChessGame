import { createContext, useState } from "react";
import { FaChessPawn } from "react-icons/fa";
import { TbChessRookFilled } from "react-icons/tb";
import { FaChessKnight } from "react-icons/fa";
import { FaChessBishop } from "react-icons/fa";
import { GiChessQueen } from "react-icons/gi";
import { GiChessKing } from "react-icons/gi";
export const StateContext = createContext();

const StateProvider = ({ children }) => {
  const occupiedSquare = [
    { a1: ["rook", "white", <TbChessRookFilled />] },
    { b1: ["knight", "white", <FaChessKnight />] },
    { c1: ["bishop", "white", <FaChessBishop />] },
    { d1: ["queen", "white", <GiChessQueen />] },
    { e1: ["king", "white", <GiChessKing />] },
    { f1: ["bishop", "white", <FaChessBishop />] },
    { g1: ["knight", "white", <FaChessKnight />] },
    { h1: ["rook", "white", <TbChessRookFilled />] },
    { a2: ["pawn", "white", <FaChessPawn />] },
    { b2: ["pawn", "white", <FaChessPawn />] },
    { c2: ["pawn", "white", <FaChessPawn />] },
    { d2: ["pawn", "white", <FaChessPawn />] },
    { e2: ["pawn", "white", <FaChessPawn />] },
    { f2: ["pawn", "white", <FaChessPawn />] },
    { g2: ["pawn", "white", <FaChessPawn />] },
    { h2: ["pawn", "white", <FaChessPawn />] },
    { a8: ["rook", "black", <TbChessRookFilled />] },
    { b8: ["knight", "black", <FaChessKnight />] },
    { c8: ["bishop", "black", <FaChessBishop />] },
    { d8: ["queen", "black", <GiChessQueen />] },
    { e8: ["king", "black", <GiChessKing />] },
    { f8: ["bishop", "black", <FaChessBishop />] },
    { g8: ["knight", "black", <FaChessKnight />] },
    { h8: ["rook", "black", <TbChessRookFilled />] },
    { a7: ["pawn", "black", <FaChessPawn />] },
    { b7: ["pawn", "black", <FaChessPawn />] },
    { c7: ["pawn", "black", <FaChessPawn />] },
    { d7: ["pawn", "black", <FaChessPawn />] },
    { e7: ["pawn", "black", <FaChessPawn />] },
    { f7: ["pawn", "black", <FaChessPawn />] },
    { g7: ["pawn", "black", <FaChessPawn />] },
    { h7: ["pawn", "black", <FaChessPawn />] },
  ];

  const createCaseName = () => {
    var arr = [];
    const letters = "abcdefgh";
    for (let i = 0; i < 8; i++) {
      for (let n = 1; n <= 8; n++) {
        arr.push(letters[i].concat(n));
      }
    }
    return arr;
  };

  const createObject = () => {
    const caseName = createCaseName();
    var object = [];
    for (let i = 0; i < 64; i++) {
      object[i] = {
        name: caseName[i],
        occupied: occupiedSquare
          .filter((square) => square[caseName[i]])
          .map((square) => square[caseName[i]])[0],
        color: occupiedSquare
          .filter((square) => square[caseName[i]])
          .map((square) => square[caseName[i]][1])
          .join(""),
      };
    }

    return object;
  };

  const [chessGame, setChessGame] = useState(createObject());
  const [pieceChoice, setPieceChoice] = useState();
  const [possibleMove, setPossibleMove] = useState([]);
  const [possibleEat, setPossibleEat] = useState([]);
  const [winWhite, setWinWhite] = useState([]);
  const [winBlack, setWinBlack] = useState([]);
  return (
    <StateContext.Provider
      value={{
        chessGame,
        setChessGame,
        pieceChoice,
        setPieceChoice,
        possibleMove,
        setPossibleMove,
        possibleEat,
        setPossibleEat,
        winWhite,
        setWinWhite,
        winBlack,
        setWinBlack,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;

import { createContext, useState } from "react";
import { FaChessPawn } from "react-icons/fa";
import { TbChessRookFilled } from "react-icons/tb";
import { FaChessKnight } from "react-icons/fa";
import { FaChessBishop } from "react-icons/fa";
import { GiChessQueen } from "react-icons/gi";
import { GiChessKing } from "react-icons/gi";
export const StateContext = createContext();

const StateProvider = ({ children }) => {
  const occupiedSquare = {
    a1: { piece: "rook", color: "white", icon: <TbChessRookFilled /> },
    b1: { piece: "knight", color: "white", icon: <FaChessKnight /> },
    c1: { " piece": "bishop", color: "white", icon: <FaChessBishop /> },
    d1: { piece: "queen", color: "white", icon: <GiChessQueen /> },
    e1: { piece: "king", color: "white", icon: <GiChessKing /> },
    f1: { piece: "bishop", color: "white", icon: <FaChessBishop /> },
    g1: { piece: "knight", color: "white", icon: <FaChessKnight /> },
    h1: { piece: "rook", color: "white", icon: <TbChessRookFilled /> },
    a2: { piece: "pawn", color: "white", icon: <FaChessPawn /> },
    b2: { piece: "pawn", color: "white", icon: <FaChessPawn /> },
    c2: { piece: "pawn", color: "white", icon: <FaChessPawn /> },
    d2: { piece: "pawn", color: "white", icon: <FaChessPawn /> },
    e2: { piece: "pawn", color: "white", icon: <FaChessPawn /> },
    f2: { piece: "pawn", color: "white", icon: <FaChessPawn /> },
    g2: { piece: "pawn", color: "white", icon: <FaChessPawn /> },
    h2: { piece: "pawn", color: "white", icon: <FaChessPawn /> },
    a8: { piece: "rook", color: "black", icon: <TbChessRookFilled /> },
    b8: { piece: "knight", color: "black", icon: <FaChessKnight /> },
    c8: { " piece": "bishop", color: "black", icon: <FaChessBishop /> },
    d8: { piece: "queen", color: "black", icon: <GiChessQueen /> },
    e8: { piece: "king", color: "black", icon: <GiChessKing /> },
    f8: { " piece": "bishop", color: "black", icon: <FaChessBishop /> },
    g8: { piece: "knight", color: "black", icon: <FaChessKnight /> },
    h8: { piece: "rook", color: "black", icon: <TbChessRookFilled /> },
    a7: { piece: "pawn", color: "black", icon: <FaChessPawn /> },
    b7: { piece: "pawn", color: "black", icon: <FaChessPawn /> },
    d7: { piece: "pawn", color: "black", icon: <FaChessPawn /> },
    c7: { " piece": "pawn", color: "black", icon: <FaChessPawn /> },
    f7: { " piece": "pawn", color: "black", icon: <FaChessPawn /> },
    e7: { piece: "pawn", color: "black", icon: <FaChessPawn /> },
    h7: { piece: "pawn", color: "black", icon: <FaChessPawn /> },
    g7: { piece: "pawn", color: "black", icon: <FaChessPawn /> },
  };

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
    var object = {};
    for (let i = 0; i < 64; i++) {
      object[caseName[i]] = {
        occupiedPiece: occupiedSquare[caseName[i]]?.piece,
        occupiedColor: occupiedSquare[caseName[i]]?.color,
        icon: occupiedSquare[caseName[i]]?.icon,
      };
    }
    console.log(object);
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

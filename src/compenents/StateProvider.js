import { createContext, useState } from "react";

export const StateContext = createContext();

const StateProvider = ({ children }) => {
  const occupiedSquare = [
    { a1: ["rook", "white"] },
    { b1: ["knight", "white"] },
    { c1: ["bishop", "white"] },
    { d1: ["queen", "white"] },
    { e1: ["king", "white"] },
    { f1: ["bishop", "white"] },
    { g1: ["knight", "white"] },
    { h1: ["rook", "white"] },
    { a2: ["pawn", "white"] },
    { b2: ["pawn", "white"] },
    { c2: ["pawn", "white"] },
    { d2: ["pawn", "white"] },
    { e2: ["pawn", "white"] },
    { f2: ["pawn", "white"] },
    { g2: ["pawn", "white"] },
    { h2: ["pawn", "white"] },
    { a8: ["rook", "black"] },
    { b8: ["knight", "black"] },
    { c8: ["bishop", "black"] },
    { d8: ["queen", "black"] },
    { e8: ["king", "black"] },
    { f8: ["bishop", "black"] },
    { g8: ["knight", "black"] },
    { h8: ["rook", "black"] },
    { a7: ["pawn", "black"] },
    { b7: ["pawn", "black"] },
    { c7: ["pawn", "black"] },
    { d7: ["pawn", "black"] },
    { e7: ["pawn", "black"] },
    { f7: ["pawn", "black"] },
    { g7: ["pawn", "black"] },
    { h7: ["pawn", "black"] },
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
          .map((square) => square[caseName[i]]),
      };
    }
    return object;
  };

  const [chessGame, setChessGame] = useState(createObject());

  return (
    <StateContext.Provider value={{ chessGame, setChessGame }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;

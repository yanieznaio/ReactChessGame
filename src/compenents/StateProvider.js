import { createContext, useState } from "react";

export const StateContext = createContext();

const StateProvider = ({ children }) => {
  const checkDefaultOccupied = () => {
    const Pieces = [
      {
        name: "rook",
        squares: ["a", "h"],
      },
      {
        name: "knight",
        squares: ["b", "g"],
      },
      {
        name: "Bishop",
        squares: ["c", "f"],
      },
      {
        name: "queen",
        squares: ["d"],
      },
      {
        name: "king",
        squares: ["e"],
      },
      {
        name: "pawn",
        squares: ["a", "b", "c", "d", "e", "f", "g", "h"],
      },
    ];
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
    var object = [];
    for (let i = 0; i < 64; i++) {
      object[i] = {
        name: caseName[i],
        occupied: [caseName[i][1] === 8 || 7 | 1 | 2 ? true : false],
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

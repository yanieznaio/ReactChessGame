import { createContext, useState } from "react";

export const StateContext = createContext();

const StateProvider = ({ children }) => {
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
      object[i] = { name: caseName[i] };
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

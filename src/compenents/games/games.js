

//rook 
const rookMove = (chessGame, pieceName, color) => {
    var forward = []
    var downward = []
    var left = []
    var right = []
    const letters = "abcdefgh";
    
    const checkIfMoveNotPossible = (letter, num, color) => {   
        var isoccupied = chessGame.filter(ele => ele.name === letter.concat(num))[0].occupied
        console.log(isoccupied !== undefined)
        var samecolor = chessGame.filter(ele => ele.name == letter.concat(num))[0].color
        console.log(samecolor == color)
        return chessGame.filter(ele => ele.name === letter.concat(num)).occupied !== '' && 
        chessGame.filter(ele => ele.name == letter.concat(num)).color === color
        
    }
    
    //forward
    if(color == "white" && pieceName[1] < 8 || color === "black" && pieceName[1] > 1){
        for(let i = parseInt( pieceName[1]) +1; i <= 8; i++){
            if(checkIfMoveNotPossible(pieceName[0], i, color))break;

            else if(color === 'white'){
                console.log(pieceName[0].concat(i))
                forward.push(pieceName[0].concat(i))
            }
            else if(color === 'black'){
                console.log(pieceName[0].concat(i))
                downward.push(pieceName[0].concat(i))
            }
        }
    }
    
    //downward
    if(color == "white" && pieceName[1] > 1 || color === "black" && pieceName[1] < 8){
        for(let i = pieceName[1]; i > 0; i--){
            if(checkIfMoveNotPossible(pieceName[0], i, color)){ break;}
        
        if(color === 'white'){
            downward.push(pieceName[0].concat(i))
        }
        if(color === 'black'){
            forward.push(pieceName[0].concat(i))
        }
    }
    }
 
      //left
    if(pieceName[0] != "a"){
        
        for(let i = letters.indexOf(pieceName[0]) ; i > 0; i--){
            if(checkIfMoveNotPossible(letters[i], pieceName[1], color)){break;}
            left.push(letters[i].concat(pieceName[1]))
        }
    }
    
    //right
    if(pieceName[0] != "h")
      for(let i = letters.indexOf(pieceName[0]) + 1 ; i <= 8; i++){
        if(checkIfMoveNotPossible(letters[i], pieceName[1], color)){break;}
        left.push(letters[i].concat(pieceName[1]))
    }
    
    var possibleMove = [...forward, ...downward, ...left, ...right]
    return possibleMove
}

export {rookMove}

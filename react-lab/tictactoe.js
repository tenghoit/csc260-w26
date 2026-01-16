import React from "react";
import GameGrid from "./GameGrid.js";


// TODO: Import useState() hook
import {useState} from "react"


function Game() {

   // TODO: Replace variables with state variables
   const [moves, setMoves] = useState(Array(9).fill(""));

   const [turn, setTurn] = useState("X");
  
   function gridClick(whichSquare) {
      // TODO: Replace with code to set the move and turn
      console.log(moves, `whichSquare: ${whichSquare}`);
      if(moves[whichSquare] == ""){
            const movesCopy = [...moves];
            console.log("after copy: ");
            console.log(moves);
            console.log(movesCopy);

            movesCopy[whichSquare] = turn;
            console.log("after assign: ");
            console.log(moves);
            console.log(movesCopy);


            setMoves(movesCopy);
            console.log("after setting: ");
            console.log(moves);
            console.log(movesCopy);

            if(turn == "O"){
                setTurn("X");
                return;
            }
            
            if (turn == "X"){
                setTurn("O");
                return;
            }
      }
   }

   // TODO: Add newGame() function here
   function newGame(){
        setMoves(Array(9).fill(""));
        setTurn("X");
   }
  
   // TODO: Make New Game button to call newGame() when clicked
   return (
      <>
         <h1>Tic-Tac-Toe</h1>        
         <GameGrid moves={moves} click={gridClick} />
         <p>
            Turn: <strong className={turn}>{turn}</strong>
         </p>
         <p>
            <button onClick={newGame}>New Game</button>
         </p>
      </>
   );
}

export default Game;
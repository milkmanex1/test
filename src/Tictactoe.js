import React, { useState, useEffect } from "react";

//we need a state to--
//1. boolean keep track of player turn
//2. Array Keep track of which board is filled

//**Important things I learnt:
//In vanilla JS, arrays/objects are easily mutable. But when you store them as State, if you want to mutate them, need to create a copy and reassign the whole thing
//Should not mutate directly, like arr[0]='bird', or use methods like push() and pop()
//Instead use [...arr] for adding, filter, slice(not splice) for removing, map for replacing

//**Another important thing learnt/remembered:
//When you update a state. It is not updated immediately.
//When I setBoard. I call checkWin in the next line. It does not work as intended. Because board is not yet updated.
//Correct method: Call checkWin in useEffect(), with 'board' as dependency array

const Tictactoe = () => {
  const winning_combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  //keep track of current player's turn
  const [player, setPlayer] = useState("X");
  //this is to keep track of whose turn isit
  const [Xturn, setXturn] = useState(true);
  //keep track of board
  const [board, setBoard] = useState(Array(9).fill(null));
  //keep track of winner
  const [winner, setWinner] = useState("");

  useEffect(() => {
    setPlayer(Xturn ? "X" : "O");
  }, [Xturn]);

  useEffect(() => {
    if (checkWin("X")) {
      console.log("X has won");
      setWinner("X");
    } else if (checkWin("O")) {
      console.log("O has won");
      setWinner("O");
    }
  }, [board]);

  function updateBoard(index, newValue) {
    const newBoard = board.map((value, i) => {
      if (i === index) {
        return newValue;
      } else {
        return value;
      }
    });
    setBoard(newBoard);
  }

  function checkWin(player) {
    //'SOME' checks the array, returns true if one or more items pass
    return winning_combinations.some((combi) => {
      //for each winning combi, check if board[i] contains all player
      //Every checks the array, returns true if all items pass
      return combi.every((boardPosition) => {
        return board[boardPosition] == player;
      });
    });
  }

  function handleClick(index) {
    if (!board[index] && winner == "") {
      updateBoard(index, player);
      //!You can't use checkWin here. Because board is not yet updated

      //switch turn
      setXturn(!Xturn);
    } else {
      console.log("already filled");
    }
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setWinner("");
    setXturn(true);
    setPlayer("X");
  }
  function testFunction() {
    console.log(board);
    console.log("O positions:");
    board.forEach((boardValue, i) => {
      if (boardValue == "O") {
        console.log(i);
      }
    });
    console.log(checkWin("O"));
  }

  return (
    <div className="h-full w-full grid place-items-center gap-y-2">
      <div className="font-bold text-2xl">Let's play Tic Tac Toe</div>
      <div className="text-2xl">
        {winner == "" ? `It's ${player}'s turn!` : "Game Over"}
      </div>
      <div className="grid grid-rows-3 grid-cols-3">
        {board.map((boardValue, index) => {
          return (
            <div
              key={index}
              className="border-2 border-black h-24 w-24 grid place-items-center text-4xl "
              onClick={() => handleClick(index)}
            >
              {board[index]}
            </div>
          );
        })}
      </div>
      <button
        className="border-2 border-black text-2xl p-2 rounded-lg"
        onClick={resetGame}
      >
        Restart
      </button>
      {/*  <button
        className="border-2 border-black text-2xl p-2 rounded-lg"
        onClick={testFunction}
      >
        Test Button
      </button> */}
    </div>
  );
};

export default Tictactoe;

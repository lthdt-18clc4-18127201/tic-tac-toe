import { useState } from "react";
import Board from "../src/components/Board";

const WINNING_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const [isAscending, setIsAscending] = useState<boolean>(true);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  let status;

  // handle play turn
  const handlePlay = (nextSquares: Array<string>) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  const calculateWinner = (squares: Array<string>) => {
    for (const combo of WINNING_COMBOS) {
        const [a, b, c] = combo;
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return { winner: squares[a], winningCombo: combo };
        }
    }
    return null;
  };  

  // jump to a selected move history
  const jumpTo = (move: number) => {
    setCurrentMove(move);
  }


  const moves = history.map((_, move) => {
    
    
    const lastMoveIndex = history[move - 1].findIndex((square) => square !== null);
    const row = Math.floor(lastMoveIndex / 3);
    const col = lastMoveIndex % 3; 

    console.log(move, {row, col});
    
    if(move === 0) {
      <li 
        key={move} 
        onClick={() => jumpTo(move)}
        className="cursor-pointer"
      >
        {`Move ${move}: (${row}, ${col})`}
      </li>
    } else { 
      return (
        <li 
          key={move} 
          onClick={() => jumpTo(move)}
          className="cursor-pointer"
        >
          {`Move ${move}: (${row}, ${col})`}
        </li>
      )
    }
  })

  const sortedMoves = isAscending ? moves: [...moves].reverse();

  const winnerInfo = calculateWinner(currentSquares);
  const winner = winnerInfo ? winnerInfo.winner : null;
  const winningCombo = winnerInfo ? winnerInfo.winningCombo : null;

  if(winner) {
    status = "Congrats: " + winner + " is the winner!";
  } else if (currentSquares.every(square => square)) {
    status = "The game ended in a draw";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  } 

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-display mb-10 text-5xl">
        This is Tic Tac Toe Game
      </h1>
      <div className="status font-display text-3xl mb-4">{status}</div>
      <div>
        <Board 
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
          winningSquares={winningCombo}
        />
      </div>
      <div className="mt-4">
        <button 
          onClick={() => setIsAscending(!isAscending)} 
          className="bg-gradient-to-r from-blue-300 to-red-300 text-slate-900 text-3=2xl px-4 py-2 rounded"
        >
          {isAscending ? "Sort Descending" : "Sort Ascending"}
        </button>
      </div>
      <div className="mt-10 font-display text-2xl">
        <ol>{sortedMoves}</ol>
      </div>
      
    </div>
  );
}

export default Game

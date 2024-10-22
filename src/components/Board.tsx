import Square from "../components/Square";

type Props = {
    xIsNext: boolean,
    squares: Array<string>,
    onPlay:(nextSquares: Array<string>) => void,
    winningSquares: number[] | null
}

const Board = ({xIsNext, squares, onPlay, winningSquares}: Props) => {
    // handle click per turn
    const handleClick = (i: number): React.ReactNode => {
        if(squares[i] || winningSquares) return
        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? "X" : "O";
        onPlay(nextSquares);
    };


    return (
        <div className="flex flex-col justify-center items-center">
            <div className="grid grid-rows-3 gap-2 border-2 border-solid border-slate-400 p-4">
                {Array.from({ length: 3 }, (_, rowIndex) => (
                    <div key={rowIndex} className="grid grid-cols-3 gap-2">
                        {Array.from({ length: 3 }, (_, colIndex) => {
                            const index = rowIndex * 3 + colIndex;
                            const isWinningSquare = winningSquares && winningSquares.includes(index) ? 'bg-green-300' : '';
                            return (
                                <Square 
                                    key={index} 
                                    value={squares[index]} 
                                    onSquareClick={() => handleClick(index)}
                                    className={isWinningSquare}
                                />
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Board
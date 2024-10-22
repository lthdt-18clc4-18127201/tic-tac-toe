type Props = {
    value: string,
    onSquareClick?: React.MouseEventHandler,
    className?: string
}

const Square = ({value, onSquareClick, className}: Props) => {
    const hoverStyle = "transition duration-500 hover:scale-105 transform";

    return (
        <div 
            className={`w-[33px] h-[33px] border-2 border-solid border-slate-500 text-center flex justify-center items-center cursor-pointer font-display ${hoverStyle} ${className}`}
            onClick={onSquareClick}
        >
            {value}
        </div>
    )
}

export default Square
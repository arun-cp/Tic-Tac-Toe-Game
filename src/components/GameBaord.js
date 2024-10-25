import './GameBaord.css';
import { useState } from "react";

const initgameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
];

export default function GameBoard(props) {
    const [gameBoard, setGameBoard] = useState(initgameBoard);

    function handlePLSelection(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const newGameBoard = prevGameBoard.map((row, rIndex) =>
                row.map((col, cIndex) =>
                    rIndex === rowIndex && cIndex === colIndex ? props.activePlayer : col
                )
            );
            return newGameBoard;
        });
        props.setPlayer();
    }


    return(
       <div className='board'>
         {gameBoard.map((row, rowIndex) => (
               row.map((col, colIndex) => (
                <div>
                    <button onClick={() => handlePLSelection(rowIndex, colIndex)}>{col}</button>
                </div>) )
          ))}
       </div>

    )
    

}
import './GameBaord.css';

export default function GameBoard(props) {

    function handlePLSelection(rowIndex, colIndex) {
        props.setGameBoard((prevGameBoard) => {
            const newGameBoard = prevGameBoard.map((row, rIndex) =>
                row.map((col, cIndex) =>
                    rIndex === rowIndex && cIndex === colIndex ? props.activePlayer : col
                )
            );
            return newGameBoard;
        });
        props.setPlayer(rowIndex, colIndex);
    }

    return(
       <div className='board'>
         {props.gameBoard.map((row, rowIndex) => (
               row.map((col, colIndex) => (
                <div>
                    <button disabled={col!=null} onClick={() => handlePLSelection(rowIndex, colIndex)}>{col}</button>
                </div>) )
          ))}
       </div>

    )
    

}
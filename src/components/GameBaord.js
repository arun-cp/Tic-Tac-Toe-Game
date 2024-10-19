import './GameBaord.css';

const initgameBoard = [
    [1,2,3],
    [1,2,3],
    [1,2,3]
];

export default function GameBoard() {
    return(
       <div className='board'>
         {initgameBoard.map((row)=> (
               row.map((col)=> (
                <div>
                    <button>{col}</button>
                </div>) )
          ))}
       </div>

    )
    

}
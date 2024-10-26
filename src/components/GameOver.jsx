import "./GameOver.css";

export default function GameOver(props) {
    function resetGame() {
        props.resetLog([]);
        props.resetGameBoard([
            [null,null,null],
            [null,null,null],
            [null,null,null]
          ]);
          props.resetplayer("X");
    }


    return (
        <div className="game-over-dialog">
            <div className="dialog-content">
                <h1>Game Over !</h1>
                {props.Winner ? <h2>{props.Winner} Won</h2> : <h2>Draw Match</h2>}
                <button onClick={resetGame}>Rematch</button>
            </div>
        </div>
    );
}
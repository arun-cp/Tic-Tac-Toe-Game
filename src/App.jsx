import logo from "./assets/game-logo.png";
import './App.css';
import './components/PlayerInfo';
import PlayerInfo from "./components/PlayerInfo";
import GameBaord from "./components/GameBaord";
import LogBox from "./components/LogBox";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./components/WinningComb";
import { useState } from "react";

const initgameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
];

function App() {
  const [log, changeLog] = useState([]);
  const [activePlayer, setactivePlayer] = useState("X");
  const [gameBoard, setGameBoard] = useState(initgameBoard);
  let Winner = null;

  for(let comb of WINNING_COMBINATIONS) {
    let firstSymb = gameBoard[comb[0].row][comb[0].column];
    let secondSymb = gameBoard[comb[1].row][comb[1].column];
    let thirdSymb = gameBoard[comb[2].row][comb[2].column];
    if(firstSymb && firstSymb === secondSymb && firstSymb === thirdSymb) {
      Winner = firstSymb;
    }
  }
  let Draw = !Winner && log.length ===9;
  
  function setPlayer(rowIndex, colIndex) {
    setactivePlayer(() => activePlayer === "X" ? "O" : "X");
    const newLog = {
      row : rowIndex,
      column : colIndex,
      Player : activePlayer
    }
    changeLog([...log, newLog]);
    console.log(log);
  }
  
    return (
    <div className="App">
      <img src={logo} alt="Logo" />
      <h1>TIC TAC TOE</h1>
      <div className="gamebody">
        <div className="game">
          <div className="gamedetail">
            <div className ={activePlayer === "X" ? 'active' : undefined } ><PlayerInfo name={"Player 1"} symbol={"X"} /></div>
            <div className ={activePlayer === "O" ? 'active' : undefined } ><PlayerInfo name={"Player 2"} symbol={"O"} /></div>
          </div><br/><br/>
          {(Winner || Draw) && <GameOver Winner={Winner} resetLog={changeLog} resetGameBoard={setGameBoard} resetplayer={setactivePlayer} />}
          <GameBaord activePlayer={activePlayer} setPlayer={setPlayer} gameBoard={gameBoard} setGameBoard={setGameBoard} />
        </div>
        <div className="logger">
          <p>Logger</p>
          {log.map( (item) => (
            <LogBox row={item.row} col={item.column} sign={item.Player}  />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

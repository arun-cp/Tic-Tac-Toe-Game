import logo from "./assets/game-logo.png";
import './App.css';
import './components/PlayerInfo';
import PlayerInfo from "./components/PlayerInfo";
import GameBaord from "./components/GameBaord";
import { useState } from "react";

function App() {
  const [activePlayer, setactivePlayer] = useState("X");
  function setPlayer() {
    setactivePlayer(() => activePlayer === "X" ? "O" : "X");
  }
    return (
    <div className="App">
      <img src={logo} alt="Logo" />
      <h1>TIC TAC TOE</h1>
      <div className="game">
        <div className="gamedetail">
          <div className ={activePlayer === "X" ? 'active' : undefined } ><PlayerInfo name={"Player 1"} symbol={"X"} /></div>
          <div className ={activePlayer === "O" ? 'active' : undefined } ><PlayerInfo name={"Player 2"} symbol={"O"} /></div>
        </div><br/><br/>
        <GameBaord activePlayer={activePlayer} setPlayer={setPlayer} />
      </div>
      
    </div>
  );
}

export default App;

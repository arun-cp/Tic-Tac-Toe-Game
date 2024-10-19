import logo from "./assets/game-logo.png";
import './App.css';
import './components/PlayerInfo';
import PlayerInfo from "./components/PlayerInfo";
import GameBaord from "./components/GameBaord";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="Logo" />
      <h1>TIC TAC TOE</h1>
      <div className="game">
        <div className="gamedetail">
          <div><PlayerInfo name={"Player 1"} symbol={"X"} /></div>
          <div><PlayerInfo name={"Player 2"} symbol={"O"} /></div>
        </div><br/><br/>
        <GameBaord/>
      </div>
      
    </div>
  );
}

export default App;

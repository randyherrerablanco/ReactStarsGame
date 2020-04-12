import React from 'react';
import './App.css';
import Game from './components/Game';



function App() {
  const [gameId, setGameId] = React.useState(1);
  return (
    <div className="App">
      {gameId}
      <Game key={gameId} newGame={() => {setGameId(gameId + 1)}}/>
    </div>
  );
}

export default App;
 
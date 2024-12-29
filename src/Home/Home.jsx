import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [dice, setDice] = useState(null);
  const [counting, setCounting] = useState(null);
  const [gridValue, setGridValue] = useState(null);
  const [grids, setGrids] = useState(Array(6).fill(null));
  const [message, setMessage] = useState(null);

  const selectRight = () => {
    let timer = 5;
    const interval = setInterval(() => {
      setCounting(timer);
      timer -= 1;
      if (timer < 0) {
        clearInterval(interval);
        const rolledDice = Math.floor(Math.random() * 6);
        setDice(rolledDice);
      }
    }, 1000);
    setGrids(grids.map(() => Math.floor(Math.random() * 6)));
  };

  useEffect(() => {
    if (dice !== null && gridValue !== null) {
      output();
    }
  }, [dice, gridValue]);

  const match = (v) => {
    setGridValue(v);
  };

  const output = () => {
    if (gridValue === dice) {
      setMessage('You Won जुआरी');
    } else {
      setMessage('You lost जुआरी');
    }
  };

  const closeMessage = () => {
    setDice(null);          
    setGrids(Array(6).fill(null));
    setCounting(null);       
    setGridValue(null);      
    setMessage(null);  };

  return (
    <div className="main">
      <div className="header">
        <h4 id="balance">Balance: 220.0</h4>
      </div>
      <div className="box1">
        {/*{!dice && counting !== null ? <h3 id="counting">{counting}</h3> : <h3 id="dice">{dice}</h3>}*/}
        
        <div id="diceShow">
        	{!dice && counting !== null ? <h3 id="counting">{counting}</h3> : <h3 id="dice">{dice}</h3>}
        </div>
        <div id="closeReset">
        	
        </div>
      </div>
      <div>
        <button id="playButton" onClick={selectRight}>Play</button>
      </div>
      <div className="box2">
        {grids.map((grid, index) => (
          <button key={index} onClick={() => match(grid)}>
            <div id={`grid${index + 1}`} className="grid">{grid}</div>
          </button>
        ))}
      </div>

      {message && (
        <div className="alert-box">
          <p>{message}</p>
          <button onClick={closeMessage}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [dice, setDice] = useState(null);
  const [counting, setCounting] = useState(null);
  const [gridValue, setGridValue] = useState(null);
  const [activeButton, setActiveButton] = useState(null);
  const [diceColor, setDiceColor] = useState("");
  const [message, setMessage] = useState(null);

  const selectRight = () => {
    let timer = 5;
    const interval = setInterval(() => {
      setCounting(timer);
      timer -= 1;
      if (timer < 0) {
        clearInterval(interval);
        const rolledDice = Math.floor(Math.random() * 5);
        setDice(rolledDice);
      }
    }, 1000);
  };

  useEffect(() => {
    if (dice !== null && gridValue !== null) {
      output();
    }
  }, [dice, gridValue]);

  const match = (v) => {
    setActiveButton(v);
    setGridValue(v);
  };

  const output = () => {
    if (gridValue === dice) {
      setDiceColor("#de2c73")
      setMessage('You Won जुआरी');
    } else {
      setMessage('You lost जुआरी');
      setDiceColor("red")
    }
  };

  const closeMessage = () => {
    setDice(null);          
    setCounting(null);       
    setGridValue(null);      
    setMessage(null);  
    setActiveButton(null);
  };

  return (
    <div className="main">
      <div className="header">
        <h4 id="balance">Balance: 220.0</h4>
      </div>
      <div className="box1">
        <div id="diceShow">
          {!dice && counting !== null ? <h3 id="counting">{counting}</h3> : <h3 id="dice" style={{color:diceColor}}>{dice}</h3>}
        </div>
        <div id="closeReset">
          
        </div>
      </div>
      <div>
        <button id="playButton" onClick={selectRight}>Play</button>
      </div>
      <div className="box2">
        {[6, 5, 1, 2, 4, 3].map((value) => (
          <button
            key={value}
            onClick={() => match(value)}
            style={{
              backgroundColor: activeButton === value ? "green" : "white",
            }}
          >
            <h1 className="btnh1">{value}</h1>
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

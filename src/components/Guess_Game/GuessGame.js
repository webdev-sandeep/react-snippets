import React, { useState } from "react";
import "./GuessGame.css";

const GuessGame = () => {
  const [number, setNumber] = useState(Math.floor(Math.random() * 101));
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState([]);

  const handleReset = () => {
    setGuess("");
    setNumber(Math.floor(Math.random() * 101));
    setGuesses([]);
  };

  const preventMinus = (e) => {
    if (e.code === "Minus") {
      e.preventDefault();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guess >= 0) {
      setGuesses([...guesses, guess]);
      setGuess("");
    }
  };
  return (
    <div className="container">
      <img
        src="https://www.kirupa.com/icon/1f369.svg"
        alt="donut"
        width={75}
        height={75}
      />
      <h1>Guess The Number</h1>
      {guesses?.includes(`${number}`) ? (
        <button className="reset" onClick={handleReset}>
          Reset
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
          >
            <g
              fill="none"
              fill-rule="evenodd"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M3.578 6.487A8 8 0 1 1 2.5 10.5" />
              <path d="M7.5 6.5h-4v-4" />
            </g>
          </svg>
        </button>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            autoFocus={true}
            placeholder="enter a number"
            min={0}
            value={guess}
            onKeyDown={preventMinus}
            onChange={(e) => setGuess(e.target.value)}
          />
          <button>Guess</button>
        </form>
      )}

      <div className="output">
        {[...guesses].reverse()?.map((guess, index) => {
          if (parseInt(guess) > number) {
            return (
              <p
                className="guess"
                key={index}
              >{`🎈 Your guess of ${guess} is too high!`}</p>
            );
          } else if (parseInt(guess) === number) {
            return (
              <>
                <p className="guess">----- New Game Time -----</p>
                <p
                  className="guess"
                  key={index}
                >{`🎉 Your guess of ${guess} is correct!`}</p>
                <p className="guess">-------------------------</p>
              </>
            );
          }
          return (
            <p
              className="guess"
              key={index}
            >{`⚓ Your guess of ${guess} is too low!`}</p>
          );
        })}
      </div>
    </div>
  );
};

export default GuessGame;

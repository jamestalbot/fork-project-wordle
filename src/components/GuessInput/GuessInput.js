import React from 'react';
import { KEYBOARD_POSITIONS } from '../../constants';

function GuessInput({ handleGuess, isGameOver, keysStatus }) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    handleGuess(guess);
    setGuess('');
  }

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input id="guess-input" type="text" required
          disabled={isGameOver}
          pattern="^[A-Z]{5}$"
          value={guess}
          onChange={(event) => {
            const newValue = event.target.value.toUpperCase();
            if (newValue.match(/^[A-Z]{0,5}$/g))
              setGuess(newValue);
          }}
        />
      </form>
      <div className="guess-keyboard">
        {KEYBOARD_POSITIONS.map((row, index) => (
          <div
            className="guess-keyboard-row"
            key={index}
            style={{width: row.length * 37 - 4 + 'px'}}
          >
            {KEYBOARD_POSITIONS[index].map((position) => (
              <button type='button'
                key={position}
                className='guess-keyboard-key'
                data-key={keysStatus[position].letter}
                data-state={keysStatus[position].status}
              >{keysStatus[position].letter}</button>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default GuessInput;

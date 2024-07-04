import React from 'react';

function GuessInput({ handleGuess }) {
  const [guess, setGuess] = React.useState('');

  function formSubmit(event) {
    event.preventDefault();

    handleGuess(guess);
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={formSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" required
        pattern="^[A-Z]{5}$"
        value={guess}
        onChange={(event) => {
          const newValue = event.target.value.toUpperCase();
          if (newValue.match(/^[A-Z]{0,5}$/g))
            setGuess(newValue);
        }}
      />
    </form>
  );
}

export default GuessInput;

import React from 'react';
import Guess from '../Guess'

function GuessResults({ guessList }) {
  return (
      <div className="guess-results">
        {guessList.map((guess) => (
          <Guess
            key={crypto.randomUUID()}
            guessData={guess}
          />
    ))}
      </div>
  );
}

export default GuessResults;

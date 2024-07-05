import React from 'react';
import Guess from '../Guess'

function GuessResults({ answer, guessList }) {
  return (
      <div className="guess-results">
        {guessList.map((guess) => (
          <Guess
            key={crypto.randomUUID()}
            guess={guess}
            answer={answer}
          />
    ))}
      </div>
  );
}

export default GuessResults;

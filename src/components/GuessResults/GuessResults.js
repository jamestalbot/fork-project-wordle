import React from 'react';

function GuessResults({ guessList }) {
  return (
      <div className="guess-results">
        {guessList.map((guess) => (
          <p className="guess" key={guess.id}>{guess.text}</p>
    ))}
      </div>
  );
}

export default GuessResults;

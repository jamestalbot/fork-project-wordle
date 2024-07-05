import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  function handleGuess(guessText) {
    const guess = {
      id: crypto.randomUUID(),
      text: guessText,
      correct: answer === guessText,
    }
    console.log(guess);

    let nextGuessList = [...guessList]
    nextGuessList.push(guess);

    setGuessList(nextGuessList);
  }

  return (
    <div className="game-wrapper">
      <GuessResults
        guessList={guessList}
      />
      <GuessInput
        handleGuess={handleGuess}
      />
    </div>
  );
}

export default Game;

import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  function handleGuess(guess) {
    const guessObj = {
      guess: guess,
      correct: answer === guess,
    }
    console.log(guessObj);
  }

  return (
    <GuessInput
      handleGuess={handleGuess}
    />
  );
}

export default Game;

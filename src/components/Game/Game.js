import React from 'react';

import { sample } from '../../utils';
import { range } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

let emptyGuessList = [];
range(NUM_OF_GUESSES_ALLOWED).forEach(() => {
  const newGuess = {
    id: crypto.randomUUID(),
    text: '     ',
  };
  emptyGuessList.push(newGuess);
});

function Game() {
  const [guessList, setGuessList] = React.useState(emptyGuessList);
  const [guessCount, setGuessCount] = React.useState(0);

  function handleGuess(guessText) {
    if (guessCount >= NUM_OF_GUESSES_ALLOWED) return;

    let nextGuessList = [...guessList]
    nextGuessList[guessCount].text = guessText;

    setGuessCount(guessCount + 1);
    setGuessList(nextGuessList);
  }

  return (
    <div className="game-wrapper">
      <GuessResults
        answer={answer}
        guessList={guessList}
      />
      <GuessInput
        handleGuess={handleGuess}
      />
    </div>
  );
}

export default Game;

import React from 'react';

import { sample } from '../../utils';
import { range } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import EndGameBanner from '../EndGameBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const emptyGuessList = [];
range(NUM_OF_GUESSES_ALLOWED).forEach(() => {
  const newGuess = {
    id: crypto.randomUUID(),
    text: '     ',
  };
  emptyGuessList.push(newGuess);
});

const alphabet = [];
[...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].forEach((element) => {
  alphabet.push({
    letter: element,
    status: 'unused',
  });
});

function Game() {
  const [guessList, setGuessList] = React.useState(emptyGuessList);
  const [guessCount, setGuessCount] = React.useState(0);
  const [gameStatus, setGameStatus] = React.useState('active');
  const [keysStatus, setKeysStatus] = React.useState(alphabet);

  function handleGuess(guessText) {
    let nextGuessList = [...guessList]
    nextGuessList[guessCount].text = guessText;

    setGuessCount(guessCount + 1);
    setGuessList(nextGuessList);

    let nextKeysStatus = [...keysStatus];
    keysStatus.forEach(({letter, status}, index) => {
      if (guessText.indexOf(letter) >= 0) {
        if (answer.indexOf(letter) >= 0) {
          if (answer.indexOf(letter) === guessText.indexOf(letter)) {
            nextKeysStatus[index].status = 'correct';
          } else if (status === 'unused') {
            nextKeysStatus[index].status = 'present';
          }
        } else {
          nextKeysStatus[index].status = 'missing';
        }
      }
    });
    setKeysStatus(nextKeysStatus);

    if (answer === guessText) {
      setGameStatus('happy');
     } else if (NUM_OF_GUESSES_ALLOWED <= guessCount + 1) {
      setGameStatus('sad');
     }
  }

  return (
    <>
      <GuessResults
        answer={answer}
        guessList={guessList}
      />
      <GuessInput
        handleGuess={handleGuess}
        isGameOver={gameStatus !== 'active'}
        keysStatus={keysStatus}
      />
      <EndGameBanner
        answer={answer}
        guessCount={guessCount}
        gameStatus={gameStatus}
      />
    </>
  );
}

export default Game;

import React from 'react';
import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer }) {
  function getLetters(text) {
    let letters = [];
    let checkedGuess = checkGuess(text, answer)
    checkedGuess.forEach((element) =>
      letters.push({
        id: crypto.randomUUID(),
        letter: element.letter,
        status: element.letter === ' ' ? '' : element.status,
      })
    );

    return letters;
  }

  return (
    <p className="guess">
      {getLetters(guess.text).map((letter) => (
        <span className={'cell ' + letter.status} key={letter.id}>{letter.letter}</span>
      ))}
    </p>
  );
}

export default Guess;

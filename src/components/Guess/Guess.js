import React from 'react';

function getLetters(guessData) {
  let letters = [];
  [...guessData.text].forEach((element) =>
    letters.push({
      id: crypto.randomUUID(),
      letter: element,
      class: 'cell',
    })
  );

  return letters;
}

function Guess({ guessData }) {
  return (
    <p className="guess">
      {getLetters(guessData).map((letter, index) => (
        <span className={letter.class} key={letter.id}>{letter.letter}</span>
      ))}
    </p>
  );
}

export default Guess;

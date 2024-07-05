import React from 'react';

function EndGameBanner({ answer, guessCount, gameStatus }) {
  const happy = (
    <div className="banner happy">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {guessCount} guesses</strong>.
      </p>
    </div>
  );

  const sad = (
    <div className="banner sad">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );

  return (
    gameStatus === 'active' ? '' :
      gameStatus === 'happy' ? happy : sad
  );
}

export default EndGameBanner;

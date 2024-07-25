import React from 'react';

function EndGameBanner({ answer, guessCount, gameStatus, gameRestart }) {
  const happy = (
    <div className="banner happy">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {guessCount} guesses</strong>.
      </p>
      <p>
        <button id="restart" autoFocus onClick={gameRestart}>Play Again</button>
      </p>
    </div>
  );

  const sad = (
    <div className="banner sad">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <p>
        <button type="button" autoFocus onClick={gameRestart}>Try Again</button>
      </p>
    </div>
  );

  return (
    gameStatus === 'active' ? '' :
      gameStatus === 'happy' ? happy : sad
  );
}

export default EndGameBanner;

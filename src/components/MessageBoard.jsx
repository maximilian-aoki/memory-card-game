export default function MessageBoard({ phase, score }) {
  let message;
  if (phase === 'setup') {
    message = (
      <>
        <p>🔍 Welcome to Pokemon Finder!</p>
        <p>
          The goal is to select each unique pokemon WITHOUT choosing the same
          one twice. Choose a difficulty and deal the deck to get started.
        </p>
      </>
    );
  } else if (phase === 'startgame') {
    message = (
      <>
        <p>🎮 Game on!</p>
        <p>
          Select a starter pokemon ~wink wink~ and let's see how good your
          memory is...
        </p>
      </>
    );
  } else if (phase === 'goodguess') {
    message = (
      <>
        <p>👍 Good guess, that was a new Pokemon!</p>
        <p>
          Try to select another pokemon, but remember - you can't choose the
          same one twice...
        </p>
      </>
    );
  } else if (phase === 'wingame') {
    message = (
      <>
        <p>👑 Congrats, you caught 'em all!</p>
        <p>To play again, select a difficulty and deal the cards.</p>
      </>
    );
  } else if (phase === 'losegame') {
    message = (
      <>
        <p>👎 You selected an already-chosen Pokemon...</p>
        <p>Your final score was {score}</p>
        <p>To play again, select a difficulty and deal the cards.</p>
      </>
    );
  }

  return (
    <div className="message-container grid">
      <h3>MESSAGE BOARD</h3>
      <div className="message grid">{message}</div>
    </div>
  );
}

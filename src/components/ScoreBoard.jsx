export default function ScoreBoard({ score, highScore }) {
  return (
    <div className="score-container grid">
      <h3>SCOREBOARD</h3>
      <div className="score-tallies grid">
        <p>
          CURRENT SCORE: <b>{score}</b>
        </p>
        <p>
          HIGH SCORE: <b>{highScore}</b>
        </p>
      </div>
    </div>
  );
}

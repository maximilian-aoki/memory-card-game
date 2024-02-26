export default function SettingsBoard({
  difficulty,
  gameOn,
  onDifficultyChange,
  onStartGame,
}) {
  const difficultyButtons = (
    <div className="difficulty-buttons grid">
      {['Easy', 'Medium', 'Hard'].map((difficultyStr) => {
        if (difficultyStr === difficulty) {
          return (
            <button
              key={difficultyStr}
              onClick={onDifficultyChange}
              className="difficulty-button active"
              disabled={true}
            >
              {difficultyStr}
            </button>
          );
        }
        return (
          <button
            key={difficultyStr}
            onClick={onDifficultyChange}
            className="difficulty-button inactive"
          >
            {difficultyStr}
          </button>
        );
      })}
    </div>
  );

  return (
    <div className="settings-container grid">
      <h3>SETTINGS</h3>
      <div className="settings-buttons grid">
        {difficultyButtons}
        <button className="deal-button" onClick={onStartGame}>
          {gameOn ? 'Restart Game' : 'Deal Cards'}
        </button>
      </div>
    </div>
  );
}

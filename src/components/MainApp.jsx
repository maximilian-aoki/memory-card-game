import React, { Fragment, useState } from 'react';

// components
import PokeDeck from './PokeDeck.jsx';
import MessageBoard from './MessageBoard.jsx';
import ScoreBoard from './ScoreBoard.jsx';
import SettingsBoard from './SettingsBoard.jsx';

// utility functions
import { getPokemonArr } from '../utilities/pokeApi';
import { shuffleArr } from '../utilities/utils';

// styles
import '../styles/component-styles/MainApp.css';

let userData;
if (localStorage.getItem('data')) {
  userData = JSON.parse(localStorage.getItem('data'));
} else {
  userData = { highScore: 0, difficulty: 'Easy' };
}

function updateStorage(data) {
  localStorage.setItem('data', JSON.stringify(data));
}

export default function MainApp() {
  // determined on page load by localStorage
  const [highScore, setHighScore] = useState(Number(userData.highScore));
  const [difficulty, setDifficulty] = useState(userData.difficulty);

  // reset on every page load
  const [score, setScore] = useState(0);
  const [phase, setPhase] = useState('setup');
  const [gameOn, setGameOn] = useState(false);
  const [allPokemon, setAllPokemon] = useState([]);
  const [guessedPokemonIds, setGuessedPokemonIds] = useState([]);

  function handleDifficultyChange(e) {
    const newDifficulty = e.target.textContent;

    setDifficulty(newDifficulty);
    userData = { ...userData, difficulty: newDifficulty };
    updateStorage(userData);
  }

  async function handleStartGame() {
    let pokemonSize;
    if (difficulty === 'Easy') {
      pokemonSize = 8;
    } else if (difficulty === 'Medium') {
      pokemonSize = 12;
    } else if (difficulty === 'Hard') {
      pokemonSize = 16;
    }

    const newPokemonArr = await getPokemonArr(pokemonSize, 50);

    setAllPokemon(newPokemonArr);
    setPhase('startgame');
    setGameOn(true);
    setGuessedPokemonIds([]);
    setScore(0);
  }

  function handleGuess(e) {
    const guessId = Number(e.target.closest('div').getAttribute('data-id'));
    let screwedUp = false;

    for (let i = 0; i < guessedPokemonIds.length; i += 1) {
      if (guessedPokemonIds[i] === guessId) {
        screwedUp = true;
      }
    }

    if (!screwedUp) {
      guessedPokemonIds.push(guessId);

      if (guessedPokemonIds.length === allPokemon.length) {
        // win condition
        setPhase('wingame');
        setGameOn(false);
        setScore(score + 1);
        if (score + 1 > highScore) {
          setHighScore(score + 1);
          userData = { ...userData, highScore: score + 1 };
          updateStorage(userData);
        }
      } else if (guessedPokemonIds.length !== allPokemon.length) {
        // play on condition
        setAllPokemon([...shuffleArr(allPokemon)]);
        setPhase('goodguess');
        setScore(score + 1);
        if (score + 1 > highScore) {
          setHighScore(score + 1);
          userData = { ...userData, highScore: score + 1 };
          updateStorage(userData);
        }
      }
    } else if (screwedUp) {
      // loss condition
      setPhase('losegame');
      setGameOn(false);
    }
  }

  return (
    <div className="main-container grid">
      <div className="tool-container grid">
        <MessageBoard phase={phase} score={score} />
        <SettingsBoard
          difficulty={difficulty}
          gameOn={gameOn}
          onDifficultyChange={handleDifficultyChange}
          onStartGame={handleStartGame}
        />
        <ScoreBoard score={score} highScore={highScore} />
      </div>
      <div className="game-container grid">
        {gameOn && <PokeDeck allPokemon={allPokemon} onGuess={handleGuess} />}
      </div>
    </div>
  );
}

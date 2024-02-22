import React from 'react';

// utility functions
import { getPokemonArr } from '../utilities/pokeApi';

console.log(await getPokemonArr());

// styles
import '../styles/component-styles/MainApp.css';

export default function MainApp() {
  return (
    <div className="main-app-container grid">
      <h1>Hello World!</h1>
    </div>
  );
}

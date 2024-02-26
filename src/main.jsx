import React from 'react';
import ReactDOM from 'react-dom/client';

import MainApp from './components/MainApp';

import './styles/reset.css';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <header className="grid">
      <h1>Catch 'Em All!</h1>
    </header>
    <main className="grid">
      <MainApp />
    </main>
    <footer className="grid">
      <p>2024 Copyright Maximilian Aoki</p>
    </footer>
  </React.StrictMode>,
);

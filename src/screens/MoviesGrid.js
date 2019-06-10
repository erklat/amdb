import React from 'react';

import Grid from '../components/Grid';
import MenuButton from '../components/MenuButton';
import Sidebar from '../components/Sidebar';

function App() {
  return (
    <div className="Layout__container">
      <header className="Layout__header">
        <img src="http://placehold.it/120x40" alt="bla" />
        <MenuButton />
      </header>

      <Sidebar />

    <main className="Layout__page">
      <Grid />
    </main>

    <footer className="Layout__footer">
      Copyright 2018
    </footer>
    </div>
  );
}

export default App;
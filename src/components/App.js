import React from 'react';
import '../styles/App.css';
import Search from './Search';

function App() {
  return (
    <div className="App" data-testid='main-div'>
      <Search />
    </div>
  );
}

export default App;

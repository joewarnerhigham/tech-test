import React, {useState} from 'react';
import '../styles/App.css';
import Search from './Search';

function App() {
  const [searchResults, setSearchResults] = useState();
  return (
    <div className="App" data-testid='main-div'>
      <Search setSearchResults={setSearchResults} />
    </div>
  );
}

export default App;

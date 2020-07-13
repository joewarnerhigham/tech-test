import React, {useState} from 'react';
import '../styles/App.css';
import Search from './Search';
import SearchResults from './SearchResults';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  return (
    <div className="App" data-testid='main-div'>
      <Search setSearchResults={setSearchResults} searchText={searchText} setSearchText={setSearchText} />
      <SearchResults results={searchResults} />
    </div>
  );
  
}




export default App;

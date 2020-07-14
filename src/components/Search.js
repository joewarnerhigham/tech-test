import React from 'react'
import propTypes from 'prop-types';
import '../styles/Search.css';
import getImages from '../requests/getImages';


const Search = ( {setSearchResults, searchText, setSearchText}) => {

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSearchResults(await getImages(searchText));
      };

    return (
        <div className='container'>
            <img className='logo'
                 src="https://www.seekpng.com/png/full/393-3935156_nasa-app-app-logo-png-download-nasa-logo.png" 
                 alt='nasa-logo'
                 data-testid='logo'
            />
            <form className='search-form' onSubmit={handleSubmit}>
                <input className='search-bar'
                    type='text' 
                    onChange={(e) => setSearchText(e.target.value)} 
                    placeholder='Search'
                    data-testid='search-bar'
                />
                <button className='search-button' type='submit'>Go!</button>
            </form>
        </div>
    )
}

Search.propTypes = {
    searchText: propTypes.string.isRequired,
}

export default Search

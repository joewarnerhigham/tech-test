import React, {useState} from 'react'
import '../styles/Search.css';

const Search = ({ value, handleChange }) => {
    return (
        <div className='container'>
            <img className='logo'
                 src={require('../styles/nasa.jpg')} 
                 alt='nasa-logo'
                 data-testid='logo'
            />

            <input className='search-bar'
                   type='text' value={value}
                   onChange={handleChange}
                   placeholder='Search'
                   data-testid='search-bar'
            />
        </div>
    )
}

export default Search

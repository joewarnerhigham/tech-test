import React, {useState} from 'react'
import '../styles/Search.css';
import getImages from '../requests/getImages';


const Search = ( {setSearchResults }) => {
    const [value, setValue] = useState();

    const handleSubmit =(event) =>{
        event.preventDefault()
        getImages(value)
    }
    return (
        <div className='container'>
            <img className='logo'
                 src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg" 
                 alt='nasa-logo'
                 data-testid='logo'
            />
            <form className='search-form' onSubmit={handleSubmit}>
                <input className='search-bar'
                    type='text' 
                    value={value}
                    onChange={(e) => setValue(e.target.value)} 
                    placeholder='Search'
                    data-testid='search-bar'
                />
                <button className='search-button' type='submit'>Go!</button>
            </form>
        </div>
    )
}

export default Search

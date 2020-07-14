import React from 'react';
import propTypes from 'prop-types';
import '../styles/SearchResults.css';


const SearchResults = ({results}) => {

    function openTab(url) {
        const win = window.open(url, '_blank');
        win.focus();
      }

        return (
          <div className='pic-container'>
            {results.map((image) => (
              <img className="box-image" src={image} alt="nasaImage" onClick={()=>{openTab(image)}} />
            ))}
          </div>
        );
      }

SearchResults.propTypes = {
        results: propTypes.array.isRequired
}

export default SearchResults;
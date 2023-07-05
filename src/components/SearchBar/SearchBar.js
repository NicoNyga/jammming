import React, { useState } from 'react';

import styles from './SearchBar.module.css';
import SearchResults from '../SearchResults/SearchResults';

const SearchBar = () => {


        const [searchQuery, setSearchQuery] = useState('');
        const [results, setResults] = useState([]);

        const handleSearch = () => {
            //search logic goes here
            const dummyResults = [
                { id: 1, title: 'song 1'},
                { id: 2, title: 'song 2'},
                { id: 3, title: 'song 3'}
            ];

            setResults(dummyResults);
            setSearchQuery('');
        };

        const handleInputChange = (e) => {
            setSearchQuery(e.target.value);
        };


  return (
    <div className={styles.SearchBar}>
        <input 
            placeholder='Search for a Song Name here' 
            onChange={handleInputChange}
            value={searchQuery}
            type='text'
        />
        <button onClick={handleSearch}>
            SEARCH
        </button>

        <SearchResults query={searchQuery} results={results} />

    </div>
  )
}

export default SearchBar;
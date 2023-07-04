import React, { useState } from 'react';

import styles from './SearchBar.module.css';

const SearchBar = (props) => {

    const search = () => {
        const [searchInput, setSearchInput] = useState('');

        const handleNewSearch = (e) => {
            e.preventDefault();
            setSearchInput(e.target.value);
        }

    }

  return (
    <div>
        <input 
            placeholder='Search for a Song Name here' 
            onChange={handleNewSearch}
            value={searchInput}
        />
        <button onClick={search}>
            SEARCH
        </button>

    </div>
  )
}

export default SearchBar;
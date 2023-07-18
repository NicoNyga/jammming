import React, { useState, useCallback } from 'react';

import styles from './SearchBar.module.css';

const SearchBar = (props) => {
        const [query, setQuery] = useState('');

        const handleQueryChange = useCallback((e) => {
            //search logic goes here
            setQuery(e.target.value);
            }, []);

        const search = useCallback(() => {
            props.onSearch(query);
        }, [props, query]);

        



  return (
    <div className={styles.SearchBar}>
        <input 
            placeholder='Search for a Song Name here' 
            onChange={handleQueryChange}
            type='text'
        />
        <button onClick={search}>
            SEARCH
        </button>


    </div>
  )
}

export default SearchBar;
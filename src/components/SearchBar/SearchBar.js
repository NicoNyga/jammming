//SearchBar.js
import React, { useState, useCallback } from 'react';
import { fetchData } from '../util/Spotify'
import styles from './SearchBar.module.css';

const SearchBar = (props) => {
        
        const [query, setQuery] = useState('');

        const search = useCallback(async () => {
            //spotify search logic
            try {
                const response = await fetchData(query);
                props.onSearch(response);
            } catch (error) {
                // handle error
                console.error(error);
            }        
    }, [props, query]);

        const handleQueryChange = useCallback((e) => {
            setQuery(e.target.value);
            }, []);

        const handleKeyPress = useCallback((e) => {
            if (!!e && e.key === "Enter") {
                search();
            }
        }, [search]);

        

        



  return (
    <div className={styles.SearchBar}>
        <input 
            placeholder='Search for a Song Name here' 
            onChange={handleQueryChange}
            onKeyDown={handleKeyPress}
            type='text'
        />
        <button onClick={search}>
            SEARCH
        </button>


    </div>
  )
}

export default SearchBar;
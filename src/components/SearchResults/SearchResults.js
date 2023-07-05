import React from 'react';

import styles from './SearchResults.module.css';

const SearchResults = ({ query, results }) => {
  
    const addChoiceToPlaylist = (result) => {

    }
  
    return (
    <div className={styles.SearchResults}>
        <h2>Search Results for "{query}"</h2>
        {results.map((result) => (
            <>
                <div key={result.id}>{result.title}</div>
                <button onClick={addChoiceToPlaylist}>+ Add to Playlist</button>
            </>
        ))}
    </div>
  );
};

export default SearchResults;
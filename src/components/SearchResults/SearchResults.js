import React from 'react';
import Tracklist from '../Tracklist';
import styles from './SearchResults.module.css';

const SearchResults = ({ query, results }) => {
  
    const addChoiceToPlaylist = (result) => {

    }
  
    return (
    <div className={styles.SearchResults}>
        <h2>Search Results for "{query}"</h2>
        <Tracklist tracks={results} />       
    </div>
  );
};

export default SearchResults;
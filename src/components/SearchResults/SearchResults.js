//SearchResults.js
import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import styles from './SearchResults.module.css';

const SearchResults = (props) => {
  
  return (
    <div className={styles.SearchResults}>
        <h2>Search Results for "{props.query}"</h2>
        <Tracklist tracks={props.searchResults} onAdd={ props.onAdd }/>       
    </div>
  );
};

export default SearchResults;
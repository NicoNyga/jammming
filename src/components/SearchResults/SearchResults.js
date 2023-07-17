import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import styles from './SearchResults.module.css';

const SearchResults = ({ query, results }) => {
  
    const addChoiceToPlaylist = (result) => {
      //Logic to add the selected track to the playlist
    }
  
   if (results) {return (
    <div className={styles.SearchResults}>
        <h2>Search Results for "{query}"</h2>
        <Tracklist tracks={results} onAdd={ addChoiceToPlaylist }/>       
    </div>
  )};
};

export default SearchResults;
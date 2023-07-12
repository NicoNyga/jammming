import React from "react";
import styles from "./App.module.css";

import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';


function App() {



  return (
    <div className={styles.App}>
      <h1>Jamming</h1>
      <SearchBar />
      <SearchResults />
      <Playlist />
    </div>
  );
}

export default App;

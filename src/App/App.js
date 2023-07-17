import React from "react";
import styles from "./App.module.css";

import Playlist from '../components/Playlist/Playlist';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchResults from '../components/SearchResults/SearchResults';


function App() {



  return (
    <div className={styles.App}>
      
      <div className={styles.floatBox}>
        <h1 className={styles.h1}>JAMMMING</h1>
        <SearchBar />
        <SearchResults />
        <Playlist />
      </div>
    </div>
  );
}

export default App;

import React from "react";
import styles from "./App.module.css";

import Playlist from '../components/Playlist/Playlist';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchResults from '../components/SearchResults/SearchResults';


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

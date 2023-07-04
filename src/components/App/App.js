import React, { useState ,useCallback } from "react";
import styles from "./App.module.css";

import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';


function App() {

  const search = () => {
    const [searchInput, setSearchInput] = useState();
  }

  return (
    <div className="App">
      <h1>Jamming</h1>
      <SearchBar onSearch={search}/>
    </div>
  );
}

export default App;

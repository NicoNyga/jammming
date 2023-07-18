import React, { useState, useCallback} from "react";
import styles from "./App.module.css";

import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from "../../util/Spotify";

function App() {

  const [results, setResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search = useCallback((query) => {
    //spotify search logic
    Spotify.search(query).then(setResults);
  }, []);

      
  const addTrackToPlaylist = useCallback((track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
        return;

      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
  },
  [playlistTracks]
);

const removeTrackFromPlaylist = useCallback((track) => {
    setPlaylistTracks((prevTracks) =>
    prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
}, []);

const updatePlaylistName = useCallback((name) => {
  setPlaylistName(name);
}, []);

const savePlaylist = useCallback(() => {
  //save logic to save to Spotify
  const trackUris = playlistTracks.map((track) => track.uri);
  Spotify.savePlaylist(playlistName, trackUris).then(() => {
  setPlaylistName("New Playlist");
  setPlaylistTracks([]);
  });
}, [playlistName, playlistTracks]);

  return (
    <div className={styles.App}>
      
      <div className={styles.floatBox}>
        <h1 className={styles.h1}>JAMMMING</h1>
        <SearchBar onSearch={search} />
        <SearchResults searchResults={ results } onAdd={addTrackToPlaylist} />
        <Playlist 
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          onNameChange={updatePlaylistName}
          onRemove={removeTrackFromPlaylist}
          onSave={savePlaylist}
          />
      </div>
    </div>
  );
};


export default App;

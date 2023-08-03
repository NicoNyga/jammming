//App.js
import React, { useState, useEffect, useCallback} from "react";
import styles from "./App.module.css";
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import { fetchData } from "../util/Spotify";

const App = () => {

  const [results, setResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [authenticated, setAuthenticated] = useState(false); // Track authentication state

  useEffect(() => {
    // Check if access token is present in the URL hash fragment
    const accessToken = window.location.hash
      .substring(1)
      .split('&')
      .reduce((acc, item) => {
        const parts = item.split('=');
        acc[parts[0]] = parts[1];
        return acc;
      }, {})['access_token'];

    if (accessToken) {
      // If access token is present, set the authentication state to true
      setAuthenticated(true);
    }
  }, []);
  useEffect(() => {

    fetchData('').then(setResults);
  }, []);


  const search = async (query) => {
    try {
      const response = await fetchData(query);
      setResults(response);
    } catch (error) {
      //handle error
      console.error(error);
    }
  };

      
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

const savePlaylist = async () => {
  // save logic to save to Spotify
  const trackUris = playlistTracks.map((track) => track.uri);
  try {
    await fetchData.savePlaylist(playlistName, trackUris);
    setPlaylistName('New Playlist');
    setPlaylistTracks([]);
  } catch (error) {
    // handle error
    console.error(error);
  }
};

return (
  <div className={styles.App}>
    <div className={styles.floatBox}>
      <h1 className={styles.h1}>JAMMMING</h1>
      {!authenticated ? (
        <a href="https://accounts.spotify.com/authorize?client_id=bdc784d639bf41e6a1ba52397ae87c89&redirect_uri=http://localhost:3000/&response_type=token&scope=user-read-private user-read-email">
          <button>Login with Spotify</button>
        </a>
      ) : (
        <>
          <SearchBar onSearch={search} />
          <SearchResults searchResults={results} onAdd={addTrackToPlaylist} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onNameChange={updatePlaylistName}
            onRemove={removeTrackFromPlaylist}
            onSave={savePlaylist}
          />
        </>
      )}
    </div>
  </div>
);
};


export default App;

import React, { useState }from 'react';
import Tracklist from '../Tracklist/Tracklist';
import styles from './Playlist.module.css';


const Playlist = () => {

    const [playlistName, setPlaylistName] = useState('');
    const [playlistTracks, setPlaylistTracks] = useState([]);

    
    const addTrackToPlaylist = (track) => {
        setPlaylistTracks([...playlistTracks, track]);
    };

    const removeTrackFromPlaylist = (track) => {
        setPlaylistTracks(playlistTracks.filter((item) => item.id !== track.id));
    };

    const savePlaylist = () => {
        // TODO: save playlist to spotify
    }

    return (
        //return a song playlist component with option to:
        // name the playlist 
        // remove items from playlist
        // recieve choices from search results
        // save the playlist to spotify

        <>
        <div className={styles.Playlist}>
            <h2>Playlist</h2>
            <input
                    placeholder="Enter playlist name"
                    value={playlistName}
                    onChange={(e) => setPlaylistName(e.target.value)}
                    type='text'
                />
                <h2>{ playlistName }</h2>
                <Tracklist
                    tracks={playlistTracks}
                    onAdd={addTrackToPlaylist}
                    onRemove={removeTrackFromPlaylist}
                    />
                <button onClick={savePlaylist}>Save Playlist</button>
                </div>
        </>
    );
  
};



export default Playlist;
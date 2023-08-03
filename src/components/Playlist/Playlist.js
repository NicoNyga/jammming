//Playlist.js
import React, { useCallback } from 'react';
import TrackList from '../Tracklist/Tracklist';
import styles from './Playlist.module.css';


const Playlist = (props) => {
    const handleNameChange = useCallback(
        (event) => {
            props.onNameChange(event.target.value);
        },
        [props]
    );

    const handleSavePlaylist = useCallback(() => {
            props.onSave();
        }, [props]);

    return (
        //return a song playlist component with option to:
        // name the playlist 
        // remove items from playlist
        // recieve choices from search results
        // save the playlist to spotify

        
        <div className={styles.Playlist}>
            <h2>Playlist</h2>
            <input
                    value={props.playlistName}
                    onChange={handleNameChange}
                />
                <TrackList
                    tracks={props.playlistTracks}
                    isRemoval={true}
                    onRemove={props.onRemove}
                    />
                <button onClick={handleSavePlaylist}>Save Playlist</button>
                </div>
        
    );
  
};



export default Playlist;
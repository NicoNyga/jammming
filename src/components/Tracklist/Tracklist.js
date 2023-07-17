import React from 'react';
import Track from '../Track/Track';
import styles from './Tracklist.module.css';

const Tracklist = ({ tracks, onAdd }) => {
    if (tracks) {return(
        
        <div className={styles.Tracklist}>

         {tracks.map((track) => (
        
            <Track 
                key={track.id} 
                track={track}
                onAdd={onAdd}
                />
                 
        
                 ))};
        </div>
    )};
};

export default Tracklist;
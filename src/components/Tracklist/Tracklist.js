import React from 'react';
import Track from '../Track/Track';
import styles from './Tracklist.module.css';

const TrackList = (props) => {
    return(
        
        <div className={styles.Tracklist}>

         {props.tracks?.map((track) => {
            return (
        
            <Track 
                key={track.id} 
                track={track}
                onAdd={props.onAdd}
                isRemoval={props.isRemoval}
                onRemove={props.onRemove}
                />
                 
        
                 );
            })}
        </div>
    );
};

export default TrackList;
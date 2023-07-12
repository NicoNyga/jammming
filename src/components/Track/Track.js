import React from 'react';

import styles from './Track.module.css';

const Track = ({ track, onAdd, onRemove }) => {

    const handleAddClick = () => {
        onAdd(track);
    }

    const handleRemoveClick = () => {
        onRemove(track);
    }
    return (
        <div className={styles.Track}>
            <h3>{track.title}</h3>
            <p>Artist: {track.name}</p>
            <p>Album: {track.album} </p>
            <button onClick={ handleAddClick }>+</button>
            <button onClick={ handleRemoveClick }>-</button>
        </div>
    );

};

export default Track;
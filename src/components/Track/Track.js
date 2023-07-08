import React from 'react';

import styles from './Track.module.css';

const Track = ({ track }) => {
    return (
        <div className={styles.Track}>
            <h3>{track.title}</h3>
            <p>Artist: {track.name}</p>
            <p>Album: {track.album} </p>
        </div>
    );

};

export default Track;
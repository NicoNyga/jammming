import React, { useCallback } from 'react';

import styles from './Track.module.css';

const Track = (props) => {

    const addTrack = useCallback(
        (e) => {
            props.onAdd(props.track);
        },
        [props]
    );

    const removeTrack = useCallback(
        (e) => {
            props.onRemove(props.track);
        },
        [props]
    );

    const renderAction = () => {
        if (props.isRemoval) {
            return (
                <button className={styles.trackAction} onClick={removeTrack}>
                    -
                </button>
            );
        }
        return (
            <button className={styles.trackAction} onClick={addTrack}>
                +
            </button>
        );
    };

    return (
        <div className={styles.Track}>
            <h3>{props.track.name}</h3>
            <p>Artist: {props.track.artist}</p>
            <p>Album: {props.track.album} </p>
            <div>
                {renderAction()}
            </div>
        </div>
    );

};

export default Track;
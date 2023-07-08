import React from 'react';
import Track from '../Track';
import styles from './Tracklist.module.css';
import { Button } from '@mui/material';

const Tracklist = ({ tracks }) => {
    return(
        
        <div className={styles.Tracklist}>

         {tracks.map((track) => (
        
            <Track key={track.id} track={track}>
                <Button>+</Button>
            </Track> 
        
                 )
            )};
        </div>
)};

export default Tracklist;
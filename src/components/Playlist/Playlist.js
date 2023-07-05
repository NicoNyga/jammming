import React, { useState, useEffect }from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    ScrollView,
    FlatList,
  } from "react-native";
import styles from './Playlist.module.css';


const Playlist = ({tracks}) => {

    const [playlistName, setPlaylistName] = useState('');
    const [playlistTracks, setPlaylistTracks] = useState([]);

    useEffect(() => {
        setPlaylistTracks(tracks);
    }, [tracks]);

    const addTrackToPlaylist = (track) => {
        setPlaylistTracks([...playlistTracks, track]);
    }

    const removeTrackFromPlaylist = (track) => {
        setPlaylistTracks(playlistTracks.filter(item => item.id!== track.id));
    }

    const savePlaylist = () => {
        // TODO: save playlist to spotify
    }

    return (
        //return a song playlist component with option to:
        // name the playlist 
        // remove items from playlist
        // recieve choices from search results
        // save the playlistto spotify

        <>
        <div>
            <View style={styles.container}>
                <Text style={styles.title}>Song Playlist</Text>
                <TextInput
                    placeholder="Enter playlist name"
                    value={playlistName}
                    onChangeText={setPlaylistName}
                />
                <FlatList
                    data={playlistItems}
                    renderItem={({ item }) => (
                        <View style={styles.playlistItem}>
                        <Text>{item}</Text>
                        <Button
                        onPress={() => removeItemFromPlaylist(item)}
                        title="Remove"
                        />
                        </View>
                    )}
                />
                <Button onPress={savePlaylist} title="Save Playlist" />
            </View>
        </div>
        </>
    );
  
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      padding: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
    },
    playlistItem: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
    },
  });

export default Playlist;
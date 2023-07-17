import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Tracklist from '../Tracklist';

describe('<Tracklist />', () => {
    test('renders all tracks in the list', () => {
        const tracks = [
            { id: 1, title: 'song 1', name: 'Artist 1', album: 'Album 1' },
            { id: 2, title: 'song 2', name: 'Artist 2', album: 'Album 2' },
            { id: 3, title: 'song 3', name: 'Artist 3', album: 'Album 3' },
        ];

        render(<Tracklist tracks={tracks} />);

        tracks.forEach((track) => {
            const trackTitle = screen.getAllByText(track.title);
            expect(trackTitle).toBeInTheDocument();
        });
    });

    test('calls onAdd when a track is added', () => {
        const tracks = [
            { id: 1, title: 'song 1', name: 'Artist 1', album: 'Album 1' },
            { id: 2, title: 'song 2', name: 'Artist 2', album: 'Album 2' },
            { id: 3, title: 'song 3', name: 'Artist 3', album: 'Album 3' },
        ];

        let onAddCalled = false;
        const onAdd = (track) => {
            onAddCalled = true;
            expect(track).toEqual(tracks[0]);
        };

        render(<Tracklist tracks={tracks} onAdd={onAdd} />);

        const addButton = screen.getAllByText('+');

        fireEvent.click(addButton[0]);

        expect(onAddCalled).toBe(true);

    });
});

//test track -> ---TRACKLIST--- -> searchResults -> Playlist -> SearchBar -> App
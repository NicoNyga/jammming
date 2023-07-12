import React from 'react';

import {Track} from '../Track';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

describe('<Track />', () => {
    test('handles add and remove correctly and if returns proper track object', () => {
        const track = {
            id: 1,
            title: 'Song 1',
            name: 'Artist 1',
            album: 'Album 1',
        };
        let addedTrack  = null;
        let removedTrack = null;

        const onAdd = (track) => {
            addedTrack = track;
        };

        const onRemove = (track) => {
            removedTrack = track;
        };

        const { getByText } = render(
            <Track track={track} onAdd={onAdd} onRemove={onRemove} />
        );

        const addButton = getByText('+');
        const removeButton = getByText('-');

        //Test adding track
        fireEvent.click(addButton);
        expect(addedTrack).toEqual(track);

        //Test removing track
        fireEvent.click(removeButton);
        expect(removedTrack).toEqual(track);

        //Test if track object returned correctly
        const trackTitle = getByText('Song 1');
        expect(trackTitle).toBeInTheDocument();
        const trackArtist = getByText('Artist 1');
        expect(trackArtist).toBeInTheDocument();
        const trackAlbum = getByText('Album 1');
        expect(trackAlbum).toBeInTheDocument();

        const tree = renderer
            .create(<Track track={track} onAdd={onAdd} onRemove={onRemove} />)
            .toJSON();
            expect(tree).toMatchSnapshot();
    });

});

//test her first, then go to Tracklist
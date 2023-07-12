import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import {Playlist} from '../Playlist';

describe('<Playlist />', () => {
test('handles naming of playlist correctly', () => {
        render(<Playlist />);

        const input = screen.getByPlaceholderText('Enter playlist name');
        const saveButton = screen.getByTitle('Remove');

        fireEvent.change(input, { target: { value: 'Playlist'}});
        fireEvent.click(saveButton);

        expect(input.value).toBe('Playlist');


});


});

//first tracklist - next: searchbar


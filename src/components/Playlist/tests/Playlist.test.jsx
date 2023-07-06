import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {Playlist} from '../Playlist';

describe('<Playlist />', () => {
test('handles naming of playlist correctly', () => {
        const { getByPlaceholderText, getByTitle } = render(<Playlist />);

        const input = getByPlaceholderText('Enter playlist name');
        const saveButton = getByTitle('Remove');

        fireEvent.change(input, { target: { value: 'Playlist'}});
        fireEvent.click(saveButton);

        expect(input.value).toBe('Playlist');


});


});

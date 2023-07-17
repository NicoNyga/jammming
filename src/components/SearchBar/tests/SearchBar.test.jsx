import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchBar from '../SearchBar';

describe('<SearchBar />', () => {
test('handles search query correctly', () => {
        render(<SearchBar />);

        const input = screen.getByPlaceholderText('Search for a Song Name here');
        const searchButton = screen.getByText('SEARCH');

        fireEvent.change(input, { target: { value: 'Song'} });
        fireEvent.click(searchButton);

        expect(input.value).toBe('');
});

});

//test track -> tracklist -> searchResults -> Playlist -> ---SEARCHBAR--- -> App
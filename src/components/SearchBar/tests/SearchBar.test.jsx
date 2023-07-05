import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';

describe('<SearchBar />', () => {
test('handles search query correctly', () => {
        const { getByPlaceholderText, getByText } = render(<SearchBar />);

        const input = getByPlaceholderText('Search for a Song Name here');
        const searchButton = getByText('SEARCH');

        fireEvent.change(input, { target: { value: 'Song'} });
        fireEvent.click(searchButton);

        expect(input.value).toBe('');
});

});


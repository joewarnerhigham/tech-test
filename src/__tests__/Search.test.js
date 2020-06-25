import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Search from '../components/Search';

describe('Search bar', () => {

    afterEach(cleanup)

    it('should have a logo', () => {
        const {getByTestId} = render(
            <Search />
        )
    
    expect(getByTestId('logo'));  
    });

    it('should have search-bar with placeholder', () => {
        const {getByTestId} = render (
            <Search /> 
        )
    
    expect(getByTestId('search-bar')).toHaveClass('search-bar');
    });
});

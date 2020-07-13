import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SearchResults from '../components/SearchResults';

describe('SearchResults', () => {
    afterEach(cleanup);

    test('should render ', () => {
        const {asFragment} = render (
            <SearchResults />
        )
    
    expect(asFragment).toMatchSnapshot();
    })
    
})
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Search from '../components/Search';


describe('Search bar', () => {

    afterEach(cleanup)

    it('should render correctly', () => {
        const {asFragment} = render(
            <Search />
        )
    
    expect(asFragment()).toMatchSnapshot();  
    });
});
import React from 'react';
import {render, cleanup} from '@testing-library/react';
import App from '../components/App';


describe('App', () => {

  afterEach(cleanup);

  const { asFragment } = render(<App />)

  it('render the app', () => {
    
    expect(asFragment(<App />)).toMatchSnapshot()
   })
});
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Home from './Home';

test('Render correctly', ()=>{

    const {getByText} = render(<Home/>)

    const usernameText = getByText('Username:')
    expect(usernameText).toBeTruthy();

    const numberText = getByText('Number:')
    expect(numberText).toBeTruthy();

    const passwordText = getByText('Password:')
    expect(passwordText).toBeTruthy();
})
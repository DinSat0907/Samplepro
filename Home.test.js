import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Home from './Home';


jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);


test('Render correctly', ()=>{

    const {getByText} = render(<Home />)

    const header = getByText('Welcome to my WebPage')
    expect(header).toBeTruthy();

    const usernameText = getByText('Username:')
    expect(usernameText).toBeTruthy();

    const numberText = getByText('Mobile Number:')
    expect(numberText).toBeTruthy();

    const passwordText = getByText('Password:')
    expect(passwordText).toBeTruthy();

})


describe('Home Page', ()=>{
  test('should call previous page when Go Back button is pressed',()=>{

    const navigationMock = { navigate: jest.fn() };
    const { getByText } = render(<Home navigation = {navigationMock} />);

    const closeButton = getByText('Go Back');
    fireEvent.press(closeButton);

    expect(navigationMock.navigate).toHaveBeenCalledWith('Login');

 })

})
  
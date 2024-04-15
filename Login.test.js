import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Login from './Login';
import App from './App';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

test('renders correctly', () => {
  const {getByPlaceholderText, getByText} = render(<Login />);

  const loginText = getByText('LogIn');
  expect(loginText).toBeTruthy();

  const headingText = getByText('Welcome to Login Page');
  expect(headingText).toBeTruthy();

  const usernameInput = getByPlaceholderText('User Name');
  expect(usernameInput).toBeTruthy();

  const numberInput = getByPlaceholderText('Mobile Number');
  expect(numberInput).toBeTruthy();

  const passwordInput = getByPlaceholderText('Password');
  expect(passwordInput).toBeTruthy();
});



test('should call saveInput with username, number and password when login button is pressed', () => {
  
  const navigation = { navigate: jest.fn() };

  const { getByPlaceholderText, getByText } = render(<App/>);


  const emailInput = getByPlaceholderText('User Name');
  const numberInput = getByPlaceholderText('Mobile Number');
  const passwordInput = getByPlaceholderText('Password');
  const loginButton = getByText('LogIn');

  fireEvent.changeText(emailInput, 'username');
  fireEvent.changeText(numberInput, 'number');
  fireEvent.changeText(passwordInput, 'password');
  fireEvent.press(loginButton);

  expect(navigation.navigate).toHaveBeenCalledWith('Home');

});


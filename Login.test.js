import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Login from './Login';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

// jest.mock('react-native/Libraries/Alert/Alert', () => ({
//   alert: jest.fn(),
// }));



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


describe('Login-1', ()=>{

  test('should call saveInput with username, number and password when logIn button is pressed', () => {

    const navigationMock = { navigate: jest.fn() };
    const { getByText, getByPlaceholderText } = render(<Login navigation={navigationMock} />);

    const userInput = getByPlaceholderText('User Name');
    const numberInput = getByPlaceholderText('Mobile Number');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('LogIn');

    fireEvent.changeText(userInput, 'dinesh');
    fireEvent.changeText(numberInput, '1234567890');
    fireEvent.changeText(passwordInput, '12345');
    fireEvent.press(loginButton);

    // expect(Alert.alert).toHaveBeenCalledWith('Success', 'Login Successful!');

    expect(navigationMock.navigate).toHaveBeenCalledWith('Home');

  });

})



describe('Login-2', ()=>{

  test('should call saveInput with username, number and password when logIn button is pressed', () => {

    const { getByText, getByPlaceholderText } = render(<Login />);

    const userInput = getByPlaceholderText('User Name');
    const numberInput = getByPlaceholderText('Mobile Number');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('LogIn');

    fireEvent.changeText(userInput, 'dinesh');
    fireEvent.changeText(numberInput, '');
    fireEvent.changeText(passwordInput, '');
    fireEvent.press(loginButton);

    // expect(Alert.alert).toHaveBeenCalledWith('Error', 'Please enter your number.');
  });

})

describe('Login-3', ()=>{

  test('should call saveInput with username, number and password when logIn button is pressed', () => {

    const { getByText, getByPlaceholderText } = render(<Login />);

    const userInput = getByPlaceholderText('User Name');
    const numberInput = getByPlaceholderText('Mobile Number');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('LogIn');

    fireEvent.changeText(userInput, 'dinesh');
    fireEvent.changeText(numberInput, 'number');
    fireEvent.changeText(passwordInput, '');
    fireEvent.press(loginButton);

    // expect(Alert.alert).toHaveBeenCalledWith('Error', 'Please enter your password.');
  });

})

describe('Login-4', ()=>{

  test('should call saveInput with username, number and password when logIn button is pressed', () => {

    const { getByText, getByPlaceholderText } = render(<Login />);

    const userInput = getByPlaceholderText('User Name');
    const numberInput = getByPlaceholderText('Mobile Number');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('LogIn');

    fireEvent.changeText(userInput, '');
    fireEvent.changeText(numberInput, 'number');
    fireEvent.changeText(passwordInput, 'password');
    fireEvent.press(loginButton);

    // expect(Alert.alert).toHaveBeenCalledWith('Error', 'Please enter your username.');
  });

})

describe('Login-5', ()=>{

  test('should call saveInput with username, number and password when logIn button is pressed', () => {

    const { getByText, getByPlaceholderText } = render(<Login />);

    const userInput = getByPlaceholderText('User Name');
    const numberInput = getByPlaceholderText('Mobile Number');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('LogIn');

    fireEvent.changeText(userInput, '');
    fireEvent.changeText(numberInput, '');
    fireEvent.changeText(passwordInput, '');
    fireEvent.press(loginButton);

    // expect(Alert.alert).toHaveBeenCalledWith('Error', 'Please enter your username.');
  });

})
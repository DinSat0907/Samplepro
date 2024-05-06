// App.test.js

import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import App from './App'

test('render correctly',()=>{

  const {getByText} = render(<App/>)
  
  expect(getByText('Id')).toBeTruthy()
  expect(getByText('Email')).toBeTruthy()
  expect(getByText('First_Name')).toBeTruthy()
  expect(getByText('Last_Name')).toBeTruthy()
  expect(getByText('Avatar')).toBeTruthy()
})

describe('MyComponent', () => {

  test('renders data from API', async () => {
    // Mock the Axios request
    const mockData = {
      data:[
        { 
          id: 7,
          email: "michael.lawson@reqres.in",
          first_name: "Michael",
          last_name: "Lawson",
          avatar: "https://reqres.in/img/faces/7-image.jpg"
        },
        { 
          id: 8,
          email: "lindsay.ferguson@reqres.in",
          first_name: "Lindsay",
          last_name: "Ferguson",
          avatar: "https://reqres.in/img/faces/8-image.jpg"
        }, 
        { 
          id: 9,
          email: "tobias.funke@reqres.in",
          first_name: "Tobias",
          last_name: "Funke",
          avatar: "https://reqres.in/img/faces/9-image.jpg"
        },
        { 
          id: 10,
          email: "byron.fields@reqres.in",
          first_name: "Byron",
          last_name: "Fields",
          avatar: "https://reqres.in/img/faces/10-image.jpg"
        }, 
        { 
          id: 11,
          email: "george.edwards@reqres.in",
          first_name: "George",
          last_name: "Edwards",
          avatar: "https://reqres.in/img/faces/11-image.jpg"
        }, 
        { 
          id: 12,
          email: "rachel.howell@reqres.in",
          first_name: "Rachel",
          last_name: "Howell",
          avatar: "https://reqres.in/img/faces/12-image.jpg"
        }
      ]
    }
    const mock = new MockAdapter(axios);
    mock.onGet("https://reqres.in/api/users?page=2").reply(200, mockData);

    const { getByText } = render(<App />);

    // Wait for the data to be loaded
    await waitFor(() => {
      expect(getByText('7')).toBeTruthy()
      expect(getByText('michael.lawson@reqres.in')).toBeTruthy()
      expect(getByText('Michael')).toBeTruthy()
      expect(getByText('Lawson')).toBeTruthy()
      expect(getByText('https://reqres.in/img/faces/7-image.jpg')).toBeTruthy()

      expect(getByText('8')).toBeTruthy()
      expect(getByText('lindsay.ferguson@reqres.in')).toBeTruthy()
      expect(getByText('Lindsay')).toBeTruthy()
      expect(getByText('Ferguson')).toBeTruthy()
      expect(getByText('https://reqres.in/img/faces/8-image.jpg')).toBeTruthy()

      expect(getByText('9')).toBeTruthy()
      expect(getByText('tobias.funke@reqres.in')).toBeTruthy()
      expect(getByText('Tobias')).toBeTruthy()
      expect(getByText('Funke')).toBeTruthy()
      expect(getByText('https://reqres.in/img/faces/9-image.jpg')).toBeTruthy()

      expect(getByText('10')).toBeTruthy()
      expect(getByText('byron.fields@reqres.in')).toBeTruthy()
      expect(getByText('Byron')).toBeTruthy()
      expect(getByText('Fields')).toBeTruthy()
      expect(getByText('https://reqres.in/img/faces/10-image.jpg')).toBeTruthy()

      expect(getByText('11')).toBeTruthy()
      expect(getByText('george.edwards@reqres.in')).toBeTruthy()
      expect(getByText('George')).toBeTruthy()
      expect(getByText('Edwards')).toBeTruthy()
      expect(getByText('https://reqres.in/img/faces/11-image.jpg')).toBeTruthy()

      expect(getByText('12')).toBeTruthy()
      expect(getByText('rachel.howell@reqres.in')).toBeTruthy()
      expect(getByText('Rachel')).toBeTruthy()
      expect(getByText('Howell')).toBeTruthy()
      expect(getByText('https://reqres.in/img/faces/12-image.jpg')).toBeTruthy()

      
      // expect(getByText('Michael')).toBeTruthy()
      // expect(getByText('Lindsay')).toBeTruthy();
      // expect(getByText('Tobias')).toBeTruthy()
      // expect(getByText('Byron')).toBeTruthy()
      // expect(getByText('George')).toBeTruthy()
      // expect(getByText('Rachel')).toBeTruthy()
      
    });
  });

  test('handles API error', async () => {
    // Mock the Axios request to throw an error
    const mock = new MockAdapter(axios);
    mock.onGet("https://reqres.in/api/users?page=2").networkError();

    render(<App />);

    console.error = jest.fn();

    // Wait for the error to be handled
    await waitFor(() => {
      expect(console.error).toHaveBeenCalledWith('Error fetching data:', expect.any(Error));
    });
  });
});
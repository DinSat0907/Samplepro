import React from 'react';
import { render} from '@testing-library/react-native';
import axios from 'axios';
// import fetchInfo from './App'
import App from './App';
const {fetchInfo} = require('./App')

jest.mock('axios');

test('render corectly',()=>{

    const {getByText } = render(<App />);
  
    const headText1 = getByText('Id');
    expect(headText1).toBeTruthy();

    const headText2 = getByText('Email');
    expect(headText2).toBeTruthy();

    const headText3 = getByText('First_Name');
    expect(headText3).toBeTruthy();

    const headText4 = getByText('Last_Name');
    expect(headText4).toBeTruthy();

    const headText5 = getByText('Avatar');
    expect(headText5).toBeTruthy();

})


// test('render the state values',()=>{
  
// })


describe('fetchData', () => {
  it('fetches successfully data from an API', async () => {
   
    const data = [
            {
              id: 7,
              email: "michael.lawson@reqres.in",
              first_name: "Michael",
              last_name: "Lawson",
              avatar: "https://reqres.in/img/faces/7-image.jpg"
            }
      
          ];

          const resp = {  "page": 2, "per_page": 6, "total": 12, "total_pages": 2, "data": data}

          axios.get.mockResolvedValue(resp)
          const apiData = await fetchInfo
          console.log(apiData)
          expect(apiData).toBeTruthy(7)


          // const id = getByText(u.id)
          // const email = getByText(u.email)
          // const fast_name = getByText(u.first_name)
          // const last_name = getByText(u.last_name)
          // const avatar = getByText(u.avatar)
      
          // expect(id).toBeTruthy()
          // expect(email).toBeTruthy()
          // expect(fast_name).toBeTruthy()
          // expect(last_name).toBeTruthy()
          // expect(avatar).toBeTruthy()

    // axios.get.mockImplementationOnce(() => Promise.resolve(data));

    // await expect(fetchInfo).resolves.toEqual(7);

  });

  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );
  });
});
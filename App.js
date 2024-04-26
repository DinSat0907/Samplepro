import React, { useEffect, useState} from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import axios from 'axios';

export default function APP(){
  const url = "https://reqres.in/api/users?page=2";
  const [data, setData] = useState([]);


  // useEffect(() => {
  //   fetchInfo();
  // }, []);

  const fetchInfo = async() => {
    // return axios.get(url).then((res) => setData(res.data.data));

      try {
        const response = await axios.get(url);
        setData(response.data.data)
  
        return response;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    
  }

    return (
      <View>
        <View style={styles.container}>
        <Text style={styles.text1}>Id</Text><Text style={styles.text1}>Email</Text><Text style={styles.text1}>First_Name</Text><Text style={styles.text1}>Last_Name</Text><Text style={styles.text1}>Avatar</Text>
        </View>
        
        {data.map((u)=>{
          return ( 
            <View style={styles.container}>      
              <Text style={styles.text2}>{u.id}</Text><Text style={styles.text2}>{u.email}</Text><Text style={styles.text2}>{u.first_name}</Text><Text style={styles.text2}>{u.last_name}</Text><Text style={styles.text2}>{u.avatar}</Text>
            </View>  
          )
        }
      )}  
      <Button title='Get Data' onPress={fetchInfo}></Button>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent:'space-around',
    marginLeft:45
  },
  text1:{
    textAlign: 'center',
    flex:1,
    width: 280,
    paddingTop:40,
    borderWidth: 1,
    borderColor: 'black',
    fontWeight: 700,
    fontSize: 20,
    height: 100,
    backgroundColor: 'orange',
  },
  text2:{
    textAlign: 'center',
    flex:1,
    width: 280,
    paddingTop:45,
    borderWidth: 1,
    borderColor: 'black',
    fontSize: 15,
    backgroundColor: 'orange',
  }
})


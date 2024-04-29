import React, { useEffect, useState} from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import axios from 'axios';
// var id = 13

export default function APP(){
  // const url = "https://reqres.in/api/users?page=2/id";
  const [data, setData] = useState([]);
  const [name, setName] = useState('')


  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async() => {
    // return axios.get(url).then((res) => setData(res.data.data));

      try {
        const response = await axios.get("https://reqres.in/api/users/3");
        setData(response.data.data)
        console.log(response.data.data)
        return response;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
  }

  const putUser = async()=>{
    try {
      const response = await axios.put(`https://reqres.in/api/users/${3}`,{first_name: name});
      setData(response.data)
      console.log(response.data)
      // setFirst_Name('')

      return response;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }


    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.text1}>First_Name</Text>
        </View>
        <View style={styles.container}>      
          <Text  style={styles.text2}>{data.first_name}</Text>
        </View>
        <View style={styles.postContainer}>
          <TextInput style={styles.inputField} placeholder='Update Name' value={name} onChangeText={e=>setName(e)}></TextInput>
          <TouchableOpacity style={styles.btn} onPress={putUser}>Update</TouchableOpacity>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent:'space-between',
    width: 500,
  },
  text1:{
    textAlign: 'center',
    flex:1,
    width: 280,
    paddingTop:15,
    borderWidth: 1,
    borderColor: 'black',
    fontWeight: 700,
    fontSize: 20,
    height: 50,
    backgroundColor: 'orange',
  },
  text2:{
    textAlign: 'center',
    flex:1,
    width: 280,
    borderWidth: 1,
    borderColor: 'black',
    padding:10,
    fontSize: 15,
    backgroundColor: 'orange',
  },
  btn: {
    flex:1,
    alignSelf: 'center',
    paddingTop:10,
    textAlign: 'center',
    width: 100,
    height: 40,
    backgroundColor: 'blue',
    borderRadius: 8,
    marginLeft: 10

  },
  inputField:{
    flex:1,
    textAlign:'center',
    borderRadius: 8,
    height:40,
    borderWidth: 1
  },
  postContainer:{
    paddingTop:10,
    alignSelf:'center',
    flexDirection:'row',
    justifyContent: 'space-around'
  }
})


import React, { useEffect, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import axios from 'axios';

export default function APP(){
  const url = "https://reqres.in/api/users?page=2";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return axios.get(url).then((res) => setData(res.data.data));
  }

  useEffect(() => {
    fetchInfo();
  }, []);

    return (
      <View>
        <View style={styles.container}>
        <Text style={styles.text1}>ID</Text><Text style={styles.text1}>Email</Text><Text style={styles.text1}>First_Name</Text><Text style={styles.text1}>Last_Name</Text><Text style={styles.text1}>Avatar</Text>
        </View>
        {data.map((u)=>{
          return ( 
            <View style={styles.container}>      
              <Text style={styles.text2}>{u.id}</Text><Text style={styles.text2}>{u.email}</Text><Text style={styles.text2}>{u.first_name}</Text><Text style={styles.text2}>{u.last_name}</Text><Text style={styles.text2}>{u.avatar}</Text>
            </View>  
          )
        }
      )}  
      </View>
      

    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent:'space-around',
    backgroundColor: 'orange',
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
    fontSize: 20
  },
  text2:{
    textAlign: 'center',
    flex:1,
    width: 280,
    paddingTop:50,
    borderWidth: 1,
    borderColor: 'black',
    fontSize: 15
  }
})


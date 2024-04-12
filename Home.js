import { View, Text, Button, StyleSheet} from 'react-native';
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Home({navigation}){

    const [username, setUsername] = useState('')
    const [number, setNumber] = useState('')
    const [password, setPassword] = useState('')
  
    useEffect(() => {
      const retrieveData = async () => {
        try {
          const storedUsername = await AsyncStorage.getItem('username')
          const storedNumber = await AsyncStorage.getItem('number')
          const storedPassword = await AsyncStorage.getItem('password')
          setUsername(storedUsername || '')
          setNumber(storedNumber || '')
          setPassword(storedPassword || '')
        } catch (error) {
          console.error('Error retrieving data:', error);
        }

      }
  
      retrieveData()
    }, [])
    
    return(
    
    <View style={Styles.HomeCon}>
      <Text style={Styles.Header}>Welcome to my WebPage</Text>
      <View >
        <Text style={Styles.LocalStorage}><Text style={Styles.InlineText}>Username: </Text>{username}</Text>
        <Text style={Styles.LocalStorage}><Text style={Styles.InlineText}>Number: </Text>{number}</Text>
        <Text style={Styles.LocalStorage}><Text style={Styles.InlineText}>Password: </Text>{password}</Text>
      </View>

      <Button title="Go back" onPress={()=> navigation.navigate('Login')}/>
    </View>
    )
}

const  Styles = StyleSheet.create({
    HomeCon: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: "forestgreen"
    },
    Header: {
        fontWeight: '900',
        fontSize: 25
    },
    InlineText: {
        fontWeight: '600'
    },
    LocalStorage: {
        marginTop: -85,
        fontSize: 23
    }

})
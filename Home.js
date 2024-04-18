import { View, Text, Button, StyleSheet} from 'react-native';
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Home({navigation}){

    const [username, setUsername] = useState('')
    const [number, setNumber] = useState('')
    const [password, setPassword] = useState('')
  
    useEffect(() => {
      AsyncStorage.getItem('username').then((value) => setUsername(value));
      AsyncStorage.getItem('number').then((value) => setNumber(value));
      AsyncStorage.getItem('password').then((value) => setPassword(value));
    }, [])

    return(
    
      <View style={Styles.HomeCon}>
        <Text testID='HeaderName' style={Styles.Header}>Welcome to my WebPage</Text>
        <View >
          <Text style={Styles.LocalStorage}><Text style={Styles.InlineText}>Username: </Text>{username}</Text>
          <Text style={Styles.LocalStorage}><Text style={Styles.InlineText}>Mobile Number: </Text>{number}</Text>
          <Text style={Styles.LocalStorage}><Text style={Styles.InlineText}>Password: </Text>{password}</Text>
        </View>

        <Button title="Go Back" onPress={()=> navigation.navigate('Login')}/>
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
        marginBottom: 40,
        fontSize: 23
    }

})
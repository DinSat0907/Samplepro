import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Login({navigation}){
    const [username, setUsername] = useState('')
    const [number, setNumber] = useState('')
    const [password, setPassword] = useState('')
    
    const saveInput = async () => {
        try {
            await AsyncStorage.setItem('username', username)
            await AsyncStorage.setItem('number', number)
            await AsyncStorage.setItem('password', password)
            navigation.navigate('Home')
        } catch (error) {
            console.error('Error saving data:', error)
        }
    }
      
  return (
    <View style={Styles.LogCon}>
      <View style={Styles.Header}>
        <Text testID='HomeHeading' style={Styles.LogName}>Welcome to Login Page</Text>
      </View>
      <View style={Styles.InputCon}>
        <View style={Styles.NameInput}>
            <TextInput keyboardType='default' placeholder='User Name'maxLength={15} value={username} onChangeText={(Text)=>setUsername(Text)}></TextInput>
        </View>
        <View style={Styles.MobileInput}>
            <TextInput keyboardType='number-pad' placeholder='Mobile Number' maxLength={10} value={number} onChangeText={(Text)=>setNumber(Text)}></TextInput>
        </View>
        <View style={Styles.PasswordInput}>
            <TextInput secureTextEntry= {true} placeholder='Password' maxLength={5} value={password} onChangeText={(Text)=>setPassword(Text)}></TextInput>
        </View>
            <TouchableOpacity style={Styles.SubmitBut} onPress={saveInput}>
                <Text style={{color: 'white'}}>LogIn</Text>
            </TouchableOpacity>
      </View>      
    </View>  
  )
}

const Styles = StyleSheet.create({
  LogCon: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    display: 'flex', 
    backgroundColor: '#a52a2a', 
    fontFamily: 'serif'
  },

  LogName: {
    fontSize: 30,
    fontWeight: '900',
  },
  
  NameInput: {
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
    alignItems: 'center',
    height: 40,
    width: 220,
    backgroundColor: 'lightgray'
    },

  MobileInput: {
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
    marginTop: 9,
    alignItems: 'center',
    height: 40,
    width: 220,
    backgroundColor: 'lightgray'
    },
  
  PasswordInput: {
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
    marginTop: 9,
    alignItems: 'center',
    height: 40,
    width: 220,
    backgroundColor: 'lightgray'
  },

  SubmitBut: {
    borderWidth: 2,
    borderColor: '#cccccc',
    borderRadius: 10,
    marginTop: 60,
    paddingVertical: 10,
    alignItems: 'center',
    height: 40,
    width: 220,
    backgroundColor: 'blue',
  }
})
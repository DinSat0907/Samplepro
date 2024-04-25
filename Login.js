import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Login({navigation}){
    const [username, setUsername] = useState('')
    const [number, setNumber] = useState('')
    const [password, setPassword] = useState('')


  //   const saveInput = ()=>{      
  //         AsyncStorage.setItem('username', username)
  //         AsyncStorage.setItem('number', number)
  //         AsyncStorage.setItem('password', password)
  //         switch (true) {
  //           case !username && !password && !number:
  //             Alert.alert('Error', 'Please enter both username, number and password.');
  //             break;
  //           case !username:
  //             Alert.alert('Error', 'Please enter your username.');
  //             break;
  //           case !number:
  //             Alert.alert('Error', 'Please enter your number.');
  //             break;             
  //           case !password:
  //             Alert.alert('Error', 'Please enter your password.');
  //             break;
  //           default:
  //             Alert.alert('Success', 'Login Successful!');
  //             navigation.navigate('Home')
  //             break;
  //         }
  //  }

  function getValue(){
    if (!username && !password && !number){
      return 'Alert 1'
    }
    else if (!username){
      return 'Alert 2'
    }
    else if (!number){
      return 'Alert 3'
    }
    else if (!password){
      return 'Alert 4'
    }
  }
  const saveInput = ()=>{      
    AsyncStorage.setItem('username', username)
    AsyncStorage.setItem('number', number)
    AsyncStorage.setItem('password', password)
    const value = getValue()
    switch (value) {
      case 'Alert 1':
        Alert.alert('Error', 'Please enter both username, number and password.');
        break;
      case 'Alert 2':
        Alert.alert('Error', 'Please enter your username.');
        break;
      case 'Alert 3':
        Alert.alert('Error', 'Please enter your number.');
        break;             
      case 'Alert 4':
        Alert.alert('Error', 'Please enter your password.');
        break;
      default:
        Alert.alert('Success', 'Login Successful!');
        navigation.navigate('Home')
        break;
    }
}
   return (

    <View style={Styles.LogCon}>
      <View style={Styles.Header}>
        <Text testID='HomeHeading' style={Styles.LogName}>Welcome to Login Page</Text>
      </View>
      <View style={Styles.InputCon}>
        <View >
            <TextInput style={Styles.NameInput} keyboardType='default' placeholder='User Name' maxLength={15} value={username} onChangeText={(Text)=>setUsername(Text)}></TextInput>
        </View>
        <View >
            <TextInput style={Styles.MobileInput} keyboardType='number-pad' placeholder='Mobile Number' maxLength={10} value={number} onChangeText={(Text)=>setNumber(Text)}></TextInput>
        </View>
        <View >
            <TextInput style={Styles.PasswordInput} secureTextEntry= {true} placeholder='Password' maxLength={5} value={password} onChangeText={(Text)=>setPassword(Text)}></TextInput>
        </View>
            <TouchableOpacity  onPress={saveInput} style={Styles.SubmitBut} >
                <Text style={Styles.BtnText}>LogIn</Text>
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
    
  },

  LogName: {
    fontSize: 30,
    fontWeight: '900',
  },
  
  NameInput: {
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
    textAlign: 'center',
    height: 40,
    width: 220,
    backgroundColor: 'lightgray'

    },

  MobileInput: {
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
    marginTop: 9,
    textAlign: 'center',
    height: 40,
    width: 220,
    backgroundColor: 'lightgray'
    },
  
  PasswordInput: {
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
    marginTop: 9,
    textAlign: 'center',
    height: 40,
    width: 220,
    backgroundColor: 'lightgray'
  },

  SubmitBut: {
    borderWidth: 2,
    borderColor: '#cccccc',
    borderRadius: 10,
    marginTop: 60,
    paddingVertical: 7,
    // textAlign: 'center',
    height: 40,
    width: 220,
    backgroundColor: 'blue',
    // color: 'white'
  },
  BtnText: {
    textAlign: 'center',
    color: 'white'
  }
})
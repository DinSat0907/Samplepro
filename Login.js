import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Login({navigation}){
    const [username, setUsername] = useState('')
    const [number, setNumber] = useState('')
    const [password, setPassword] = useState('')
    



    const saveInput = async ()=>{
      if (username != '' && number !='' && password != ''){
        
        try {
          await AsyncStorage.setItem('username', username)
          
        } catch (error) {
          console.error('Error saving data to local storage:', error);
        }
        // AsyncStorage.setItem('number', number)
        // AsyncStorage.setItem('password', password)
        // alert('Login Successfully')
        navigation.navigate('Home')
        

      } 
      else if (username != ''){
        if (number != '') {
          if (password != ''){
            // AsyncStorage.setItem('username', username)
            // AsyncStorage.setItem('number', number)
            // AsyncStorage.setItem('password', password)
            // alert('Login Successfully')
            navigation.navigate('Home')
            try {
              await AsyncStorage.setItem('username', username)
            } catch (error) {
              console.error('Error saving data to local storage:', error);
            }
          }
          else{
            alert('Please enter your Password')
          }
        }
        else{
          alert('Please enter your Number')
        } 
      }
      else if (number != ''){
        if (username != '') {
          if (password != ''){
            try {
              await AsyncStorage.setItem('username', username)
            } catch (error) {
              console.error('Error saving data to local storage:', error);
            }
            // AsyncStorage.setItem('username', username)
            // AsyncStorage.setItem('number', number)
            // AsyncStorage.setItem('password', password)
            // alert('Login Successfully')
            navigation.navigate('Home')
            
          }
          else{
            alert('Please enter your Password')
          }
        }
        else{
          alert('Please enter your username')
        }
      }
      else if (password != ''){
        if (username != '') {
          if (number != ''){
            try {
              await AsyncStorage.setItem('username', username)
            } catch (error) {
              console.error('Error saving data to local storage:', error);
            } 
            // AsyncStorage.setItem('username', username)
            // AsyncStorage.setItem('number', number)
            // AsyncStorage.setItem('password', password)
            // alert('Login Successfully')
            navigation.navigate('Home')    
          }
          else{
            alert('Please enter your Number')
          }
        }
        else{
          alert('Please enter your username')
        } 
      }
      else{
        alert('Please Enter the fields')
      }
    }
      
  return (
    <View style={Styles.LogCon}>
      <View style={Styles.Header}>
        <Text testID='HomeHeading' style={Styles.LogName}>Welcome to Login Page</Text>
      </View>
      <View style={Styles.InputCon}>
        <View >
            <TextInput style={Styles.NameInput} keyboardType='default' placeholder='User Name'maxLength={15} value={username} onChangeText={(Text)=>setUsername(Text)}></TextInput>
        </View>
        <View >
            <TextInput style={Styles.MobileInput} keyboardType='number-pad' placeholder='Mobile Number' maxLength={10} value={number} onChangeText={(Text)=>setNumber(Text)}></TextInput>
        </View>
        <View >
            <TextInput style={Styles.PasswordInput} secureTextEntry= {true} placeholder='Password' maxLength={5} value={password} onChangeText={(Text)=>setPassword(Text)}></TextInput>
        </View>
            <TouchableOpacity  >
                <Text onPress={saveInput} testID='onClick'style={Styles.SubmitBut} >LogIn</Text>
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
    paddingVertical: 10,
    textAlign: 'center',
    height: 40,
    width: 220,
    backgroundColor: 'blue',
    color: 'white'
  }
})
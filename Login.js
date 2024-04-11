import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'

export default function Login({navigation}){

  const [changeName, setChangeName] = useState('')
  const [changeNameError, setChangeNameError] = useState(false)
  
  const HandleNameChange = (e)=>{
    setChangeName(e)
    console.log(e)
    if (e != '') {

      setChangeNameError(true)

    }
    else{

      setChangeNameError(false)

    }
  }

  return (
    <View style={Styles.LogCon}>
      <View style={Styles.Header}>
        <Text style={Styles.LogName}>Welcome to Login Page</Text>
      </View>
      <View style={Styles.InputCon}>
       <View style={Styles.NameInput}>
        <TextInput keyboardType='default' placeholder='User Name'maxLength={15} value={changeNameError} onChangeText={(e)=>HandleNameChange(e)}></TextInput>
       </View>
       <View style={Styles.MobileInput}>
        <TextInput keyboardType='number-pad' placeholder='Mobile Number' maxLength={10}></TextInput>
       </View>
       <View style={Styles.PasswordInput}>
        <TextInput secureTextEntry= {true} placeholder='Password' maxLength={5}></TextInput>
       </View>
       <Text>{changeName}</Text>
        <TouchableOpacity style={Styles.SubmitBut} onPress={()=> navigation.navigate('Home')}>
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
    backgroundColor: 'orange', 
    fontFamily: 'serif'
  },

  LogName: {
    fontSize: 30,
    fontWeight: '900',
    marginTop: 50
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
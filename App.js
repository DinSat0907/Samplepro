import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import onClick from './onClick';


export default function App(){
  
  return(
    <View style={styles.container}>
      <Text style={styles.text} onPress={onClick}>Click Me</Text>
    </View>
  
    )
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'green'
      
    },
    text: {
      fontWeight: 'bold',

    }
    
  }
)

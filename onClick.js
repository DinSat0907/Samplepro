import {StyleSheet, View, Text} from 'react-native';
import React from 'react';

export default function Click({handleClick}){

    return (
    
    <View style={styles.container}>
        <Text style={styles.text} onPress={handleClick}>Click Me</Text>
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
      fontSize: 35,
      borderWidth: 1,
      borderColor: 'black',
      padding: 10,
      backgroundColor: 'lightblue',
      borderRadius: 10,
      backfaceVisibility: 20  
    } 
  }
)

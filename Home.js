import React from "react"
import { View, Text, Button, StyleSheet} from 'react-native';



export default function Home({navigation}){
    
    return(
    
    <View style={Styles.HomeCon}>
      <Text style={Styles.Header}>Welcome to my WebPage</Text>
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
        backgroundColor: 'pink'
    },
    Header: {
        fontWeight: '900',
        fontSize: 25
    }
})
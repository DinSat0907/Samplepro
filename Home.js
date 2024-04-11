import React from "react"
import { View, Text, Button} from 'react-native';



export default function Home({navigation}){
    
    return(
    
    <View styles={Styles.HomeCon}>
      <Text>Welcome to my WebPage</Text>
      <Button title="Go back to Login" onPress={()=> navigation.navigate('Login')}/>
    </View>
    )
}

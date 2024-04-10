import React from 'react';
import Click from './onClick';



export default function App(props){
  
  const pop = ()=>{
    alert("Don't touch me")
  }


  return(
    
      <Click handleClick= {pop} />
   
  
    )
}
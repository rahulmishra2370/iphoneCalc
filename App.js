import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Display from './Components/Display'
import Buttons from './Components/Buttons'
export default function App() {
  return (
    <View style={styles.backgroundDisplay}>
      <Display></Display>
      <Buttons></Buttons>
    </View>
  
  )
}

const styles = StyleSheet.create({
   
   backgroundDisplay:{
    flex:1,
    backgroundColor:'#000000'
   }
})
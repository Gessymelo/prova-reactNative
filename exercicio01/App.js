import { View, Text } from 'react-native'
import React from 'react'
import Contador from './src/components/Contador'
import Temporizador from './src/components/Temporizador'
import FlexboxLayout from './src/components/FlexboxLayout'


const App = () => {
  return (
    <View>
      <Contador/>
      <Temporizador/>
      <FlexboxLayout/>
    </View>
    
  )
}

export default App

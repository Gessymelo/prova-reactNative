import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react'

const Contador = () => {
    const [counter, setCounter] = useState(0)

    function incrementar() {
        setCounter(counter+1)
    }

    function decrementar (){
        setCounter(counter-1)
    }

  return (
    <View style={styles.container}>
      <Button title='incrementar' onPress={incrementar}/>
      <Text>O contador está em : {counter}</Text>
      <Button title= 'decrementar' onPress={decrementar}/>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 100

    }
})

export default Contador
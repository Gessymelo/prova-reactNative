import { View, Text } from 'react-native'
import React from 'react'

const TemaTroca = () => {

    const first = useContext(second)
  return (
    <View>
      <Text>TemaTroca</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        background: '#fff',
        flex: 1,
        alignItems:'center',
        justifyContent:'center'

    },
    title:{
        color:'#000'
    }
})

export default TemaTroca
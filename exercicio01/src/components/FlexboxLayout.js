import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlexboxLayout = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.text}>Caixa 1 (50%)</Text>
      </View>
      <View style={styles.box2}>
        <Text style={styles.text}>Caixa 2 (30%)</Text>
      </View>
      <View style={styles.box3}>
        <Text style={styles.text}>Caixa 3 (20%)</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center',      // Centraliza horizontalmente
    backgroundColor: '#f0f0f0',
  },
  box1: {
    backgroundColor: 'lightblue',
    width: '80%',              // Largura de 80% da tela
    height: '50%',             // Altura de 50%
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  box2: {
    backgroundColor: 'lightgreen',
    width: '80%',
    height: '30%',             // Altura de 30%
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  box3: {
    backgroundColor: 'lightcoral',
    width: '80%',
    height: '20%',             // Altura de 20%
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FlexboxLayout;

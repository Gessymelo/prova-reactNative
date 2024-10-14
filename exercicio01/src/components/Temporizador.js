import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Temporizador = () => {
  const [segundos, setSegundos] = useState(0);
  const [pausado, setPausado] = useState(false);

  useEffect(() => {
    let intervalo;

    if (!pausado) {
      intervalo = setInterval(() => {
        setSegundos(prevSegundos => prevSegundos + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalo);
    };
  }, [pausado, segundos]);

  useEffect(() => {
    if (segundos >= 60) {
      setPausado(true);
    }
  }, [segundos]);

  const reiniciarTemporizador = () => {
    setSegundos(0);
    setPausado(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>Temporizador: {segundos} segundos</Text>
      <Button title="Reiniciar" onPress={reiniciarTemporizador} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  timerText: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});

export default Temporizador;


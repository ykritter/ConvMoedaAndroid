import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ConvMoeda } from './src/Conversor';

export default function App() {
  return (
    <View style={styles.container}>
      <ConvMoeda />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


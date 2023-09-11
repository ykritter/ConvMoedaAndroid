import React, { useState } from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';

export const ConvMoeda = () => {
  const [inputJson, setInputJson] = useState('');
  const [brl, setBrl] = useState('');

  const handleParseJson = () => {
    try {
      const jsonData = JSON.parse(inputJson);

      if (jsonData.usd.brl) {
        setBrl(jsonData.usd.brl);
      } else {
        alert('Moedas necessárias não encontradas');
      }
    } catch (error) {
      alert('Erro ao buscar BRL');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cotações:</Text>
      <TextInput
        multiline
        placeholder="Insira a cotação"
        onChangeText={setInputJson}
        value={inputJson}
        style={styles.input}
      />
      <Button title="USD -> BRL" onPress={handleParseJson} />
      <View style={styles.resultContainer}>
        <Text>R$ {brl}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  header: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 16,
    padding: 8,
  },
  resultContainer: {
    marginTop: 16,
  },
});
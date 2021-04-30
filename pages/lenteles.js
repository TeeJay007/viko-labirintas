import React from 'react';
import { StyleSheet, Text, View, TextInput, Button  } from 'react-native';

export default function Lenteles() {

  const UselessTextInput = () => {
    const [number, onChangeNumber] = React.useState(null);
  
    return (
      <View style={styles.container}>

        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Atsakymas"
          keyboardType="numeric"
        />
      </View>


    );
  };
}
export default UselessTextInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  }
});




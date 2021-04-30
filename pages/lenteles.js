import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native';

export default function Lenteles() {
  const first = 56;
  const UselessTextInput = () => {
    const [number, onChangeNumber] = React.useState(null);
  
    return (
      <View style={styles.container}>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Atsakymas"
          keyboardType="numeric"
        />
      </SafeAreaView>
      </View>
    );
}
}

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




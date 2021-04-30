import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert  } from 'react-native';

export default function Lenteles() {

  const atsakymas = 15.06;

  const [number, onChangeNumber] = React.useState(null);

    return (
      <View style={styles.container}>
        <Text style={styles.header}>
        20% arbatpinigiai, pavalgius už 75.31€
        </Text>
          <Text style={styles.help}>
            (Atsakyme naudokite du skaičius po kakblelio)
          </Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Atsakymas"
                 keyboardType="numeric"
              />
                <Button
                  title="Next"
                      onPress= { () => Alert.alert('Simple Button pressed') } 
                   
                />
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

  header:{
    fontSize: 24,
    textAlign: 'center',
    paddingBottom: 8
  },
  help:{
    fontSize: 16,
    textAlign: 'center',
    paddingBottom: 8
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
  },

  title: {
    textAlign: 'center',
    marginVertical: 8,
  }
});




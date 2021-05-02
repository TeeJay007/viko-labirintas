import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function Lenteles() {

  const pirmas = 4;
  const antras = 0;
  const trecias = 1;
  const ketvirtas = 4;
  const penktas = 0;
  const sestas = 2;

  const [number, onChangeNumber] = React.useState(null);
 
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
      1. Tarp 3 (trijų) ir 5 (penkių)?
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="1."
        keyboardType="numeric"
      />
            <Text style={styles.header}>
      2. Mažiausias neneigiamas skaičius 	0 (nulis)	?
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="2."
        keyboardType="numeric"
      />
            <Text style={styles.header}>
      3. „... kregždė, dar ne pavasaris“	1 (viena)	?
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="3."
        keyboardType="numeric"
      />
            <Text style={styles.header}>
      4. 22 – du kvadratu	4 (keturi) ?
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="4."
        keyboardType="numeric"
      />
            <Text style={styles.header}>
      5. Taško skersmuo?
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="5."
        keyboardType="numeric"
      />
                  <Text style={styles.header}>
      6. Mobiliajame telefone su mygtukais yra kartu su raidėm a, b, c ?
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="6."
        keyboardType="numeric"
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

  header: {
    fontSize: 24,
    textAlign: 'center',
    paddingBottom: 8
  },
  help: {
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




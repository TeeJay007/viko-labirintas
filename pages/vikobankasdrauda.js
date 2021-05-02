import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function Lenteles() {

  const atsakymas1 = "401";
  const atsakymas2 = "402";
  const [ats1, setAts1] = useState({ skaiciai1: atsakymas1.split('').map(v => '') });
  const [ats2, setAts2] = useState({ skaiciai2: atsakymas2.split('').map(v => '') });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        1. Tarp 3 (trijų) ir 5 (penkių)?
      </Text>
      <Text style={styles.header}>
        2. Mažiausias neneigiamas skaičius 	0 (nulis)	?
      </Text>
      <Text style={styles.header}>
        3. „... kregždė, dar ne pavasaris“	1 (viena)	?
      </Text>
      <View style={styles.holder}>
        {atsakymas1.split('').map((_, i) =>
          <TextInput
            key={i}
            placeholder={i + 1}
            style={[
              styles.input,
              (atsakymas1[i] == ats1.skaiciai1[i] && (i == 0 || i == 1 || i == 2)) && styles.inputCorrect,
            ]}
            onChangeText={(r) => {
              let skaiciai1 = ats1.skaiciai1
              skaiciai1[i] = r.toUpperCase()
              setAts1({ skaiciai1 })
            }}
            maxLength={1}
            value={ats1.skaiciai1[i]}
          />
        )}
      </View>
      <Text style={styles.header}>
        4. 22 – du kvadratu	4 (keturi) ?
      </Text>
      <Text style={styles.header}>
        5. Taško skersmuo?
      </Text>
      <Text style={styles.header}>
        6. Mobiliajame telefone su mygtukais yra kartu su raidėm a, b, c ?
      </Text>
      <View style={styles.holder}>
        {atsakymas2.split('').map((_, i) =>
          <TextInput

            key={i}
            placeholder={3 + i + 1}
            style={[
              styles.input,
              (atsakymas2[i] == ats2.skaiciai2[i] && (i == 0 || i == 1 || i == 2)) && styles.inputCorrect,
            ]}
            onChangeText={(r) => {
              let skaiciai2 = ats2.skaiciai2
              skaiciai2[i] = r.toUpperCase()
              setAts2({ skaiciai2 })
            }}
            maxLength={1}
            value={ats2.skaiciai2[i]}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    paddingBottom: 8
  },
  holder: {
    paddingTop: 16,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  inputCorrect: {
    backgroundColor: 'green'
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: 50,
    height: 50,
    textAlign: 'center',
    fontSize: 25
  }
});




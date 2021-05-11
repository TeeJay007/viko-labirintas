import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function Vikobankasdrauda() {

  const atsakymas1 = "401";
  const atsakymas2 = "402";
  const [ats1, setAts1] = useState({ skaiciai1: atsakymas1.split('').map(v => '') });
  const [ats2, setAts2] = useState({ skaiciai2: atsakymas2.split('').map(v => '') });

  return (
    <View style={styles.container}>
      <Text style={styles.questions}>
        1. Tarp 3 (trijų) ir 5 (penkių)?
      </Text>
      <Text style={styles.questions}>
        2. Mažiausias neneigiamas skaičius?
      </Text>
      <Text style={styles.questions}>
        3. „... kregždė, dar ne pavasaris“?
      </Text>
      <View style={styles.holder}>
        {atsakymas1.split('').map((_, i) =>
          <TextInput
            key={i}
            placeholder={i + 1 + "."}
            style={[
              styles.input,
              atsakymas1[i] == ats1.skaiciai1[i] && styles.inputCorrect, 
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
      <Text style={styles.questions}>
        4. 22 – du kvadratu?
      </Text>
      <Text style={styles.questions}>
        5. Taško skersmuo?
      </Text>
      <Text style={styles.questions}>
        6. Mobiliajame telefone su mygtukais yra kartu su raidėm a, b, c ?
      </Text>
      <View style={styles.holder}>
        {atsakymas2.split('').map((_, i) =>
          <TextInput
            key={i}
            placeholder={i + 4 + "."}
            style={[
              styles.input,
              atsakymas2[i] == ats2.skaiciai2[i] && styles.inputCorrect,
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
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  questions: {
    fontSize: 20,
    textAlign: 'justify',
    paddingBottom: 8
  },
  holder: {
    paddingTop: 16,
    justifyContent: 'center',
    flexDirection: 'row',
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




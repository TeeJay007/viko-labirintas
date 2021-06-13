// import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import Pavyzdinis from './pages/pavyzdinis';
import Kryziazodis from './pages/Kryžiažodis';
import Viktorina_pabaiga from './pages/Viktorina_Pabaiga';
import Viktorina_aud from './pages/Auditorija_viktorina';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working oooonnnnn your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <Viktorina_pabaiga/>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

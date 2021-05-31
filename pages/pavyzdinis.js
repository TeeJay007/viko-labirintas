import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function Pavyzdinis() {
  return (
    <ScrollView contentContainerStyle={styles.container} horizontal={true}>

  <Text style={{margin:1000}}>Child 1</Text>
  <Text>Child 2</Text>
  <Text>Child 3</Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  vert: {
    flexDirection: "column",
  },
  horz: {
    flexDirection: "row",
  },
});
 

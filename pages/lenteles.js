import React from 'react';
import { StyleSheet, Text, View, TextInput, Button  } from 'react-native';

export default function Lenteles() {

  const atsakymas = 15.06;

  const [number, onChangeNumber] = React.useState(null);
  
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
        20% arbatpinigiai, pavalgius už 75.31€
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
        //if ( atsakymas != value )
      //  {
       //   disabled 
     //   }
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

  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
  }
});




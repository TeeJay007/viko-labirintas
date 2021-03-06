import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, BackHandler, useWindowDimensions} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProLanga({ navigation: { navigate }}) {
    const {width: screenW, height: screenH} = useWindowDimensions()
    const atsakymas = "SEIMAS";
    const [ats, setAts] = useState({raides: atsakymas.split('').map(v => '')});

    const correctAts = () => atsakymas == ats.raides.join('').toUpperCase()

    const [big, setBig] = useState(false);

    const handleSubmitUpdateStorage = () => {
      AsyncStorage.setItem('seimas', 'true');
      AsyncStorage.setItem('balioneliai', 'false');
      navigate('penktasVestibiulis');
    }

    useFocusEffect(
      React.useCallback(() => {
        const onBackPress = () => {
          if (big) {
            setBig(!big)
            return true;
          } else
            return false;
        };
        BackHandler.addEventListener('hardwareBackPress', onBackPress);
  
        return () =>
          BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      }, [big, setBig])
    );

    return (
        big ? 
          <TouchableOpacity onPress={() => {
            setBig(!big);
          }} style={
            {
              justifyContent: 'center'
            }
          }>
            <Image resizeMode="cover" style={{
            width: screenW,
            height: screenH
          }} source={require('../NavigationCovers/seimascover.jpg')} />
          </TouchableOpacity>
        : <View style={styles.container}>
            <View style={{
                flex: 0.4,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
              <TouchableOpacity onPress={() => {
                setBig(!big);
              }}>
                <Image resizeMode="contain" style={styles.image}
                    source={require('../NavigationCovers/seimascover.jpg')}
                />
              </TouchableOpacity>
            </View>
            <View style={{
                flex: 0.6,
                paddingTop: 16,
            }}>
                <Text style={styles.header}>
                    Koks valstybei svarbus pastatas matosi pro ??ios auditorijos langus?
                </Text>
                <Text style={styles.hint}>
                    (Pary??kintos raid??s yra u??uomina, kur keliauti toliau)
                </Text>
                <View style={styles.holder}>
                    {atsakymas.split('').map((_, i) => 
                        <TextInput
                            key={i}
                            style={[
                                styles.input, 
                                (i == 0 || i == 4) && styles.inputMarked,
                            ]}
                            onChangeText={(r) => {
                                let raides = ats.raides
                                raides[i] = r.toUpperCase()
                                setAts({raides})
                            }}
                            maxLength={1}
                            value={ats.raides[i]}
                        />
                    )}
                </View>
            </View>
            {correctAts() && <TouchableOpacity onPress={() => {
                handleSubmitUpdateStorage()
            }}  style={{
                backgroundColor: 'green',
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    paddingVertical: 20,
                    color: 'white',
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}>
                  SPAUSK ??IA JEI NORI KELIAUTI TOLIAU
                </Text>
            </TouchableOpacity>}
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column'
  },
  image:{
    width: 400,
    height: 200
  },
  hint:{
    fontSize: 14,
    textAlign: 'center'
  },
  header:{
    fontSize: 24,
    textAlign: 'center',
    paddingBottom: 8
  },
  holder:{
    paddingTop: 16,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  inputMarked:{
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
 

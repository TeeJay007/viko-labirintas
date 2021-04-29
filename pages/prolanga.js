import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Image} from 'react-native';

export default function ProLanga() {

    const atsakymas = "SEIMAS";
    const [ats, setAts] = useState({raides: atsakymas.split('').map(v => '')});

    return (
        <View style={styles.container}>
            <View style={{
                flex: 0.4,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image resizeMode="contain" style={styles.image}
                    source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Vilnius_Seimas.jpg/1920px-Vilnius_Seimas.jpg"}}
                />
            </View>
            <View style={{
                flex: 0.6,
                paddingTop: 16,
            }}>
                <Text style={styles.header}>
                    Koks valstybei svarbus pastatas matosi pro šios auditorijos langus?
                </Text>
                <Text style={styles.hint}>
                    (Paryškintos raidės yra užuomina, kur keliauti toliau)
                </Text>
                <View style={styles.holder}>
                    {atsakymas.split('').map((_, i) => 
                        <TextInput
                            key={i}
                            style={[
                                styles.input, 
                                (i == 0 || i == 4) && styles.inputMarked,
                                (atsakymas[i] == ats.raides[i] && (i == 0 || i == 4)) && styles.inputCorrect,
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
    backgroundColor: '#E3E3E3'
  },
  inputCorrect:{
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
 

import React, { useEffect, useRef, useContext, useState } from 'react';
import { StyleSheet, Text, View, PanResponder, Alert, Animated, useWindowDimensions, Platform, ImageBackground, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';



const LetterPosContext = React.createContext()
const InputValues = React.createContext()

const Draggable = ({letter = "", enabled = true, id = 0, disable = () => {}}) => {
    const pan = useRef(new Animated.ValueXY()).current;
    const {width} = useWindowDimensions();
    const {letters, setLetters} = useContext(LetterPosContext)
    const {fields, setFields} = useContext(InputValues)


    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
            null, { dx: pan.x, dy: pan.y }
        ],{useNativeDriver: false}),
        onPanResponderRelease: (e, gesture) => {
            for(let i in letters){
                if(gesture.moveX >= letters[i].x && gesture.moveX <= letters[i].x + letters[i].size){
                    if(gesture.moveY >= letters[i].y && gesture.moveY <= letters[i].y + letters[i].size){
                        if(fields[i] != '')
                            break;

                        pan.setValue({ x: 0, y: 0 })

                        let lo = [...fields]
                        lo[i] = letter
                        setFields(lo)
                        disable()
                        break;
                    }
                }
            }
            Animated.spring(
                pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }
            ).start();
        },
    });

    return enabled ? (<View>
            <Animated.View {...panResponder.panHandlers} style={[
                pan.getLayout(),
                styles.letterBox,
                {
                    width: width*0.13,
                    height: width*0.13,
                    maxWidth: 50,
                    maxHeight: 50,
                    backgroundColor: 'gainsboro',
                }
            ]}>
                <Text style={{fontSize: width * 0.06 > 24 ? 24 : width * 0.06}}>{letter}</Text>
            </Animated.View>
        </View>) : <View style={[
                styles.letterBox,
                {
                    width: width*0.13,
                    height: width*0.13,
                    maxWidth: 50,
                    maxHeight: 50,
                    backgroundColor: 'gainsboro',
                }
            ]}>
                <Text style={{fontSize: width * 0.06 > 24 ? 24 : width * 0.06}}></Text>
            </View>;
};


const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


const Lette = ({value = '', id = 0}) => {
    const {width} = useWindowDimensions()
    const {letters, setLetters} = useContext(LetterPosContext)

    return (
    <View style={{
        padding: 5,
        backgroundColor: 'gainsboro',
        width: width*0.11,
        height: width*0.11,
        maxWidth: 50,
        maxHeight: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        margin: 2
    }} onLayout={(event) => {
        const target = Platform.OS === 'web' ? event.nativeEvent.target : event.target
        target.measure((x, y, width, height, pageX, pageY) =>{
            setLetters((letters) => {
                if(letters.filter(v => v.id == id).length > 0){
                    return letters.map(v => v.id == id ? {
                        id,
                        x: pageX,
                        y: pageY,
                        size: width
                    } : v)
                }
                return [...letters, {
                    id,
                    x: pageX,
                    y: pageY,
                    size: width
                }]
            })
        })
    }
}>
        <Text style={{fontSize: width * 0.06 > 24 ? 24 : width * 0.06}}>{value}</Text>
    </View>)
}


const AllInput = ({word = '', scrambled = '', navigate = null}) => {
    const [fields, setFields] = useState(word.split('').map(v => ''))
    const [enabled, setEnabled] = useState(word.split('').map(v => true))

    const buildLetters = () => {
        let boxes = []
        for(let i = 0; i < enabled.length; i++){
            boxes = [...boxes, <Draggable id={i} key={i} enabled={enabled[i]} disable={() => {
                let z = [...enabled]
                z[i] = false
                setEnabled(z)
            }} letter={scrambled[i]} />]
        }

        return [
            <View key="A" style={{flexDirection: 'row'}}>
                {boxes.slice(0, Math.ceil(word.length/2))}
            </View>,
            <View key="B" style={{flexDirection: 'row'}}>
                {boxes.slice(-Math.ceil(word.length/2))}
            </View>
        ]
    }

    return (
        <InputValues.Provider value={{fields, setFields}}>
            <View style={[styles.inputBox, {flexDirection: 'row'}]}>
                {fields.map((v, i) => <Lette id={i} key={i} value={v} />)}
            </View>
            <View style={styles.draggableLetterBox}>
                {buildLetters()}
            </View>
            <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}>
                <TouchableOpacity style={styles.refreshButton} onPress={() => {
                    setFields(word.split('').map(v => ''))
                    setEnabled(word.split('').map(v => true))
                }}>
                    <Text style={styles.refreshButtonText}>Perkrauti</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.refreshButton} onPress={() => {
                    if(fields.join('') == word){
                        Alert.alert(
                            "Teisingai!",
                            "Bandykime surasti Finansų katedrą?", [{ text: "Taip", onPress: () => {
                                AsyncStorage.setItem('finansai', 'true');
                                AsyncStorage.setItem('kryziazodis', 'false');

                                navigate('penktasVestibiulis')
                            }}],
                            {cancelable: false}
                        );
                    }else{
                        Alert.alert(
                            "Neteisingai!",
                            "Dėliokite toliau!", [{ text: "OK"}],
                            {cancelable: false}
                        );
                    }
                }}>
                    <Text style={styles.refreshButtonText}>Patikrinti</Text>
                </TouchableOpacity>
            </View>
            <StatusBar hidden={true} />
        </InputValues.Provider>
    )
}


export default function Finansai({ navigation: { navigate }}) {
    const [letters, setLetters] = useState([]) //cia saugomos raides
    const secretWord = "FINANSAI"
    const [loaded, setLoaded] = useState(false)

    return (
        <LetterPosContext.Provider value={{letters, setLetters}}>
            <ImageBackground onLoad={() => {setLoaded(true)}} source={require('../NavigationCovers/finansubackgroundas.jpg')} style={styles.container}>
                {loaded && <>
                    <View style={styles.textBox}>
                        <Text style={[styles.titleText, {paddingBottom: 20}]}>Tai yra terminas, apibrėžiantis metodus, kuriais asmenys ar organizacijos įgyja, sukaupia, kontroliuoja ir naudoja piniginius išteklius per laikotarpį, įvertinant patiriamą riziką.</Text>
                        <Text style={styles.titleText}>Kokia tai sąvoka?</Text>
                    </View>
                    <AllInput word={secretWord} scrambled={secretWord.split('').sort(() => .5 - Math.random()).join('')} navigate={navigate} />
                </>}
            </ImageBackground>
        </LetterPosContext.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-around'
    },
    textBox: {
        justifyContent: 'center',
    },
    titleText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 20,
        fontWeight: "bold"
    },
    refreshButton: {
        backgroundColor: "#005baa",
        padding: 10,
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    refreshButtonText: {
        fontSize: 24,
        color: "white",
        fontWeight: "bold",
    },

    inputBox: {
        justifyContent: 'center'
    },
    input: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    inputLetter: {
        margin: 1,
        borderRadius: 5,
        backgroundColor: 'gainsboro',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputLetterText: {
        fontSize: 24
    },

    draggableLetterBox: {
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    letterBox: {
        margin: 8,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
});


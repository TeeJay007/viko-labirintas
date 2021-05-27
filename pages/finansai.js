import React, { useEffect, useRef, useContext, useState } from 'react';
import { StyleSheet, Text, View, PanResponder, Animated, useWindowDimensions, Platform } from 'react-native';

const Draggable = ({letter = " " }) => {
    const pan = useRef(new Animated.ValueXY()).current;

    const {letters, setLetters} = useContext(LetterPosContext);
    const [enabled, setEnabled] = useState(true);

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
            null, { dx: pan.x, dy: pan.y }
        ],{useNativeDriver: false}),
        onPanResponderRelease: (e, gesture) => {
            for(let i in letters){
                const letterData = letters[i]
                if(gesture.moveX > letterData.x && gesture.moveX < letterData.x + letterData.size){
                    if(gesture.moveY > letterData.y && gesture.moveY < letterData.y + letterData.size){
                        console.log(`ON ${letterData.id}`)
                        if(letterData.letter.toUpperCase() == letter.toUpperCase()){
                            setLetters(old => old.map(v => v.id == letterData.id ? {...v, hidden: false} : v));
                            setEnabled(false);
                        }
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
                { backgroundColor: 'gainsboro' }
            ]}>
                <Text style={{
                    color: '#333',
                    fontSize: 24
                }}>{letter}</Text>
            </Animated.View>
        </View>) : null;
};

const LetterPosContext = React.createContext()

const InputBox = ({letter = '', id = 0, size = 50}) => {
    const {letters, setLetters} = useContext(LetterPosContext);

    const getLetter = () => {
        if(letters[id] == undefined)
            return ''

        if(letters[id].hidden)
            return ''
        
        return letters[id].letter.toUpperCase()
    }

    return(
        <View style={[styles.inputLetter, {
            width: size,
            height: size,
            maxWidth: 50,
            maxHeight: 50
        }]} onLayout={(event) => {
            const target = Platform.OS === 'web' ? event.nativeEvent.target : event.target

            target.measure((x, y, width, height, pageX, pageY) =>{
                if(letters[id] == undefined){
                    setLetters(old => [...old, {
                        id,
                        letter,
                        hidden: true,
                        x: pageX,
                        y: pageY,
                        size: width
                    }])
                }else{
                    setLetters(old => old.map(v => v.id == id ? {
                        id,
                        letter,
                        hidden: true,
                        x: pageX,
                        y: pageY,
                        size: width
                    } : v))
                }
            })


        }}>
            <Text style={styles.inputLetterText}>{getLetter()}</Text>
        </View>
    )
}

const Input = ({secretWord = ""}) => {
    const {width} = useWindowDimensions();
    let inputBoxes = [];
    const len = secretWord.length

    for(let i = 0; i < len; i++){
        inputBoxes = [...inputBoxes, <InputBox letter={secretWord[i]} id={i} key={i} size={width/(len+1)} />]
    }

    return inputBoxes;
}



export default function Finansai() {
    const [letters, setLetters] = useState([]) //cia saugomos raides

    const secretWord = "finansai"

    return (
        <LetterPosContext.Provider value={{letters, setLetters}}>
            <View style={styles.container}>
                <View style={styles.textBox}>
                    <Text style={styles.titleText}>Tai yra terminas, apibrėžiantis metodus, kuriais asmenys ar organizacijos įgyja, sukaupia, kontroliuoja ir naudoja piniginius išteklius per laikotarpį, įvertinant patiriamą riziką.</Text>
                </View>
                <View style={styles.inputBox}>
                    <View style={styles.input}>
                        <Input secretWord={secretWord} />
                    </View>
                </View>
                <View style={styles.draggableLetterBox}>
                    <View style={{flexDirection: 'row'}}>
                        <Draggable letter='F' />
                        <Draggable letter='I' />
                        <Draggable letter='N' />
                        <Draggable letter='A' />
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Draggable letter='N' />
                        <Draggable letter='S' />
                        <Draggable letter='A' />
                        <Draggable letter='I' />
                    </View>
                </View>
            </View>
        </LetterPosContext.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    textBox: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'green',
    },
    titleText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: "bold"
    },


    inputBox: {
        flex: 1,
        backgroundColor: 'blue',
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
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    letterBox: {
        width: 50,
        height: 50,
        margin: 8,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
});


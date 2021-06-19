import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, useWindowDimensions, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import NavBase from './nav_base'

const IMAGE = require('../../NavigationCovers/laukoiejimas.jpg');
const IMAGE_WIDTH = 6144;
const IMAGE_HEIGHT = 1612;

export default function Laukas({ navigation: { navigate }}) {
    const {width: screenW, height: screenH} = useWindowDimensions()

    const getScreenWidth = () => IMAGE_WIDTH / IMAGE_HEIGHT * screenH;
    const getScreenHeight = () => screenH;
    
    const resizeWidth = (w) => w * getScreenWidth() / IMAGE_WIDTH
    const resizeHeight = (h) => h * getScreenHeight() / IMAGE_HEIGHT

    const addDataToAsync = () => {
        AsyncStorage.clear();
        AsyncStorage.setItem('matematinesulapeliais', 'false');
        AsyncStorage.setItem('seimas', 'true');
        AsyncStorage.setItem('balioneliai', 'true');
        AsyncStorage.setItem('kompiuteriukahoot', 'true');
        AsyncStorage.setItem('finansai', 'true');
        AsyncStorage.setItem('kryziazodis', 'true');
        AsyncStorage.setItem('keliosmatematines', 'true');
        AsyncStorage.setItem('vikodraudos', 'true');
        AsyncStorage.setItem('vikobankokahoot', 'true');
        navigate('treciasVestibiulis');
    }
    return (
        <NavBase image={IMAGE} width={IMAGE_WIDTH} height={IMAGE_HEIGHT}>
            <TouchableOpacity onPress={() => {
                addDataToAsync();
            }}  style={{
                backgroundColor: 'rgba(255,255,255,0.3)',
                padding: 10,
                position: 'absolute',
                top: resizeHeight(766),
                left: resizeWidth(2950),
                width: resizeWidth(310),
                height: resizeHeight(400),
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    color: 'black',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>
                    UŽEIK!
                </Text>
            </TouchableOpacity>
        </NavBase>
    );
}

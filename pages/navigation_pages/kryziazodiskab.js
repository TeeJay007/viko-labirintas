import React from 'react';
import {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, useWindowDimensions, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavBase from './nav_base'

const IMAGE = require('../../NavigationCovers/kryziazodis_f.jpg');
const IMAGE_WIDTH = 4096;
const IMAGE_HEIGHT = 2582;

export default function KryziazodisKab({ navigation: { navigate }}) {
    const [washere, setwashere] = useState("-")
    
        AsyncStorage.getItem("kompiuteriukahoot", (err, result) => {
            setwashere(result);
        });
  

    const {width: screenW, height: screenH} = useWindowDimensions()

    
    
   

    const getScreenWidth = () => IMAGE_WIDTH / IMAGE_HEIGHT * screenH;
    const getScreenHeight = () => screenH;
    
    const resizeWidth = (w) => w * getScreenWidth() / IMAGE_WIDTH
    const resizeHeight = (h) => h * getScreenHeight() / IMAGE_HEIGHT
    if(washere == 'false'){
    return (
        <NavBase image={IMAGE} width={IMAGE_WIDTH} height={IMAGE_HEIGHT}>
            <TouchableOpacity onPress={() => {
                navigate('kryziazodis')
            }}  style={{
                backgroundColor: 'white',
                opacity: 0.5,
                padding: 10,
                position: 'absolute',
                top: resizeHeight(1245),
                left: resizeWidth(3198),
                width: resizeWidth(280),
                height: resizeHeight(194),
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    color: 'black',
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}>
                    UŽDUOTIS
                </Text>
            </TouchableOpacity>
        </NavBase>
    );
    }
    else {
    return (
        <NavBase image={IMAGE} width={IMAGE_WIDTH} height={IMAGE_HEIGHT}>
        </NavBase>
    );
}
}

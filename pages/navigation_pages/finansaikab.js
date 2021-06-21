import React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, useWindowDimensions, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavBase from './nav_base'

const IMAGE = require('../../NavigationCovers/finansainaujas.jpg');
const IMAGE_WIDTH = 4608;
const IMAGE_HEIGHT = 1972;

export default function FinansaiKab({ navigation: { navigate }}) {
    
    const [washere, setwashere] = useState("-")
    
    AsyncStorage.getItem("finansai", (err, result) => {
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
                    navigate('scrambleFinansai')
                }}  style={{
                    backgroundColor: 'rgba(255,255,255,0.3)',
                    //opacity: 0.5,
                    padding: 10,
                    position: 'absolute',
                    top: resizeHeight(786),
                    left: resizeWidth(3636),
                    width: resizeWidth(372),
                    height: resizeHeight(333),
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        color: 'black',
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}>
                        FINANSŲ UŽDUOTIS
                    </Text>
                </TouchableOpacity>
            </NavBase>
        );

    }
    else {
        return (
            <NavBase image={IMAGE} width={IMAGE_WIDTH} height={IMAGE_HEIGHT}>
                <TouchableOpacity onPress={() => {
                    navigate('penkipenkiolika')
                }}  style={{
                    backgroundColor: 'rgba(255,255,255,0.3)',
                    //opacity: 0.5,
                    padding: 10,
                    position: 'absolute',
                    top: resizeHeight(1600),
                    left: resizeWidth(2300),
                    width: resizeWidth(350),
                    height: resizeHeight(350),
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        color: 'black',
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}>
                        Grįžti
                    </Text>
                </TouchableOpacity>
            </NavBase>
        );
    }
}

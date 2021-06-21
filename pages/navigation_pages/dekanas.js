import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, useWindowDimensions, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavBase from './nav_base'

const IMAGE = require('../../NavigationCovers/dekanas_f.jpg');
const IMAGE_WIDTH = 4608;
const IMAGE_HEIGHT = 2055;

export default function Dekanas({ navigation: { navigate }}) {
    
    const [washere, setwashere] = useState("-")
    
    AsyncStorage.getItem("keliosmatematines", (err, result) => {
        setwashere(result);
    });

    const {width: screenW, height: screenH} = useWindowDimensions()

    const getScreenWidth = () => IMAGE_WIDTH / IMAGE_HEIGHT * screenH;
    const getScreenHeight = () => screenH;
    
    const resizeWidth = (w) => w * getScreenWidth() / IMAGE_WIDTH
    const resizeHeight = (h) => h * getScreenHeight() / IMAGE_HEIGHT

    if(washere == 'false'){ //atkeist
        return (
            <NavBase image={IMAGE} width={IMAGE_WIDTH} height={IMAGE_HEIGHT}>
                <TouchableOpacity onPress={() => {
                    navigate('vikoBankasDrauda')
                }}  style={{
                    backgroundColor: 'rgba(255,255,255,0.3)',
                    //opacity: 0.5,
                    padding: 10,
                    position: 'absolute',
                    top: resizeHeight(750),
                    left: resizeWidth(1233),
                    width: resizeWidth(438),
                    height: resizeHeight(201),
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        color: 'black',
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}>
                        UŽDUOTYS
                    </Text>
                </TouchableOpacity>
            </NavBase>
        );
    } else {
        return (
            <NavBase image={IMAGE} width={IMAGE_WIDTH} height={IMAGE_HEIGHT}>
                <TouchableOpacity onPress={() => {
                    navigate('dekanoiejimas')
                }}  style={{
                    backgroundColor: 'rgba(255,255,255,0.3)',
                    //opacity: 0.5,
                    padding: 10,
                    position: 'absolute',
                    top: resizeHeight(1700),
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

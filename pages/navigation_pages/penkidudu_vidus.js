import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, useWindowDimensions, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import NavBase from './nav_base'
import AsyncStorage from '@react-native-async-storage/async-storage';

const IMAGE = require('../../NavigationCovers/penkidudunaujas.jpg');
const IMAGE_WIDTH = 5708;
const IMAGE_HEIGHT = 1538;

export default function PenkiDuDuVidus({ navigation: { navigate }}) {
    
    const [washere, setwashere] = useState("-")
    
    AsyncStorage.getItem("seimas", (err, result) => {
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
                    navigate('proLanga')
                }}  style={{
                    backgroundColor: 'rgba(255,255,255,0.3)',
                    //opacity: 0.5,
                    padding: 10,
                    position: 'absolute',
                    top: resizeHeight(600),
                    left: resizeWidth(2200),
                    width: resizeWidth(800),
                    height: resizeHeight(570),
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        color: 'black',
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}>
                        Pažvelk pro langą!
                        UŽDUOTIS
                    </Text>
                </TouchableOpacity>
            </NavBase>
        );
    } else {
        return (
            <NavBase image={IMAGE} width={IMAGE_WIDTH} height={IMAGE_HEIGHT}>
                <TouchableOpacity onPress={() => {
                    navigate('penkiDuDu')
                }}  style={{
                    backgroundColor: 'rgba(255,255,255,0.3)',
                    //opacity: 0.5,
                    padding: 10,
                    position: 'absolute',
                    top: resizeHeight(1300),
                    left: resizeWidth(2750),
                    width: resizeWidth(250),
                    height: resizeHeight(250),
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

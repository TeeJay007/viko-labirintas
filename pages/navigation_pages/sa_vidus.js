import React from 'react';
import {useState , useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, useWindowDimensions, TouchableOpacity, Image} from 'react-native';
import NavBase from './nav_base'
import AsyncStorage from '@react-native-async-storage/async-storage';
const IMAGE = require('../../NavigationCovers/savidus.jpg');
const IMAGE_WIDTH = 3024;
const IMAGE_HEIGHT = 4032;

export default function SAVidus({ navigation: { navigate }}) {
    
    const [washere, setwashere] = useState("-")
    
    AsyncStorage.getItem("balioneliai", (err, result) => {
        setwashere(result);
    });
    
    const {width: screenW, height: screenH} = useWindowDimensions()

    const getScreenWidth = () => IMAGE_WIDTH / IMAGE_HEIGHT * screenH;
    const getScreenHeight = () => screenH;
    
    const resizeWidth = (w) => w * getScreenWidth() / IMAGE_WIDTH;
    const resizeHeight = (h) => h * getScreenHeight() / IMAGE_HEIGHT;

    mainBlue = require('../../Images/blue1.png');
    imageHeight = 192;
    imageWidth = 130;
    
    if(washere == 'false'){
        return (
            
            <NavBase image={IMAGE} width={IMAGE_WIDTH} height={IMAGE_HEIGHT}>
               <TouchableOpacity onPress={() => {
                    navigate('baloons')
                }}  style={{
                    opacity: 0.5,
                    padding: 10,
                    position: 'absolute',
                    top: resizeHeight(1200),
                    left: resizeWidth(400),
                    width: resizeWidth(450),
                    height: resizeHeight(1000),
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image source={mainBlue} style={{width: imageWidth, height: imageHeight, borderRadius: 10}}></Image>
                </TouchableOpacity>
            </NavBase>
        );
    }
    else {
        return (
            <NavBase image={IMAGE} width={IMAGE_WIDTH} height={IMAGE_HEIGHT}>
                <TouchableOpacity onPress={() => {
                    navigate('penktasVestibiulis')
                }}  style={{
                    backgroundColor: 'rgba(255,255,255,0.5)',
                    opacity: 0.5,
                    padding: 10,
                    position: 'absolute',
                    top: resizeHeight(3500),
                    left: resizeWidth(1150),
                    width: resizeWidth(616),
                    height: resizeHeight(709),
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

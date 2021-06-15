import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, useWindowDimensions, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavBase from './nav_base'


const IMAGE = require('../../NavigationCovers/paskutiniokahootiejimasvb.jpg');
const IMAGE_WIDTH = 3024;
const IMAGE_HEIGHT = 4032;

export default function PaskutinioKahootIejimasVB({ navigation: { navigate }}) {
    const {width: screenW, height: screenH} = useWindowDimensions()

    const [washere, setwashere] = useState("-")
  
        AsyncStorage.getItem("vikobankokahoot", (err, result) => {
            setwashere(result);
        });
    
    

    const getScreenWidth = () => IMAGE_WIDTH / IMAGE_HEIGHT * screenH;
    const getScreenHeight = () => screenH;
    
    const resizeWidth = (w) => w * getScreenWidth() / IMAGE_WIDTH
    const resizeHeight = (h) => h * getScreenHeight() / IMAGE_HEIGHT
    if(washere == 'false'){
    return (
        <NavBase image={IMAGE} width={IMAGE_WIDTH} height={IMAGE_HEIGHT}>
            <TouchableOpacity onPress={() => {
                 navigate('viktorinaPabaiga')
            }}  style={{
                backgroundColor: 'white',
                opacity: 0.5,
                padding: 10,
                position: 'absolute',
                top: resizeHeight(1029),
                left: resizeWidth(617),
                width: resizeWidth(1902),
                height: resizeHeight(1211),
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    color: 'black',
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}>
                    SPAUSK ČIA
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

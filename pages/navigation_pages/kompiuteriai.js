import React ,{useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, useWindowDimensions, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavBase from './nav_base'

const IMAGE = require('../../NavigationCovers/kompiuteriai_f.jpg');
const IMAGE_WIDTH = 8192;
const IMAGE_HEIGHT = 1246;

export default function Kompiuteriai({ navigation: { navigate }}) {
    const [washere, setwashere] = useState("-")
    useEffect(()=>{ 
        AsyncStorage.getItem("kompiuteriukahoot", (err, result) => {
            setwashere(result);
        });
    },[])
    
    const {width: screenW, height: screenH} = useWindowDimensions()

    const getScreenWidth = () => IMAGE_WIDTH / IMAGE_HEIGHT * screenH;
    const getScreenHeight = () => screenH;
    
    const resizeWidth = (w) => w * getScreenWidth() / IMAGE_WIDTH
    const resizeHeight = (h) => h * getScreenHeight() / IMAGE_HEIGHT
    if(washere == 'false'){
    return (
        <NavBase image={IMAGE} width={IMAGE_WIDTH} height={IMAGE_HEIGHT}>
            <TouchableOpacity onPress={() => {
                navigate('viktorina')
            }}  style={{
                backgroundColor: 'white',
                //opacity: 0.5,
                padding: 10,
                position: 'absolute',
                top: resizeHeight(699),
                left: resizeWidth(5967),
                width: resizeWidth(302),
                height: resizeHeight(311),
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
                <TouchableOpacity onPress={() => {
                    navigate('keturiDuVienas')
                }}  style={{
                    backgroundColor: 'rgba(255,255,255,0.3)',
                    //opacity: 0.5,
                    padding: 10,
                    position: 'absolute',
                    top: resizeHeight(300),
                    left: resizeWidth(4750),
                    width: resizeWidth(300),
                    height: resizeHeight(600),
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

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, useWindowDimensions, TouchableOpacity } from 'react-native';

import NavBase from './nav_base'

const IMAGE = require('../../NavigationCovers/ketvirtasaukstasvestibiulis_f.jpg');
const IMAGE_WIDTH = 6144;
const IMAGE_HEIGHT = 1608;

export default function KetvirtasVestibiulis({ navigation: { navigate }}) {
    const {width: screenW, height: screenH} = useWindowDimensions()

    const getScreenWidth = () => IMAGE_WIDTH / IMAGE_HEIGHT * screenH;
    const getScreenHeight = () => screenH;
    
    const resizeWidth = (w) => w * getScreenWidth() / IMAGE_WIDTH
    const resizeHeight = (h) => h * getScreenHeight() / IMAGE_HEIGHT

    return (
        <NavBase image={IMAGE} width={IMAGE_WIDTH} height={IMAGE_HEIGHT}>
            <TouchableOpacity onPress={() => {
                navigate('vikobankasiejimas')
            }}  style={{
                backgroundColor: 'white',
                opacity: 0.5,
                padding: 10,
                position: 'absolute',
                top: resizeHeight(975),
                left: resizeWidth(1337),
                width: resizeWidth(292),
                height: resizeHeight(347),
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
            <TouchableOpacity onPress={() => {
                navigate('penktasVestibiulis')
            }}  style={{
                backgroundColor: 'white',
                opacity: 0.5,
                padding: 10,
                position: 'absolute',
                top: resizeHeight(856),
                left: resizeWidth(2805),
                width: resizeWidth(502),
                height: resizeHeight(249),
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    color: 'black',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    paddingTop: 46
                }}>
                    SPAUSK ČIA
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigate('keturiDuVienas')
            }}  style={{
                backgroundColor: 'white',
                opacity: 0.5,
                padding: 10,
                position: 'absolute',
                top: resizeHeight(976),
                left: resizeWidth(4460),
                width: resizeWidth(295),
                height: resizeHeight(343),
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

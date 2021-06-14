import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, useWindowDimensions, TouchableOpacity } from 'react-native';

import NavBase from './nav_base'

const IMAGE = require('../../NavigationCovers/penkipenkiolika.jpg');
const IMAGE_WIDTH = 3024;
const IMAGE_HEIGHT = 4032;

export default function PenkiPenkiolika({ navigation: { navigate }}) {
    const {width: screenW, height: screenH} = useWindowDimensions()

    const getScreenWidth = () => IMAGE_WIDTH / IMAGE_HEIGHT * screenH;
    const getScreenHeight = () => screenH;
    
    const resizeWidth = (w) => w * getScreenWidth() / IMAGE_WIDTH
    const resizeHeight = (h) => h * getScreenHeight() / IMAGE_HEIGHT

    return (
        <NavBase image={IMAGE} width={IMAGE_WIDTH} height={IMAGE_HEIGHT}>
            <TouchableOpacity onPress={() => {
                navigate('penktasVestibiulis')
            }}  style={{
                backgroundColor: 'white',
                opacity: 0.5,
                padding: 10,
                position: 'absolute',
                top: resizeHeight(1926),
                left: resizeWidth(39),
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
                    ATGAL
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigate('finansaikab')
            }}  style={{
                backgroundColor: 'white',
                opacity: 0.5,
                padding: 10,
                position: 'absolute',
                top: resizeHeight(1062),
                left: resizeWidth(836),
                width: resizeWidth(1254),
                height: resizeHeight(2827),
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    color: 'black',
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}>
                    EITI ČIA
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigate('dekanoiejimas')
            }}  style={{
                backgroundColor: 'white',
                opacity: 0.5,
                padding: 10,
                position: 'absolute',
                top: resizeHeight(1926),
                left: resizeWidth(2300),
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
                    TOLIAU
                </Text>
            </TouchableOpacity>
        </NavBase>
    );
}

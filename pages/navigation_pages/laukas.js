import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, useWindowDimensions, TouchableOpacity } from 'react-native';

import NavBase from './nav_base'

const IMAGE = require('../../NavigationCovers/laukoiejimas_f.jpg');
const IMAGE_WIDTH = 6144;
const IMAGE_HEIGHT = 1612;

export default function Laukas({ navigation: { navigate }}) {
    const {width: screenW, height: screenH} = useWindowDimensions()

    const getScreenWidth = () => IMAGE_WIDTH / IMAGE_HEIGHT * screenH;
    const getScreenHeight = () => screenH;
    
    const resizeWidth = (w) => w * getScreenWidth() / IMAGE_WIDTH
    const resizeHeight = (h) => h * getScreenHeight() / IMAGE_HEIGHT

    return (
        <NavBase image={IMAGE} width={IMAGE_WIDTH} height={IMAGE_HEIGHT}>
            <TouchableOpacity onPress={() => {
                navigate('ketvirtasVestibiulis')
            }}  style={{
                backgroundColor: 'white',
                padding: 10,
                position: 'absolute',
                top: resizeHeight(866),
                left: resizeWidth(2975),
                width: resizeWidth(245),
                height: resizeHeight(293),
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    color: 'black',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>
                    SPAUSK ČIA
                </Text>
            </TouchableOpacity>
        </NavBase>
    );
}

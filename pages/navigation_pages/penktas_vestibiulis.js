import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, useWindowDimensions, TouchableOpacity } from 'react-native';

import NavBase from './nav_base'

const IMAGE = require('../../NavigationCovers/penktasaukstasvestibiulis_f.jpg');
const IMAGE_WIDTH = 13824;
const IMAGE_HEIGHT = 2246;

export default function PenktasVestibiulis({ navigation: { navigate }}) {
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
                backgroundColor: 'rgba(255,255,255,0.4)',
                opacity: 0.7,
                padding: 10,
                position: 'absolute',
                top: resizeHeight(630),
                left: resizeWidth(5482),
                width: resizeWidth(288),
                height: resizeHeight(836),
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    color: 'black',
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}>
                    Leistis į 4 aukstą
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigate('saiejimas')
            }}  style={{
                backgroundColor: 'rgba(255,255,255,0.4)',
                opacity: 0.7,
                padding: 10,
                position: 'absolute',
                top: resizeHeight(670),
                left: resizeWidth(8504),
                width: resizeWidth(348),
                height: resizeHeight(774),
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    color: 'black',
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}>
                    Studentų atstovybė
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigate('penkipenkiolika')
            }}  style={{
                backgroundColor: 'rgba(255,255,255,0.5)',
                opacity: 0.7,
                padding: 10,
                position: 'absolute',
                top: resizeHeight(644),
                left: resizeWidth(9688),
                width: resizeWidth(656),
                height: resizeHeight(822),
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    color: 'black',
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}>
                    UŽEIK!
                </Text>
            </TouchableOpacity>
        </NavBase>
    );
}

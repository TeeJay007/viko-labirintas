import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, useWindowDimensions, TouchableOpacity } from 'react-native';

import NavBase from './nav_base'

const IMAGE = require('../../NavigationCovers/penkiduketuri.jpg');
const IMAGE_WIDTH = 3024;
const IMAGE_HEIGHT = 4032;

export default function PenkiDuKeturi({ navigation: { navigate }}) {
    const {width: screenW, height: screenH} = useWindowDimensions()

    const getScreenWidth = () => IMAGE_WIDTH / IMAGE_HEIGHT * screenH;
    const getScreenHeight = () => screenH;
    
    const resizeWidth = (w) => w * getScreenWidth() / IMAGE_WIDTH
    const resizeHeight = (h) => h * getScreenHeight() / IMAGE_HEIGHT

    return (
        <NavBase image={IMAGE} width={IMAGE_WIDTH} height={IMAGE_HEIGHT}>
            <TouchableOpacity onPress={() => {
                navigate('dekanoiejimas')
            }}  style={{
                backgroundColor: 'white',
                opacity: 0.5,
                padding: 10,
                position: 'absolute',
                top: resizeHeight(1760),
                left: resizeWidth(61),
                width: resizeWidth(644),
                height: resizeHeight(682),
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    color: 'black',
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}>
                    {'\u003C'}{'\u003C'}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigate('kryziazodiskab')
            }}  style={{
                backgroundColor: 'rgba(255,255,255,0.5)',
                opacity: 0.5,
                padding: 10,
                position: 'absolute',
                top: resizeHeight(446),
                left: resizeWidth(814),
                width: resizeWidth(1392),
                height: resizeHeight(3085),
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    color: 'black',
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}>
                    Finansų katedra, UžEIK!
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigate('penkiDuDu')
            }}  style={{
                backgroundColor: 'white',
                opacity: 0.5,
                padding: 10,
                position: 'absolute',
                top: resizeHeight(1760),
                left: resizeWidth(2288),
                width: resizeWidth(644),
                height: resizeHeight(682),
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    color: 'black',
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}>
                    {'\u003E'}{'\u003E'}
                </Text>
            </TouchableOpacity>
        </NavBase>
    );
}

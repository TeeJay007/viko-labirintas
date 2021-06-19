import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, useWindowDimensions, TouchableOpacity } from 'react-native';

import NavBase from './nav_base'

const IMAGE = require('../../NavigationCovers/keturiduvienas.jpg');
const IMAGE_WIDTH = 3024;
const IMAGE_HEIGHT = 4032;

export default function KeturiDuVienas({ navigation: { navigate }}) {
    const {width: screenW, height: screenH} = useWindowDimensions()

    const getScreenWidth = () => IMAGE_WIDTH / IMAGE_HEIGHT * screenH;
    const getScreenHeight = () => screenH;
    
    const resizeWidth = (w) => w * getScreenWidth() / IMAGE_WIDTH
    const resizeHeight = (h) => h * getScreenHeight() / IMAGE_HEIGHT

    return (
        <NavBase image={IMAGE} width={IMAGE_WIDTH} height={IMAGE_HEIGHT}>
            <TouchableOpacity onPress={() => {
                navigate('kompiuteriai')
            }}  style={{
                backgroundColor: 'white',
                opacity: 0.5,
                padding: 10,
                position: 'absolute',
                top: resizeHeight(1232),
                left: resizeWidth(792),
                width: resizeWidth(1095),
                height: resizeHeight(2530),
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
            <TouchableOpacity onPress={() => {
                navigate('ketvirtasVestibiulis')
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
                    {'\u003C'}{'\u003C'}
                </Text>
            </TouchableOpacity>
        </NavBase>
    );
}

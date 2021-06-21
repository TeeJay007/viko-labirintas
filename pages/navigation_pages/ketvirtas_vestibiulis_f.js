import React from 'react';
import { Text, useWindowDimensions, TouchableOpacity } from 'react-native';
import NavBase from './nav_base'
import {useState , useEffect} from 'react'
const IMAGE = require('../../NavigationCovers/ketvaukstasnaujas.jpg');
const IMAGE_WIDTH = 8192;
const IMAGE_HEIGHT = 1269;

export default function KetvirtasVestibiulisF({ navigation: { navigate }}) {
    
    const {width: screenW, height: screenH} = useWindowDimensions()

    const getScreenWidth = () => IMAGE_WIDTH / IMAGE_HEIGHT * screenH;
    const getScreenHeight = () => screenH;
    
    const resizeWidth = (w) => w * getScreenWidth() / IMAGE_WIDTH
    const resizeHeight = (h) => h * getScreenHeight() / IMAGE_HEIGHT
        
    return (
        <NavBase image={IMAGE} width={IMAGE_WIDTH} height={IMAGE_HEIGHT}>
            <TouchableOpacity onPress={() => {
                navigate('lenteles')
            }}  style={{
                backgroundColor: 'rgba(255,255,255,0.3)',
                //opacity: 0.5,
                padding: 10,
                position: 'absolute',
                top: resizeHeight(547),
                left: resizeWidth(2473),
                width: resizeWidth(257),
                height: resizeHeight(144),
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

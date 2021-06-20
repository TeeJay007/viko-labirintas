import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, useWindowDimensions, TouchableOpacity } from 'react-native';

import NavBase from './nav_base'

const IMAGE = require('../../NavigationCovers/vikobankas_f.jpg');
const IMAGE_WIDTH = 4608;
const IMAGE_HEIGHT = 2350;

export default function VikoBankas({ navigation: { navigate }}) {
    const {width: screenW, height: screenH} = useWindowDimensions()

    const getScreenWidth = () => IMAGE_WIDTH / IMAGE_HEIGHT * screenH;
    const getScreenHeight = () => screenH;
    
    const resizeWidth = (w) => w * getScreenWidth() / IMAGE_WIDTH
    const resizeHeight = (h) => h * getScreenHeight() / IMAGE_HEIGHT

    return (
        <NavBase image={IMAGE} width={IMAGE_WIDTH} height={IMAGE_HEIGHT}>
            <TouchableOpacity onPress={() => {
                navigate('paskutiniokahootiejimasvb')
            }}  style={{
                backgroundColor: 'rgba(255,255,255,0.4)',
                opacity: 0.5,
                padding: 10,
                position: 'absolute',
                top: resizeHeight(423),
                left: resizeWidth(1137),
                width: resizeWidth(546),
                height: resizeHeight(1239),
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
                    navigate('vikobankasiejimas')
                }}  style={{
                    backgroundColor: 'rgba(255,255,255,0.4)',
                    opacity: 0.5,
                    padding: 10,
                    position: 'absolute',
                    top: resizeHeight(2000),
                    left: resizeWidth(2000),
                    width: resizeWidth(616),
                    height: resizeHeight(409),
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

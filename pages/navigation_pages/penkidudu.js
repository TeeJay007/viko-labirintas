import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, useWindowDimensions, TouchableOpacity } from 'react-native';

import NavBase from './nav_base'

const IMAGE = require('../../NavigationCovers/penkidudu_f.jpg');
const IMAGE_WIDTH = 4608;
const IMAGE_HEIGHT = 2037;

export default function PenkiDuDu({ navigation: { navigate }}) {
    const {width: screenW, height: screenH} = useWindowDimensions()

    const getScreenWidth = () => IMAGE_WIDTH / IMAGE_HEIGHT * screenH;
    const getScreenHeight = () => screenH;
    
    const resizeWidth = (w) => w * getScreenWidth() / IMAGE_WIDTH
    const resizeHeight = (h) => h * getScreenHeight() / IMAGE_HEIGHT

    return (
        <NavBase image={IMAGE} width={IMAGE_WIDTH} height={IMAGE_HEIGHT}>
            <TouchableOpacity onPress={() => {
                navigate('penkiDuDuVidus')
            }}  style={{
                backgroundColor: 'rgba(255,255,255,0.3)',
                //opacity: 0.5,
                padding: 10,
                position: 'absolute',
                top: resizeHeight(648),
                left: resizeWidth(1398),
                width: resizeWidth(1098),
                height: resizeHeight(1146),
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
                navigate('penkiduketuri')
            }}  style={{
                backgroundColor: 'rgba(255,255,255,0.3)',
                //opacity: 0.5,
                padding: 10,
                position: 'absolute',
                top: resizeHeight(720),
                left: resizeWidth(3060),
                width: resizeWidth(354),
                height: resizeHeight(753),
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    color: 'black',
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}>
                    Grįžti atgal
                </Text>
            </TouchableOpacity>
        </NavBase>
    );
}

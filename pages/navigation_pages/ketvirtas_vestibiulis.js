import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, useWindowDimensions, TouchableOpacity } from 'react-native';

import NavBase from './nav_base'

const IMAGE = require('../../NavigationCovers/ketvaukstasnaujas.jpg');
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
                backgroundColor: 'rgba(255,255,255,0.5)',
                opacity: 0.5,
                padding: 10,
                position: 'absolute',
                top: resizeHeight(700),
                left: resizeWidth(260),
                width: resizeWidth(500),
                height: resizeHeight(450),
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
                navigate('penktasVestibiulis')
            }}  style={{
                backgroundColor: 'rgba(255,255,255,0.4)',
                opacity: 0.5,
                padding: 10,
                position: 'absolute',
                top: resizeHeight(400),
                left: resizeWidth(2610),
                width: resizeWidth(800),
                height: resizeHeight(400),
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    color: 'black',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    paddingTop: 46
                }}>
                    Pakilti į penktajį aukstą
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigate('keturiDuVienas')
            }}  style={{
                backgroundColor: 'rgba(255,255,255,0.5)',
                opacity: 0.5,
                padding: 10,
                position: 'absolute',
                top: resizeHeight(680),
                left: resizeWidth(5390),
                width: resizeWidth(530),
                height: resizeHeight(450),
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
                navigate('lenteles')
            }}  style={{
                backgroundColor: 'rgba(255,255,255,0.3)',
                opacity: 0.5,
                padding: 10,
                position: 'absolute',
                top: resizeHeight(685),
                left: resizeWidth(1005),
                width: resizeWidth(350),
                height: resizeHeight(205),
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

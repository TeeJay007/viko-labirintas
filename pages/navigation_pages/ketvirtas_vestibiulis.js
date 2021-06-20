import React from 'react';
import { Text, useWindowDimensions, TouchableOpacity } from 'react-native';
import NavBase from './nav_base'
const IMAGE = require('../../NavigationCovers/ketvaukstasnaujas.jpg');
const IMAGE_WIDTH = 8192;
const IMAGE_HEIGHT = 1269;

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
                top: resizeHeight(560),
                left: resizeWidth(1881),
                width: resizeWidth(360),
                height: resizeHeight(329),
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
                top: resizeHeight(308),
                left: resizeWidth(3717),
                width: resizeWidth(656),
                height: resizeHeight(303),
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
                top: resizeHeight(558),
                left: resizeWidth(5940),
                width: resizeWidth(398),
                height: resizeHeight(329),
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

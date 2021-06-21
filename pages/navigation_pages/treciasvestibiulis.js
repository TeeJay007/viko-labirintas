import React from 'react';
import { Text, useWindowDimensions, TouchableOpacity } from 'react-native';
import NavBase from './nav_base'

const IMAGE = require('../../NavigationCovers/ketvirtasaukstasvestibiulis_f.jpg');
const IMAGE_WIDTH = 6144;
const IMAGE_HEIGHT = 1608;

export default function TreciasVestibiulis({ navigation: { navigate }}) {
    const {width: screenW, height: screenH} = useWindowDimensions()

    const getScreenWidth = () => IMAGE_WIDTH / IMAGE_HEIGHT * screenH;
    const getScreenHeight = () => screenH;
    
    const resizeWidth = (w) => w * getScreenWidth() / IMAGE_WIDTH
    const resizeHeight = (h) => h * getScreenHeight() / IMAGE_HEIGHT

    const updateStorage = () => {
        navigate('ketvirtasVestibiulisF')
    }

    return ( 
        <NavBase image={IMAGE} width={IMAGE_WIDTH} height={IMAGE_HEIGHT}>
            <TouchableOpacity onPress={() => {
                updateStorage();
            }}  style={{
                backgroundColor: 'rgba(255,255,255,0.3)',
                //opacity: 0.5,
                padding: 10,
                position: 'absolute',
                top: resizeHeight(800),
                left: resizeWidth(2650),
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
                    Užeik į Ekonomikos fakultetą!
                </Text>
            </TouchableOpacity>
        </NavBase>
    );
}

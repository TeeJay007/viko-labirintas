import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, useWindowDimensions, TouchableOpacity } from 'react-native';

import NavBase from './nav_base'

const IMAGE = require('../../NavigationCovers/draudaiejimasnaujas.jpg');
const IMAGE_WIDTH = 3024;
const IMAGE_HEIGHT = 4032;

export default function VikoDraudaIejimas({ navigation: { navigate }}) {
    const {width: screenW, height: screenH} = useWindowDimensions()

    const getScreenWidth = () => IMAGE_WIDTH / IMAGE_HEIGHT * screenH;
    const getScreenHeight = () => screenH;
    
    const resizeWidth = (w) => w * getScreenWidth() / IMAGE_WIDTH
    const resizeHeight = (h) => h * getScreenHeight() / IMAGE_HEIGHT

    return (
        <NavBase image={IMAGE} width={IMAGE_WIDTH} height={IMAGE_HEIGHT}>
            <TouchableOpacity onPress={() => {
                navigate('vikodrauda')
            }}  style={{
                backgroundColor: 'rgba(255,255,255,0.3)',
                //opacity: 0.5,
                padding: 10,
                position: 'absolute',
                top: resizeHeight(953),
                left: resizeWidth(829),
                width: resizeWidth(1376),
                height: resizeHeight(2773),
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    color: 'black',
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}>
                   Viko Drauda 402
                </Text>
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
                backgroundColor: 'rgba(255,255,255,0.3)',
                //opacity: 0.5,
                padding: 10,
                position: 'absolute',
                top: resizeHeight(2053),
                left: resizeWidth(300),
                width: resizeWidth(500),
                height: resizeHeight(600),
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    color: 'black',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    paddingTop: 46
                }}>
                    {'\u003C'}{'\u003C'}
                </Text>
            </TouchableOpacity>
        </NavBase>
    );
}

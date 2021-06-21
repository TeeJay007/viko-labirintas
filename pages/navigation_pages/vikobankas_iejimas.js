import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, useWindowDimensions, TouchableOpacity } from 'react-native';

import NavBase from './nav_base'

const IMAGE = require('../../NavigationCovers/vikobankasiejimas.jpg');
const IMAGE_WIDTH = 3024;
const IMAGE_HEIGHT = 4032;

export default function VikoBankasIejimas({ navigation: { navigate }}) {
    const {width: screenW, height: screenH} = useWindowDimensions()

    const getScreenWidth = () => IMAGE_WIDTH / IMAGE_HEIGHT * screenH;
    const getScreenHeight = () => screenH;
    
    const resizeWidth = (w) => w * getScreenWidth() / IMAGE_WIDTH
    const resizeHeight = (h) => h * getScreenHeight() / IMAGE_HEIGHT

    return (
        <NavBase image={IMAGE} width={IMAGE_WIDTH} height={IMAGE_HEIGHT}>
            <TouchableOpacity onPress={() => {
                navigate('vikobankas')
            }}  style={{
                backgroundColor: 'rgba(255,255,255,0.3)',
                //opacity: 0.5,
                padding: 10,
                position: 'absolute',
                top: resizeHeight(1353),
                left: resizeWidth(340),
                width: resizeWidth(1656),
                height: resizeHeight(2673),
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    color: 'black',
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}>
                   Viko Bankas 401
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
                navigate('vikodraudaiejimas')
            }}  style={{
                backgroundColor: 'rgba(255,255,255,0.3)',
                //opacity: 0.5,
                padding: 10,
                position: 'absolute',
                top: resizeHeight(2053),
                left: resizeWidth(2100),
                width: resizeWidth(600),
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
                    {'\u003E'}{'\u003E'}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigate('ketvirtasVestibiulis')
            }}  style={{
                backgroundColor: 'rgba(255,255,255,0.3)',
                //opacity: 0.5,
                padding: 10,
                position: 'absolute',
                top: resizeHeight(2053),
                left: resizeWidth(10),
                width: resizeWidth(300),
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

import React , {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, useWindowDimensions, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import NavBase from './nav_base'

const IMAGE = require('../../NavigationCovers/vikodraudavidus.jpg');
const IMAGE_WIDTH = 4608;
const IMAGE_HEIGHT = 2350;

export default function VikoDrauda({ navigation: { navigate }}) {
    const {width: screenW, height: screenH} = useWindowDimensions()

    const [washere, setwashere] = useState("-")
    useEffect(()=>{
     AsyncStorage.getItem("vikodraudos", (err, result) => {
         setwashere(result);
     });
    },[])


    const getScreenWidth = () => IMAGE_WIDTH / IMAGE_HEIGHT * screenH;
    const getScreenHeight = () => screenH;
    
    const resizeWidth = (w) => w * getScreenWidth() / IMAGE_WIDTH
    const resizeHeight = (h) => h * getScreenHeight() / IMAGE_HEIGHT
    if(washere == 'false'){
    return (
        <NavBase image={IMAGE} width={IMAGE_WIDTH} height={IMAGE_HEIGHT}>
            <TouchableOpacity onPress={() => {
                navigate('viktorinaDrauda')
            }}  style={{
                backgroundColor: 'white',
                opacity: 0.5,
                padding: 10,
                position: 'absolute',
                top: resizeHeight(763),
                left: resizeWidth(1177),
                width: resizeWidth(346),
                height: resizeHeight(339),
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
else {
    return (
        <NavBase image={IMAGE} width={IMAGE_WIDTH} height={IMAGE_HEIGHT}>
                <TouchableOpacity onPress={() => {
                    navigate('vikodraudaiejimas')
                }}  style={{
                    backgroundColor: 'white',
                    opacity: 0.5,
                    padding: 10,
                    position: 'absolute',
                    top: resizeHeight(2000),
                    left: resizeWidth(1600),
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
}

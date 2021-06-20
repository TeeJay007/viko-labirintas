import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, useWindowDimensions, TouchableOpacity, StyleSheet, View } from 'react-native';

import NavBase from './nav_base'

const IMAGE = require('../../NavigationCovers/ekranas.jpg');
const IMAGE_WIDTH = 4608;
const IMAGE_HEIGHT = 6350;

export default function VikoBankas({ navigation: { navigate }}) {
    const {width: screenW, height: screenH} = useWindowDimensions()

    const getScreenWidth = () => IMAGE_WIDTH / IMAGE_HEIGHT * screenH;
    const getScreenHeight = () => screenH;
    
    const resizeWidth = (w) => w * getScreenWidth() / IMAGE_WIDTH
    const resizeHeight = (h) => h * getScreenHeight() / IMAGE_HEIGHT

    const navigateToOutSide = () => {
        navigate('laukas');
    }

    return (
        <NavBase image={IMAGE} width={IMAGE_WIDTH} height={IMAGE_HEIGHT}>
            <View style={{flex: 10}}>

            </View>
            <View style={styles.mainview}>
                <TouchableOpacity onPress={() => navigateToOutSide()}>
                <View style={styles.refreshButton}>
                    <Text style={styles.refreshButtonText}>Pradėti iš naujo</Text>
                </View>
                </TouchableOpacity>    
            </View>
            <View style={{flex: 1}}>

            </View>
        </NavBase>
    );
}


const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  refreshButtonText: {
    fontSize: 24,
    lineHeight: 24,
    color: "white",
    fontWeight: "bold",
  },
  refreshButton: {
    width: 200,
    height: 60,
    backgroundColor: "dodgerblue",
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
})
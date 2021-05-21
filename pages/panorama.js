import React, {useRef} from 'react';
import { StyleSheet, Text, View, Image, PanResponder, Animated, useWindowDimensions, TouchableOpacity } from 'react-native';

const IMAGE = "https://upload.wikimedia.org/wikipedia/commons/b/bd/Spitzkoppe_360_Panorama.jpg";
const IMAGE_WIDTH = 10000;
const IMAGE_HEIGHT = 1768;

export default function Panorama() {
    const pan = useRef(new Animated.ValueXY()).current;

    const {width: screenW, height: screenH} = useWindowDimensions()

    const getScreenWidth = () => IMAGE_WIDTH / IMAGE_HEIGHT * screenH;
    const getScreenHeight = () => screenH;
    
    const resizeWidth = (w) => w * getScreenWidth() / IMAGE_WIDTH
    const resizeHeight = (h) => h * getScreenHeight() / IMAGE_HEIGHT

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
            pan.setOffset({
              x: pan.x._value,
              y: pan.y._value
            });
        },
        onPanResponderMove: (e, gesture) => {
            const wide = resizeWidth(IMAGE_WIDTH) / 2

            if(Math.abs(gesture.dx) > 2)
            if(pan.x._offset + gesture.dx < wide - screenW / 2 && 
               pan.x._offset + gesture.dx > -(wide - screenW / 2)){
                return Animated.event([
                    null, {dx: pan.x, dy: pan.y}
                ],{useNativeDriver: false})(e, gesture)
            }
        },
        onPanResponderRelease: (e, gesture) => {
            const wide = resizeWidth(IMAGE_WIDTH) / 2
            
            if(Math.abs(gesture.dx) > 2)
            if(pan.x._offset + gesture.dx < wide - screenW / 2 && 
               pan.x._offset + gesture.dx > -(wide - screenW / 2))
                pan.flattenOffset()
            else{
                pan.setOffset({
                    x: 0,
                    y: 0
                });
                if(pan.x._value < 0)
                    pan.setValue({
                        x: -(wide - screenW / 2),
                        y: pan.y._value
                    });
                if(pan.x._value > 0)
                    pan.setValue({
                        x: wide - screenW / 2,
                        y: pan.y._value
                    });
            }
        },
    });

    return (
        <View style={styles.panorama}>
            <Animated.View {...panResponder.panHandlers} style={[
                pan.getLayout(),
                {
                    backgroundColor: '#fff',
                    width: getScreenWidth(),
                    height: getScreenHeight(),
                    top: 0,
                }
            ]}>
                <Text style={{
                    position: 'absolute',
                    top: resizeHeight(550),
                    left: resizeWidth(528)
                }}>Tekstas lauke</Text>
                <TouchableOpacity onPress={() => {}}  style={{
                    backgroundColor: 'blue',
                    padding: 5,
                    position: 'absolute',
                    top: resizeHeight(420),
                    left: resizeWidth(7124)
                }}><Text style={{color: 'white'}}>Tekstas ant kalno?</Text></TouchableOpacity>



                <Image 
                style={[
                    {
                        width: getScreenWidth(),
                        height: getScreenHeight(),
                        position: 'absolute',
                        zIndex: -9
                    }
                ]}
                resizeMethod='resize'
                    source={{ uri: IMAGE }}
                />
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    panorama: {
        flex: 1,
        backgroundColor: '#fff',
        overflow: 'hidden',
        height: '100%',
        alignItems: 'center'
    },
});


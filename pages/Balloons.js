import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackgroundBase,
  SafeAreaView,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import "react-native-gesture-handler";




class Balloons extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            mainBlue: require('../Images/blue1.png'),
            mainGreen: require('../Images/green1.png'),
            mainRed: require('../Images/red1.png'),
            imageHeight: 192,
            imageWidth: 120,
        }
    }

    onPressBlue = () => {
        setTimeout(() => {
            this.setState({mainBlue: require('../Images/blue2.png')})
        }, 100);
        setTimeout(() => {
            this.setState({mainBlue: require('../Images/blue3.png')})
        }, 200);
        setTimeout(() => {
            this.setState({mainBlue: require('../Images/blue4.png')})
        }, 300);
        setTimeout(() => {
            this.setState({mainBlue: require('../Images/ketboard.png')})
            this.setState({imageHeight: 150, imageWidth: 150})
        }, 500);
    };

    onPressGreen = () => {
        setTimeout(() => {
            this.setState({mainGreen: require('../Images/green2.png')})
        }, 100);
        setTimeout(() => {
            this.setState({mainGreen: require('../Images/green3.png')})
        }, 200);
        setTimeout(() => {
            this.setState({mainGreen: require('../Images/green4.png')})
        }, 300);
        setTimeout(() => {
            this.setState({mainGreen: require('../Images/speekers.jpg')})
            this.setState({imageHeight: 192, imageWidth: 150})
        }, 500);
    };

    onPressRed = () => {
        setTimeout(() => {
            this.setState({mainRed: require('../Images/red2.png')})
        }, 100);
        setTimeout(() => {
            this.setState({mainRed: require('../Images/red3.png')})
        }, 200);
        setTimeout(() => {
            this.setState({mainRed: require('../Images/red4.png')})
        }, 300);
        setTimeout(() => {
            this.setState({mainRed: require('../Images/mouse.jpg')})
            this.setState({imageHeight: 150, imageWidth: 150})
        }, 500);
    };

    render(){
        return (
            <ImageBackground source={require('../Images/sa.jpg')} style={styles.image}>
                <View style={styles.container}>
                    
                    <TouchableOpacity onPress={this.onPressBlue}>
                        <Image source={this.state.mainBlue} style={{width: this.state.imageWidth, height: this.state.imageHeight}}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.onPressGreen}>
                        <Image source={this.state.mainGreen} style={{width: this.state.imageWidth, height: this.state.imageHeight}}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.onPressRed}>
                        <Image source={this.state.mainRed} style={{width: this.state.imageWidth, height: this.state.imageHeight}}></Image>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    balloon: {
        width: 120,
        height: 192,
    },
    ballonImage:{
        width: 150,
        height: 150,
    },
    image: {
        height: "100%",
        width: "100%",
        resizeMode: "cover",
    },
});

export default Balloons;
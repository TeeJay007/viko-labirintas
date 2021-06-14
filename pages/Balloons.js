import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  LogBox,
  SafeAreaView,
  Alert,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import "react-native-gesture-handler";
import AsyncStorage from '@react-native-async-storage/async-storage';

const paperHeight = 192;
const paperWidht = 130;

class Balloons extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            mainBlue: require('../Images/blue1.png'),
            mainGreen: require('../Images/green1.png'),
            mainRed: require('../Images/red1.png'),
            imageHeight: 192,
            imageWidth: 130,
            numberOne: "",
            numberTwo: "",
            numberThree: "",
            ballonBlueWasPoped: false,
            ballonGreenWasPoped: false,
            ballonRedWasPoped: false,
        }
    }

    onPressBlue = () => {
        if(this.state.ballonBlueWasPoped == false)
        {
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
                this.setState({imageHeight: paperHeight, imageWidth: paperWidht})
            }, 500);
        }
        this.setState({ballonBlueWasPoped: true});
    };

    onPressGreen = () => {
        if(this.state.ballonGreenWasPoped == false)
        {
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
                this.setState({mainGreen: require('../Images/twospeekers.jpg')})
                this.setState({imageHeight: paperHeight, imageWidth: paperWidht})
            }, 500);
        }
        this.setState({ballonGreenWasPoped: true});
    };

    onPressRed = () => {
        if(this.state.ballonRedWasPoped == false)
        {
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
                this.setState({imageHeight: paperHeight, imageWidth: paperWidht})
            }, 500);
        }
        this.setState({ballonRedWasPoped: true});
    };

    numberOneChange(numberOne) {
        if(numberOne == "-" || numberOne == " " || numberOne == "," || numberOne == ".")
        this.setState({ numberOne: ""});
        else
        this.setState({ numberOne });
    }

    numberTwoChange(numberTwo) {
        if(numberTwo == "-" || numberTwo == " " || numberTwo == "," || numberTwo == ".")
        this.setState({ numberTwo: ""});
        else
        this.setState({ numberTwo });
    }

    numberThreeChange(numberThree) {
        if(numberThree == "-" || numberThree == " " || numberThree == "," || numberThree == ".")
        this.setState({ numberThree: ""});
        else
        this.setState({ numberThree });
    }

    handleSubmitCheckNumbers = () => {
        
        if(this.state.numberOne == "4" && this.state.numberTwo == "2" && this.state.numberThree == "1"){
            this.BalloonsAlertWin();
            AsyncStorage.setItem('balioneliai', 'true');
            AsyncStorage.setItem('kompiuteriukahoot', 'false');
        }
        else {
            this.BalloonsAlertLost();
        }
        
    }

    navigateToComputers = () => {
        this.props.navigation.navigate("penktasVestibiulis");
    }

    BalloonsAlertWin = () =>
    Alert.alert(
      "Teisingai!",
      "Bandykime surasti 421-ą kabinetą?", [{ text: "Taip", onPress: () => this.navigateToComputers()}],
      {cancelable: false}
    );

    BalloonsAlertLost = () =>
    Alert.alert(
      "Neteisingai!",
      "Spėliokite toliau!", [{ text: "OK"}],
      {cancelable: false}
    );

    render(){
        //LogBox.ignoreAllLogs(true);
        return (
            <ImageBackground source={require('../NavigationCovers/sauzdotiesbackgroundas.jpg')} style={styles.image}>
                <View style={styles.container}>
                    
                    <View style={styles.textarea}>
                    <Text style={{fontSize: 24, fontWeight: "bold"}}>Koks tai galėtų būti skaičius?</Text>
                    </View>
                    
                    <View style={styles.ballonsarea}>
                    <TouchableOpacity style={styles.balloonsButton} onPress={this.onPressBlue}>
                        <Image source={this.state.mainBlue} style={{width: this.state.imageWidth, height: this.state.imageHeight, borderRadius: 10}}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.balloonsButton} onPress={this.onPressGreen}>
                        <Image source={this.state.mainGreen} style={{width: this.state.imageWidth, height: this.state.imageHeight, borderRadius: 10}}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.balloonsButton} onPress={this.onPressRed}>
                        <Image source={this.state.mainRed} style={{width: this.state.imageWidth, height: this.state.imageHeight, borderRadius: 10}}></Image>
                    </TouchableOpacity>
                    </View>
                    
                    <View style={styles.inputarea}>
                        <Text style={{fontSize: 24, fontWeight: "bold"}} >Įrašykite:</Text>
                        
                        <View style={{flexDirection: 'row'}}>
                        <TextInput style={styles.input} value={this.state.numberOne.toString()} placeholder="0" keyboardType='numeric' maxLength={1}
                        onChangeText={(text) => this.numberOneChange(text)}
                        />
                        <TextInput style={styles.input} value={this.state.numberTwo.toString()} placeholder="0" keyboardType='numeric' maxLength={1}
                        onChangeText={(text) => this.numberTwoChange(text)}
                        />
                        <TextInput style={styles.input} value={this.state.numberThree.toString()} placeholder="0" keyboardType='numeric' maxLength={1}
                        onChangeText={(text) => this.numberThreeChange(text)}
                        />
                        </View>
                        <Text></Text>
                        <TouchableOpacity onPress={this.handleSubmitCheckNumbers}>
                        <View style={styles.refreshButton}>
                        <Text style={styles.refreshButtonText}>Patikrinti</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ballonsarea: {
        height: 250,
        flexDirection: 'row',
        margin: 5,
        
        alignItems: 'center',
    },
    textarea: {
        height: 100,
        justifyContent: 'center',
    },
    balloonsButton: {
        margin: 5,
        borderRadius: 10,
        height: 200,
        width: 130,
    },
    balloon: {
        width: 120,
        height: 192,
    },
    ballonImage:{
        width: 50,
        height: 50,
    },
    image: {
        height: "100%",
        width: "100%",
        resizeMode: "cover",
    },
    inputarea: {
        
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        padding: 10,
        backgroundColor: "white",
        borderColor: "gainsboro",
        borderWidth: 7,
        borderRadius: 20,
        margin: 5,
        marginBottom: 5,
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    refreshButtonText: {
        fontSize: 24,
        lineHeight: 24,
        color: "white",
        fontWeight: "bold",
    },
      refreshButton: {
        width: 120,
        height: 50,
        backgroundColor: "dodgerblue",
        marginLeft: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
});

export default Balloons;
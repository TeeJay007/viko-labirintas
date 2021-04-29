import React, { Component } from 'react';
import { LogBox, Animated, TouchableWithoutFeedback, StyleSheet, Text, View, SafeAreaView  } from 'react-native';
import "react-native-gesture-handler";



class ScrambleFinansai extends Component{
    
    

    constructor(props) {
        super(props);

        this.state = {
            F0letter: false,
            I0letter: false,
            N0letter: false,
            A0letter: false,
            N1letter: false,
            S0etter: false,
            A1etter: false,
            I1etter: false,
        }
        
        this.LetterF0 = new Animated.ValueXY({ x: -175, y:  150 })
        this.LetterI0 = new Animated.ValueXY({ x: -125, y:  105 })
        this.LetterN0 = new Animated.ValueXY({ x: -75,  y:  60 })
        this.LetterA0 = new Animated.ValueXY({ x: -25,  y:  15 })
        this.LetterN1 = new Animated.ValueXY({ x:  25,  y: -30 })
        this.LetterS0 = new Animated.ValueXY({ x:  75,  y: -75 })
        this.LetterA1 = new Animated.ValueXY({ x:  125, y: -120 })
        this.LetterI1 = new Animated.ValueXY({ x:  175, y: -165 })
        
    }

    MoveLetters = (letter) => {
        
        if(letter == 0)
        if (this.state.F0letter == false){
            Animated.spring(this.LetterF0, {
                toValue: {x: 0, y: 150},
                duration: 500,
              }).start()
            this.setState({F0letter : true})
        }
        else{
            Animated.spring(this.LetterF0, {
                toValue: {x: -175, y: 150},
                duration: 500,
              }).start()
            this.setState({F0letter : false})
        }
        
        if(letter == 1)
        if (this.state.I0letter == false){
            Animated.spring(this.LetterI0, {
                toValue: {x: 0, y: 150},
                duration: 500,
              }).start()
            this.setState({I0letter : true})
        }
        else{
            Animated.spring(this.LetterI0, {
                toValue: {x: -125, y: 105},
                duration: 500,
              }).start()
            this.setState({I0letter : false})
        }

        if(letter == 2)
        if (this.state.N0letter == false){
            Animated.spring(this.LetterN0, {
                toValue: {x: 0, y: 150},
                duration: 500,
              }).start()
            this.setState({N0letter : true})
        }
        else{
            Animated.spring(this.LetterN0, {
                toValue: {x: -75, y: 60},
                duration: 500,
              }).start()
            this.setState({N0letter : false})
        }


        if(letter == 3)
        if (this.state.A0letter == false){
            Animated.spring(this.LetterA0, {
                toValue: {x: 0, y: 150},
                duration: 500,
              }).start()
            this.setState({A0letter : true})
        }
        else{
            Animated.spring(this.LetterA0, {
                toValue: {x: -25, y: 15},
                duration: 500,
              }).start()
            this.setState({A0letter : false})
        }

        if(letter == 4)
        if (this.state.N1letter == false){
            Animated.spring(this.LetterN1, {
                toValue: {x: 0, y: 150},
                duration: 500,
              }).start()
            this.setState({N1letter : true})
        }
        else{
            Animated.spring(this.LetterN1, {
                toValue: {x: 25, y: -30},
                duration: 500,
              }).start()
            this.setState({N1letter : false})
        }
        
        if(letter == 5)
        if (this.state.S0letter == false){
            Animated.spring(this.LetterS0, {
                toValue: {x: 0, y: 150},
                duration: 500,
              }).start()
            this.setState({S0letter : true})
        }
        else{
            Animated.spring(this.LetterS0, {
                toValue: {x: 75, y: -75},
                duration: 500,
              }).start()
            this.setState({S0letter : false})
        }

        if(letter == 6)
        if (this.state.A1letter == false){
            Animated.spring(this.LetterA1, {
                toValue: {x: 0, y: 150},
                duration: 500,
              }).start()
            this.setState({A1letter : true})
        }
        else{
            Animated.spring(this.LetterA1, {
                toValue: {x: 125, y: -120},
                duration: 500,
              }).start()
            this.setState({A1letter : false})
        }

        if(letter == 7)
        if (this.state.I1letter == false){
            Animated.spring(this.LetterI1, {
                toValue: {x: 0, y: 150},
                duration: 500,
              }).start()
            this.setState({I1letter : true})
        }
        else{
            Animated.spring(this.LetterI1, {
                toValue: {x: 175, y: -165},
                duration: 500,
              }).start()
            this.setState({I1letter : false})
        }
    }



    render(){
        //LogBox.ignoreAllLogs();
    return (
        <SafeAreaView style = {styles.safeAreaView} >
            <View style = {styles.container}>
                
                <Animated.View style={[styles.letterbox, this.LetterF0.getLayout()]}>
                    <TouchableWithoutFeedback style={styles.button} onPress={ () => {this.MoveLetters(0); }}>
                        <Text style={styles.buttonText}>F</Text>
                    </TouchableWithoutFeedback> 
                </Animated.View>

                <Animated.View style={[styles.letterbox, this.LetterI0.getLayout()]}>
                    <TouchableWithoutFeedback style={styles.button} onPress={ () => {this.MoveLetters(1); }}>
                        <Text style={styles.buttonText}>I</Text>
                    </TouchableWithoutFeedback> 
                </Animated.View>

                <Animated.View style={[styles.letterbox, this.LetterN0.getLayout()]}>
                    <TouchableWithoutFeedback style={styles.button} onPress={ () => {this.MoveLetters(2); }}>
                        <Text style={styles.buttonText}>N</Text>
                    </TouchableWithoutFeedback> 
                </Animated.View>
                
                <Animated.View style={[styles.letterbox, this.LetterA0.getLayout()]}>
                    <TouchableWithoutFeedback style={styles.button} onPress={ () => {this.MoveLetters(3); }}>
                        <Text style={styles.buttonText}>A</Text>
                    </TouchableWithoutFeedback>
                </Animated.View>

                <Animated.View style={[styles.letterbox, this.LetterN1.getLayout()]}>
                    <TouchableWithoutFeedback style={styles.button} onPress={ () => {this.MoveLetters(4); }}>
                        <Text style={styles.buttonText}>N</Text>
                    </TouchableWithoutFeedback>
                </Animated.View>

                <Animated.View style={[styles.letterbox, this.LetterS0.getLayout()]}>
                    <TouchableWithoutFeedback style={styles.button} onPress={ () => {this.MoveLetters(5); }}>
                        <Text style={styles.buttonText}>S</Text>
                    </TouchableWithoutFeedback>
                </Animated.View>

                <Animated.View style={[styles.letterbox, this.LetterA1.getLayout()]}>
                    <TouchableWithoutFeedback style={styles.button} onPress={ () => {this.MoveLetters(6); }}>
                        <Text style={styles.buttonText}>A</Text>
                    </TouchableWithoutFeedback>
                </Animated.View>

                <Animated.View style={[styles.letterbox, this.LetterI1.getLayout()]}>
                    <TouchableWithoutFeedback style={styles.button} onPress={ () => {this.MoveLetters(7); }}>
                        <Text style={styles.buttonText}>I</Text>
                    </TouchableWithoutFeedback>
                </Animated.View>

            </View>
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeAreaView: {
    flex: 1,
    paddingTop: 30
  },
  letterbox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gainsboro',
    borderRadius: 10,
    width: 45,
    height: 45,
  },
  button: {
    paddingTop: 24,
    paddingBottom: 24,
  },
  buttonText: {
    fontSize: 24,
    color: '#333',
  },
});

export default ScrambleFinansai;
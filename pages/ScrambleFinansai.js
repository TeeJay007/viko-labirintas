import React, { Component } from "react";
import {
  LogBox,
  Animated,
  PanResponder,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
} from "react-native";
import "react-native-gesture-handler";

const LETTERSBOX_RADIUS = 25;
const Window = Dimensions.get('window');
const LettersMap = { 0: {letter:'F'}, 1: {letter:'I'}, 2: {letter:'N'}, 3: {letter:'A'}, 4: {letter:'N'}, 5: {letter:'S'}, 6: {letter:'A'}, 7: {letter:'I'}};
const BOXHEIGHT = 200;
class ScrambleFinansai extends Component {
  constructor(props) {
    super(props);

    this.dataDrag = [0,1,2,3,4,5,6,7];
      this.pan = this.dataDrag.map( () => new Animated.ValueXY() );
  
      this.state = 
      {
        showDraggable: true,
        dropZoneValues: null,
  
        StartPlaces: 
        {  
          0: { x: -150, y: BOXHEIGHT, u: false},
          1: { x:  -50, y: BOXHEIGHT, u: false},
          2: { x:   50, y: BOXHEIGHT, u: false},
          3: { x:  150, y: BOXHEIGHT, u: false},
          4: { x: -150, y: BOXHEIGHT +100, u: false},
          5: { x:  -50, y: BOXHEIGHT +100, u: false},
          6: { x:   50, y: BOXHEIGHT +100, u: false},
          7: { x:  150, y: BOXHEIGHT +100, u: false},
        },

        IndexPlaces:
        {
          0: { place: 0},
          1: { place: 0},
          2: { place: 0},
          3: { place: 0},
          4: { place: 0},
          5: { place: 0},
          6: { place: 0},
          7: { place: 0},
        },

      };
      
      this.GivePlaces();
    
  }

  GivePlaces =() => {
    
    for (let i = 0; i < 8; i++) {
      
        let randomNumber = Math.floor(Math.random() * 8);
        if (this.state.StartPlaces[randomNumber].u == false) {
          
          this.state.IndexPlaces[i].place = randomNumber; 
          this.state.StartPlaces[randomNumber].u = true;
          this.pan[i].x.setValue(this.state.StartPlaces[randomNumber].x);
          this.pan[i].y.setValue(this.state.StartPlaces[randomNumber].y);
        }
        else {
            i--;
        }
    }
  }

  getPanResponder(index) {
      return PanResponder.create({
          
        onStartShouldSetPanResponder: () => true,
        
        onPanResponderGrant: () => {
          this.pan[index].setOffset({
            x: this.pan[index].x._value,
            y: this.pan[index].y._value
          });
        },
        
        onPanResponderMove: (_,gesture) => {
          this.pan[index].x.setValue(gesture.dx)
          this.pan[index].y.setValue(gesture.dy)
        },

        onPanResponderRelease: (e, gesture) => {
          this.pan[index].flattenOffset()  
          if(this.isDropZone(gesture)){
                this.setState({
                    showDraggable : false
                });
            }else{
              let randomPlace = this.state.IndexPlaces[index].place;
              this.pan[index].x.setValue(this.state.StartPlaces[randomPlace].x);
              this.pan[index].y.setValue(this.state.StartPlaces[randomPlace].y);
            }
        }
    });    
  }

  isDropZone(gesture){
      var dz = this.state.dropZoneValues;
      return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
  }

  setDropZoneValues(event){
      this.setState({
          dropZoneValues : event.nativeEvent.layout
      });
  }

  render() {
    LogBox.ignoreAllLogs(true);
    return (
      <SafeAreaView style={styles.safeAreaView}>
         <View style={styles.mainContainer}>
              <View style={styles.zeroZone}>
                <Text> Koks tai žodis? </Text>
                <Text> {this.state.IndexPlaces[4].place}</Text>
              </View>
              
              <View
                  onLayout={this.setDropZoneValues.bind(this)}
                  style={styles.dropZone}>
                  <Text style={styles.text}>Drop me here!</Text>
              </View>

              {this.dataDrag.map((d, index) => (
                  <Animated.View
                      key={index}
                      {...this.getPanResponder(index).panHandlers}
                      style={[styles.draggableContainer, this.pan[index].getTranslateTransform(), styles.letterBox]}>
                      <Text style={styles.textInLetter}>{LettersMap[index].letter}</Text>
                  </Animated.View>
              ))}
          </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  safeAreaView: {
    flex: 1,
    paddingTop: 30,
  },
  dropZone: {
    height: 200,
    backgroundColor:'#2c3e50',
    justifyContent: 'center'
  },
  zeroZone: {
    height: 100,
    backgroundColor: 'blue',
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'bottom',
    color: 'white',
    fontSize: 24,
  },
  textInLetter: {
    textAlign: 'center',
    color: '#333',
    fontSize: 24,
  },
  draggableContainer: {
    position: 'absolute',
    marginTop: Window.height/2 - LETTERSBOX_RADIUS,
    marginLeft: Window.width/2 - LETTERSBOX_RADIUS,
  },
  letterBox      : {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',  
    backgroundColor: 'gainsboro',
    width: LETTERSBOX_RADIUS*2,
    height: LETTERSBOX_RADIUS*2,
    borderRadius: 5,
  },
});

export default ScrambleFinansai;

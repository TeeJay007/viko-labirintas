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
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";
import "react-native-gesture-handler";
import AsyncStorage from '@react-native-async-storage/async-storage';

const LETTERSBOX_RADIUS = 25;
const Window = Dimensions.get('window');
const LettersMap = { 0: {letter:'F'}, 1: {letter:'I'}, 2: {letter:'N'}, 3: {letter:'A'}, 4: {letter:'N'}, 5: {letter:'S'}, 6: {letter:'A'}, 7: {letter:'I'}, 8: {letter:'X'}};
const BOXHEIGHT = 50;
const DropZoneHeight = -55;
const backgroundImage = {
  uri: "https://sc.bns.lt/logos/1/20200902094253_VIKO_LOGO_PAGRINDINIS_V_LT.jpg",
};
class ScrambleFinansai extends Component {
  constructor(props) {
    super(props);

      this.dataDrag = [0,1,2,3,4,5,6,7];
      
      this.pan = this.dataDrag.map( () => new Animated.ValueXY() );
      
      this.state = 
      {
        showDraggable: true,
        dropZoneValues: null,
        Word: "XXXXXXXX",
        
        StartPlaces: 
        {  
          0: { x: -162, y: BOXHEIGHT, u: false},
          1: { x:  -53, y: BOXHEIGHT, u: false},
          2: { x:   53, y: BOXHEIGHT, u: false},
          3: { x:  162, y: BOXHEIGHT, u: false},
          4: { x: -162, y: BOXHEIGHT +100, u: false},
          5: { x:  -53, y: BOXHEIGHT +100, u: false},
          6: { x:   53, y: BOXHEIGHT +100, u: false},
          7: { x:  162, y: BOXHEIGHT +100, u: false},
        },

        DropZonePlaces: 
        {  
          0: { x: -189.0, y: DropZoneHeight, u: false, c: false},
          1: { x: -135.0, y: DropZoneHeight, u: false, c: false},
          2: { x:  -81.0, y: DropZoneHeight, u: false, c: false},
          3: { x:  -27.0, y: DropZoneHeight, u: false, c: false},
          4: { x:   27.0, y: DropZoneHeight, u: false, c: false},
          5: { x:   81.0, y: DropZoneHeight, u: false, c: false},
          6: { x:  135.0, y: DropZoneHeight, u: false, c: false},
          7: { x:  189.0, y: DropZoneHeight, u: false, c: false},
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
        
        IndexPlacesInDropZone:
        {
          0: { IndexOfPlace: 0},
          1: { IndexOfPlace: 0},
          2: { IndexOfPlace: 0},
          3: { IndexOfPlace: 0},
          4: { IndexOfPlace: 0},
          5: { IndexOfPlace: 0},
          6: { IndexOfPlace: 0},
          7: { IndexOfPlace: 0},
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

  SetToFreeBoxPlaces = () => {
    for (let i = 0; i < 8; i++) {
      this.state.StartPlaces[i].u = false
      this.state.DropZonePlaces[i].u = false;
      this.state.IndexPlacesInDropZone[i].IndexOfPlace = 0;
    }
  }

  SetInDropZone = (index) => {

    let shortestAndFree = 1000;
    let indexofplace = 1000;
    //console.log('--------------');
    for (let i = 0; i < 8; i++) {
      if (this.state.DropZonePlaces[i].u == false)
      {
        let stringFormat = JSON.stringify(this.pan[index].x);
        let PanXfloatFormat = parseFloat(stringFormat);

        let DropZoneXFloat = parseFloat(this.state.DropZonePlaces[i].x);
        
        let distance = DropZoneXFloat - PanXfloatFormat;
        if(distance < 0) distance = distance * -1;
        //console.log(distance);

        if(shortestAndFree > distance){
          shortestAndFree = distance;
          indexofplace = i;
          this.state.IndexPlacesInDropZone[index].IndexOfPlace = indexofplace;
        }
      }
    }
    this.state.DropZonePlaces[indexofplace].u = true;
    this.state.DropZonePlaces[indexofplace].c = true;
    this.pan[index].x.setValue(this.state.DropZonePlaces[indexofplace].x);
    this.pan[index].y.setValue(this.state.DropZonePlaces[indexofplace].y);
    //console.log(indexofplace + " <- Kur padeta | deze -> " + index);
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
          let BoxToFree = this.state.IndexPlacesInDropZone[index].IndexOfPlace;
          this.state.DropZonePlaces[BoxToFree].u = false;
        },

        onPanResponderRelease: (e, gesture) => {
          this.pan[index].flattenOffset()  
          if(this.isDropZone(gesture)){
                this.setState({
                    showDraggable : false,
                });
              this.SetInDropZone(index);  
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

  handleSubmitRefresh = () => {
    this.SetToFreeBoxPlaces();
    this.GivePlaces();
    this.state.Word = "";
  };

  handleSubmitCheckWord = () => {
    let Place = 1000;
    let Letter = '';
    this.state.Word = "";

    for (let i = 0; i < 8; i++) {
      Place = this.state.IndexPlacesInDropZone[i].IndexOfPlace;
      Letter = LettersMap[Place].letter;
      this.state.Word = this.state.Word + Letter;
    }

    if(this.state.Word == "FINANSAI"){
      console.log("Correct - " + this.state.Word);
      AsyncStorage.setItem('finansai', 'true');
      this.FinancaiAlertWin();
    }
    else {
      console.log("Incorrect - " + this.state.Word)
      this.FinancaiAlertLost();
    }
    
  };

  navigateToFinancai = () => {
    this.props.navigation.navigate("penktasVestibiulis");
  }

  FinancaiAlertWin = () =>
    Alert.alert(
    "Teisingai!",
    "Bandykime surasti Finansų katedrą?", [{ text: "Taip", onPress: () => this.navigateToFinancai()}],
    {cancelable: false}
  );

  FinancaiAlertLost = () =>
    Alert.alert(
    "Neteisingai!",
    "Dėliokite toliau!", [{ text: "OK"}],
    {cancelable: false}
  );

  render() {
    //LogBox.ignoreAllLogs(true);
    return (
      <ImageBackground source={require('../NavigationCovers/finansubackgroundas.jpg')} style={styles.image}>
      <SafeAreaView style={styles.safeAreaView}>
         <View style= {styles.container}>
              <View style={styles.zeroZone}>
                <Text style={styles.titleText}>Tai yra terminas, apibrėžiantis metodus, kuriais asmenys ar organizacijos įgyja, sukaupia, kontroliuoja ir naudoja piniginius išteklius per laikotarpį, įvertinant patiriamą riziką.</Text>
                <Text></Text>
                <Text style={styles.titleText}> Koks tai terminas? </Text>
              </View>
              
              <View
                  onLayout={this.setDropZoneValues.bind(this)}
                  style={styles.dropZone}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                  <Text style={styles.HintPlace}></Text>
                  <Text style={styles.HintPlace}></Text>
                  <Text style={styles.HintPlace}></Text>
                  <Text style={styles.HintPlace}></Text>
                  <Text style={styles.HintPlace}></Text>
                  <Text style={styles.HintPlace}></Text>
                  <Text style={styles.HintPlace}></Text>
                  <Text style={styles.HintPlace}></Text>
                  </View>
              </View>
              <View style={styles.buttonsZone} >
                  <View style={{flexDirection: 'row',justifyContent: 'space-around'}}>
                  <Text style={styles.ButtonsHintPlace}></Text>
                  <Text style={styles.ButtonsHintPlace}></Text>
                  <Text style={styles.ButtonsHintPlace}></Text>
                  <Text style={styles.ButtonsHintPlace}></Text>
                  </View>
                  <Text></Text>
                  <Text></Text>
                  <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                  <Text style={styles.ButtonsHintPlace}></Text>
                  <Text style={styles.ButtonsHintPlace}></Text>
                  <Text style={styles.ButtonsHintPlace}></Text>
                  <Text style={styles.ButtonsHintPlace}></Text>
                  </View>
              </View>
              
              <View style={styles.locationZone}>
                <TouchableOpacity onPress={this.handleSubmitRefresh}>
                  <View style={styles.refreshButton}>
                    <Text style={styles.refreshButtonText}>Perkrauti</Text>
                  </View>
                </TouchableOpacity>
                <Text></Text>
                <TouchableOpacity onPress={this.handleSubmitCheckWord}>
                  <View style={styles.refreshButton}>
                    <Text style={styles.refreshButtonText}>Patikrinti</Text>
                  </View>
                </TouchableOpacity>
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
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
  },
  safeAreaView: {
    flex: 1,
    paddingTop: 30,
  },
  button: {
    alignItems: "center",
    //backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 10,
    width: 150,
    height: 40,
  },
  dropZone: {
    height: 70,
    //backgroundColor:'#2c3e50',
    justifyContent: 'flex-start',
  },
  locationZone: {
    flex:1,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'stretch',
   // backgroundColor:'blue',
  },
  buttonsZone: {
    height: 220,
    //backgroundColor:'#444444',
    justifyContent: 'center'
  },
  zeroZone: {
    height: Window.height/2.5,
    //backgroundColor: 'blue',
    alignItems:'center',
    justifyContent:'center',
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'bottom',
    color: 'white',
    fontSize: 24,
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
  textInLetter: {
    textAlign: 'center',
    color: '#333',
    fontSize: 24,
  },
  HintPlace: {
    display: 'flex',
    backgroundColor: 'dodgerblue',
    width: 51,
    height: 51,
    borderRadius: 5,
    margin: 1,
  },
  ButtonsHintPlace: {
    display: 'flex',
    backgroundColor: 'dodgerblue',
    width: 61,
    height: 61,
    borderRadius: 5,
    margin: 1,
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
  titleText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "bold"
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
});

export default ScrambleFinansai;

import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList, TouchableOpacity, Alert, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Raktas from "./Viktorinos_GoogleSheet_Raktas.json"
export default function Pavyzdinis({ navigation: { navigate }}) {
  const image = { uri: "https://scontent.fplq1-1.fna.fbcdn.net/v/t1.6435-9/171013345_3932902256793104_4429939317269897519_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=973b4a&_nc_ohc=B6B7q8CuY78AX-stzxm&_nc_ht=scontent.fplq1-1.fna&oh=73fcc290783d96223fd537445ad40f33&oe=60CAA868"};
  const [_klaus,_setklaus]=useState(1);
  const [_Klausimai_Prev,_setKlausimai_Prev]= useState();
  const [_QnA_Prev,_setQnA_Prev]= useState();
  const [_Klausimai,_setKlausimai] = useState ([
    {text:'Ką reiškia skaičius 888,88?',key:'1'},
    {text:'Kas buvo pirmas Lietuvos banko valdybos po Nepriklausomybės atkūrimo pirmininkas?',key:'2'},
    {text:'Ar Lietuvoje spausdinamos Euro kupiūros ir kalamos monetos?',key:'3'},
    {text:'Kiek žvaigždžių supa ant euro monetos pavaizduotą Vytį?',key:'4'},
    {text:'Kiek simbolių sudaro banko sąskaitos numeris?',key:'5'},
    


  ]);
  const [_QnA,_setQnA] = useState ([
    //1
    {text:'Visų euro nominalų suma',key:'1',question:'1',answer:'correct'},
    {text:'2 eurų monetos praba',key:'2',question:'1',answer:'incorrect'},
    {text:'1000 euro monetų svoris',key:'3',question:'1',answer:'incorrect'},

    {text:'Kazys Ratkevičius',key:'4',question:'2',answer:'incorrect'},
    {text:'Reinoldijus Šarkinas',key:'5',question:'2',answer:'incorrect'},
    {text:'Bronius Povilaitis',key:'6',question:'2',answer:'correct'},

    {text:'Ir spausdinamos ir kalamos.',key:'7',question:'3',answer:'incorrect'},
    {text:'Tik kalamos monetos.',key:'8',question:'3',answer:'correct'},
    {text:'Tik spausdinamos kupiūros.',key:'9',question:'3',answer:'incorrect'},

    {text:'12',key:'10',question:'4',answer:'correct'},
    {text:'19',key:'11',question:'4',answer:'incorrect'},
    {text:'27',key:'12',question:'4',answer:'incorrect'},

    {text:'19',key:'13',question:'5',answer:'incorrect'},
    {text:'20',key:'14',question:'5',answer:'correct'},
    {text:'21',key:'15',question:'5',answer:'incorrect'},

     
  ]);
  const filterKlausimai=(id,answer)=>{
    
    if(answer=="correct"){
      var tt=_klaus+1; 
   
      _setKlausimai_Prev(_Klausimai)
      _setKlausimai_Prev((Klaus)=>{
        return Klaus.filter(_Klausimai=> _Klausimai.key ==tt)
      })
      _setQnA_Prev(_QnA)
      _setQnA_Prev((qna)=>{
        return qna.filter(_QnA=> _QnA.question == tt)
      })
      _setklaus(tt)
    }
    else{
      
      if (Platform.OS === 'web') {
        AsyncStorage.setItem('vikobankokahoot', 'true');
        alert("Upps – neatspėjote!",{cancelable: false})
       
     } else {
      AsyncStorage.setItem('vikobankokahoot', 'true');
      Alert.alert(

 
        "Upps – neatspėjote!",
        
         
        "", [{ text: "Bandyti dar kartą"}],
        
         
        { cancelable: false }
        
         
        );
    }

    

}
      
    
  if(tt==6) {
    _setklaus(prev=>prev + 2)
    
      
      if (Platform.OS === 'web') {
        AsyncStorage.setItem('vikobankokahoot', 'true');
        
        
        alert("Laimėjote!!","Laimėjote!!", [{ text: "Gerai", onPress: () => navigatetoras()}],{cancelable: false})
        
     } else {
      AsyncStorage.setItem('vikobankokahoot', 'true');
      
      Alert.alert(

 
        "Laimėjote!!",
        
         
        "", [{ text: "Gerai", onPress: () => navigatetoras()}],
        
         
        { cancelable: false }
        
         
        );
  
  }
  } 
    
  };

  const navigatetoras = () =>{
    navigate("pabaiga");
 }

  useEffect(() => {
   
    _setKlausimai_Prev(_Klausimai)
    _setQnA_Prev(_QnA)
    _setKlausimai_Prev((Klaus)=>{
      return Klaus.filter(_Klausimai=> _Klausimai.key ==1)
    })
    _setQnA_Prev((qna)=>{
      return qna.filter(_QnA=> _QnA.question == 1)
    })

  }, [])
  

  
  return (
    <View style={styles.container}>
    <ImageBackground source={require('../Images/sa.jpg')} style={styles.bimage} >
      {/* Header */}
      <View>
      <FlatList
      keyExtractor={(item)=>item.key}
          data={_Klausimai_Prev}
          renderItem={({item})=>(
            <Text style={styles.header}>{item.text}</Text>
          )}
      />
      </View>
      
     
      <View>
        {/* List */}
          
          <FlatList
          data={_QnA_Prev}
          numColumns={1}
          renderItem={({item})=>(
         <TouchableOpacity onPressOut={()=>filterKlausimai(_klaus,item.answer)}>
          <Text style={styles.item}>{item.text}</Text>
         </TouchableOpacity>
      
          )}
          />
          

      </View>
      </ImageBackground>
      
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: "#fff",
      
    },
    item: {
      flex: 1,
      margin: 10,
      padding: 30,
      marginTop: 10,
      marginHorizontal: 10,
      fontSize: 20,
      backgroundColor: '#79ade2',
      alignItems: 'center',
      textAlign: 'center',
      borderWidth: 3,
    },
    centertext:{
      alignItems: 'center', 
      justifyContent: 'center',
    },
    header: {
      flex: 1,
      margin: 10,
      padding: 30,
      marginTop: 40,
      backgroundColor: '#2d7fd2',
      fontSize: 30,
      alignItems: 'center',
      textAlign: 'center',
      fontWeight: 'bold',
      borderWidth: 3,
    },
    image: {
      flex: 1,
      resizeMode: "center",
      justifyContent: "center",
      width:"100%",
      height:"100%"
      
    },
    bimage: {
      height: "100%",
      width: "100%",
      resizeMode: "cover",
    }
    
    
});
import React from 'react';
import { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert, Platform,ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Pavyzdinis({ navigation: { navigate }}) {
 const [_klaus,_setklaus]=useState(1);
  const [_Klausimai_Prev,_setKlausimai_Prev]= useState();
  const [_QnA_Prev,_setQnA_Prev]= useState();
  const [_Klausimai,_setKlausimai] = useState ([
    {text:'Už kokį nusižengimą Lietuvoje buvo baudžiama mirties bausme ? ',key:'1'},
    {text:'Pagal kokią Viljamo Šekspyro pjesę buvo sukurtas filmukas "Liūtas karalius"? ',key:'2'},
    {text:'Kuris senovės Graikijos didvyris nukovė Nemėjos liūtą?',key:'3'},
    {text:'Kokioje valstybėje yra mažiausiai bedarbių?',key:'4'},
    {text:'Kokia vienintelė valstybė, pavadinta cheminio elemento vardu?',key:'5'},
    {text:'Kartą uždegtas šis metalas neužgęsta, net po vandeniu. Kaip vadinamas šis metalas?',key:'6'},
    {text:'Kas buvo pirmasis Lietuvos banko valdytojas?',key:'7'},
    {text:'Kam priklauso ši frazė – „Investuodami mes neturime būti sumanesni už kitus – mes turime būti drausmingesni už kitus',key:'8'},
    {text:'Ką draudžia JAV įstatymai vaizduoti JAV dolerių kupiūrose?',key:'9'},
    {text:'Ką graikai ir romėnai vadino šiaurės auksu?',key:'10'},
    
  ]);
  const [_QnA,_setQnA] = useState ([
    //1
    {text:'Bitės nužudymą',key:'1',question:'1',answer:'correct'},
    {text:'Alkoholio vartojimą viešoje vietoje',key:'2',question:'1',answer:'incorrect'},
    {text:'Ąžuolo nukirtimą',key:'3',question:'1',answer:'incorrect'},
    {text:'Vagystę',key:'4',question:'1',answer:'incorrect'},
    //2
    {text:'Hamletą',key:'5',question:'2',answer:'correct'},
    {text:'Romeo ir Džiuljeta',key:'6',question:'2',answer:'incorrect'},
    {text:'Karalius Lyras',key:'7',question:'2',answer:'incorrect'},
    {text:'Otelas',key:'8',question:'2',answer:'incorrect'},
    //3
    {text:'Heraklis',key:'9',question:'3',answer:'correct'},
    {text:'Achilas',key:'10',question:'3',answer:'incorrect'},
    {text:'Odisėjas',key:'11',question:'3',answer:'incorrect'},
    {text:'Minotauras',key:'12',question:'3',answer:'incorrect'},
    //4
    {text:'JAV',key:'13',question:'4',answer:'incorrect'},
    {text:'Danija',key:'14',question:'4',answer:'incorrect'},
    {text:'Japonija',key:'15',question:'4',answer:'incorrect'},
    {text:'Naujoji Zelandija',key:'16',question:'4',answer:'correct'},
    //5
    {text:'Italija',key:'17',question:'5',answer:'incorrect'},
    {text:'Argentina',key:'18',question:'5',answer:'correct'},
    {text:'Ispanija',key:'19',question:'5',answer:'incorrect'},
    {text:'Brazilija',key:'20',question:'5',answer:'incorrect'},
    //6
    {text:'Magnis',key:'21',question:'6',answer:'correct'},
    {text:'Litis',key:'22',question:'6',answer:'incorrect'},
    {text:'Butanas',key:'23',question:'6',answer:'incorrect'},
    {text:'Natris',key:'24',question:'6',answer:'incorrect'},
    //7
    {text:'Borinius Povilaitis',key:'25',question:'7',answer:'incorrect'},
    {text:'Vilius Baldiškis',key:'26',question:'7',answer:'incorrect'},
    {text:'Vladas Jurgutis',key:'27',question:'7',answer:'correct'},
    {text:'Vladas Staniškas',key:'28',question:'7',answer:'incorrect'},
    //8
    {text:'George Soros’ui',key:'29',question:'8',answer:'incorrect'},
    {text:'Warren Buffett’ui',key:'30',question:'8',answer:'correct'},
    {text:'Philip A. Fisher’ui',key:'31',question:'8',answer:'incorrect'},
    {text:'Bill Gates’ui',key:'32',question:'8',answer:'incorrect'},
    //9
    {text:'Gyvunų',key:'33',question:'9',answer:'incorrect'},
    {text:'Verslų',key:'34',question:'9',answer:'incorrect'},
    {text:'Įžimybių',key:'35',question:'9',answer:'incorrect'},
    {text:'Gyvų žmonių',key:'36',question:'9',answer:'correct'},
    //10
    {text:'Gintarą',key:'37',question:'10',answer:'correct'},
    {text:'Perlus',key:'38',question:'10',answer:'incorrect'},
    {text:'Baltyjos jūros smėlis',key:'39',question:'10',answer:'incorrect'},
    {text:'Smaragdus',key:'40',question:'10',answer:'incorrect'},
   
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
        alert("Upps – neatspėjote!",{cancelable: false})
        
     } else {
      Alert.alert(

 
        "Upps – neatspėjote!",
        
         
        "", [{ text: "Bandyti dar kartą"}],
        
         
        { cancelable: false }
        
         
        );
    }
     }
     const navigatetoras = () =>{
       navigate("ketvirtasVestibiulis");
    }
    
     if(tt==11){
      _setklaus(prev=>prev + 2)
    
      
      if (Platform.OS === 'web') {
        AsyncStorage.setItem('kompiuteriukahoot', 'true');
        AsyncStorage.setItem('finansai', 'false');
        
        alert("Užuomina: 515","Užuomina: 515", [{ text: "Gerai", onPress: () => navigatetoras()}],{cancelable: false})
        
     } else {
      AsyncStorage.setItem('kompiuteriukahoot', 'true');
      AsyncStorage.setItem('finansai', 'false');
      Alert.alert(

 
        "Užuomina: 515",
        
         
        "", [{ text: "Gerai", onPress: () => navigatetoras()}],
        
         
        { cancelable: false }
        
         
        );
  
  }
    }

    
   
    
  };
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
    <ImageBackground source={require('../Images/finb.jpg')} style={styles.bimage}>
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
  },
    
});
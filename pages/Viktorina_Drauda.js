import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList, TouchableOpacity, Alert, Platform,ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Raktas from "./Viktorinos_GoogleSheet_Raktas.json"
import Tabletop from "tabletop";
export default function Pavyzdinis({ navigation: { navigate }}) {
 const [_klaus,_setklaus]=useState(1);
 const [_load,_setload]=useState(0);
 const [_length,_setlength]= useState();
  const [_Klausimai_Prev,_setKlausimai_Prev]= useState();
  const [_Raktas,_setRaktas]= useState();
  const [_QnA_Prev,_setQnA_Prev]= useState();
  const [_Klausimai,_setKlausimai] = useState ([{Klausimas:""}]);
  const [_QnA,_setQnA] = useState ([{Atsakymai:"",KlausimuiPriklauso:""}]);
  
  const filterKlausimai=(id,answer)=>{
    
    if(answer=="Teisingai"){
      var tt=_klaus+1; 
    
      _setKlausimai_Prev(_Klausimai)
      _setKlausimai_Prev((Klaus)=>{
        return Klaus.filter(_Klausimai=> _Klausimai.ID ==tt)
      })
      _setQnA_Prev(_QnA)
      _setQnA_Prev((qna)=>{
        return qna.filter(_QnA=> _QnA.KlausimuiPriklauso == tt)
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

  if(tt==_length+1){
    _setklaus(prev=>prev + 2)
  
    
    if (Platform.OS === 'web') {
      AsyncStorage.setItem('vikodraudos', 'true');
      AsyncStorage.setItem('vikobankokahoot', 'false');
      
      alert("Užuomina: Eikite į 401 kab.","Užuomina: Eikite į 401 kab.", [{ text: "Gerai", onPress: () => navigatetoras()}],{cancelable: false})
      
   } else {
    AsyncStorage.setItem('vikodraudos', 'true');
    AsyncStorage.setItem('vikobankokahoot', 'false');
    Alert.alert(


      "Užuomina: Eikite į 401 kab.",
      
       
      "", [{ text: "Gerai", onPress: () => navigatetoras()}],
      
       
      { cancelable: false }
      
       
      );

}
  }


};

const navigatetoras = () =>{
  AsyncStorage.setItem('vikodraudos', 'true');
  AsyncStorage.setItem('vikobankokahoot', 'false');
  navigate("ketvirtasVestibiulis");
}

  
  useEffect(() => {
    
    Raktas.map((res)=>{return(_setRaktas(res.rakt)) });
    

  
      
   
    _setload(1)
  }, [])
  useEffect(() => {
    if(_load==1){
      _setload(2)
      
      
      Tabletop.init({
        key: _Raktas,
        callback: showInfo,
        simpleSheet: false
      })
      
      
   
      _setload(3)
    
    }
    if(_load==4 ){
      _setload(5)
    
      _setKlausimai_Prev((Klaus)=>{
        return Klaus.filter(_Klausimai=> _Klausimai.ID ==1)
      })
      _setQnA_Prev((qna)=>{
        return qna.filter(_QnA=> _QnA.KlausimuiPriklauso == 1)
      })
    }

  });
  
  function showInfo(data, tabletop) {
    
      _setKlausimai(data.Lapas3.elements)
      _setQnA(data.Lapas4.elements)
      _setKlausimai_Prev(data.Lapas3.elements)
       _setQnA_Prev(data.Lapas4.elements)
       var lengthh = data.Lapas3.elements
       _setlength(lengthh.length)
      
    
   
    
    _setload(4)
  }
  
  return (
    <View style={styles.container} >
      
    <ImageBackground source={require('../Images/finb.jpg')} style={styles.bimage} >
      {/* Header */}

      
      <View style={{flex:1}}>
      <FlatList
      keyExtractor={(item)=>item.ID}
          data={_Klausimai_Prev}
          renderItem={({item})=>(
            <Text style={styles.header}>{item.Klausimas}</Text>
            )}
            />
      
      
     
      
        {/* List */}
          
          <FlatList
          keyExtractor={(item)=>item.ID}
          data={_QnA_Prev}
          numColumns={1}
          renderItem={({item})=>(
         <TouchableOpacity onPress={()=>filterKlausimai(_klaus,item.Patikrinimas)}>
          <Text style={styles.item}>{item.Atsakymai}</Text>
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
      
      margin: 10,
      padding: 30,
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
      
      margin: 10,
      padding: 30,
      marginTop: 15,
      backgroundColor: '#2d7fd2',
      fontSize: 30,
      alignItems: 'center',
      textAlign: 'center',
      fontWeight: 'bold',
      borderWidth: 3,
    },
    image: {
     
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
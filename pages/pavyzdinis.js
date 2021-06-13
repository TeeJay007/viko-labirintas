import React, {useRef, useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput,TouchableOpacity ,FlatList, Platform } from 'react-native';
import SQLite from 'react-native-sqlite-storage'
import { useEffect } from 'react/cjs/react.production.min';




export default function Pavyzdinis() {
 const [_kk,_setkk] = useState()
 const tt = Testas.text
 let aa=[
  {text:'Ar TPVCA draudimas yra privalomas?',key:'1'},
  {text:'Kaip išsišifruoja TPVCA draudimas?',key:'2'},
  {text:'Asmuo kuris nori apsidrausti vadinamas?',key:'3'},
  {text:'Draudimo įmonė, kuri teikia draudimo paslaugas vadinama?',key:'4'},
  {text:'Kas prižiūri  komercinių finansų įstaigų veiklą lietuvoje?',key:'5'},
  {text:'Kuri šalis gauna išmoką TPVCA draudime įvykus draudžiamąjam įvykiui?',key:'6'},
  {text:'Draudimo sutartyje nurodytas atsitikimas, kuriam įvykus draudikas privalo mokėti draudimo išmoką vadinamas?',key:'7'},
  {text:'Draudiko įsipareigojimas įvykus draudiminiam įvykiui mokėti draudimo išmoką vadinamas?',key:'8'},
  {text:'Draudiko išduodamas dokumentas, patvirtinantis draudimo sutarties sudarymą vadinamas?',key:'9'},
  {text:'Turtiniai interesai, susiję su asmens gyvybe, sveikata, turtu ar civiline atsakomybe vadinami?',key:'10'},
  {text:'Draudimo objektui gresiantis tikėtinas pavojus vadinamas?',key:'11'},
  {text:'Kuris draudimas nėra priskiriamas prie gyvybės draudimo?',key:'12'},
  {text:'Kuri draudimo rūšis priklauso gyvybės draudimui?',key:'13'},
  {text:'Draudiko parengtos sutarties standartinės sąlygos?',key:'14'},
  {text:'Draudimo sutartyje nurodytas asmuo turintis teisę gauti draudimo išmoką vadinamas?',key:'15'},
  {text:'Kas yra VIKO DRAUDA?',key:'16'}
 ]
 let bb = JSON.stringify(aa)
 const CreateTable = () =>{
   db.transaction(tx=>{
     tx.executeSql(
       "CREATE A TABLE IF NOT EXIST"
       +"KlausimaiPab"
       +"(ID INTEGER PRIMARY KEY AUTOINCREMENT, Textas TEXT)"

     )
   })
 }
 const GETTable = () =>{
  db.transaction(tx=>{
    tx.executeSql(
      "SELECT Textas FROM KlausimaiPab",
      [],
      (tx,result)=>{
        var leng = result.rows.length
        var name = result.rows.item(0).Textas
        _setkk(name);
      }
      
    )
  })
}
const InsertTable = async () =>{
  await db.transaction( async tx=>{
   await tx.executeSql(
      "INSERT INTO KlausimaiPab (Textas) VALUES ("+bb+")",
      
      
    )
  })
}

 useEffect(()=>{
  SQLite.DEBUG(true);
  SQLite.enablePromise(true);

  console.log("rree")

  CreateTable()
  InsertTable()
  GETTable()
 },[])

const ttt= ()=>{
  console.log(_kk)
}

 return(
  <View>
    <TouchableOpacity style={styles.container} onPress={()=>ttt()}>
      <Text>test</Text>
    </TouchableOpacity>
  </View>
 )
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent:"center",
    
  },

});


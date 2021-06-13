import React, {useRef, useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput,TouchableOpacity ,FlatList, Platform } from 'react-native';
import Testas from './testas'

export default function Pavyzdinis() {

 return(
  <View>
        {/* List */}
          
          <FlatList
          data={Testas}
          numColumns={1}
          renderItem={({item})=>(
         <TouchableOpacity onPressOut={()=>filterKlausimai(_klaus,item.answer)}>
          <Text style={styles.item}>{item.text}</Text>
         </TouchableOpacity>
      
          )}
          />
          

      </View>
 )
  
}



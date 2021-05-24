import React, { Component, useState, useRef } from "react";
import { render } from "react-dom";
import {
  View,
  SafeAreaView,
  Button,
  TouchableOpacity,
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  
} from "react-native";
import { color } from "react-native-reanimated";


const PositionLayout = () => {
  const [position, setPosition] = useState("absolute");
  const [complete, setcomplete] = useState("0");
  //----------Uzrakinimo values-----------
  const [res1,setres1]=useState(true);
  const [res1_2,setres1_2]=useState(true);
  const [res2,setres2]=useState(true);
  const [res2_4,setres2_4]=useState(true);
  const [res2_6,setres2_6]=useState(true);
  const [res2_8,setres2_8]=useState(true);
  const [res3,setres3]=useState(true);
  const [res3_6,setres3_6]=useState(true);
  const [res4,setres4]=useState(true);
  const [res5,setres5]=useState(true);
  const [res5_2,setres5_2]=useState(true);
  const [res5_8,setres5_8]=useState(true);
  const [res5_10,setres5_10]=useState(true);
  const [res5_16,setres5_16]=useState(true);
  const [res5_15,setres5_15]=useState(true);
  const [res6,setres6]=useState(true);
  const [res7,setres7]=useState(true);
  const [res7_10,setres7_10]=useState(true);
  const [res8,setres8]=useState(true);
  const [res9,setres9]=useState(true);
  const [res10,setres10]=useState(true);
  const [res11,setres11]=useState(true);
  const [res12,setres12]=useState(true);
  const [res13,setres13]=useState(true);
  const [res14,setres14]=useState(true);
  const [res14_13,setres14_13]=useState(true);
  const [res15,setres15]=useState(true);
  const [res15_11,setres15_11]=useState(true);
  const [res15_9,setres15_9]=useState(true);
  const [res16,setres16]=useState(true);
  const [res16_12,setres16_12]=useState(true);
  const [res16_14,setres16_14]=useState(true);
  //--------------Saugomi zodziai-------------------
  const [_1,set_1]=useState("");
  const [_2,set_2]=useState("");
  const [_3,set_3]=useState("");
  const [_4,set_4]=useState("");
  const [_5,set_5]=useState("");
  const [_6,set_6]=useState("");
  const [_7,set_7]=useState("");
  const [_8,set_8]=useState("");
  const [_9,set_9]=useState("");
  const [_10,set_10]=useState("");
  const [_11,set_11]=useState("");
  const [_12,set_12]=useState("");
  const [_13,set_13]=useState("");
  const [_14,set_14]=useState("");
  const [_15,set_15]=useState("");
  const [_16,set_16]=useState("");
  //--------------Ref-------------------
  //---------------1--------------------
  const _1_1ref = useRef();
  const _1_2ref = useRef();
  const _1_3ref = useRef();
  const _1_4ref = useRef();
  const _1_5ref = useRef();
  const _1_6ref = useRef();
  const _1_7ref = useRef();
  const _1_8ref = useRef();
  const _1_9ref = useRef();
  
  //---------------2--------------------
  const _2_1ref = useRef();
  const _2_2ref = useRef();
  const _2_3ref = useRef();
  const _2_4ref = useRef();
  const _2_5ref = useRef();
  const _2_6ref = useRef();
  const _2_7ref = useRef();
  const _2_8ref = useRef();
 
  //---------------3--------------------
  const _3_1ref = useRef();
  const _3_2ref = useRef();
  const _3_3ref = useRef();
  const _3_4ref = useRef();
  const _3_5ref = useRef();
  //---------------4--------------------
  const _4_1ref = useRef();
  const _4_2ref = useRef();
  const _4_3ref = useRef();
  const _4_4ref = useRef();
  const _4_5ref = useRef();
  const _4_6ref = useRef();
  //---------------5--------------------
  const _5_1ref = useRef();
  const _5_2ref = useRef();
  const _5_3ref = useRef();
  const _5_4ref = useRef();
  const _5_5ref = useRef();
  const _5_6ref = useRef();
  const _5_7ref = useRef();
  const _5_8ref = useRef();
  const _5_9ref = useRef();
  const _5_10ref = useRef();
  const _5_11ref = useRef();
  //---------------6--------------------
  const _6_1ref = useRef();
  const _6_2ref = useRef();
  const _6_3ref = useRef();
  const _6_4ref = useRef();
  const _6_5ref = useRef();
  const _6_6ref = useRef();
  const _6_7ref = useRef();
  //---------------7--------------------
  const _7_1ref = useRef();
  const _7_2ref = useRef();
  const _7_3ref = useRef();
  const _7_4ref = useRef();
  const _7_5ref = useRef();
  //---------------8--------------------
  const _8_1ref = useRef();
  const _8_2ref = useRef();
  const _8_3ref = useRef();
  const _8_4ref = useRef();
  const _8_5ref = useRef();
  //---------------9--------------------
  const _9_1ref = useRef();
  const _9_2ref = useRef();
  const _9_3ref = useRef();
  const _9_4ref = useRef();
  const _9_5ref = useRef();
  //---------------10--------------------
  const _10_1ref = useRef();
  const _10_2ref = useRef();
  const _10_3ref = useRef();
  const _10_4ref = useRef();
  const _10_5ref = useRef();
  const _10_6ref = useRef();
  const _10_7ref = useRef();
  //---------------11--------------------
  const _11_1ref = useRef();
  const _11_2ref = useRef();
  
  //---------------12--------------------
  const _12_1ref = useRef();
  const _12_2ref = useRef();
;
  //---------------13--------------------
  const _13_1ref = useRef();
  const _13_2ref = useRef();

  //---------------14--------------------
  const _14_1ref = useRef();
  const _14_2ref = useRef();
  const _14_3ref = useRef();
  const _14_4ref = useRef();
  //---------------15--------------------
  const _15_1ref = useRef();
  const _15_2ref = useRef();
  const _15_3ref = useRef();
  const _15_4ref = useRef();
  const _15_5ref = useRef();
  const _15_6ref = useRef();
  const _15_7ref = useRef();
  const _15_8ref = useRef();
  const _15_9ref = useRef();
  //---------------16--------------------
  const _16_1ref = useRef();
  const _16_2ref = useRef();
  const _16_3ref = useRef();
  const _16_4ref = useRef();
  const _16_5ref = useRef();
  const _16_6ref = useRef();
  const _16_7ref = useRef();
  
  

  //--------------Check-----------------
  const clicktest = (check,value) =>{
    
   
    
     switch(check){
       //------Crossword 1------
       case "_1_1":
        try {
          
          if(value!=""){
            
            CheckAnswer("ats1");
            if(_1_2ref.current.value=="")
            {
              _1_2ref.current.focus();
            }
            
          }
          else{
            
          }
          
        } catch (error) {
          console.log(error)
        }
       break;

       case "_1_2":
        try {
          
          if(value!=""){
            
            CheckAnswer("ats1");
            if(_1_3ref.current.value=="")
            _1_3ref.current.focus();
          }
          else{
            
            if(_1_3ref.current.value==""){
              _1_1ref.current.focus();
            }
            
          }
        } catch (error) {
          console.log(error)
        }
         break;
         case "_1_3":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats1");
              if(_1_4ref.current.value=="")
              _1_4ref.current.focus();
            }
            else{
              
              if(_1_4ref.current.value==""){
                _1_2ref.current.focus();
              }
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_1_4":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats1");
              if(_1_5ref.current.value==""){
                _1_5ref.current.focus();
              }
              else if(res1_2==false){
                _1_6ref.current.focus();
              }
              
            }
            else{
              
              if(_1_5ref.current.value==""){
                _1_3ref.current.focus();
                

                
              }else if(res1_2==false){
                _1_3ref.current.focus();
              }
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_1_5":
          try {
          
            if(value!=""){
             
              
              CheckAnswer("ats1");
              CheckAnswer("ats2");

              if(_1_6ref.current.value=="" && _1_4ref.current.value!=""){
                if(_1_6ref.current.value=="")
                _1_6ref.current.focus();
              }
              else if(_2_1ref.current.value==""){
                if(_2_1ref.current.value=="")
                _2_1ref.current.focus();
              }
              
            }
            else{
              
              
              
              if(_1_6ref.current.value=="" && _1_4ref.current.value!=""){
                if(_1_6ref.current.value=="")
                _1_4ref.current.focus();
              }
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_1_6":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats1");
              if(_1_7ref.current.value=="")
              _1_7ref.current.focus();
            }
            else{
              
              if(_1_7ref.current.value==""){
                if(res1_2==false){
                  _1_4ref.current.focus();
                }else{
                  _1_5ref.current.focus();
                }
                
              }
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_1_7":
          try {
          
            if(value!=""){
             
              CheckAnswer("ats1");
              if(_1_8ref.current.value=="")
              _1_8ref.current.focus();
            }
            else{
              
              if(_1_8ref.current.value=="")
              _1_6ref.current.focus();
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_1_8":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats1");
              if(_1_9ref.current.value=="")
              _1_9ref.current.focus();
            }
            else{
              
              if(_1_9ref.current.value=="")
              _1_7ref.current.focus();
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_1_9":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats1");
              
            }
            else{
              
              
              _1_8ref.current.focus();
            }
          } catch (error) {
            console.log(error)
          }
         break;
         

         //------Crossword 2------

         case "_2_1":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats2");
              if(_2_2ref.current.value=="")
              {
                  _2_2ref.current.focus();
               
              }else if(res2_4==false){
                _2_3ref.current.focus();
              }

              
            }
            else{
              
              if(_2_2ref.current.value=="" || res2_4==false)
              _1_5ref.current.focus();
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_2_2":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats2");
              CheckAnswer("ats4");
              
             if(_4_4ref.current.value=="" && _4_3ref.current.value!=""){
              if(_4_4ref.current.value=="")
              _4_4ref.current.focus();
              }
              else if(_2_3ref.current.value==""){
                if(_2_3ref.current.value=="")
                _2_3ref.current.focus();
              }
              
            }
            else{
              if(_4_4ref.current.value=="" && _4_3ref.current.value!=""){
                _4_3ref.current.focus();
              }else{
              if(_2_3ref.current.value=="")
              _2_1ref.current.focus();}
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_2_3":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats2");
              CheckAnswer("ats4");
              if(_2_4ref.current.value=="")
              _2_4ref.current.focus();
            }
            else{
              
              if(_2_4ref.current.value==""){
                if(res2_4==false)
                {
                  _2_1ref.current.focus();
                }else{
                  _2_2ref.current.focus();
                }
                
              }
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_2_4":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats2");
              if(_2_5ref.current.value=="")
              {
                _2_5ref.current.focus();
              }else if(res2_6==false){
                _2_6ref.current.focus();
              }
              
            }
            else{
              
              if(_2_5ref.current.value=="" || res2_6==false)
              _2_3ref.current.focus();
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_2_5":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats2");
              CheckAnswer("ats6");
              if(_6_6ref.current.value!=""&& _6_7ref.current.value==""){
                if(_6_7ref.current.value=="")
                _6_7ref.current.focus();
              }else{
                if(_2_6ref.current.value=="")
              _2_6ref.current.focus();
            }
            }
            else{
              if(_6_6ref.current.value!=""&& _6_7ref.current.value==""){
                if(_6_7ref.current.value=="")
                _6_6ref.current.focus();
              }else{
                if(_2_6ref.current.value=="")
                _2_4ref.current.focus();
              }
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_2_6":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats2");
              
              if(_2_7ref.current.value=="")
                _2_7ref.current.focus();
              
              
            }
            else{
              
              if(_2_7ref.current.value=="")
              {
                if(res2_6==false){
                  _2_4ref.current.focus();
                
              }else{
                _2_5ref.current.focus();
              }
              }
              
                
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_2_7":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats2");
              if(_2_8ref.current.value=="")
              _2_8ref.current.focus();
              
            }
            else{
              
              if(_2_8ref.current.value==""|| res2_8==false)
              _2_6ref.current.focus();
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_2_8":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats2");
              CheckAnswer("ats8");
              if(_8_3ref.current.value!=""&&_8_4ref.current.value==""){
                if(_8_4ref.current.value=="")
                _8_4ref.current.focus();
              }
              
            }
            else{
              
              CheckAnswer("ats2");
              _2_7ref.current.focus();
            }
          } catch (error) {
            console.log(error)
          }
         break;

        //------Crossword 3------

         case "_3_1":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats3");
              if(_3_2ref.current.value=="")
              _3_2ref.current.focus();
            }
            else{
              
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_3_2":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats3");
              if(_3_3ref.current.value=="")
              _3_3ref.current.focus();
            }
            else{
              
              if(_3_3ref.current.value=="")
              _3_1ref.current.focus();
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_3_3":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats3");
              if(_3_4ref.current.value==""){

                _3_4ref.current.focus();
              }else if(res3_6==false ){
                _3_5ref.current.focus();
              }
              
            }
            else{
              
              if(_3_4ref.current.value=="" || res3_6==false)
              _3_2ref.current.focus();
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_3_4":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats3");
              CheckAnswer("ats6");
              if(_6_2ref.current.value!="" && _6_3ref.current.value=="" ){
                if(_6_3ref.current.value=="")
                _6_3ref.current.focus();
              }
              else{
                if(_3_5ref.current.value=="")
                _3_5ref.current.focus();
              }
              
            }
            else{
              if(_6_2ref.current.value!="" && _6_3ref.current.value=="" ){
              if(_6_3ref.current.value=="")
              _6_2ref.current.focus()
              }
              else{
                if(_3_5ref.current.value=="")
                _3_3ref.current.focus();
              }
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_3_5":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats3");
             
            }
            else{
              
              if(res3_6){
                _3_4ref.current.focus();
              }else{
                _3_3ref.current.focus();
              }
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
      //------Crossword 4------
      case "_4_1":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats4");
              if(_4_2ref.current.value=="")
              _4_2ref.current.focus();
            }
            else{
              
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_4_2":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats4");
              if(_4_3ref.current.value=="")
              _4_3ref.current.focus();
            }
            else{
              
              if(_4_3ref.current.value=="")
              _4_1ref.current.focus();
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_4_3":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats4");
              if(_2_2ref.current.value==""){

                _2_2ref.current.focus();
              }else if(res2_6==false){
                _4_4ref.current.focus();
              }
              
            }
            else{
              
              if(_2_2ref.current.value=="" || res2_6==false)
              _4_2ref.current.focus();
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_4_4":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats4");
              if(_4_5ref.current.value=="")
              _4_5ref.current.focus();
            }
            else{
              
              if(_4_5ref.current.value==""){
                if(res2_6==false){
                  _4_3ref.current.focus()
                }else{
                  _2_2ref.current.focus();
                }
                
              }
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_4_5":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats4");
              if(_4_6ref.current.value=="")
              _4_6ref.current.focus();
            }
            else{
              
              if(_4_6ref.current.value=="")
              _4_4ref.current.focus();
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_4_6":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats4");
              
            }
            else{
              
              
              _4_5ref.current.focus();
            }
          } catch (error) {
            console.log(error)
          }
         break;
         //------Crossword 5------
         case "_5_1":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats5");
              if(_5_2ref.current.value==""){
                _5_2ref.current.focus();
              }else if(res5_2==false){
                _5_3ref.current.focus();
              }
              
            }
            else{
              
           
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_5_2":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats5");
              CheckAnswer("ats6");
              if(_6_5ref.current.value!=""&&_6_6ref.current.value==""){
                if(_6_6ref.current.value=="")
                _6_6ref.current.focus();
              }else{
                if(_5_3ref.current.value=="")
                _5_3ref.current.focus();
              }
              
            }
            else{
              if(_6_5ref.current.value!=""&&_6_6ref.current.value==""){
                if(_6_6ref.current.value=="")
                _6_5ref.current.focus();
              }else{
                if(_5_3ref.current.value=="")
                _5_1ref.current.focus();
              }
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_5_3":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats5");
              if(_5_4ref.current.value=="")
              _5_4ref.current.focus();
            }
            else{
              
              if(_5_4ref.current.value==""){
                if(res5_2==false){
                  _5_1ref.current.focus();
                }else{
                  _5_2ref.current.focus();
                }
                
              }
             
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_5_4":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats5");

              if(_5_5ref.current.value==""){
                _5_5ref.current.focus();
              }else if(res5_8==false)
              _5_6ref.current.focus();
            }
            else{
              
              if(_5_5ref.current.value==""|| res5_8==false)
              _5_3ref.current.focus();
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_5_5":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats5");
              CheckAnswer("ats8");
              if(_8_2ref.current.value!="" && _8_3ref.current.value==""){
                if(_8_3ref.current.value=="")
                _8_3ref.current.focus();
              }else{
                if(_5_6ref.current.value=="")
                _5_6ref.current.focus();
              }
              
            }
            else{
              
              if(_5_6ref.current.value=="")
              _5_4ref.current.focus();
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_5_6":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats5");
              if(_5_7ref.current.value==""){
               _5_7ref.current.focus();
              }else if(res5_10==false){
                _5_8ref.current.focus();
              }
              
            }
            else{
              
              if(_5_7ref.current.value=="" || res5_10==false){
                if(res5_8){
                  _5_5ref.current.focus();
                }else{
                  _5_4ref.current.focus();
                }
               
              }
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_5_7":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats5");
              CheckAnswer("ats10");
              if(_10_6ref.current.value!="" && _10_7ref.current.value==""){
                if(_10_7ref.current.value=="")
                _10_7ref.current.focus();
              }else{
                if(_5_8ref.current.value=="")
                _5_8ref.current.focus();
              }
              
            }
            else{
              if(_10_6ref.current.value!="" && _10_7ref.current.value==""){
                if(_10_7ref.current.value=="")
                _10_6ref.current.focus()
              }else{
                if(_5_8ref.current.value=="")
                _5_6ref.current.focus();
              }
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_5_8":
          try {
            CheckAnswer("ats5");
            if(value!=""){
              
              if(_5_9ref.current.value==""){
                _5_9ref.current.focus();
              }else if(res5_15==false){
                _5_10ref.current.focus();
              }
              
            }
            else{
              
              if(_5_9ref.current.value==""|| res5_15==false){
                if(res5_10==false){
                  _5_6ref.current.focus();
                }else{
                  _5_7ref.current.focus();
                }
                
              }
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_5_9":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats5");
              CheckAnswer("ats15");
              if(_5_8ref.current.value!=""&& _5_10ref.current.value==""){
                if(_5_10ref.current.value=="")
                _5_10ref.current.focus();
              }
              else{
                if(_15_1ref.current.value=="")
                _15_1ref.current.focus();
              }
              
            }
            else{
              
              if(_5_10ref.current.value=="")
              _5_8ref.current.focus();
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_5_10":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats5");
              if(_5_11ref.current.value=="")
              _5_11ref.current.focus();
            }
            else{
              
              if(_5_11ref.current.value==""||res5_16==false){
                if(res5_15==false){
                  _5_8ref.current.focus();
                }else{_5_9ref.current.focus();}
              }
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_5_11":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats5");
              CheckAnswer("ats16");
              
            }
            else{
              
              
              _5_10ref.current.focus();
            }
          } catch (error) {
            console.log(error)
          }
         break;
         //------Crossword 6------
         case "_6_1":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats6");
              if(_6_2ref.current.value=="")
              _6_2ref.current.focus();
            }
            else{
              
              
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_6_2":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats6");
              if(_3_4ref.current.value==""){
                _3_4ref.current.focus();
              }else if(res3_6==false){
                _6_3ref.current.focus();
              }
              
            }
            else{
              
              if(_3_4ref.current.value==""||res3_6==false)
              _6_1ref.current.focus();
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_6_3":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats6");
              if(_6_4ref.current.value=="")
              _6_4ref.current.focus();
            }
            else{
              
              if(_6_4ref.current.value==""){
                if(res3_6==false){
                  _6_2ref.current.focus();
                }else{
                _3_4ref.current.focus();
                }
                
              }
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_6_4":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats6");
              if(_6_5ref.current.value=="")
              _6_5ref.current.focus();
            }
            else{
              
              if(_6_5ref.current.value=="")
              _6_3ref.current.focus();
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_6_5":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats6");
              if(_5_2ref.current.value==""){
                _5_2ref.current.focus();
              }else if(res5_2==false){
                _6_6ref.current.focus();
              }
              
            }
            else{
              
              if(_5_2ref.current.value==""||res5_2==false)
              _6_4ref.current.focus();
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_6_6":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats6");
              if(_2_5ref.current.value==""){
                _2_5ref.current.focus();
              }else if(res2_6==false){
                _6_7ref.current.focus();
              }
             
            }
            else{
              
              if(_2_5ref.current.value==""||res2_6==false){
                if(res5_2==false){
                  _6_5ref.current.focus();
                }else{
                  _5_2ref.current.focus();
                }
                
              }
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_6_7":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats6");
              
            }
            else{
              
              if(res2_6==false){
                _6_6ref.current.focus();
              }else{
                _2_5ref.current.focus();
              }
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         //------Crossword 7------
         case "_7_1":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats7");
              if(_7_2ref.current.value=="")
              _7_2ref.current.focus();
            }
            else{
              
              
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_7_2":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats7");
              if(_7_3ref.current.value=="")
              _7_3ref.current.focus();
            }
            else{
              
              if(_7_3ref.current.value=="")
              _7_1ref.current.focus();
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_7_3":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats7");
              if(_7_4ref.current.value=="")
              _7_4ref.current.focus();
            }
            else{
              
              if(_7_4ref.current.value=="")
              _7_2ref.current.focus();
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_7_4":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats7");
              if(_7_5ref.current.value=="")
              _7_5ref.current.focus();
            }
            else{
              
              if(_7_5ref.current.value==""||res7_10==false)
              _7_3ref.current.focus();
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_7_5":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats7");
              CheckAnswer("ats10");
              if(_7_4ref.current.value==""){
                if(_10_1ref.current.value=="")
                _10_1ref.current.focus();
              }
            }
            else{
              
              
              
              
              _7_4ref.current.focus();
              
            }
          } catch (error) {
            console.log(error)
          }
         break;

         //------Crossword 8------
         case "_8_1":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats8");
              if(_8_2ref.current.value=="")
              _8_2ref.current.focus();
            }
            else{
              
             
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_8_2":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats8");
              if(_5_5ref.current.value==""){
                _5_5ref.current.focus();
              }else if (res5_8==false){
                _8_3ref.current.focus();
              }
              
            }
            else{
              
              if(_5_5ref.current.value==""||res5_8==false)
              _8_1ref.current.focus();
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_8_3":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats8");
              if(_2_8ref.current.value==""){
                _2_8ref.current.focus();
              }else if(res2_8==false){
                _8_4ref.current.focus();
              }
              
            }
            else{
              
              if(_2_8ref.current.value==""||res2_8==false){
                if(res5_8==false){
                  _8_2ref.current.focus();
                }else{
                  _5_5ref.current.focus();
                }
              }
              
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_8_4":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats8");
              if(_8_5ref.current.value=="")
              _8_5ref.current.focus();
            }
            else{
              
              if(_8_5ref.current.value==""){
                if(res2_8==false){
                  _8_3ref.current.focus();
                }else{
                  _2_8ref.current.focus();
                }
              }
              
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_8_5":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats8");
              
            }
            else{
              
              
              _8_4ref.current.focus();
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         //------Crossword 9------
         case "_9_1":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats9");
              if(_9_2ref.current.value=="")
              _9_2ref.current.focus();
            }
            else{
              
              
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_9_2":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats9");
              if(_9_3ref.current.value=="")
              _9_3ref.current.focus();
            }
            else{
              
              if(_9_3ref.current.value=="")
              _9_1ref.current.focus();
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_9_3":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats9");
              if(_9_4ref.current.value=="")
              _9_4ref.current.focus();
            }
            else{
              
              if(_9_4ref.current.value=="")
              _9_2ref.current.focus();
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_9_4":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats9");
              if(_15_9ref.current.value=="")
              _15_9ref.current.focus();
            }
            else{
              
              if(_15_9ref.current.value==""|| res15_9==false)
              _9_3ref.current.focus();
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_9_5":
          try {
          
            if(value!=""){
              CheckAnswer("ats9");
            }
            else{
              
             
              _9_4ref.current.focus();
            }
          } catch (error) {
            console.log(error)
          }
         break;
         
         //------Crossword 10------
         case "_10_1":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats10");
              if(_10_2ref.current.value=="")
              _10_2ref.current.focus();
            }
            else{
              
              _7_5ref.current.focus();
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_10_2":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats10");
              if(_10_3ref.current.value=="")
              _10_3ref.current.focus();
            }
            else{
              
              if(_10_3ref.current.value=="")
              _10_1ref.current.focus();
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_10_3":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats10");
              if(_10_4ref.current.value=="")
              _10_4ref.current.focus();
            }
            else{
              
              if(_10_4ref.current.value=="")
              _10_2ref.current.focus();
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_10_4":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats10");
              if(_10_5ref.current.value=="")
              _10_5ref.current.focus();
            }
            else{
              
              if(_10_5ref.current.value=="")
              _10_3ref.current.focus();
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_10_5":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats10");
              if(_10_6ref.current.value=="")
              _10_6ref.current.focus();
            }
            else{
              
              if(_10_6ref.current.value=="")
              _10_4ref.current.focus();
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_10_6":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats10");
              if(_5_7ref.current.value==""){
                _5_7ref.current.focus();
              }else if(res5_10==false){
                _10_7ref.current.focus();
              }
              
            }
            else{
              
              if(_5_7ref.current.value==""||res5_10==false)
              _10_5ref.current.focus();
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_10_7":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats10");
            }
            else{
              
             if(res5_10==false){
              _10_6ref.current.focus();
             }else{
              _5_7ref.current.focus();
             }
             
            }
          } catch (error) {
            console.log(error)
          }
         break;
         //------Crossword 11------
         case "_11_1":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats11");
              if(_11_2ref.current.value=="")
              _11_2ref.current.focus();
            }
            else{
              
            
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_11_2":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats11");
              if(_15_7ref.current.value=="")
              _15_7ref.current.focus();
              
            }
            else{
              
              if(_15_7ref.current.value==""||res15_11==false)
              _11_1ref.current.focus();
            }
          } catch (error) {
            console.log(error)
          }
         break;
         //------Crossword 12------
         case "_12_1":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats12");
              if(_12_2ref.current.value=="")
              _12_2ref.current.focus();
            }
            else{
              
           
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_12_2":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats12");
              if(_16_2ref.current.value=="")
              _16_2ref.current.focus();
            }
            else{
              
              if(_16_2ref.current.value==""||res16_12==false)
              _12_1ref.current.focus();
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         //------Crossword 13------
         case "_13_1":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats13");
              if(_14_1ref.current.value==""){
                _14_1ref.current.focus();
              }else if(res14_13==false){
                _13_2ref.current.focus();
              }
              
            }
            else{
              
              
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_13_2":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats13");
              
            }
            else{
              
              if(res14_13==false){
                _13_1ref.current.focus();
              }else{
                _14_1ref.current.focus();
              }
              
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         //------Crossword 14------
         case "_14_1":
          try {
          
            if(value!=""){
              CheckAnswer("ats14");
              CheckAnswer("ats13");
              if(_13_1ref.current.value!=""&&_13_2ref.current.value==""){
                if(_13_2ref.current.value=="")
                _13_2ref.current.focus();
              }
              else{
                if(_14_2ref.current.value=="")
                _14_2ref.current.focus();
              }
              
            }
            else{
              if(_13_2ref.current.value=="" && _13_1ref.current.value!=""){
                _13_1ref.current.focus();
              }
              
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_14_2":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats14");
              if(_16_5ref.current.value=="")
              {
                _16_5ref.current.focus();
              }else if(res16_14==false){
                _14_3ref.current.focus();
              }
              
            }
            else{
              
              if(_16_5ref.current.value==""|| res16_14==false)
              _14_1ref.current.focus();
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_14_3":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats14");
              if(_14_4ref.current.value=="")
              _14_4ref.current.focus();
            }
            else{
              
              if(_14_4ref.current.value==""){
                if(res16_14==false){
                  _14_2ref.current.focus();
                }else{
                  _16_5ref.current.focus();
                }
              }
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_14_4":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats14");
              
            }
            else{
              
              
              _14_3ref.current.focus();
            }
          } catch (error) {
            console.log(error)
          }
         break;
         //------Crossword 15------
         case "_15_1":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats15");
              if(_15_2ref.current.value=="")
              _15_2ref.current.focus();
            }
            else{
              
              _5_9ref.current.focus();
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_15_2":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats15");
              if(_15_3ref.current.value=="")
              _15_3ref.current.focus();
            }
            else{
              
              if(_15_3ref.current.value=="")
              _15_1ref.current.focus();
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_15_3":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats15");
              if(_15_4ref.current.value=="")
              _15_4ref.current.focus();
            }
            else{
              
              if(_15_4ref.current.value=="")
              _15_2ref.current.focus();
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_15_4":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats15");
              if(_15_5ref.current.value=="")
              _15_5ref.current.focus();
            }
            else{
              
              if(_15_5ref.current.value=="")
              _15_3ref.current.focus();
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_15_5":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats15");
              if(_15_6ref.current.value=="")
              _15_6ref.current.focus();
            }
            else{
              
              if(_15_6ref.current.value=="")
              _15_4ref.current.focus();
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_15_6":
          try {
          
            if(value!=""){
              CheckAnswer("ats15");
              if(_15_7ref.current.value==""){
                _15_7ref.current.focus();
              }else if (res15_11==false){
                _15_8ref.current.focus();
              }
              
              
              
            }
            else{
              
              if(_15_7ref.current.value==""||res15_11==false)
              _15_5ref.current.focus();
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_15_7":
          try {
          
            if(value!=""){
              CheckAnswer("ats15");
              CheckAnswer("ats11")
              if(_15_6ref.current.value!=""&&_15_8ref.current.value==""){
                if(_15_8ref.current.value=="")
                _15_8ref.current.focus();
              }
              else{
                
              }
              
            }
            else{
              
              if(_15_8ref.current.value=="")
              _15_6ref.current.focus();
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_15_8":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats15");
              if(_15_9ref.current.value=="")
              _15_9ref.current.focus();
            }
            else{
              
              if(_15_9ref.current.value==""||res15_9==false){
                if(res15_11==false){
                  _15_6ref.current.focus();
                }else{
                  _15_7ref.current.focus();
                }
              }
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_15_9":
          try {
          
            if(value!=""){
              CheckAnswer("ats15");
              CheckAnswer("ats9");
              
            }
            else{
              
              
              _15_8ref.current.focus();
            }
          } catch (error) {
            console.log(error)
          }
         break;
         //------Crossword 16------
         case "_16_1":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats16");
              if(_16_2ref.current.value==""){
                _16_2ref.current.focus();
              }else if(res16_12==false){
                _16_3ref.current.focus();
              }
              
            }
            else{
              
              
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_16_2":
          try {
          
            if(value!=""){
              CheckAnswer("ats16");
              CheckAnswer("ats12");
              if(_16_1ref.current.value!=""&&_16_3ref.current.value==""){
                if(_16_3ref.current.value=="")
                _16_3ref.current.focus();
              }
              else{

              }
              
            }
            else{
              
              if(_16_3ref.current.value=="")
              _16_1ref.current.focus();
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_16_3":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats16");
              if(_16_4ref.current.value=="")
              _16_4ref.current.focus();
            }
            else{
              
              if(_16_4ref.current.value==""){
                if(res16_12==false){
                  _16_1ref.current.focus();
                }else{
                  _16_2ref.current.focus();
                }
              }
              
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_16_4":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats16");
              if(_16_5ref.current.value==""){
                _16_5ref.current.focus();
              }else if (res16_14==false ){
                _16_6ref.current.focus();
              }
              
            }
            else{
              
              if(_16_5ref.current.value==""||res16_14==false)
              _16_3ref.current.focus();
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_16_5":
          try {
          
            if(value!=""){
              CheckAnswer("ats16");
              CheckAnswer("ats14");
              if(_16_4ref.current.value!=""&&_16_6ref.current.value==""){
                if(_16_6ref.current.value=="")
                _16_6ref.current.focus();
              }
              else{
                if(_16_3ref.current.value=="")
                _14_3ref.current.focus();
              }
            }
            else{
              
              if(_16_6ref.current.value=="")
              _16_4ref.current.focus();
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_16_6":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats16");
              if(_16_7ref.current.value=="")
              _16_7ref.current.focus();
            }
            else{
              
              if(_16_7ref.current.value=="")
              {
                if(res16_14==false){
                  _16_4ref.current.focus();
                }else {
                  _16_5ref.current.focus();
                }
                
              }
              
              
            }
          } catch (error) {
            console.log(error)
          }
         break;
         case "_16_7":
          try {
          
            if(value!=""){
              
              CheckAnswer("ats16");
              if(_5_11ref.current.value=="")
              _5_11ref.current.focus();
              
            }
            else{
              
              if(_5_11ref.current.value=="")
              _16_6ref.current.focus();
              
            }
          } catch (error) {
            console.log(error)
          }
         break;

     }
     
    
  }
 //AnswerCheck
  const CheckAnswer = (check) =>{
    switch(check){
      //----------Atsakymas 1-----------
      case "ats1":
        if(_1_1ref.current.value!="" && _1_2ref.current.value!="" && _1_3ref.current.value!=""&& _1_4ref.current.value!="" &&_1_5ref.current.value!="" && _1_6ref.current.value!="" && _1_7ref.current.value!="" && _1_8ref.current.value!="" && _1_9ref.current.value!="" ){
          var cc = _1_1ref.current.value+ _1_2ref.current.value+ _1_3ref.current.value+ _1_4ref.current.value + _1_5ref.current.value + _1_6ref.current.value+ _1_7ref.current.value+ _1_8ref.current.value+ _1_9ref.current.value;
          let lowercasetext = cc.toLowerCase();
          set_1(lowercasetext)
          
          
        
        if(lowercasetext=="korupcija"){
          setres1(false);
          setres1_2(false);
        }
          
        }
        
      break;
      //----------Atsakymas 2-----------
      case "ats2":
        if(_1_5ref.current.value!="" && _2_1ref.current.value!="" && _2_2ref.current.value!=""&& _2_3ref.current.value!="" &&_2_4ref.current.value!="" && _2_5ref.current.value!="" && _2_6ref.current.value!="" && _2_7ref.current.value!="" && _2_8ref.current.value!="" ){
          var cc = _1_5ref.current.value+ _2_1ref.current.value+ _2_2ref.current.value+ _2_3ref.current.value+_2_4ref.current.value+ _2_5ref.current.value+ _2_6ref.current.value+_2_7ref.current.value+ _2_8ref.current.value;
          let lowercasetext = cc.toLowerCase();
          set_2(lowercasetext)
          
          
        
        if(lowercasetext=="pertrauka"){
          setres2(false);
          setres1_2(false);
          setres2_4(false);
          setres2_6(false);
          setres2_8(false);
        }
          
        }
        
      break;
      //----------Atsakymas 3-----------
      case "ats3":
        if(_3_1ref.current.value!="" && _3_2ref.current.value!="" && _3_3ref.current.value!=""&& _3_4ref.current.value!="" &&_3_5ref.current.value!=""){
          var cc = _3_1ref.current.value+ _3_2ref.current.value+_3_3ref.current.value+_3_4ref.current.value+_3_5ref.current.value;
          let lowercasetext = cc.toLowerCase();
          set_3(lowercasetext)
          
          
        
        if(lowercasetext=="sodra"){
          setres3(false);
          setres3_6(false);
        }
          
        }
        
      break;
      //----------Atsakymas 4-----------
      case "ats4":
        if(_4_1ref.current.value!="" && _4_2ref.current.value!="" && _4_3ref.current.value!=""&& _2_2ref.current.value!="" &&_4_4ref.current.value!=""&&_4_5ref.current.value!=""&&_4_6ref.current.value!=""){
          var cc = _4_1ref.current.value+_4_2ref.current.value+ _4_3ref.current.value+ _2_2ref.current.value+_4_4ref.current.value+_4_5ref.current.value+_4_6ref.current.value;
          let lowercasetext = cc.toLowerCase();
          set_4(lowercasetext)
          
          
        
        if(lowercasetext=="skurdas"){
          setres4(false);
          setres2_4(false);
        }
          
        }
        
      break;
      //----------Atsakymas 5-----------
      case "ats5":
        if(_5_1ref.current.value!="" && _5_2ref.current.value!="" && _5_3ref.current.value!=""&& _5_4ref.current.value!="" &&_5_5ref.current.value!="" && _5_6ref.current.value!="" && _5_7ref.current.value!="" && _5_8ref.current.value!="" && _5_9ref.current.value!="" && _5_10ref.current.value!="" && _5_11ref.current.value!="" ){
          var cc = _5_1ref.current.value+ _5_2ref.current.value+ _5_3ref.current.value+ _5_4ref.current.value+_5_5ref.current.value+_5_6ref.current.value+_5_7ref.current.value+ _5_8ref.current.value+_5_9ref.current.value+ _5_10ref.current.value+ _5_11ref.current.value;
          let lowercasetext = cc.toLowerCase();
          set_5(lowercasetext)
          
          
        
        if(lowercasetext=="direktorius"){
          setres5(false);
          setres5_10(false);
          setres5_15(false);
          setres5_2(false);
          setres5_8(false);
          setres5_16(false);

        }
          
        }
        
      break;
      //----------Atsakymas 6-----------
      case "ats6":
        if(_6_1ref.current.value!="" && _6_2ref.current.value!="" && _3_4ref.current.value!=""&& _6_3ref.current.value!="" &&_6_4ref.current.value!="" && _6_5ref.current.value!="" && _5_2ref.current.value!="" && _6_6ref.current.value!="" && _2_5ref.current.value!="" && _6_7ref.current.value!="" ){
          var cc = _6_1ref.current.value+ _6_2ref.current.value+ _3_4ref.current.value+ _6_3ref.current.value+_6_4ref.current.value+ _6_5ref.current.value+ _5_2ref.current.value+ _6_6ref.current.value+ _2_5ref.current.value+ _6_7ref.current.value ;
          let lowercasetext = cc.toLowerCase();
          set_6(lowercasetext)
          
          
        
        if(lowercasetext=="pardavimas"){
          setres6(false);
          setres3_6(false);
          setres2_6(false);
          setres5_2(false);
        }
          
        }
        
      break;
      //----------Atsakymas 7-----------
      case "ats7":
        if(_7_1ref.current.value!="" && _7_2ref.current.value!="" && _7_3ref.current.value!=""&& _7_4ref.current.value!="" &&_7_5ref.current.value!=""){
          var cc = _7_1ref.current.value+_7_2ref.current.value+ _7_3ref.current.value+ _7_4ref.current.value+_7_5ref.current.value;
          let lowercasetext = cc.toLowerCase();
          set_7(lowercasetext)
          
          
        
        if(lowercasetext=="kyšis"){
          setres7(false);
          setres7_10(false);
          
        }
          
        }
        
      break;
      //----------Atsakymas 8-----------
      case "ats8":
        if(_8_1ref.current.value!="" && _8_2ref.current.value!="" && _5_5ref.current.value!=""&& _8_3ref.current.value!="" &&_2_8ref.current.value!=""&&_8_4ref.current.value!=""&&_8_5ref.current.value!=""){
          var cc =_8_1ref.current.value+ _8_2ref.current.value+ _5_5ref.current.value+_8_3ref.current.value+_2_8ref.current.value+_8_4ref.current.value+_8_5ref.current.value;
          let lowercasetext = cc.toLowerCase();
          set_8(lowercasetext)
          
          
        
        if(lowercasetext=="reklama"){
          setres8(false);
          setres2_8(false);
          setres5_8(false);
          
        }
          
        }
        
      break;
      //----------Atsakymas 9-----------
      case "ats9":
        if(_9_1ref.current.value!="" && _9_2ref.current.value!="" && _9_3ref.current.value!=""&& _9_4ref.current.value!="" && _15_9ref.current.value!=""){
          var cc =_9_1ref.current.value+_9_2ref.current.value+ _9_3ref.current.value+ _9_4ref.current.value+ _15_9ref.current.value;
          let lowercasetext = cc.toLowerCase();
          set_9(lowercasetext)
          
          
        
        if(lowercasetext=="birža"){
          setres9(false);
          setres15_9(false);
        }
          
        }
      break;
      //----------Atsakymas 10-----------
      case "ats10":
        if(_7_5ref.current.value!="" && _10_1ref.current.value!="" && _10_2ref.current.value!=""&& _10_3ref.current.value!="" && _10_4ref.current.value!=""&& _10_5ref.current.value!=""&& _10_6ref.current.value!="" && _5_7ref.current.value!=""&& _10_7ref.current.value!="" ){
          var cc =_7_5ref.current.value+ _10_1ref.current.value+ _10_2ref.current.value+ _10_3ref.current.value+ _10_4ref.current.value+ _10_5ref.current.value+ _10_6ref.current.value+ _5_7ref.current.value+ _10_7ref.current.value;
          let lowercasetext = cc.toLowerCase();
          set_10(lowercasetext)
          
          
        
        if(lowercasetext=="santaupos"){
          setres10(false);
          setres5_10(false);
          setres7_10(false);
        }
          
        }
      break;
      //----------Atsakymas 11-----------
      case "ats11":
        if(_11_1ref.current.value!="" && _11_2ref.current.value!="" && _15_7ref.current.value!="" ){
          var cc =_11_1ref.current.value+ _11_2ref.current.value+ _15_7ref.current.value ;
          let lowercasetext = cc.toLowerCase();
          set_11(lowercasetext)
          
          
        
        if(lowercasetext=="vmi"){
          setres11(false);
          setres15_11(false);
        }
          
        }
      break;
      //----------Atsakymas 12-----------
      case "ats12":
        if(_12_1ref.current.value!="" && _12_2ref.current.value!="" && _16_2ref.current.value!="" ){
          var cc =_12_1ref.current.value+ _12_2ref.current.value+ _16_2ref.current.value ;
          let lowercasetext = cc.toLowerCase();
          set_12(lowercasetext)
          
          
        
        if(lowercasetext=="gpm"){
          setres12(false);
          setres16_12(false);
        }
          
        }
      break;
      //----------Atsakymas 13-----------
      case "ats13":
        if(_13_1ref.current.value!="" && _14_1ref.current.value!="" && _13_2ref.current.value!="" ){
          var cc =_13_1ref.current.value+ _14_1ref.current.value+ _13_2ref.current.value ;
          let lowercasetext = cc.toLowerCase();
          set_13(lowercasetext)
          
         
        
        if(lowercasetext=="pvm"){
          setres13(false);
          setres14_13(false);
        }
          
        }
      break;
      //----------Atsakymas 14-----------
      case "ats14":
        if(_14_1ref.current.value!="" && _14_2ref.current.value!="" && _16_5ref.current.value!="" && _14_3ref.current.value!=""&& _14_4ref.current.value!=""){
          var cc =_14_1ref.current.value+ _14_2ref.current.value+ _16_5ref.current.value+ _14_3ref.current.value+ _14_4ref.current.value ;
          let lowercasetext = cc.toLowerCase();
          set_14(lowercasetext)
          
          
        
        if(lowercasetext=="vertė"){
          setres14(false);
          setres14_13(false);
          setres16_14(false);
        }
          
        }
      break;
      //----------Atsakymas 15-----------
      case "ats15":
        if(_5_9ref.current.value!="" && _15_1ref.current.value!="" && _15_2ref.current.value!="" && _15_3ref.current.value!=""&& _15_4ref.current.value!=""&& _15_5ref.current.value!=""&& _15_6ref.current.value!=""&& _15_7ref.current.value!=""&& _15_8ref.current.value!=""&& _15_9ref.current.value!=""){
          var cc =_5_9ref.current.value+ _15_1ref.current.value+_15_2ref.current.value+ _15_3ref.current.value+ _15_4ref.current.value+ _15_5ref.current.value+ _15_6ref.current.value+ _15_7ref.current.value+ _15_8ref.current.value+ _15_9ref.current.value ;
          let lowercasetext = cc.toLowerCase();
          set_15(lowercasetext)
          
          
        
        if(lowercasetext=="infliacija"){
          setres15(false);
          setres15_11(false);
          setres15_9(false);
          setres5_15(false);
          
        }
          
        }
      break;
      //----------Atsakymas 16-----------
      case "ats16":
        if(_16_1ref.current.value!="" && _16_2ref.current.value!="" && _16_3ref.current.value!="" && _16_4ref.current.value!=""&& _16_5ref.current.value!=""&& _16_6ref.current.value!=""&& _16_7ref.current.value!=""&& _5_11ref.current.value!=""){
          var cc =_16_1ref.current.value+ _16_2ref.current.value+ _16_3ref.current.value+ _16_4ref.current.value+_16_5ref.current.value+ _16_6ref.current.value+ _16_7ref.current.value+ _5_11ref.current.value ;
          let lowercasetext = cc.toLowerCase();
          set_16(lowercasetext)
          
          
        
        if(lowercasetext=="importas"){
          setres16(false);
          setres16_12(false);
          setres16_14(false);
          setres5_16(false);
        }
          
        }
      break;

    }

    if(_1=="korupcija" && _2=="pertrauka" && _3=="sodra" && _4=="skurdas" && _5=="direktorius" && _6=="pardavimas" && _7=="kyšis" && _8=="reklama" && _9=="birža" &&_10=="santaupos" && _11=="vmi" &&_12=="gpm" && _13=="pvm" && _14=="vertė" && _15=="infliacija" && _16=="importas" ){
      setcomplete("1");
    }
  }
  
  //-------------Viewas-----------------
  return (
    <View style = {styles.container}>
    
    
      {/*---------- 1 ----------*/}
      <View
        
        style={[
          styles.box,
          {
            top: 15,
            left: 500,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
           
        ]}
      >
        <Text style={[styles.Crossnum]}>1</Text>

        <TextInput editable={res1} ref={_1_1ref}  onChangeText={ (e)=> {
        clicktest("_1_1",e)
        
        }} maxLength={1}
        />
       
        
        
        
        
     </View>
      <View
        style={[
          styles.box,
          {
            top: 15,
            left: 540,
            position,
            backgroundColor: "white",
            borderWidth: 1,
            
          },
          
        ]}
       
      >

       
        <TextInput ref={_1_2ref} editable={res1} onChangeText={ (e)=> {
        clicktest("_1_2",e)
        
        }} maxLength={1}
        />
       
        
      </View>
      <View
        style={[
          styles.box,
          {
            top: 15,
            left: 580,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_1_3ref} editable={res1} onChangeText={ (e)=> {
        clicktest("_1_3",e)
        
        }} maxLength={1}
        />
      </View>

      <View
        style={[
          styles.box,
          {
            top: 15,
            left: 620,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >

        <TextInput ref={_1_4ref} editable={res1} onChangeText={ (e)=> {
        clicktest("_1_4",e)
        
        }} maxLength={1}
        /> 

      </View>

      <View
        style={[
          styles.box,
          {
            top: 15,
            left: 660,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <Text style={[styles.Crossnum]}>2</Text>
        <TextInput ref={_1_5ref} editable={res1_2} onChangeText={ (e)=> {
        clicktest("_1_5",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 15,
            left: 700,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_1_6ref} editable={res1} onChangeText={ (e)=> {
        clicktest("_1_6",e)
        
        }} maxLength={1}
        />

      </View>
      <View
        style={[
          styles.box,
          {
            top: 15,
            left: 740,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_1_7ref} editable={res1} onChangeText={ (e)=> {
        clicktest("_1_7",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 15,
            left: 780,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_1_8ref} editable={res1} onChangeText={ (e)=> {
        clicktest("_1_8",e)
        
        }} maxLength={1}
        />

      </View>
      <View
        style={[
          styles.box,
          {
            top: 15,
            left: 820,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_1_9ref} editable={res1} onChangeText={ (e)=> {
        clicktest("_1_9",e)
        
        }} maxLength={1}
        />
      </View>
      
      {/*---------- 2 ----------*/}
      <View
        style={[
          styles.box,
          {
            top: 55,
            left: 660,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_2_1ref} editable={res2} onChangeText={ (e)=> {
        clicktest("_2_1",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 95,
            left: 660,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
         <TextInput ref={_2_2ref} editable={res2_4} onChangeText={ (e)=> {
        clicktest("_2_2",e)
        
        }} maxLength={1}
        />
        </View>

      <View
        style={[
          styles.box,
          {
            top: 135,
            left: 660,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
         <TextInput ref={_2_3ref} editable={res2} onChangeText={ (e)=> {
        clicktest("_2_3",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 175,
            left: 660,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
         <TextInput ref={_2_4ref} editable={res2} onChangeText={ (e)=> {
        clicktest("_2_4",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 215,
            left: 660,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_2_5ref} editable={res2_6} onChangeText={ (e)=> {
        clicktest("_2_5",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 255,
            left: 660,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_2_6ref} editable={res2} onChangeText={ (e)=> {
        clicktest("_2_6",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 295,
            left: 660,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_2_7ref} editable={res2} onChangeText={ (e)=> {
        clicktest("_2_7",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 335,
            left: 660,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_2_8ref} editable={res2_8} onChangeText={ (e)=> {
        clicktest("_2_8",e)
        
        }} maxLength={1}
        />
      </View>
      {/*---------- 3 ----------*/}
      <View
        style={[
          styles.box,
          {
            top: 95,
            left: 420,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <Text style={[styles.Crossnum]}>3{_3}</Text>
        <TextInput ref={_3_1ref} editable={res3}  onChangeText={ (e)=> {
        clicktest("_3_1",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 135,
            left: 420,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_3_2ref} editable={res3} onChangeText={ (e)=> {
        clicktest("_3_2",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 175,
            left: 420,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_3_3ref} editable={res3} onChangeText={ (e)=> {
        clicktest("_3_3",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 255,
            left: 420,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_3_5ref} editable={res3} onChangeText={ (e)=> {
        clicktest("_3_5",e)
        
        }} maxLength={1}
        />
      </View>
      {/*---------- 4 ----------*/}
      <View
        style={[
          styles.box,
          {
            top: 95,
            left: 540,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
      <Text style={[styles.Crossnum]}>4{_4}</Text>
      <TextInput ref={_4_1ref} editable={res4} onChangeText={ (e)=> {
        clicktest("_4_1",e)
        
        }} maxLength={1}/>
      </View>
      <View
        style={[
          styles.box,
          {
            top: 95,
            left: 580,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
         <TextInput ref={_4_2ref} editable={res4} onChangeText={ (e)=> {
        clicktest("_4_2",e)
        
        }} maxLength={1}/>
      </View>
      <View
        style={[
          styles.box,
          {
            top: 95,
            left: 620,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
         <TextInput ref={_4_3ref} editable={res4} onChangeText={ (e)=> {
        clicktest("_4_3",e)
        
        }} maxLength={1}/>
      </View>
      <View
        style={[
          styles.box,
          {
            top: 95,
            left: 700,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
         <TextInput ref={_4_4ref} editable={res4} onChangeText={ (e)=> {
        clicktest("_4_4",e)
        
        }} maxLength={1}/>
      </View>
      <View
        style={[
          styles.box,
          {
            top: 95,
            left: 740,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
         <TextInput ref={_4_5ref} editable={res4} onChangeText={ (e)=> {
        clicktest("_4_5",e)
        
        }} maxLength={1}/>
      </View>
      <View
        style={[
          styles.box,
          {
            top: 95,
            left: 780,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
         <TextInput ref={_4_6ref} editable={res4} onChangeText={ (e)=> {
        clicktest("_4_6",e)
        
        }} maxLength={1}/>
      </View>
      {/*---------- 5 ----------*/}
      <View
        style={[
          styles.box,
          {
            top: 175,
            left: 580,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <Text style={[styles.Crossnum]}>5{_5}</Text>
        <TextInput ref={_5_1ref} editable={res5} onChangeText={ (e)=> {
        clicktest("_5_1",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 215,
            left: 580,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_5_2ref} editable={res5_2} onChangeText={ (e)=> {
        clicktest("_5_2",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 255,
            left: 580,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_5_3ref} editable={res5}  onChangeText={ (e)=> {
        clicktest("_5_3",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 295,
            left: 580,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_5_4ref} editable={res5}  onChangeText={ (e)=> {
        clicktest("_5_4",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 335,
            left: 580,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_5_5ref} editable={res5_8}  onChangeText={ (e)=> {
        clicktest("_5_5",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 375,
            left: 580,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_5_6ref} editable={res5} onChangeText={ (e)=> {
        clicktest("_5_6",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 415,
            left: 580,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_5_7ref} editable={res5_10} onChangeText={ (e)=> {
        clicktest("_5_7",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 455,
            left: 580,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_5_8ref} editable={res5} onChangeText={ (e)=> {
        clicktest("_5_8",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 495,
            left: 580,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <Text style={[styles.Crossnum]}>15{_15}</Text>
        <TextInput ref={_5_9ref} editable={res5_15}  onChangeText={ (e)=> {
        clicktest("_5_9",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 535,
            left: 580,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_5_10ref} editable={res5} onChangeText={ (e)=> {
        clicktest("_5_10",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 575,
            left: 580,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_5_11ref} editable={res5_16} onChangeText={ (e)=> {
        clicktest("_5_11",e)
        
        }} maxLength={1}
        />
      </View>
      {/*---------- 6 ----------*/}
      <View
        style={[
          styles.box,
          {
            top: 215,
            left: 340,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <Text style={[styles.Crossnum]}>6{_6}</Text>
        <TextInput ref={_6_1ref} editable={res6} onChangeText={ (e)=> {
        clicktest("_6_1",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 215,
            left: 380,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_6_2ref} editable={res6} onChangeText={ (e)=> {
        clicktest("_6_2",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 215,
            left: 420,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        
        <TextInput ref={_3_4ref} editable={res3_6} onChangeText={ (e)=> {
        clicktest("_3_4",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 215,
            left: 460,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_6_3ref} editable={res6} onChangeText={ (e)=> {
        clicktest("_6_3",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 215,
            left: 500,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_6_4ref} editable={res6} onChangeText={ (e)=> {
        clicktest("_6_4",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 215,
            left: 540,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_6_5ref} editable={res6} onChangeText={ (e)=> {
        clicktest("_6_5",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 215,
            left: 620,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_6_6ref} editable={res6} onChangeText={ (e)=> {
        clicktest("_6_6",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 215,
            left: 700,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_6_7ref} editable={res6} onChangeText={ (e)=> {
        clicktest("_6_7",e)
        
        }} maxLength={1}
        />
      </View>
      
      {/*---------- 7 ----------*/}
      <View
        style={[
          styles.box,
          {
            top: 255,
            left: 300,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <Text style={[styles.Crossnum]}>7{_7}</Text>
        <TextInput ref={_7_1ref} editable={res7} onChangeText={ (e)=> {
        clicktest("_7_1",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 295,
            left: 300,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_7_2ref} editable={res7} onChangeText={ (e)=> {
        clicktest("_7_2",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 335,
            left: 300,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_7_3ref} editable={res7} onChangeText={ (e)=> {
        clicktest("_7_3",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 375,
            left: 300,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_7_4ref} editable={res7} onChangeText={ (e)=> {
        clicktest("_7_4",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 415,
            left: 300,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <Text style={styles.Crossnum}>10{_10}</Text>
        <TextInput ref={_7_5ref} editable={res7_10} onChangeText={ (e)=> {
        clicktest("_7_5",e)
        
        }} maxLength={1}
        />
      </View>
      {/*---------- 8 ----------*/}
      <View
        style={[
          styles.box,
          {
            top: 335,
            left: 500,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <Text style={[styles.Crossnum]}>8{_8}</Text>
        <TextInput ref={_8_1ref} editable={res8} onChangeText={ (e)=> {
        clicktest("_8_1",e)
        
        }} maxLength={1}
        />
        </View>
      <View
        style={[
          styles.box,
          {
            top: 335,
            left: 540,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_8_2ref} editable={res8} onChangeText={ (e)=> {
        clicktest("_8_2",e)
        
        }} maxLength={1}
        />
      </View>
      
      <View
        style={[
          styles.box,
          {
            top: 335,
            left: 620,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_8_3ref} editable={res8} onChangeText={ (e)=> {
        clicktest("_8_3",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 335,
            left: 700,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_8_4ref} editable={res8} onChangeText={ (e)=> {
        clicktest("_8_4",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 335,
            left: 740,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_8_5ref} editable={res8} onChangeText={ (e)=> {
        clicktest("_8_5",e)
        
        }} maxLength={1}
        />
      </View>
      {/*---------- 9 ----------*/}
      <View
        style={[
          styles.box,
          {
            top: 335,
            left: 940,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <Text style={[styles.Crossnum]}>9{_9}</Text>
        <TextInput ref={_9_1ref} editable={res9} onChangeText={ (e)=> {
        clicktest("_9_1",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 375,
            left: 940,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_9_2ref} editable={res9} onChangeText={ (e)=> {
        clicktest("_9_2",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 415,
            left: 940,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_9_3ref} editable={res9} onChangeText={ (e)=> {
        clicktest("_9_3",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 455,
            left: 940,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_9_4ref} editable={res9} onChangeText={ (e)=> {
        clicktest("_9_4",e)
        
        }} maxLength={1}
        />
      </View>
      {/*---------- 10 ----------*/}
      <View
        style={[
          styles.box,
          {
            top: 415,
            left: 340,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
      <TextInput ref={_10_1ref} editable={res10} onChangeText={ (e)=> {
        clicktest("_10_1",e)
        
        }} maxLength={1}
        />
      </View>
        <View
        style={[
          styles.box,
          {
            top: 415,
            left: 380,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_10_2ref} editable={res10} onChangeText={ (e)=> {
        clicktest("_10_2",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 415,
            left: 420,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_10_3ref} editable={res10} onChangeText={ (e)=> {
        clicktest("_10_3",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 415,
            left: 460,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_10_4ref} editable={res10} onChangeText={ (e)=> {
        clicktest("_10_4",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 415,
            left: 500,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_10_5ref} editable={res10} onChangeText={ (e)=> {
        clicktest("_10_5",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 415,
            left: 540,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_10_6ref} editable={res10} onChangeText={ (e)=> {
        clicktest("_10_6",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 415,
            left: 620,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_10_7ref} editable={res10} onChangeText={ (e)=> {
        clicktest("_10_7",e)
        
        }} maxLength={1}
        />
      </View>
      {/*---------- 11 ----------*/}
      <View
        style={[
          styles.box,
          {
            top: 415,
            left: 860,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <Text style={styles.Crossnum}>11{_11}</Text>
        <TextInput ref={_11_1ref} editable={res11} onChangeText={ (e)=> {
        clicktest("_11_1",e)
        
        }} maxLength={1}
        />
      </View>

      <View
        style={[
          styles.box,
          {
            top: 455,
            left: 860,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_11_2ref} editable={res11} onChangeText={ (e)=> {
        clicktest("_11_2",e)
        
        }} maxLength={1}
        />
      </View>
      {/*---------- 12 ----------*/}
      <View
        style={[
          styles.box,
          {
            top: 495,
            left: 340,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <Text style={styles.Crossnum}>12{_12}</Text>
        <TextInput ref={_12_1ref} editable={res12} onChangeText={ (e)=> {
        clicktest("_12_1",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 535,
            left: 340,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_12_2ref} editable={res12} onChangeText={ (e)=> {
        clicktest("_12_2",e)
        
        }} maxLength={1}
        />
      </View>
      {/*---------- 13 ----------*/}
      <View
        style={[
          styles.box,
          {
            top: 495,
            left: 420,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <Text style={styles.Crossnum}>13{_13}</Text>
        <TextInput ref={_13_1ref} editable={res13}  onChangeText={ (e)=> {
        clicktest("_13_1",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 495,
            left: 500,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_13_2ref} editable={res13} onChangeText={ (e)=> {
        clicktest("_13_2",e)
        
        }} maxLength={1}
        />
      </View>
      {/*---------- 14 ----------*/}
      <View
        style={[
          styles.box,
          {
            top: 495,
            left: 460,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <Text style={styles.Crossnum}>14{_14}</Text>
        <TextInput ref={_14_1ref} editable={res14_13} onChangeText={ (e)=> {
        clicktest("_14_1",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 535,
            left: 460,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_14_2ref} editable={res14} onChangeText={ (e)=> {
        clicktest("_14_2",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 615,
            left: 460,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_14_3ref} editable={res14} onChangeText={ (e)=> {
        clicktest("_14_3",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 655,
            left: 460,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_14_4ref} editable={res14} onChangeText={ (e)=> {
        clicktest("_14_4",e)
        
        }} maxLength={1}
        />
      </View>
      {/*---------- 15 ----------*/}
      <View
        style={[
          styles.box,
          {
            top: 495,
            left: 620,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_15_1ref} editable={res15} onChangeText={ (e)=> {
        clicktest("_15_1",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 495,
            left: 660,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_15_2ref} editable={res15} onChangeText={ (e)=> {
        clicktest("_15_2",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 495,
            left: 700,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_15_3ref} editable={res15} onChangeText={ (e)=> {
        clicktest("_15_3",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 495,
            left: 740,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_15_4ref} editable={res15} onChangeText={ (e)=> {
        clicktest("_15_4",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 495,
            left: 780,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_15_5ref} editable={res15} onChangeText={ (e)=> {
        clicktest("_15_5",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 495,
            left: 820,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_15_6ref} editable={res15} onChangeText={ (e)=> {
        clicktest("_15_6",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 495,
            left: 860,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_15_7ref} editable={res15_11} onChangeText={ (e)=> {
        clicktest("_15_7",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 495,
            left: 900,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_15_8ref} editable={res15} onChangeText={ (e)=> {
        clicktest("_15_8",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 495,
            left: 940,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_15_9ref} editable={res15_9} onChangeText={ (e)=> {
        clicktest("_15_9",e)
        
        }} maxLength={1}
        />
      </View>
      {/*---------- 16 ----------*/}
      <View
        style={[
          styles.box,
          {
            top: 575,
            left: 300,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <Text style={styles.Crossnum}>16{_16}</Text>
        <TextInput ref={_16_1ref} editable={res16} onChangeText={ (e)=> {
        clicktest("_16_1",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 575,
            left: 340,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_16_2ref} editable={res16_12} onChangeText={ (e)=> {
        clicktest("_16_2",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 575,
            left: 380,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_16_3ref} editable={res16} onChangeText={ (e)=> {
        clicktest("_16_3",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 575,
            left: 420,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_16_4ref} editable={res16} onChangeText={ (e)=> {
        clicktest("_16_4",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 575,
            left: 460,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_16_5ref} editable={res16_14} onChangeText={ (e)=> {
        clicktest("_16_5",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 575,
            left: 500,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_16_6ref} editable={res16} onChangeText={ (e)=> {
        clicktest("_16_6",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            top: 575,
            left: 540,
            position,
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_16_7ref} editable={res16} onChangeText={ (e)=> {
        clicktest("_16_7",e)
        
        }} maxLength={1}
        />
      </View>
      {/*---------- Text ----------*/}
      <View style={[
        styles.box,
        {
          top: 25,
          left: 1000,
          height: 500,
          width: 500,
          position,
        },
      ]}>
        <Text style={styles.Text} >Across</Text>
        <Text>1. Piktnaudžiavimas patikėta galia siekiant asmeninės naudos</Text>
        <Text>4. Nedarbo pasekmė</Text>
        <Text>6. Prekės perleidimas už sutartą kainą</Text>
        <Text>8. Gaminio ar jo gamintojo tam tikrų savybių viešinimas siekiant skatinti vartotoją įsigyti gaminį</Text>
        <Text>10. Pajamų dalis, viršijanti vartojimo išlaidas</Text>
        <Text>13. Pridėtinės vertės mokestis</Text>
        <Text>15. Bendrojo kainų lygio kilimas, dėl kurio krinta piniginio vieneto perkamoji galia</Text>
        <Text>16. Prekės ir paslaugos, kurias perkame iš kitų šalių</Text>
        <Text style={styles.Text} >Down</Text>
        <Text>2. Laikas tarp dviejų paskaitų</Text>
        <Text>3. Kas administruoja jums priklausančias valstybės išmokas</Text>
        <Text>5. Asmuo, atsakingas už įmonės veiklą</Text>
        <Text>7. Papirkimas kitaip</Text>
        <Text>9. Vieta, kurioje prekiaujama akcijomis</Text>
        <Text>11. Institucija, atsakinga už mokesčių administravimą</Text>
        <Text>12. Gyventojų pajamų mokestis</Text>
        <Text>14. Prekės galia, pasireiškianti ją mainant į kitas prekes arba paslaugas</Text>
      </View>
   
    
    </View>
  );
};






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aliceblue",
    minHeight: 500,
    justifyContent: 'center', 
     alignItems: 'center' 
  },
  box: {
    width: 40,
    height: 40,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
  TextInput: {
    textAlign: "center",
    textAlignVertical: "center",
  },
  Text:{
    fontStyle: "italic",
    fontWeight: "900",
    textDecorationLine: "underline",
  },
  Textcent:{
    

     flexDirection: 'row', 
     justifyContent: 'center', 
     alignItems: 'center' 
  },
  Crossnum:{
    fontSize: 10, 
    padding: 0 , 
    margin: 0,
  }
});

export default PositionLayout;
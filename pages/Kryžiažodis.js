import React, { useState, useRef } from "react";
import { useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Platform,
 
} from "react-native";



const PositionLayout = () => {
  
  const [_complete, setcomplete] = useState(0);
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
  const [_1,set_1]=useState("-------------------------------");
  const [_2,set_2]=useState("-------------------------------");
  const [_3,set_3]=useState("-------------------------------");
  const [_4,set_4]=useState("-------------------------------");
  const [_5,set_5]=useState("-------------------------------");
  const [_6,set_6]=useState("-------------------------------");
  const [_7,set_7]=useState("-------------------------------");
  const [_8,set_8]=useState("-------------------------------");
  const [_9,set_9]=useState("-------------------------------");
  const [_10,set_10]=useState("-----------------------------");
  const [_11,set_11]=useState("-----------------------------");
  const [_12,set_12]=useState("-----------------------------");
  const [_13,set_13]=useState("-----------------------------");
  const [_14,set_14]=useState("-----------------------------");
  const [_15,set_15]=useState("-----------------------------");
  const [_16,set_16]=useState("-----------------------------");
  //--------------Ref-------------------
  //---------------1--------------------

  const _1_1ref = useRef("");
  const _1_2ref = useRef("");
  const _1_3ref = useRef("");
  const _1_4ref = useRef("");
  const _1_5ref = useRef("");
  const _1_6ref = useRef("");
  const _1_7ref = useRef("");
  const _1_8ref = useRef("");
  const _1_9ref = useRef("");
  
  //---------------2--------------------
  const _2_1ref = useRef("");
  const _2_2ref = useRef("");
  const _2_3ref = useRef("");
  const _2_4ref = useRef("");
  const _2_5ref = useRef("");
  const _2_6ref = useRef("");
  const _2_7ref = useRef("");
  const _2_8ref = useRef("");
 
  //---------------3--------------------
  const _3_1ref = useRef("");
  const _3_2ref = useRef("");
  const _3_3ref = useRef("");
  const _3_4ref = useRef("");
  const _3_5ref = useRef("");
  //---------------4--------------------
  const _4_1ref = useRef("");
  const _4_2ref = useRef("");
  const _4_3ref = useRef("");
  const _4_4ref = useRef("");
  const _4_5ref = useRef("");
  const _4_6ref = useRef("");
  //---------------5--------------------
  const _5_1ref = useRef("");
  const _5_2ref = useRef("");
  const _5_3ref = useRef("");
  const _5_4ref = useRef("");
  const _5_5ref = useRef("");
  const _5_6ref = useRef("");
  const _5_7ref = useRef("");
  const _5_8ref = useRef("");
  const _5_9ref = useRef("");
  const _5_10ref = useRef("");
  const _5_11ref = useRef("");
  //---------------6--------------------
  const _6_1ref = useRef("");
  const _6_2ref = useRef("");
  const _6_3ref = useRef("");
  const _6_4ref = useRef("");
  const _6_5ref = useRef("");
  const _6_6ref = useRef("");
  const _6_7ref = useRef("");
  //---------------7--------------------
  const _7_1ref = useRef("");
  const _7_2ref = useRef("");
  const _7_3ref = useRef("");
  const _7_4ref = useRef("");
  const _7_5ref = useRef("");
  //---------------8--------------------
  const _8_1ref = useRef("");
  const _8_2ref = useRef("");
  const _8_3ref = useRef("");
  const _8_4ref = useRef("");
  const _8_5ref = useRef("");
  //---------------9--------------------
  const _9_1ref = useRef("");
  const _9_2ref = useRef("");
  const _9_3ref = useRef("");
  const _9_4ref = useRef("");
  const _9_5ref = useRef("");
  //---------------10--------------------
  const _10_1ref = useRef("");
  const _10_2ref = useRef("");
  const _10_3ref = useRef("");
  const _10_4ref = useRef("");
  const _10_5ref = useRef("");
  const _10_6ref = useRef("");
  const _10_7ref = useRef("");
  //---------------11--------------------
  const _11_1ref = useRef("");
  const _11_2ref = useRef("");
  
  //---------------12--------------------
  const _12_1ref = useRef("");
  const _12_2ref = useRef("");

  //---------------13--------------------
  const _13_1ref = useRef("");
  const _13_2ref = useRef("");

  //---------------14--------------------
  const _14_1ref = useRef("");
  const _14_2ref = useRef("");
  const _14_3ref = useRef("");
  const _14_4ref = useRef("");
  //---------------15--------------------
  const _15_1ref = useRef("");
  const _15_2ref = useRef("");
  const _15_3ref = useRef("");
  const _15_4ref = useRef("");
  const _15_5ref = useRef("");
  const _15_6ref = useRef("");
  const _15_7ref = useRef("");
  const _15_8ref = useRef("");
  const _15_9ref = useRef("");
  //---------------16--------------------
  const _16_1ref = useRef("");
  const _16_2ref = useRef("");
  const _16_3ref = useRef("");
  const _16_4ref = useRef("");
  const _16_5ref = useRef("");
  const _16_6ref = useRef("");
  const _16_7ref = useRef("");

  
  useEffect(()=>{
    if(_1.toLowerCase()==="korupcija" && res1==true){
      setcomplete(prev=>prev=prev+1)
      setres1(false);
      setres1_2(false);
      
    }
    if(_2.toLowerCase()==="pertrauka" && res2==true){
      setcomplete(prev=>prev=prev+1)
      setres2(false);
      setres1_2(false);
      setres2_4(false);
      setres2_6(false);
      setres2_8(false);
      
    }
    if(_3.toLowerCase()==="sodra" && res3==true){
      setcomplete(prev=>prev=prev+1)
      setres3(false);
      setres3_6(false);
      
    }
    if(_4.toLowerCase()==="skurdas" && res4==true){
      setcomplete(prev=>prev=prev+1)
      setres4(false);
      setres2_4(false);
      
    }
    if(_5.toLowerCase()==="direktorius" && res5==true){
      setcomplete(prev=>prev=prev+1)
      setres5(false);
      setres5_10(false);
      setres5_15(false);
      setres5_2(false);
      setres5_8(false);
      setres5_16(false);
      
    }
    if(_6.toLowerCase()==="pardavimas" && res6==true){
      setcomplete(prev=>prev=prev+1)
      setres6(false);
      setres3_6(false);
      setres2_6(false);
      setres5_2(false);
      
    }
    if(_7.toLowerCase()==="kyšis" && res7==true){
      setcomplete(prev=>prev=prev+1)
      setres7(false);
      setres7_10(false);
      
    }
    if(_8.toLowerCase()==="reklama" && res8==true){
      setcomplete(prev=>prev=prev+1)
      setres8(false);
      setres2_8(false);
      setres5_8(false);
      
    }
    if(_9.toLowerCase()==="birža" && res9==true){
      setcomplete(prev=>prev=prev+1)
      setres9(false);
      setres15_9(false);
      
    }
    if(_10.toLowerCase()==="santaupos" && res10==true){
      setcomplete(prev=>prev=prev+1)
      setres10(false);
          setres5_10(false);
          setres7_10(false);
     
    }
    if(_11.toLowerCase()==="vmi" && res11==true){
      setcomplete(prev=>prev=prev+1)
      setres11(false);
          setres15_11(false);
      
    }
    if(_12.toLowerCase()==="gpm" && res12==true){
      setcomplete(prev=>prev=prev+1)
      setres12(false);
          setres16_12(false);
    
    }
    if(_13.toLowerCase()==="pvm" && res13==true){
      setcomplete(prev=>prev=prev+1)
      setres13(false);
          setres14_13(false);
      
    }
    if(_14.toLowerCase()==="vertė" && res14==true){
      setcomplete(prev=>prev=prev+1)
      setres14(false);
          setres14_13(false);
          setres16_14(false);
     
    }
    if(_15.toLowerCase()==="infliacija" && res15==true){
      setcomplete(prev=>prev=prev+1)
      setres15(false);
      setres15_11(false);
      setres15_9(false);
      setres5_15(false);
      
    }
    if(_16.toLowerCase()==="importas" && res16==true){
      setcomplete(prev=>prev=prev+1)
      setres16(false);
      setres16_12(false);
      setres16_14(false);
      setres5_16(false);
     
    }
    if(_complete===16){
      setcomplete(20)
      if (Platform.OS === 'web') {
        alert("Užuomina: DEKANAS",{cancelable: false})
     } else {
      Alert.alert(

 
        "Užuomina: DEKANAS",
        
         
        "", [{ text: "Gerai"}],
        
         
        { cancelable: false }
        
         
        );
  
     
    }
  }
  });
  
  
 
  //--------------Check-----------------
 function CheckText(check, value) {



    switch (check) {
      //------Crossword 1------
      case "_1_1":
        try {

          if (value != "") {
            
    
           set_1(value+_1.charAt(1)+_1.charAt(2)+_1.charAt(3)+_1.charAt(4)+_1.charAt(5)+_1.charAt(6)+_1.charAt(7)+_1.charAt(8))
          
            
            if (_1_2ref.current.value == "") {
              _1_2ref.current.focus();
            }

          }
          else {
            
          }
          
        } catch (error) {
          console.log(error);
        }
        break;

      case "_1_2":
        try {

          if (value != "") {
            set_1(_1.charAt(0)+value+_1.charAt(2)+_1.charAt(3)+_1.charAt(4)+_1.charAt(5)+_1.charAt(6)+_1.charAt(7)+_1.charAt(8))
            
            if (_1_3ref.current.value == "")
              _1_3ref.current.focus();
          }
          else {
 
            if (_1_3ref.current.value == "") {
              _1_1ref.current.focus();
            }

          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_1_3":
        try {

          if (value != "") {
            set_1(_1.charAt(0)+_1.charAt(1)+value+_1.charAt(3)+_1.charAt(4)+_1.charAt(5)+_1.charAt(6)+_1.charAt(7)+_1.charAt(8))
            
            if (_1_4ref.current.value == "")
              _1_4ref.current.focus();
          }
          else {
     
            if (_1_4ref.current.value == "") {
              _1_2ref.current.focus();
            }

          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_1_4":
        try {

          if (value != "") {
            set_1(_1.charAt(0)+_1.charAt(1)+_1.charAt(2)+value+_1.charAt(4)+_1.charAt(5)+_1.charAt(6)+_1.charAt(7)+_1.charAt(8))
            
            if (_1_5ref.current.value == "") {
              _1_5ref.current.focus();
            }
            else if (res1_2 == false) {
              _1_6ref.current.focus();
            }

          }
          else {
          
            if (_1_5ref.current.value == "") {
              _1_3ref.current.focus();



            } else if (res1_2 == false) {
              _1_3ref.current.focus();
            }

          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_1_5":
        try {

          if (value != "") {
            set_1(_1.charAt(0)+_1.charAt(1)+_1.charAt(2)+_1.charAt(3)+value+_1.charAt(5)+_1.charAt(6)+_1.charAt(7)+_1.charAt(8))
            set_2(value+_2.charAt(1)+_2.charAt(2)+_2.charAt(3)+_2.charAt(4)+_2.charAt(5)+_2.charAt(6)+_2.charAt(7)+_2.charAt(8))
            

            if (_1_6ref.current.value == "" && _1_4ref.current.value != "") {
              if (_1_6ref.current.value == "")
                _1_6ref.current.focus();
            }
            else if (_2_1ref.current.value == "") {
              if (_2_1ref.current.value == "")
                _2_1ref.current.focus();
            }

          }
          else {



            if (_1_6ref.current.value == "" && _1_4ref.current.value != "") {
              if (_1_6ref.current.value == "")
                _1_4ref.current.focus();
            }

          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_1_6":
        try {

          if (value != "") {
            set_1(_1.charAt(0)+_1.charAt(1)+_1.charAt(2)+_1.charAt(3)+_1.charAt(4)+value+_1.charAt(6)+_1.charAt(7)+_1.charAt(8))
            
            if (_1_7ref.current.value == "")
              _1_7ref.current.focus();
          }
          else {

            if (_1_7ref.current.value == "") {
              if (res1_2 == false) {
                _1_4ref.current.focus();
              } else {
                _1_5ref.current.focus();
              }

            }

          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_1_7":
        try {

          if (value != "") {
            set_1(_1.charAt(0)+_1.charAt(1)+_1.charAt(2)+_1.charAt(3)+_1.charAt(4)+_1.charAt(5)+value+_1.charAt(7)+_1.charAt(8))
          

            if (_1_8ref.current.value == "")
              _1_8ref.current.focus();
          }
          else {

            if (_1_8ref.current.value == "")
              _1_6ref.current.focus();
          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_1_8":
        try {

          if (value != "") {
            set_1(_1.charAt(0)+_1.charAt(1)+_1.charAt(2)+_1.charAt(3)+_1.charAt(4)+_1.charAt(5)+_1.charAt(6)+value+_1.charAt(8))
         

            if (_1_9ref.current.value == "")
              _1_9ref.current.focus();
          }
          else {

            if (_1_9ref.current.value == "")
              _1_7ref.current.focus();
          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_1_9":
        try {
          
          if (value != "") {
            set_1(_1.charAt(0)+_1.charAt(1)+_1.charAt(2)+_1.charAt(3)+_1.charAt(4)+_1.charAt(5)+_1.charAt(6)+_1.charAt(7)+value)
          


          }
          else {


            _1_8ref.current.focus();
          }
        } catch (error) {
          console.log(error);
        }
        break;


      //------Crossword 2------
      case "_2_1":
        try {

          if (value != "") {

            set_2(_2.charAt(0)+value+_2.charAt(2)+_2.charAt(3)+_2.charAt(4)+_2.charAt(5)+_2.charAt(6)+_2.charAt(7)+_2.charAt(8))
            if (_2_2ref.current.value == "") {
              _2_2ref.current.focus();

            } else if (res2_4 == false) {
              _2_3ref.current.focus();
            }


          }
          else {

            if (_2_2ref.current.value == "" || res2_4 == false)
              _1_5ref.current.focus();
          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_2_2":
        try {

          if (value != "") {

            set_2(_2.charAt(0)+_2.charAt(1)+value+_2.charAt(3)+_2.charAt(4)+_2.charAt(5)+_2.charAt(6)+_2.charAt(7)+_2.charAt(8))
            set_4(_4.charAt(0)+_4.charAt(1)+_4.charAt(2)+value+_4.charAt(4)+_4.charAt(5)+_4.charAt(6))
            if (_4_4ref.current.value == "" && _4_3ref.current.value != "") {
              if (_4_4ref.current.value == "")
                _4_4ref.current.focus();
            }
            else if (_2_3ref.current.value == "") {
              if (_2_3ref.current.value == "")
                _2_3ref.current.focus();
            }

          }
          else {
            if (_4_4ref.current.value == "" && _4_3ref.current.value != "") {
              _4_3ref.current.focus();
            } else {
              if (_2_3ref.current.value == "")
                _2_1ref.current.focus();
            }
          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_2_3":
        try {

          if (value != "") {

            set_2(_2.charAt(0)+_2.charAt(1)+_2.charAt(2)+value+_2.charAt(4)+_2.charAt(5)+_2.charAt(6)+_2.charAt(7)+_2.charAt(8))
            if (_2_4ref.current.value == "")
              _2_4ref.current.focus();
          }
          else {

            if (_2_4ref.current.value == "") {
              if (res2_4 == false) {
                _2_1ref.current.focus();
              } else {
                _2_2ref.current.focus();
              }

            }

          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_2_4":
        try {

          if (value != "") {

            set_2(_2.charAt(0)+_2.charAt(1)+_2.charAt(2)+_2.charAt(3)+value+_2.charAt(5)+_2.charAt(6)+_2.charAt(7)+_2.charAt(8))
            if (_2_5ref.current.value == "") {
              _2_5ref.current.focus();
            } else if (res2_6 == false) {
              _2_6ref.current.focus();
            }

          }
          else {

            if (_2_5ref.current.value == "" || res2_6 == false)
              _2_3ref.current.focus();
          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_2_5":
        try {

          if (value != "") {

            set_2(_2.charAt(0)+_2.charAt(1)+_2.charAt(2)+_2.charAt(3)+_2.charAt(4)+value+_2.charAt(6)+_2.charAt(7)+_2.charAt(8))
            set_6(_6.charAt(0)+_6.charAt(1)+_6.charAt(2)+_6.charAt(3)+_6.charAt(4)+_6.charAt(5)+_6.charAt(6)+_6.charAt(7)+value+_6.charAt(9))
            if (_6_6ref.current.value != "" && _6_7ref.current.value == "") {
              if (_6_7ref.current.value == "")
                _6_7ref.current.focus();
            } else {
              if (_2_6ref.current.value == "")
                _2_6ref.current.focus();
            }
          }
          else {
            if (_6_6ref.current.value != "" && _6_7ref.current.value == "") {
              if (_6_7ref.current.value == "")
                _6_6ref.current.focus();
            } else {
              if (_2_6ref.current.value == "")
                _2_4ref.current.focus();
            }

          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_2_6":
        try {

          if (value != "") {

            set_2(_2.charAt(0)+_2.charAt(1)+_2.charAt(2)+_2.charAt(3)+_2.charAt(4)+_2.charAt(5)+value+_2.charAt(7)+_2.charAt(8))

            if (_2_7ref.current.value == "")
              _2_7ref.current.focus();


          }
          else {

            if (_2_7ref.current.value == "") {
              if (res2_6 == false) {
                _2_4ref.current.focus();

              } else {
                _2_5ref.current.focus();
              }
            }



          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_2_7":
        try {

          if (value != "") {

            set_2(_2.charAt(0)+_2.charAt(1)+_2.charAt(2)+_2.charAt(3)+_2.charAt(4)+_2.charAt(5)+_2.charAt(6)+value+_2.charAt(8))
            if (_2_8ref.current.value == "")
              _2_8ref.current.focus();

          }
          else {

            if (_2_8ref.current.value == "" || res2_8 == false)
              _2_6ref.current.focus();
          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_2_8":
        try {

          if (value != "") {

            set_2(_2.charAt(0)+_2.charAt(1)+_2.charAt(2)+_2.charAt(3)+_2.charAt(4)+_2.charAt(5)+_2.charAt(6)+_2.charAt(7)+value)
            set_8(_8.charAt(0)+_8.charAt(1)+_8.charAt(2)+_8.charAt(3)+value+_8.charAt(5)+_8.charAt(6))
            if (_8_3ref.current.value != "" && _8_4ref.current.value == "") {
              if (_8_4ref.current.value == "")
                _8_4ref.current.focus();
            }

          }
          else {

            CheckAnswer("ats2");
            _2_7ref.current.focus();
          }
        } catch (error) {
          console.log(error);
        }
        break;

      //------Crossword 3------
      case "_3_1":
        try {

          if (value != "") {

            set_3(value+_3.charAt(1)+_3.charAt(2)+_3.charAt(3)+_3.charAt(4))
            if (_3_2ref.current.value == "")
              _3_2ref.current.focus();
          }
          else {
          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_3_2":
        try {

          if (value != "") {

            set_3(_3.charAt(0)+value+_3.charAt(2)+_3.charAt(3)+_3.charAt(4))
            if (_3_3ref.current.value == "")
              _3_3ref.current.focus();
          }
          else {

            if (_3_3ref.current.value == "")
              _3_1ref.current.focus();
          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_3_3":
        try {

          if (value != "") {

            set_3(_3.charAt(0)+_3.charAt(1)+value+_3.charAt(3)+_3.charAt(4))
            if (_3_4ref.current.value == "") {

              _3_4ref.current.focus();
            } else if (res3_6 == false) {
              _3_5ref.current.focus();
            }

          }
          else {

            if (_3_4ref.current.value == "" || res3_6 == false)
              _3_2ref.current.focus();
          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_3_4":
        try {

          if (value != "") {

            set_3(_3.charAt(0)+_3.charAt(1)+_3.charAt(2)+value+_3.charAt(4))
            set_6(_6.charAt(0)+_6.charAt(1)+value+_6.charAt(3)+_6.charAt(4)+_6.charAt(5)+_6.charAt(6)+_6.charAt(7)+_6.charAt(8)+_6.charAt(9))
           
            if (_6_2ref.current.value != "" && _6_3ref.current.value == "") {
              if (_6_3ref.current.value == "")
                _6_3ref.current.focus();
            }
            else {
              if (_3_5ref.current.value == "")
                _3_5ref.current.focus();
            }

          }
          else {
            if (_6_2ref.current.value != "" && _6_3ref.current.value == "") {
              if (_6_3ref.current.value == "")
                _6_2ref.current.focus();
            }
            else {
              if (_3_5ref.current.value == "")
                _3_3ref.current.focus();
            }

          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_3_5":
        try {

          if (value != "") {

            set_3(_3.charAt(0)+_3.charAt(1)+_3.charAt(2)+_3.charAt(3)+value)

          }
          else {

            if (res3_6) {
              _3_4ref.current.focus();
            } else {
              _3_3ref.current.focus();
            }

          }
        } catch (error) {
          console.log(error);
        }
        break;
      //------Crossword 4------
      case "_4_1":
        try {

          if (value != "") {

            set_4(value+_4.charAt(1)+_4.charAt(2)+_4.charAt(3)+_4.charAt(4)+_4.charAt(5)+_4.charAt(6))
            if (_4_2ref.current.value == "")
              _4_2ref.current.focus();
          }
          else {
          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_4_2":
        try {

          if (value != "") {

            set_4(_4.charAt(0)+value+_4.charAt(2)+_4.charAt(3)+_4.charAt(4)+_4.charAt(5)+_4.charAt(6))
            if (_4_3ref.current.value == "")
              _4_3ref.current.focus();
          }
          else {

            if (_4_3ref.current.value == "")
              _4_1ref.current.focus();
          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_4_3":
        try {

          if (value != "") {

            set_4(_4.charAt(0)+_4.charAt(1)+value+_4.charAt(3)+_4.charAt(4)+_4.charAt(5)+_4.charAt(6))
            if (_2_2ref.current.value == "") {

              _2_2ref.current.focus();
            } else if (res2_6 == false) {
              _4_4ref.current.focus();
            }

          }
          else {

            if (_2_2ref.current.value == "" || res2_6 == false)
              _4_2ref.current.focus();
          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_4_4":
        try {

          if (value != "") {

            set_4(_4.charAt(0)+_4.charAt(1)+_4.charAt(2)+_4.charAt(3)+value+_4.charAt(5)+_4.charAt(6))
            if (_4_5ref.current.value == "")
              _4_5ref.current.focus();
          }
          else {

            if (_4_5ref.current.value == "") {
              if (res2_6 == false) {
                _4_3ref.current.focus();
              } else {
                _2_2ref.current.focus();
              }

            }

          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_4_5":
        try {

          if (value != "") {

            set_4(_4.charAt(0)+_4.charAt(1)+_4.charAt(2)+_4.charAt(3)+_4.charAt(4)+value+_4.charAt(6))
            if (_4_6ref.current.value == "")
              _4_6ref.current.focus();
          }
          else {

            if (_4_6ref.current.value == "")
              _4_4ref.current.focus();
          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_4_6":
        try {

          if (value != "") {

            set_4(_4.charAt(0)+_4.charAt(1)+_4.charAt(2)+_4.charAt(3)+_4.charAt(4)+_4.charAt(5)+value)

          }
          else {


            _4_5ref.current.focus();
          }
        } catch (error) {
          console.log(error);
        }
        break;
      //------Crossword 5------
      case "_5_1":
        try {

          if (value != "") {

            set_5(value+_5.charAt(1)+_5.charAt(2)+_5.charAt(3)+_5.charAt(4)+_5.charAt(5)+_5.charAt(6)+_5.charAt(7)+_5.charAt(8)+_5.charAt(9)+_5.charAt(10))
            if (_5_2ref.current.value == "") {
              _5_2ref.current.focus();
            } else if (res5_2 == false) {
              _5_3ref.current.focus();
            }

          }
          else {
          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_5_2":
        try {

          if (value != "") {

            set_5(_5.charAt(0)+value+_5.charAt(2)+_5.charAt(3)+_5.charAt(4)+_5.charAt(5)+_5.charAt(6)+_5.charAt(7)+_5.charAt(8)+_5.charAt(9)+_5.charAt(10))
            set_6(_6.charAt(0)+_6.charAt(1)+_6.charAt(2)+_6.charAt(3)+_6.charAt(4)+_6.charAt(5)+value+_6.charAt(7)+_6.charAt(8)+_6.charAt(9))
           
            if (_6_5ref.current.value != "" && _6_6ref.current.value == "") {
              if (_6_6ref.current.value == "")
                _6_6ref.current.focus();
            } else {
              if (_5_3ref.current.value == "")
                _5_3ref.current.focus();
            }

          }
          else {
            if (_6_5ref.current.value != "" && _6_6ref.current.value == "") {
              if (_6_6ref.current.value == "")
                _6_5ref.current.focus();
            } else {
              if (_5_3ref.current.value == "")
                _5_1ref.current.focus();
            }

          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_5_3":
        try {

          if (value != "") {

            set_5(_5.charAt(0)+_5.charAt(1)+value+_5.charAt(3)+_5.charAt(4)+_5.charAt(5)+_5.charAt(6)+_5.charAt(7)+_5.charAt(8)+_5.charAt(9)+_5.charAt(10))
            if (_5_4ref.current.value == "")
              _5_4ref.current.focus();
          }
          else {

            if (_5_4ref.current.value == "") {
              if (res5_2 == false) {
                _5_1ref.current.focus();
              } else {
                _5_2ref.current.focus();
              }

            }

          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_5_4":
        try {

          if (value != "") {

           
            set_5(_5.charAt(0)+_5.charAt(1)+_5.charAt(2)+value+_5.charAt(4)+_5.charAt(5)+_5.charAt(6)+_5.charAt(7)+_5.charAt(8)+_5.charAt(9)+_5.charAt(10))

            if (_5_5ref.current.value == "") {
              _5_5ref.current.focus();
            } else if (res5_8 == false)
              _5_6ref.current.focus();
          }
          else {

            if (_5_5ref.current.value == "" || res5_8 == false)
              _5_3ref.current.focus();
          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_5_5":
        try {

          if (value != "") {

            set_5(_5.charAt(0)+_5.charAt(1)+_5.charAt(2)+_5.charAt(3)+value+_5.charAt(5)+_5.charAt(6)+_5.charAt(7)+_5.charAt(8)+_5.charAt(9)+_5.charAt(10))
            set_8(_8.charAt(0)+_8.charAt(1)+value+_8.charAt(3)+_8.charAt(4)+_8.charAt(5)+_8.charAt(6))
            if (_8_2ref.current.value != "" && _8_3ref.current.value == "") {
              if (_8_3ref.current.value == "")
                _8_3ref.current.focus();
            } else {
              if (_5_6ref.current.value == "")
                _5_6ref.current.focus();
            }

          }
          else {

            if (_5_6ref.current.value == "")
              _5_4ref.current.focus();
          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_5_6":
        try {

          if (value != "") {

            set_5(_5.charAt(0)+_5.charAt(1)+_5.charAt(2)+_5.charAt(3)+_5.charAt(4)+value+_5.charAt(6)+_5.charAt(7)+_5.charAt(8)+_5.charAt(9)+_5.charAt(10))
            if (_5_7ref.current.value == "") {
              _5_7ref.current.focus();
            } else if (res5_10 == false) {
              _5_8ref.current.focus();
            }

          }
          else {

            if (_5_7ref.current.value == "" || res5_10 == false) {
              if (res5_8) {
                _5_5ref.current.focus();
              } else {
                _5_4ref.current.focus();
              }

            }

          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_5_7":
        try {

          if (value != "") {

            set_5(_5.charAt(0)+_5.charAt(1)+_5.charAt(2)+_5.charAt(3)+_5.charAt(4)+_5.charAt(5)+value+_5.charAt(7)+_5.charAt(8)+_5.charAt(9)+_5.charAt(10))
            set_10(_10.charAt(0)+_10.charAt(1)+_10.charAt(2)+_10.charAt(3)+_10.charAt(4)+_10.charAt(5)+_10.charAt(6)+value+_10.charAt(8))
           
            if (_10_6ref.current.value != "" && _10_7ref.current.value == "") {
              if (_10_7ref.current.value == "")
                _10_7ref.current.focus();
            } else {
              if (_5_8ref.current.value == "")
                _5_8ref.current.focus();
            }

          }
          else {
            if (_10_6ref.current.value != "" && _10_7ref.current.value == "") {
              if (_10_7ref.current.value == "")
                _10_6ref.current.focus();
            } else {
              if (_5_8ref.current.value == "")
                _5_6ref.current.focus();
            }

          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_5_8":
        try {
          set_5(_5.charAt(0)+_5.charAt(1)+_5.charAt(2)+_5.charAt(3)+_5.charAt(4)+_5.charAt(5)+_5.charAt(6)+value+_5.charAt(8)+_5.charAt(9)+_5.charAt(10))
           
          if (value != "") {

            if (_5_9ref.current.value == "") {
              _5_9ref.current.focus();
            } else if (res5_15 == false) {
              _5_10ref.current.focus();
            }

          }
          else {

            if (_5_9ref.current.value == "" || res5_15 == false) {
              if (res5_10 == false) {
                _5_6ref.current.focus();
              } else {
                _5_7ref.current.focus();
              }

            }

          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_5_9":
        try {

          if (value != "") {

            set_5(_5.charAt(0)+_5.charAt(1)+_5.charAt(2)+_5.charAt(3)+_5.charAt(4)+_5.charAt(5)+_5.charAt(6)+_5.charAt(7)+value+_5.charAt(9)+_5.charAt(10))
           
            set_15(value+_15.charAt(1)+_15.charAt(2)+_15.charAt(3)+_15.charAt(4)+_15.charAt(5)+_15.charAt(6)+_15.charAt(7)+_15.charAt(8)+_15.charAt(9))
           
            if (_5_8ref.current.value != "" && _5_10ref.current.value == "") {
              if (_5_10ref.current.value == "")
                _5_10ref.current.focus();
            }
            else {
              if (_15_1ref.current.value == "")
                _15_1ref.current.focus();
            }

          }
          else {

            if (_5_10ref.current.value == "")
              _5_8ref.current.focus();
          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_5_10":
        try {

          if (value != "") {

            set_5(_5.charAt(0)+_5.charAt(1)+_5.charAt(2)+_5.charAt(3)+_5.charAt(4)+_5.charAt(5)+_5.charAt(6)+_5.charAt(7)+_5.charAt(8)+value+_5.charAt(10))
           
            if (_5_11ref.current.value == "")
              _5_11ref.current.focus();
          }
          else {

            if (_5_11ref.current.value == "" || res5_16 == false) {
              if (res5_15 == false) {
                _5_8ref.current.focus();
              } else { _5_9ref.current.focus(); }
            }

          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_5_11":
        try {

          if (value != "") {

            set_5(_5.charAt(0)+_5.charAt(1)+_5.charAt(2)+_5.charAt(3)+_5.charAt(4)+_5.charAt(5)+_5.charAt(6)+_5.charAt(7)+_5.charAt(8)+_5.charAt(9)+value)
            set_16(_16.charAt(0)+_16.charAt(1)+_16.charAt(2)+_16.charAt(3)+_16.charAt(4)+_16.charAt(5)+_16.charAt(6)+value)

          }
          else {


            _5_10ref.current.focus();
          }
        } catch (error) {
          console.log(error);
        }
        break;
      //------Crossword 6------
      case "_6_1":
        try {

          if (value != "") {

            set_6(value+_6.charAt(1)+_6.charAt(2)+_6.charAt(3)+_6.charAt(4)+_6.charAt(5)+_6.charAt(6)+_6.charAt(7)+_6.charAt(8)+_6.charAt(9))
           
            if (_6_2ref.current.value == "")
              _6_2ref.current.focus();
          }
          else {
          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_6_2":
        try {

          if (value != "") {

            set_6(_6.charAt(0)+value+_6.charAt(2)+_6.charAt(3)+_6.charAt(4)+_6.charAt(5)+_6.charAt(6)+_6.charAt(7)+_6.charAt(8)+_6.charAt(9))
           
            if (_3_4ref.current.value == "") {
              _3_4ref.current.focus();
            } else if (res3_6 == false) {
              _6_3ref.current.focus();
            }

          }
          else {

            if (_3_4ref.current.value == "" || res3_6 == false)
              _6_1ref.current.focus();
          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_6_3":
        try {

          if (value != "") {

            set_6(_6.charAt(0)+_6.charAt(1)+_6.charAt(2)+value+_6.charAt(4)+_6.charAt(5)+_6.charAt(6)+_6.charAt(7)+_6.charAt(8)+_6.charAt(9))
           
            if (_6_4ref.current.value == "")
              _6_4ref.current.focus();
          }
          else {

            if (_6_4ref.current.value == "") {
              if (res3_6 == false) {
                _6_2ref.current.focus();
              } else {
                _3_4ref.current.focus();
              }

            }

          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_6_4":
        try {

          if (value != "") {

            set_6(_6.charAt(0)+_6.charAt(1)+_6.charAt(2)+_6.charAt(3)+value+_6.charAt(5)+_6.charAt(6)+_6.charAt(7)+_6.charAt(8)+_6.charAt(9))
           
            if (_6_5ref.current.value == "")
              _6_5ref.current.focus();
          }
          else {

            if (_6_5ref.current.value == "")
              _6_3ref.current.focus();
          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_6_5":
        try {

          if (value != "") {

            set_6(_6.charAt(0)+_6.charAt(1)+_6.charAt(2)+_6.charAt(3)+_6.charAt(4)+value+_6.charAt(6)+_6.charAt(7)+_6.charAt(8)+_6.charAt(9))
           
            if (_5_2ref.current.value == "") {
              _5_2ref.current.focus();
            } else if (res5_2 == false) {
              _6_6ref.current.focus();
            }

          }
          else {

            if (_5_2ref.current.value == "" || res5_2 == false)
              _6_4ref.current.focus();
          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_6_6":
        try {

          if (value != "") {

            set_6(_6.charAt(0)+_6.charAt(1)+_6.charAt(2)+_6.charAt(3)+_6.charAt(4)+_6.charAt(5)+_6.charAt(6)+value+_6.charAt(8)+_6.charAt(9))
           
            if (_2_5ref.current.value == "") {
              _2_5ref.current.focus();
            } else if (res2_6 == false) {
              _6_7ref.current.focus();
            }

          }
          else {

            if (_2_5ref.current.value == "" || res2_6 == false) {
              if (res5_2 == false) {
                _6_5ref.current.focus();
              } else {
                _5_2ref.current.focus();
              }

            }

          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_6_7":
        try {

          if (value != "") {
            set_6(_6.charAt(0)+_6.charAt(1)+_6.charAt(2)+_6.charAt(3)+_6.charAt(4)+_6.charAt(5)+_6.charAt(6)+_6.charAt(7)+_6.charAt(8)+value)
   

          }
          else {

            if (res2_6 == false) {
              _6_6ref.current.focus();
            } else {
              _2_5ref.current.focus();
            }

          }
        } catch (error) {
          console.log(error);
        }
        break;
      //------Crossword 7------
      case "_7_1":
        try {

          if (value != "") {

            set_7(value+_7.charAt(1)+_7.charAt(2)+_7.charAt(3)+_7.charAt(4))
   
            if (_7_2ref.current.value == "")
              _7_2ref.current.focus();
          }
          else {
          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_7_2":
        try {

          if (value != "") {

            set_7(_7.charAt(0)+value+_7.charAt(2)+_7.charAt(3)+_7.charAt(4))
            if (_7_3ref.current.value == "")
              _7_3ref.current.focus();
          }
          else {

            if (_7_3ref.current.value == "")
              _7_1ref.current.focus();

          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_7_3":
        try {

          if (value != "") {

            set_7(_7.charAt(0)+_7.charAt(1)+value+_7.charAt(3)+_7.charAt(4))
            if (_7_4ref.current.value == "")
              _7_4ref.current.focus();
          }
          else {

            if (_7_4ref.current.value == "")
              _7_2ref.current.focus();

          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_7_4":
        try {

          if (value != "") {

            set_7(_7.charAt(0)+_7.charAt(1)+_7.charAt(2)+value+_7.charAt(4))
            if (_7_5ref.current.value == "")
              _7_5ref.current.focus();
          }
          else {

            if (_7_5ref.current.value == "" || res7_10 == false)
              _7_3ref.current.focus();

          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_7_5":
        try {

          if (value != "") {

            set_7(_7.charAt(0)+_7.charAt(1)+_7.charAt(2)+_7.charAt(3)+value)
            set_10(value+_10.charAt(1)+_10.charAt(2)+_10.charAt(3)+_10.charAt(4)+_10.charAt(5)+_10.charAt(6)+_10.charAt(7)+_10.charAt(8))
            if (_7_4ref.current.value == "") {
              if (_10_1ref.current.value == "")
                _10_1ref.current.focus();
            }
          }
          else {




            _7_4ref.current.focus();

          }
        } catch (error) {
          console.log(error);
        }
        break;

      //------Crossword 8------
      case "_8_1":
        try {

          if (value != "") {

            set_8(value+_8.charAt(1)+_8.charAt(2)+_8.charAt(3)+_8.charAt(4)+_8.charAt(5)+_8.charAt(6))
            if (_8_2ref.current.value == "")
              _8_2ref.current.focus();
          }
          else {
          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_8_2":
        try {

          if (value != "") {

            set_8(_8.charAt(0)+value+_8.charAt(2)+_8.charAt(3)+_8.charAt(4)+_8.charAt(5)+_8.charAt(6))
            if (_5_5ref.current.value == "") {
              _5_5ref.current.focus();
            } else if (res5_8 == false) {
              _8_3ref.current.focus();
            }

          }
          else {

            if (_5_5ref.current.value == "" || res5_8 == false)
              _8_1ref.current.focus();

          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_8_3":
        try {

          if (value != "") {

            set_8(_8.charAt(0)+_8.charAt(1)+_8.charAt(2)+value+_8.charAt(4)+_8.charAt(5)+_8.charAt(6))
            if (_2_8ref.current.value == "") {
              _2_8ref.current.focus();
            } else if (res2_8 == false) {
              _8_4ref.current.focus();
            }

          }
          else {

            if (_2_8ref.current.value == "" || res2_8 == false) {
              if (res5_8 == false) {
                _8_2ref.current.focus();
              } else {
                _5_5ref.current.focus();
              }
            }


          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_8_4":
        try {

          if (value != "") {

            set_8(_8.charAt(0)+_8.charAt(1)+_8.charAt(2)+_8.charAt(3)+_8.charAt(4)+value+_8.charAt(6))
            if (_8_5ref.current.value == "")
              _8_5ref.current.focus();
          }
          else {

            if (_8_5ref.current.value == "") {
              if (res2_8 == false) {
                _8_3ref.current.focus();
              } else {
                _2_8ref.current.focus();
              }
            }


          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_8_5":
        try {

          if (value != "") {

            set_8(_8.charAt(0)+_8.charAt(1)+_8.charAt(2)+_8.charAt(3)+_8.charAt(4)+_8.charAt(5)+value)

          }
          else {


            _8_4ref.current.focus();

          }
        } catch (error) {
          console.log(error);
        }
        break;
      //------Crossword 9------
      case "_9_1":
        try {

          if (value != "") {

            set_9(value+_9.charAt(1)+_9.charAt(2)+_9.charAt(3)+_9.charAt(4))
            if (_9_2ref.current.value == "")
              _9_2ref.current.focus();
          }
          else {
          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_9_2":
        try {

          if (value != "") {

            set_9(_9.charAt(0)+value+_9.charAt(2)+_9.charAt(3)+_9.charAt(4))
            if (_9_3ref.current.value == "")
              _9_3ref.current.focus();
          }
          else {

            if (_9_3ref.current.value == "")
              _9_1ref.current.focus();

          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_9_3":
        try {

          if (value != "") {

            set_9(_9.charAt(0)+_9.charAt(1)+value+_9.charAt(3)+_9.charAt(4))
            if (_9_4ref.current.value == "")
              _9_4ref.current.focus();
          }
          else {

            if (_9_4ref.current.value == "")
              _9_2ref.current.focus();

          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_9_4":
        try {

          if (value != "") {

            set_9(_9.charAt(0)+_9.charAt(1)+_9.charAt(2)+value+_9.charAt(4))
            if (_15_9ref.current.value == "")
              _15_9ref.current.focus();
          }
          else {

            if (_15_9ref.current.value == "" || res15_9 == false)
              _9_3ref.current.focus();

          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_9_5":
        try {

          if (value != "") {
            set_9(_9.charAt(0)+_9.charAt(1)+_9.charAt(2)+_9.charAt(3)+value)
          }
          else {


            _9_4ref.current.focus();
          }
        } catch (error) {
          console.log(error);
        }
        break;

      //------Crossword 10------
      case "_10_1":
        try {

          if (value != "") {

            set_10(_10.charAt(0)+value+_10.charAt(2)+_10.charAt(3)+_10.charAt(4)+_10.charAt(5)+_10.charAt(6)+_10.charAt(7)+_10.charAt(8))
           
            if (_10_2ref.current.value == "")
              _10_2ref.current.focus();
          }
          else {

            _7_5ref.current.focus();

          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_10_2":
        try {

          if (value != "") {

            set_10(_10.charAt(0)+_10.charAt(1)+value+_10.charAt(3)+_10.charAt(4)+_10.charAt(5)+_10.charAt(6)+_10.charAt(7)+_10.charAt(8))
           
            if (_10_3ref.current.value == "")
              _10_3ref.current.focus();
          }
          else {

            if (_10_3ref.current.value == "")
              _10_1ref.current.focus();
          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_10_3":
        try {

          if (value != "") {

            set_10(_10.charAt(0)+_10.charAt(1)+_10.charAt(2)+value+_10.charAt(4)+_10.charAt(5)+_10.charAt(6)+_10.charAt(7)+_10.charAt(8))
           
            if (_10_4ref.current.value == "")
              _10_4ref.current.focus();
          }
          else {

            if (_10_4ref.current.value == "")
              _10_2ref.current.focus();
          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_10_4":
        try {

          if (value != "") {

            set_10(_10.charAt(0)+_10.charAt(1)+_10.charAt(2)+_10.charAt(3)+value+_10.charAt(5)+_10.charAt(6)+_10.charAt(7)+_10.charAt(8))
           
            if (_10_5ref.current.value == "")
              _10_5ref.current.focus();
          }
          else {

            if (_10_5ref.current.value == "")
              _10_3ref.current.focus();
          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_10_5":
        try {

          if (value != "") {

            set_10(_10.charAt(0)+_10.charAt(1)+_10.charAt(2)+_10.charAt(3)+_10.charAt(4)+value+_10.charAt(6)+_10.charAt(7)+_10.charAt(8))
           
            if (_10_6ref.current.value == "")
              _10_6ref.current.focus();
          }
          else {

            if (_10_6ref.current.value == "")
              _10_4ref.current.focus();
          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_10_6":
        try {

          if (value != "") {

            set_10(_10.charAt(0)+_10.charAt(1)+_10.charAt(2)+_10.charAt(3)+_10.charAt(4)+_10.charAt(5)+value+_10.charAt(7)+_10.charAt(8))
           
            if (_5_7ref.current.value == "") {
              _5_7ref.current.focus();
            } else if (res5_10 == false) {
              _10_7ref.current.focus();
            }

          }
          else {

            if (_5_7ref.current.value == "" || res5_10 == false)
              _10_5ref.current.focus();
          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_10_7":
        try {

          if (value != "") {

            set_10(_10.charAt(0)+_10.charAt(1)+_10.charAt(2)+_10.charAt(3)+_10.charAt(4)+_10.charAt(5)+_10.charAt(6)+_10.charAt(7)+value)
           
          }
          else {

            if (res5_10 == false) {
              _10_6ref.current.focus();
            } else {
              _5_7ref.current.focus();
            }

          }
        } catch (error) {
          console.log(error);
        }
        break;
      //------Crossword 11------
      case "_11_1":
        try {

          if (value != "") {

            set_11(value+_11.charAt(1)+_11.charAt(2))
           
            if (_11_2ref.current.value == "")
              _11_2ref.current.focus();
          }
          else {
          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_11_2":
        try {

          if (value != "") {

            set_11(_11.charAt(0)+value+_11.charAt(2))
            if (_15_7ref.current.value == "")
              _15_7ref.current.focus();

          }
          else {

            if (_15_7ref.current.value == "" || res15_11 == false)
              _11_1ref.current.focus();
          }
        } catch (error) {
          console.log(error);
        }
        break;
      //------Crossword 12------
      case "_12_1":
        try {

          if (value != "") {

            set_12(value+_12.charAt(1)+_12.charAt(2))
            if (_12_2ref.current.value == "")
              _12_2ref.current.focus();
          }
          else {
          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_12_2":
        try {

          if (value != "") {

            set_12(_12.charAt(0)+value+_12.charAt(2))
            if (_16_2ref.current.value == "")
              _16_2ref.current.focus();
          }
          else {

            if (_16_2ref.current.value == "" || res16_12 == false)
              _12_1ref.current.focus();

          }
        } catch (error) {
          console.log(error);
        }
        break;
      //------Crossword 13------
      case "_13_1":
        try {

          if (value != "") {

            set_13(value+_13.charAt(1)+_13.charAt(2))
            if (_14_1ref.current.value == "") {
              _14_1ref.current.focus();
            } else if (res14_13 == false) {
              _13_2ref.current.focus();
            }

          }
          else {
          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_13_2":
        try {

          if (value != "") {

            set_13(_13.charAt(0)+_13.charAt(1)+value)

          }
          else {

            if (res14_13 == false) {
              _13_1ref.current.focus();
            } else {
              _14_1ref.current.focus();
            }


          }
        } catch (error) {
          console.log(error);
        }
        break;
      //------Crossword 14------
      case "_14_1":
        try {

          if (value != "") {
            set_14(value+_14.charAt(1)+_14.charAt(2)+_14.charAt(3)+_14.charAt(4))
            set_13(_13.charAt(0)+value+_13.charAt(2))
            if (_13_1ref.current.value != "" && _13_2ref.current.value == "") {
              if (_13_2ref.current.value == "")
                _13_2ref.current.focus();
            }
            else {
              if (_14_2ref.current.value == "")
                _14_2ref.current.focus();
            }

          }
          else {
            if (_13_2ref.current.value == "" && _13_1ref.current.value != "") {
              _13_1ref.current.focus();
            }


          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_14_2":
        try {

          if (value != "") {

            set_14(_14.charAt(0)+value+_14.charAt(2)+_14.charAt(3)+_14.charAt(4))
            if (_16_5ref.current.value == "") {
              _16_5ref.current.focus();
            } else if (res16_14 == false) {
              _14_3ref.current.focus();
            }

          }
          else {

            if (_16_5ref.current.value == "" || res16_14 == false)
              _14_1ref.current.focus();
          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_14_3":
        try {

          if (value != "") {

            set_14(_14.charAt(0)+_14.charAt(1)+_14.charAt(2)+value+_14.charAt(4))
            if (_14_4ref.current.value == "")
              _14_4ref.current.focus();
          }
          else {

            if (_14_4ref.current.value == "") {
              if (res16_14 == false) {
                _14_2ref.current.focus();
              } else {
                _16_5ref.current.focus();
              }
            }

          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_14_4":
        try {

          if (value != "") {

            set_14(_14.charAt(0)+_14.charAt(1)+_14.charAt(2)+_14.charAt(3)+value)

          }
          else {


            _14_3ref.current.focus();
          }
        } catch (error) {
          console.log(error);
        }
        break;
      //------Crossword 15------
      case "_15_1":
        try {

          if (value != "") {

            set_15(_15.charAt(0)+value+_15.charAt(2)+_15.charAt(3)+_15.charAt(4)+_15.charAt(5)+_15.charAt(6)+_15.charAt(7)+_15.charAt(8)+_15.charAt(9))
           
            if (_15_2ref.current.value == "") {
            
              _15_2ref.current.focus();
            }

            
          }
          else {

            _5_9ref.current.focus();

          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_15_2":
        try {

          if (value != "") {

            set_15(_15.charAt(0)+_15.charAt(1)+value+_15.charAt(3)+_15.charAt(4)+_15.charAt(5)+_15.charAt(6)+_15.charAt(7)+_15.charAt(8)+_15.charAt(9))
       
            if (_15_3ref.current.value == "")
              _15_3ref.current.focus();
          }
          else {

            if (_15_3ref.current.value == "")
              _15_1ref.current.focus();
          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_15_3":
        try {

          if (value != "") {

            set_15(_15.charAt(0)+_15.charAt(1)+_15.charAt(2)+value+_15.charAt(4)+_15.charAt(5)+_15.charAt(6)+_15.charAt(7)+_15.charAt(8)+_15.charAt(9))
       
            if (_15_4ref.current.value == "")
              _15_4ref.current.focus();
          }
          else {

            if (_15_4ref.current.value == "")
              _15_2ref.current.focus();
          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_15_4":
        try {

          if (value != "") {

            set_15(_15.charAt(0)+_15.charAt(1)+_15.charAt(2)+_15.charAt(3)+value+_15.charAt(5)+_15.charAt(6)+_15.charAt(7)+_15.charAt(8)+_15.charAt(9))
       
            if (_15_5ref.current.value == "")
              _15_5ref.current.focus();
          }
          else {

            if (_15_5ref.current.value == "")
              _15_3ref.current.focus();
          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_15_5":
        try {

          if (value != "") {

            set_15(_15.charAt(0)+_15.charAt(1)+_15.charAt(2)+_15.charAt(3)+_15.charAt(4)+value+_15.charAt(6)+_15.charAt(7)+_15.charAt(8)+_15.charAt(9))
       
            if (_15_6ref.current.value == "")
              _15_6ref.current.focus();
          }
          else {

            if (_15_6ref.current.value == "")
              _15_4ref.current.focus();
          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_15_6":
        try {

          if (value != "") {
            set_15(_15.charAt(0)+_15.charAt(1)+_15.charAt(2)+_15.charAt(3)+_15.charAt(4)+_15.charAt(5)+value+_15.charAt(7)+_15.charAt(8)+_15.charAt(9))
       
            if (_15_7ref.current.value == "") {
              _15_7ref.current.focus();
            } else if (res15_11 == false) {
              _15_8ref.current.focus();
            }



          }
          else {

            if (_15_7ref.current.value == "" || res15_11 == false)
              _15_5ref.current.focus();
          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_15_7":
        try {

          if (value != "") {
            set_15(_15.charAt(0)+_15.charAt(1)+_15.charAt(2)+_15.charAt(3)+_15.charAt(4)+_15.charAt(5)+_15.charAt(6)+value+_15.charAt(8)+_15.charAt(9))
       
            set_11(_11.charAt(0)+_11.charAt(1)+value)
            if (_15_6ref.current.value != "" && _15_8ref.current.value == "") {
              if (_15_8ref.current.value == "")
                _15_8ref.current.focus();
            }
            else {
            }

          }
          else {

            if (_15_8ref.current.value == "")
              _15_6ref.current.focus();
          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_15_8":
        try {

          if (value != "") {

            set_15(_15.charAt(0)+_15.charAt(1)+_15.charAt(2)+_15.charAt(3)+_15.charAt(4)+_15.charAt(5)+_15.charAt(6)+_15.charAt(7)+value+_15.charAt(9))
       
            if (_15_9ref.current.value == "")
              _15_9ref.current.focus();
          }
          else {

            if (_15_9ref.current.value == "" || res15_9 == false) {
              if (res15_11 == false) {
                _15_6ref.current.focus();
              } else {
                _15_7ref.current.focus();
              }
            }

          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_15_9":
        try {

          if (value != "") {
            set_15(_15.charAt(0)+_15.charAt(1)+_15.charAt(2)+_15.charAt(3)+_15.charAt(4)+_15.charAt(5)+_15.charAt(6)+_15.charAt(7)+_15.charAt(8)+value)
       
            set_9(_9.charAt(0)+_9.charAt(1)+_9.charAt(2)+_9.charAt(3)+value)

          }
          else {


            _15_8ref.current.focus();
          }
        } catch (error) {
          console.log(error);
        }
        break;
      //------Crossword 16------
      case "_16_1":
        try {

          if (value != "") {

            set_16(value+_16.charAt(1)+_16.charAt(2)+_16.charAt(3)+_16.charAt(4)+_16.charAt(5)+_16.charAt(6)+_16.charAt(7))
       
            if (_16_2ref.current.value == "") {
              _16_2ref.current.focus();
            } else if (res16_12 == false) {
              _16_3ref.current.focus();
            }

          }
          else {
          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_16_2":
        try {

          if (value != "") {
            set_16(_16.charAt(0)+value+_16.charAt(2)+_16.charAt(3)+_16.charAt(4)+_16.charAt(5)+_16.charAt(6)+_16.charAt(7))
       
            set_12(_12.charAt(0)+_12.charAt(1)+value)
            if (_16_1ref.current.value != "" && _16_3ref.current.value == "") {
              if (_16_3ref.current.value == "")
                _16_3ref.current.focus();
            }
            else {
            }

          }
          else {

            if (_16_3ref.current.value == "")
              _16_1ref.current.focus();

          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_16_3":
        try {

          if (value != "") {

            set_16(_16.charAt(0)+_16.charAt(1)+value+_16.charAt(3)+_16.charAt(4)+_16.charAt(5)+_16.charAt(6)+_16.charAt(7))
       
            if (_16_4ref.current.value == "")
              _16_4ref.current.focus();
          }
          else {

            if (_16_4ref.current.value == "") {
              if (res16_12 == false) {
                _16_1ref.current.focus();
              } else {
                _16_2ref.current.focus();
              }
            }


          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_16_4":
        try {

          if (value != "") {

            set_16(_16.charAt(0)+_16.charAt(1)+_16.charAt(2)+value+_16.charAt(4)+_16.charAt(5)+_16.charAt(6)+_16.charAt(7))
       
            if (_16_5ref.current.value == "") {
              _16_5ref.current.focus();
            } else if (res16_14 == false) {
              _16_6ref.current.focus();
            }

          }
          else {

            if (_16_5ref.current.value == "" || res16_14 == false)
              _16_3ref.current.focus();

          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_16_5":
        try {

          if (value != "") {
            set_16(_16.charAt(0)+_16.charAt(1)+_16.charAt(2)+_16.charAt(3)+value+_16.charAt(5)+_16.charAt(6)+_16.charAt(7))
       
            set_14(_14.charAt(0)+_14.charAt(1)+value+_14.charAt(3)+_14.charAt(4))
            if (_16_4ref.current.value != "" && _16_6ref.current.value == "") {
              if (_16_6ref.current.value == "")
                _16_6ref.current.focus();
            }
            else {
              if (_16_3ref.current.value == "")
                _14_3ref.current.focus();
            }
          }
          else {

            if (_16_6ref.current.value == "")
              _16_4ref.current.focus();

          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_16_6":
        try {

          if (value != "") {

            set_16(_16.charAt(0)+_16.charAt(1)+_16.charAt(2)+_16.charAt(3)+_16.charAt(4)+value+_16.charAt(6)+_16.charAt(7))
       
            if (_16_7ref.current.value == "")
              _16_7ref.current.focus();
          }
          else {

            if (_16_7ref.current.value == "") {
              if (res16_14 == false) {
                _16_4ref.current.focus();
              } else {
                _16_5ref.current.focus();
              }

            }


          }
        } catch (error) {
          console.log(error);
        }
        break;
      case "_16_7":
        try {

          if (value != "") {

            set_16(_16.charAt(0)+_16.charAt(1)+_16.charAt(2)+_16.charAt(3)+_16.charAt(4)+_16.charAt(5)+value+_16.charAt(7))
       
            if (_5_11ref.current.value == "")
              _5_11ref.current.focus();

          }
          else {

            if (_5_11ref.current.value == "")
              _16_6ref.current.focus();

          }
        } catch (error) {
          console.log(error);
        }
        break;

    }


  }
  
  //-------------Viewas-----------------
  return (
    <View style={styles.cont}>
    <ScrollView contentContainerStyle={{height: Platform.OS === 'web' ? 800 : 1100,}}>
    <ScrollView contentContainerStyle={styles.contain} horizontal={true} >
      
    <View style={{marginTop:40}}>
    
      {/*---------- 1 ----------*/}
      <View style={{ flexDirection: 'row', position: 'absolute', left: -180}}>
      <View
        
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
           
        ]}
      >
        <Text style={[styles.Crossnum]}>1 </Text>

        <TextInput style={styles.TextInput} editable={res1} ref={_1_1ref}  onChangeText={ (e)=> {
        CheckText("_1_1",e)
        
        }} maxLength={1}
        />
      </View>

      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
          
        ]}
       
      >

        <TextInput ref={_1_2ref} style={styles.TextInput} editable={res1} onChangeText={ (e)=> {
        CheckText("_1_2",e)
        
        }} maxLength={1}
        />
       
        
      </View>
      
      
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_1_3ref} style={styles.TextInput} editable={res1} onChangeText={ (e)=> {
        CheckText("_1_3",e)
        
        }} maxLength={1}
        />
      </View>

      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >

        <TextInput ref={_1_4ref} style={styles.TextInput} editable={res1} onChangeText={ (e)=> {
        CheckText("_1_4",e)
        
        }} maxLength={1}
        /> 

      </View>

      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <Text style={[styles.Crossnum]}>2</Text>
        <TextInput ref={_1_5ref} style={styles.TextInput} editable={res1_2} onChangeText={ (e)=> {
        CheckText("_1_5",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_1_6ref} style={styles.TextInput} editable={res1} onChangeText={ (e)=> {
        CheckText("_1_6",e)
        
        }} maxLength={1}
        />

      </View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_1_7ref} style={styles.TextInput} editable={res1} onChangeText={ (e)=> {
        CheckText("_1_7",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_1_8ref} style={styles.TextInput} editable={res1} onChangeText={ (e)=> {
        CheckText("_1_8",e)
        
        }} maxLength={1}
        />

      </View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_1_9ref} style={styles.TextInput} editable={res1} onChangeText={ (e)=> {
        CheckText("_1_9",e)
        
        }} maxLength={1}
        />
      </View>
      
      </View>
      {/*---------- 2 ----------*/}
      <View style={{ flexDirection: 'column', position: 'absolute',top: 40, left:-20}}>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_2_1ref} style={styles.TextInput} editable={res2} onChangeText={ (e)=> {
        CheckText("_2_1",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
         <TextInput ref={_2_2ref} style={styles.TextInput} editable={res2_4} onChangeText={ (e)=> {
        CheckText("_2_2",e)
        
        }} maxLength={1}
        />
        </View>

      <View
        style={[
          styles.box,
          {

            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
         <TextInput ref={_2_3ref} style={styles.TextInput} editable={res2} onChangeText={ (e)=> {
        CheckText("_2_3",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {

            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
         <TextInput ref={_2_4ref} style={styles.TextInput} editable={res2} onChangeText={ (e)=> {
        CheckText("_2_4",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {

            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_2_5ref} style={styles.TextInput} editable={res2_6} onChangeText={ (e)=> {
        CheckText("_2_5",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {

            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_2_6ref} style={styles.TextInput} editable={res2} onChangeText={ (e)=> {
        CheckText("_2_6",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {

            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_2_7ref} style={styles.TextInput} editable={res2} onChangeText={ (e)=> {
        CheckText("_2_7",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_2_8ref} style={styles.TextInput} editable={res2_8} onChangeText={ (e)=> {
        CheckText("_2_8",e)
        
        }} maxLength={1}
        />
      </View>
      </View>
      {/*---------- 3 ----------*/}
      <View style={{ flexDirection: 'column', position: 'absolute', top: 80, left: -260}}>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <Text style={[styles.Crossnum]}>3</Text>
        <TextInput ref={_3_1ref} style={styles.TextInput} editable={res3}  onChangeText={ (e)=> {
        CheckText("_3_1",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_3_2ref} style={styles.TextInput} editable={res3} onChangeText={ (e)=> {
        CheckText("_3_2",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_3_3ref} style={styles.TextInput} editable={res3} onChangeText={ (e)=> {
        CheckText("_3_3",e)
        
        }} maxLength={1}
        />
        </View>
      </View>
      <View style={{ flexDirection: 'row', position: 'absolute', top:240, left: -260}}>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_3_5ref} style={styles.TextInput} editable={res3} onChangeText={ (e)=> {
        CheckText("_3_5",e)
        
        }} maxLength={1}
        />
      </View>
      </View>
      {/*---------- 4 ----------*/}
      <View style={{ flexDirection: 'row', position: 'absolute', top:80, left: -140}}>
      <View
        style={[
          styles.box,
          {
  
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
      <Text style={[styles.Crossnum]}>4</Text>
      <TextInput ref={_4_1ref} style={styles.TextInput} editable={res4} onChangeText={ (e)=> {
        CheckText("_4_1",e)
        
        }} maxLength={1}/>
      </View>
      <View
        style={[
          styles.box,
          {

            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
         <TextInput ref={_4_2ref} style={styles.TextInput} editable={res4} onChangeText={ (e)=> {
        CheckText("_4_2",e)
        
        }} maxLength={1}/>
      </View>
      <View
        style={[
          styles.box,
          {

            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
         <TextInput ref={_4_3ref} style={styles.TextInput} editable={res4} onChangeText={ (e)=> {
        CheckText("_4_3",e)
        
        }} maxLength={1}/>
      </View>
      </View>
      <View style={{ flexDirection: 'row', position: 'absolute', top:80, left:20,}}>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
         <TextInput ref={_4_4ref} style={styles.TextInput} editable={res4} onChangeText={ (e)=> {
        CheckText("_4_4",e)
        
        }} maxLength={1}/>
      </View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
         <TextInput ref={_4_5ref} style={styles.TextInput} editable={res4} onChangeText={ (e)=> {
        CheckText("_4_5",e)
        
        }} maxLength={1}/>
      </View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
         <TextInput ref={_4_6ref} style={styles.TextInput} editable={res4} onChangeText={ (e)=> {
        CheckText("_4_6",e)
        
        }} maxLength={1}/>
      </View>
      </View>
      
      {/*---------- 5 ----------*/}
      <View style={{ flexDirection: 'column', position: 'absolute',top:160, left:-100}}>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <Text style={[styles.Crossnum]}>5</Text>
        <TextInput ref={_5_1ref} style={styles.TextInput} editable={res5} onChangeText={ (e)=> {
        CheckText("_5_1",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_5_2ref} style={styles.TextInput} editable={res5_2} onChangeText={ (e)=> {
        CheckText("_5_2",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_5_3ref} style={styles.TextInput} editable={res5}  onChangeText={ (e)=> {
        CheckText("_5_3",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_5_4ref} style={styles.TextInput} editable={res5}  onChangeText={ (e)=> {
        CheckText("_5_4",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_5_5ref} style={styles.TextInput} editable={res5_8}  onChangeText={ (e)=> {
        CheckText("_5_5",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_5_6ref} style={styles.TextInput} editable={res5} onChangeText={ (e)=> {
        CheckText("_5_6",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_5_7ref} style={styles.TextInput} editable={res5_10} onChangeText={ (e)=> {
        CheckText("_5_7",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_5_8ref} style={styles.TextInput} editable={res5} onChangeText={ (e)=> {
        CheckText("_5_8",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <Text style={[styles.Crossnum]}>15</Text>
        <TextInput ref={_5_9ref} style={styles.TextInput} editable={res5_15}  onChangeText={ (e)=> {
        CheckText("_5_9",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_5_10ref} style={styles.TextInput} editable={res5} onChangeText={ (e)=> {
        CheckText("_5_10",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_5_11ref} style={styles.TextInput} editable={res5_16} onChangeText={ (e)=> {
        CheckText("_5_11",e)
        
        }} maxLength={1}
        />
      </View>
      </View>
      {/*---------- 6 ----------*/}
      <View style={{ flexDirection: 'row', position: 'absolute', top:200 ,left:-340,}}>
      <View
        style={[
          styles.box,
          {

            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <Text style={[styles.Crossnum]}>6</Text>
        <TextInput ref={_6_1ref} style={styles.TextInput} editable={res6} onChangeText={ (e)=> {
        CheckText("_6_1",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {

            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_6_2ref} style={styles.TextInput} editable={res6} onChangeText={ (e)=> {
        CheckText("_6_2",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {

            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        
        <TextInput ref={_3_4ref} style={styles.TextInput} editable={res3_6} onChangeText={ (e)=> {
        CheckText("_3_4",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {

            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_6_3ref} style={styles.TextInput} editable={res6} onChangeText={ (e)=> {
        CheckText("_6_3",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {

            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_6_4ref} style={styles.TextInput} editable={res6} onChangeText={ (e)=> {
        CheckText("_6_4",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_6_5ref} style={styles.TextInput} editable={res6} onChangeText={ (e)=> {
        CheckText("_6_5",e)
        
        }} maxLength={1}
        />
      </View>
      </View>
      <View style={{ flexDirection: 'row', position: 'absolute', top:200 ,left:-60,}}>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_6_6ref} style={styles.TextInput} editable={res6} onChangeText={ (e)=> {
        CheckText("_6_6",e)
        
        }} maxLength={1}
        />
        </View>
      </View>
      <View style={{ flexDirection: 'row', position: 'absolute', top:200 ,left:20,}}>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_6_7ref} style={styles.TextInput} editable={res6} onChangeText={ (e)=> {
        CheckText("_6_7",e)
        
        }} maxLength={1}
        />
      </View>
      </View>
      {/*---------- 7 ----------*/}
      <View style={{ flexDirection: 'column', position: 'absolute',top:240 ,left:-380,}}>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <Text style={[styles.Crossnum]}>7</Text>
        <TextInput ref={_7_1ref} style={styles.TextInput} editable={res7} onChangeText={ (e)=> {
        CheckText("_7_1",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_7_2ref} style={styles.TextInput} editable={res7} onChangeText={ (e)=> {
        CheckText("_7_2",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {

            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_7_3ref} style={styles.TextInput} editable={res7} onChangeText={ (e)=> {
        CheckText("_7_3",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {

            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_7_4ref} style={styles.TextInput} editable={res7} onChangeText={ (e)=> {
        CheckText("_7_4",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <Text style={styles.Crossnum}>10</Text>
        <TextInput ref={_7_5ref} style={styles.TextInput} editable={res7_10} onChangeText={ (e)=> {
        CheckText("_7_5",e)
        
        }} maxLength={1}
        />
      </View>
      </View>
      {/*---------- 8 ----------*/}
      <View style={{ flexDirection: 'row', position: 'absolute' ,top:320 ,left:-180}}>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <Text style={[styles.Crossnum]}>8</Text>
        <TextInput ref={_8_1ref} style={styles.TextInput} editable={res8} onChangeText={ (e)=> {
        CheckText("_8_1",e)
        
        }} maxLength={1}
        />
        </View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_8_2ref} style={styles.TextInput} editable={res8} onChangeText={ (e)=> {
        CheckText("_8_2",e)
        
        }} maxLength={1}
        />
      </View>
      </View>
      <View style={{ flexDirection: 'row', position: 'absolute',top:320 ,left:-60}}>
      <View
        style={[
          styles.box,
          {

            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_8_3ref} style={styles.TextInput} editable={res8} onChangeText={ (e)=> {
        CheckText("_8_3",e)
        
        }} maxLength={1}
        />
      </View>
      </View>
      <View style={{ flexDirection: 'row', position: 'absolute',top:320 ,left:20}}>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_8_4ref} style={styles.TextInput} editable={res8} onChangeText={ (e)=> {
        CheckText("_8_4",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_8_5ref} style={styles.TextInput} editable={res8} onChangeText={ (e)=> {
        CheckText("_8_5",e)
        
        }} maxLength={1}
        />
      </View>
      </View>
      {/*---------- 9 ----------*/}
      <View style={{ flexDirection: 'column', position: 'absolute',top:320 ,left:260}}>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <Text style={[styles.Crossnum]}>9</Text>
        <TextInput ref={_9_1ref} style={styles.TextInput} editable={res9} onChangeText={ (e)=> {
        CheckText("_9_1",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_9_2ref} style={styles.TextInput} editable={res9} onChangeText={ (e)=> {
        CheckText("_9_2",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_9_3ref} style={styles.TextInput} editable={res9} onChangeText={ (e)=> {
        CheckText("_9_3",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_9_4ref} style={styles.TextInput} editable={res9} onChangeText={ (e)=> {
        CheckText("_9_4",e)
        
        }} maxLength={1}
        />
      </View>
      </View>
      {/*---------- 10 ----------*/}
      <View style={{ flexDirection: 'row', position: 'absolute',top:400 ,left:-340}}>
      <View
        style={[
          styles.box,
          {
 
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
      <TextInput ref={_10_1ref} style={styles.TextInput} editable={res10} onChangeText={ (e)=> {
        CheckText("_10_1",e)
        
        }} maxLength={1}
        />
      </View>
        <View
        style={[
          styles.box,
          {

            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_10_2ref} style={styles.TextInput} editable={res10} onChangeText={ (e)=> {
        CheckText("_10_2",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {

            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_10_3ref} style={styles.TextInput} editable={res10} onChangeText={ (e)=> {
        CheckText("_10_3",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {

            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_10_4ref} style={styles.TextInput} editable={res10} onChangeText={ (e)=> {
        CheckText("_10_4",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {

            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_10_5ref} style={styles.TextInput} editable={res10} onChangeText={ (e)=> {
        CheckText("_10_5",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {

            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_10_6ref} style={styles.TextInput} editable={res10} onChangeText={ (e)=> {
        CheckText("_10_6",e)
        
        }} maxLength={1}
        />
      </View>
      </View>
      <View style={{ flexDirection: 'row', position: 'absolute',top:400 ,left:-60}}>
      <View
        style={[
          styles.box,
          {
    
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_10_7ref} style={styles.TextInput} editable={res10} onChangeText={ (e)=> {
        CheckText("_10_7",e)
        
        }} maxLength={1}
        />
      </View>
      </View>
      {/*---------- 11 ----------*/}
      <View style={{ flexDirection: 'column', position: 'absolute' ,top:400 ,left:180}}>
      <View
        style={[
          styles.box,
          {

            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <Text style={styles.Crossnum}>11</Text>
        <TextInput ref={_11_1ref} style={styles.TextInput} editable={res11} onChangeText={ (e)=> {
        CheckText("_11_1",e)
        
        }} maxLength={1}
        />
      </View>

      <View
        style={[
          styles.box,
          {

            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_11_2ref} style={styles.TextInput} editable={res11} onChangeText={ (e)=> {
        CheckText("_11_2",e)
        
        }} maxLength={1}
        />
      </View>
      </View>
      {/*---------- 12 ----------*/}
      <View style={{ flexDirection: 'column', position: 'absolute',top:480 ,left:-340}}>
      <View
        style={[
          styles.box,
          {

            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <Text style={styles.Crossnum}>12</Text>
        <TextInput ref={_12_1ref} style={styles.TextInput} editable={res12} onChangeText={ (e)=> {
        CheckText("_12_1",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_12_2ref} style={styles.TextInput} editable={res12} onChangeText={ (e)=> {
        CheckText("_12_2",e)
        
        }} maxLength={1}
        />
        </View>
      </View>
      {/*---------- 13 ----------*/}
      <View style={{ flexDirection: 'row', position: 'absolute',top:480 ,left:-260}}>
      <View
        style={[
          styles.box,
          {

            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <Text style={styles.Crossnum}>13</Text>
        <TextInput ref={_13_1ref} style={styles.TextInput} editable={res13}  onChangeText={ (e)=> {
        CheckText("_13_1",e)
        
        }} maxLength={1}
        />
      </View>
      </View>
      <View style={{ flexDirection: 'row', position: 'absolute',top:480 ,left:-180}}>
      <View
        style={[
          styles.box,
          {

            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_13_2ref} style={styles.TextInput} editable={res13} onChangeText={ (e)=> {
        CheckText("_13_2",e)
        
        }} maxLength={1}
        />
      </View>
      </View>
      {/*---------- 14 ----------*/}
      <View style={{ flexDirection: 'column', position: 'absolute',top:480 ,left:-220}}>
      <View
        style={[
          styles.box,
          {

            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <Text style={styles.Crossnum}>14</Text>
        <TextInput ref={_14_1ref} style={styles.TextInput} editable={res14_13} onChangeText={ (e)=> {
        CheckText("_14_1",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {

            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_14_2ref} style={styles.TextInput} editable={res14} onChangeText={ (e)=> {
        CheckText("_14_2",e)
        
        }} maxLength={1}
        />
      </View>
      </View>
      <View style={{ flexDirection: 'column', position: 'absolute',top:600 ,left:-220}}>
      <View
        style={[
          styles.box,
          {

            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_14_3ref} style={styles.TextInput} editable={res14} onChangeText={ (e)=> {
        CheckText("_14_3",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {

            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_14_4ref} style={styles.TextInput} editable={res14} onChangeText={ (e)=> {
        CheckText("_14_4",e)
        
        }} maxLength={1}
        />
      </View>
      </View>
      {/*---------- 15 ----------*/}
      <View style={{ flexDirection: 'row', position: 'absolute',top:480 ,left:-60}}>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_15_1ref} style={styles.TextInput} editable={res15} onChangeText={ (e)=> {
        CheckText("_15_1",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_15_2ref} style={styles.TextInput} editable={res15} onChangeText={ (e)=> {
        CheckText("_15_2",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_15_3ref} style={styles.TextInput} editable={res15} onChangeText={ (e)=> {
        CheckText("_15_3",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_15_4ref} style={styles.TextInput} editable={res15} onChangeText={ (e)=> {
        CheckText("_15_4",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_15_5ref} style={styles.TextInput} editable={res15} onChangeText={ (e)=> {
        CheckText("_15_5",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_15_6ref} style={styles.TextInput} editable={res15} onChangeText={ (e)=> {
        CheckText("_15_6",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_15_7ref} style={styles.TextInput} editable={res15_11} onChangeText={ (e)=> {
        CheckText("_15_7",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_15_8ref} style={styles.TextInput} editable={res15} onChangeText={ (e)=> {
        CheckText("_15_8",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_15_9ref} style={styles.TextInput} editable={res15_9} onChangeText={ (e)=> {
        CheckText("_15_9",e)
        
        }} maxLength={1}
        />
      </View>
      </View>
      {/*---------- 16 ----------*/}
      <View style={{ flexDirection: 'row', position: 'absolute',top:560 ,left:-380}}>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <Text style={styles.Crossnum}>16</Text>
        <TextInput ref={_16_1ref} style={styles.TextInput} editable={res16} onChangeText={ (e)=> {
        CheckText("_16_1",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_16_2ref} style={styles.TextInput} editable={res16_12} onChangeText={ (e)=> {
        CheckText("_16_2",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {

            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_16_3ref} style={styles.TextInput} editable={res16} onChangeText={ (e)=> {
        CheckText("_16_3",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {

            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_16_4ref} style={styles.TextInput} editable={res16} onChangeText={ (e)=> {
        CheckText("_16_4",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {

            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_16_5ref} style={styles.TextInput} editable={res16_14} onChangeText={ (e)=> {
        CheckText("_16_5",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {

            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_16_6ref} style={styles.TextInput} editable={res16} onChangeText={ (e)=> {
        CheckText("_16_6",e)
        
        }} maxLength={1}
        />
      </View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderWidth: 1,
          },
        ]}
      >
        <TextInput ref={_16_7ref} style={styles.TextInput} editable={res16} onChangeText={ (e)=> {
        CheckText("_16_7",e)
        
        }} maxLength={1}
        />
      </View>
      </View>
      {/*---------- Text ----------*/}
      <View style={styles.text_klaus}>
        <View>
        <Text style={styles.Text} >Across</Text>
        <Text>1. Piktnaudžiavimas patikėta galia siekiant asmeninės naudos</Text>
        <Text>4. Nedarbo pasekmė</Text>
        <Text>6. Prekės perleidimas už sutartą kainą</Text>
        <Text>8. Gaminio ar jo gamintojo tam tikrų savybių viešinimas siekiant skatinti vartotoją įsigyti gaminį</Text>
        <Text>10. Pajamų dalis, viršijanti vartojimo išlaidas</Text>
        <Text>13. Pridėtinės vertės mokestis</Text>
        <Text>15. Bendrojo kainų lygio kilimas, dėl kurio krinta piniginio vieneto perkamoji galia</Text>
        <Text>16. Prekės ir paslaugos, kurias perkame iš kitų šalių</Text>
        </View>
        <View>
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
    
   </View>
   </ScrollView>
  </ScrollView>
  </View>
  );
};



const styles = StyleSheet.create({
  
  cont:{
    flex: 1,
    backgroundColor: "aliceblue",
    
  },
  contain:{
    width: Platform.OS === 'web' ? 1250 : 800,
    height: Platform.OS === 'web' ? 800 : 1300,
    justifyContent: "center",
  },
  box: {
    width: 40,
    height: 40,
  },
  text_klaus:{
    flexDirection: Platform.OS === 'web' ? "column" : "row", 
    position: 'absolute',
    width:Platform.OS === 'web' ?  300 : 300 ,
    top: Platform.OS === 'web' ? 50:700 ,
    left: Platform.OS === 'web' ? 330: -370,
  },
  boxhorizontal:{
   
    flexDirection: "row",
    
  },
  boxvertical:{
    
    flexDirection: "column",
    
  },
  TextInput: {

    fontSize: Platform.OS === 'web' ? 14: 12,
  },
  Text:{

    fontStyle: "italic",
    fontWeight: "900",
    textDecorationLine: "underline",
  },
  Crossnum:{
    fontSize: Platform.OS === 'web' ? 14: 10,
  },
  
});

export default PositionLayout;
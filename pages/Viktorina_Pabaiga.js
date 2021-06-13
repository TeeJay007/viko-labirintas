import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList, TouchableOpacity, Alert, Platform } from 'react-native';


export default function Pavyzdinis() {
  const image = { uri: "https://scontent.fplq1-1.fna.fbcdn.net/v/t1.6435-9/171013345_3932902256793104_4429939317269897519_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=973b4a&_nc_ohc=B6B7q8CuY78AX-stzxm&_nc_ht=scontent.fplq1-1.fna&oh=73fcc290783d96223fd537445ad40f33&oe=60CAA868"};
  const [_klaus,_setklaus]=useState(1);
  const [_Klausimai_Prev,_setKlausimai_Prev]= useState();
  const [_QnA_Prev,_setQnA_Prev]= useState();
  const [_Klausimai,_setKlausimai] = useState ([
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
    {text:'Kas yra VIKO DRAUDA?',key:'16'},
    {text:' – Laimėjimas –\n Virtualus prizas ir kvietimas studijuoti VIKO EKF 😊',key:'17'},


  ]);
  const [_QnA,_setQnA] = useState ([
    //1
    {text:'Taip',key:'1',question:'1',answer:'correct'},
    {text:'Ne',key:'2',question:'1',answer:'incorrect'},
    //2
    {text:'Transporto priemonių vairuotojų civilinės atsakomybės draudimas',key:'3',question:'2',answer:'incorrect'},
    {text:'Transporto priemonių valdytojų civilinės atsakomybės draudimas',key:'4',question:'2',answer:'correct'},
    {text:'Transporto privalomosios vairuotojų civilinės atsakomybės draudimas',key:'5',question:'2',answer:'incorrect'},
    //3
    {text:'Draudikas',key:'6',question:'3',answer:'incorrect'},
    {text:'Draudėjas',key:'7',question:'3',answer:'correct'},
    {text:'Apdraustasis',key:'8',question:'3',answer:'incorrect'},
    //4
    {text:'Draudėju',key:'9',question:'4',answer:'incorrect'},
    {text:'Draudiku',key:'10',question:'4',answer:'correct'},
    //5
    {text:'Seimas',key:'11',question:'5',answer:'incorrect'},
    {text:'Vyriausybė',key:'12',question:'5',answer:'incorrect'},
    {text:'Lietuvos Bankas',key:'13',question:'5',answer:'correct'},
    {text:'Lietuvos draudimas',key:'14',question:'5',answer:'incorrect'},
    //6
    {text:'Apsidraudęs',key:'15',question:'6',answer:'incorrect'},
    {text:'Trečioji šalis',key:'16',question:'6',answer:'correct'},
    {text:'Transporto priemonės valdytojas',key:'17',question:'6',answer:'incorrect'},
    //7
    {text:'Draudiminis įvykis',key:'18',question:'7',answer:'correct'},
    {text:'Eismo įvykis',key:'19',question:'7',answer:'incorrect'},
    {text:'Nelaimingas atsitikimas',key:'20',question:'7',answer:'incorrect'},
    //8
    {text:'Kompensacija',key:'21',question:'8',answer:'incorrect'},
    {text:'Žalos atlyginimas',key:'22',question:'8',answer:'incorrect'},
    {text:'Draudimo apsauga',key:'23',question:'8',answer:'correct'},
    //9
    {text:'Draudimo liudijimas (polisas)',key:'24',question:'9',answer:'correct'},
    {text:'Draudimas',key:'25',question:'9',answer:'incorrect'},
    {text:'Draudimo sutartis',key:'26',question:'9',answer:'incorrect'},
    //10
    {text:'Draudimo apsauga',key:'27',question:'10',answer:'incorrect'},
    {text:'Draudimo objektu',key:'28',question:'10',answer:'correct'},
    {text:'Rizikos objektu',key:'29',question:'10',answer:'incorrect'},
    //11
    {text:'Draudimo rizika',key:'30',question:'11',answer:'correct'},
    {text:'Įvykio tikimybė',key:'31',question:'11',answer:'incorrect'},
    {text:'Draudimo apsauga',key:'32',question:'11',answer:'incorrect'},
    //12
    {text:'Studijų/ vaiko draudimas',key:'33',question:'12',answer:'incorrect'},
    {text:'Pensijų draudimas',key:'34',question:'12',answer:'incorrect'},
    {text:'Turto draudimas',key:'35',question:'12',answer:'correct'},
    {text:'Draudimas nuo nelaimingų atsitikimų ir sveikatos draudimas',key:'36',question:'12',answer:'incorrect'},
    //13
    {text:'TPVCA',key:'37',question:'13',answer:'incorrect'},
    {text:'Kelionių draudimas',key:'38',question:'13',answer:'incorrect'},
    {text:'Pensijų draudimas',key:'39',question:'13',answer:'correct'},
    {text:'Turto draudimas',key:'40',question:'13',answer:'incorrect'},
    //14
    {text:'Draudimo pasiūlymas',key:'41',question:'14',answer:'incorrect'},
    {text:'Draudimo taisyklės',key:'42',question:'14',answer:'correct'},
    {text:'Draudimo sutartis',key:'43',question:'14',answer:'incorrect'},
    {text:'Polisas',key:'44',question:'14',answer:'incorrect'},
    //15
    {text:'Naudos gavėju',key:'45',question:'15',answer:'correct'},
    {text:'Apdraustouju',key:'46',question:'15',answer:'incorrect'},
    {text:'Draudėju',key:'47',question:'15',answer:'incorrect'},
    {text:'Draudiku',key:'48',question:'15',answer:'incorrect'},
    //16
    {text:'Draudimo įmonė',key:'49',question:'16',answer:'incorrect'},
    {text:'Imitacinė studentų draudimo bendrovė',key:'50',question:'16',answer:'correct'},
    {text:'Internetinė draudimo svetainė',key:'51',question:'16',answer:'incorrect'},
    
  ]);
  const filterKlausimai=(id,answer)=>{
    
    if(answer=="correct"){
      var tt=_klaus+1; 
      console.log(tt)
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
    <ImageBackground source={image} style={styles.image} >
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
    
    
});
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert, Platform } from 'react-native';


export default function Lenteles() {

  const [ques, setques] = useState(1);
  const [QuestionPrev, setQuestionPrev] = useState();
  const [QnAPrev, setQnAPrev] = useState();
  const [Question, setQuestion] = useState([
    { text: '20% arbatpinigiai, pavalgius už 75.31€?', key: '1' },
    { text: 'Galutinė 85€ kainuojančio stalo kaina su 20% nuolaida?', key: '2' },
    { text: '5.5% mokesčių nuo metinės 55000€ algos?', key: '3' },
    { text: '85.73€ kainavusios vakarienės kaina su 20% arbatpinigių?', key: '4' },
    { text: 'Kelnių kaina 90€. Kiek jos kainuos su 45% nuolaida?', key: '5' },
    { text: 'Galutinė 15€ kainuojančio megztinio kaina su 20% nuolaida', key: '6' },
    { text: 'Pavalgėte už 230.11€, kokia bus 20% arbatpinigių suma?', key: '7' },
    { text: '7% pardavimo mokestis už 15000€ kainuojantį automobilį', key: '8' },
    { text: '50€ vertės siurblio kaina su 8% antkainiu', key: '9' },
    { text: '6€ kainuojančio tušinuko kaina su 40% nuolaida', key: '10' },
    { text: 'Galutinė 800€ kainuojančio kompiuterio kaina su 6% mokesčių', key: '11' },
    { text: '40€ kainuojančios suknelės kaina su 30% nuolaida', key: '12' },
    { text: '20% arbatpinigiai, papietavus už 10€', key: '13' },
    { text: 'Galutinė 70.42€ kainavusios vakarienės kaina su 20% arbatpinigių', key: '14' },
    { text: '6% mokesčiųnuo metinės 72000€ algos', key: '15' },
    { text: '5.5% antkainis 100€ kainuojančiai kėdei', key: '16' },
    { text: '5% mokestis už 1200€ kainuojantį televizorių', key: '17' },
    { text: 'Galutinė 50€ kainavusių marškinėlių kaina su 40% nuolaida', key: '18' },
    { text: '20% arbatpinigiai, pavalgius už €111', key: '19' },
    { text: 'Spintos kaina su 30% nuolaida yra 365.4€. Kokia jos originali kaina?', key: '20' },

  ]);
  const [QnA, setQnA] = useState([
    //1
    { text: '15.06', key: '1', question: '1', answer: 'true' },
    { text: '60.25', key: '2', question: '1', answer: 'false' },
    { text: '90.37', key: '3', question: '1', answer: 'false' },
    //2
    { text: '68', key: '4', question: '2', answer: 'true' },
    { text: '17', key: '5', question: '2', answer: 'false' },
    { text: '102', key: '6', question: '2', answer: 'false' },
    //3
    { text: '51975', key: '7', question: '3', answer: 'false' },
    { text: '3000', key: '8', question: '3', answer: 'false' },
    { text: '3025', key: '9', question: '3', answer: 'true' },
    //4
    { text: '102.88', key: '10', question: '4', answer: 'true' },
    { text: '17.15', key: '11', question: '4', answer: 'false' },
    { text: '68.58', key: '12', question: '4', answer: 'false' },
    //5
    { text: '36', key: '13', question: '5', answer: 'false' },
    { text: '54', key: '14', question: '5', answer: 'true' },
    { text: '45', key: '15', question: '5', answer: 'false' },
    //6
    { text: '10', key: '16', question: '6', answer: 'false' },
    { text: '9', key: '17', question: '6', answer: 'false' },
    { text: '12', key: '18', question: '6', answer: 'true' },
    //7
    { text: '40', key: '19', question: '7', answer: 'false' },
    { text: '45.2', key: '20', question: '7', answer: 'false' },
    { text: '46.02', key: '21', question: '7', answer: 'true' },
    //8
    { text: '1050', key: '22', question: '8', answer: 'true' },
    { text: '1000', key: '23', question: '8', answer: 'false' },
    { text: '950', key: '24', question: '8', answer: 'false' },
    //9
    { text: '4', key: '25', question: '9', answer: 'false' },
    { text: '46', key: '26', question: '9', answer: 'false' },
    { text: '54', key: '27', question: '9', answer: 'true' },
    //10
    { text: '4', key: '28', question: '10', answer: 'false' },
    { text: '2.4', key: '29', question: '10', answer: 'false' },
    { text: '3.6', key: '30', question: '10', answer: 'true' },
    //11
    { text: '48', key: '31', question: '11', answer: 'false' },
    { text: '848', key: '32', question: '11', answer: 'true' },
    { text: '752', key: '33', question: '11', answer: 'false' },
    //12
    { text: '28', key: '34', question: '12', answer: 'true' },
    { text: '12', key: '35', question: '12', answer: 'false' },
    { text: '30', key: '36', question: '12', answer: 'false' },
    //13
    { text: '3', key: '37', question: '13', answer: 'false' },
    { text: '2', key: '38', question: '13', answer: 'true' },
    { text: '8', key: '39', question: '13', answer: 'false' },
    //14
    { text: '14.08', key: '40', question: '14', answer: 'false' },
    { text: '84.50', key: '41', question: '14', answer: 'true' },
    { text: '76.67', key: '42', question: '14', answer: 'false' },
    //15
    { text: '76320', key: '43', question: '15', answer: 'false' },
    { text: '67600', key: '44', question: '15', answer: 'false' },
    { text: '4320', key: '45', question: '15', answer: 'true' },
    //16
    { text: '5.5', key: '46', question: '16', answer: 'true' },
    { text: '105.5', key: '47', question: '16', answer: 'false' },
    { text: '94.5', key: '48', question: '16', answer: 'false' },
    //17
    { text: '1140', key: '49', question: '17', answer: 'false' },
    { text: '60', key: '50', question: '17', answer: 'true' },
    { text: '1260', key: '51', question: '17', answer: 'false' },
    //18
    { text: '30', key: '52', question: '18', answer: 'true' },
    { text: '20', key: '53', question: '18', answer: 'false' },
    { text: '10', key: '54', question: '18', answer: 'false' },
    //19
    { text: '91', key: '55', question: '19', answer: 'false' },
    { text: '88.80', key: '56', question: '19', answer: 'false' },
    { text: '22.20', key: '57', question: '19', answer: 'true' },
    //20
    { text: '300', key: '58', question: '20', answer: 'false' },
    { text: '522', key: '59', question: '20', answer: 'true' },
    { text: '156.6', key: '60', question: '20', answer: 'false' },

  ]);
  const filterQuestion = (id, answer) => {
    console.log(answer)
    console.log(ques)
    if (answer == "true") {

      var temp=ques+1;
      setQuestionPrev(Question)
      setQuestionPrev((ques) => {
        return ques.filter(Question => Question.key == id + 1)
      })
      setQnAPrev(QnA)
      setQnAPrev((qna) => {
        return qna.filter(QnA => QnA.question == id + 1)
      })
      setques(temp)
    }
    else {

      if (Platform.OS === 'web') {
        alert("Atsakymas neteisingas!",{cancelable: false})
     } else {
      Alert.alert(

 
        "Atsakymas neteisingas!",
        
         
        "", [{ text: "Bandyti dar kartą"}],
        
         
        { cancelable: false }
        
         
        );
    }
     }
      
    
     if(temp==21){
      setques(prev=>prev + 2)
      let vara =0
      
      if (Platform.OS === 'web') {
        alert("Užuomina: 522",{cancelable: false})
     } else {
      Alert.alert(

 
        "Užuomina: 522",
        
         
        "", [{ text: "Gerai"}],
        
         
        { cancelable: false }
        
         
        );
  
  }
    }


  };
  useEffect(() => {
    setQuestionPrev(Question)
    setQnAPrev(QnA)
    setQuestionPrev((Ques) => {
      return Ques.filter(Question => Question.key == 1)
    })
    setQnAPrev((qna) => {
      return qna.filter(QnA => QnA.question == 1)
    })

  }, [])

  return (

    <View style={styles.container}>
      <View style={{flex: 1}}>
        <View>
          <FlatList
            keyExtractor={(item) => item.key}
            data={QuestionPrev}
            renderItem={({ item }) => (
              <Text style={styles.header}>{item.text}</Text>
            )}
          />
        </View>
        <View style={{flex: 1}}>
          <FlatList
            data={QnAPrev}
            renderItem={({ item }) => (
              <TouchableOpacity onPressOut={() => filterQuestion(ques, item.answer)}>
                <Text style={styles.item}>{item.text}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'column',
    //alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: "#2d7fd2",
  },
  questionBox: {
    width: 800,
    maxWidth: 400,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 15,
    padding: 10,
  },
  item: {
    //flex: 1,
    margin: 10,
    padding: 30,
    // marginTop: 10,
    // marginHorizontal: 10,
    fontSize: 20,
    // width: 200,
    // height: 200,
    borderRadius: 15,
    backgroundColor: '#79ade2',
    alignItems: 'center',
    textAlign: 'center',
  },
  header: {
    //flex: 1,
    margin: 5,
    padding: 20,
    marginTop: 20,
    fontSize: 30,
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
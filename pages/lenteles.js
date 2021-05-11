import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { withRepeat } from 'react-native-reanimated';

export default function Lenteles() {

    const startButton = document.getElementById('start-btn')
    const nextButton = document.getElementById('next-btn')
    const questionContainerElement = document.getElementById('question-container')
    let shuffledQuestion
    let currentQuestionIndex
    const questionElement = document.getElementById('question')
    const answerButtonsElement = document.getElementById('answer-buttons')
    
    startButton.addEventListener('click', startGame)
    nextButton.addEventListener('click', () => {
        currentQuestionIndex++
        setNextQuestion()
    })

    startGame() 
    {
        console.log('Started')
        startButton.classList.add('hide')
        shuffledQuestion = questions.sort(()=> Math.random() - .5)
        currentQuestionIndex = 0
        questionContainerElement.classList.remove('hide')
        setNextQuestion()
    }
    setNextQuestion()
    {
        showQuestion(shuffledQuestion[currentQuestionIndex])
    }

    showQuestion(question)
    {
        questionElement.innerText = question.question
        question.answer.forEach(answer => {
            const button = document.createElement('button')
            button.innerText = answer.text
            button.classList.add('btn')
            if(answer.correct)
            {
                button.dataset.correct = answer.correct
            }
            button.addEventListener('click', selectAnswer)
            answerButtonsElement.appendChild(button)
        })
    }
    resetState()
    {
        clearStatusClass(document.body)
        nextButton.classList.add('hide')
        while (answerButtonsElement.firstChild)
        {
            answerButtonsElement.removeChild(answerButtonsElement.firstChild)
        }
    }

    selectAnswer(e)
    {
        const selectedButton = e.target
        const correct = selectedButton.dataset.correct
        setStatusClass(document.body, correct)
        Array.from(answerButtonsElement.children).forEach(button => {
            setStatusClass(button, button.dataset.correct)
        })
        if(shuffledQuestion.length > currentQuestionIndex + 1)
        {
           nextButton.classList.remove('hide') 
        }
        else
        {
            startButton.innerText = 'Restart'
            startButton.classList.remove('hide')
        }
    }

    setStatusClass(element, correct)
    {
        clearStatusClass(element)
        if(correct)
        {
            element.classList.add('correct')
        }
        else 
        {
            element.classList.add('wrong')
        }
    }

    clearStatusClass(element)
    {
        element.classList.remove('correct')
        element.classList.remove('wrong')
    }

    const questions = [
        {
            question: '20% arbatpinigiai, pavalgius už 75.31€?',
            answers: [
                {text: '15.06', correct: true},
                {text: '60.25', correct: false},
                {text: '90.37', correct: false}
            ]
        },
        {
            question: 'Galutinė 85€ kainuojančio stalo kaina su 20% nuolaida?',
            answers: [
                {text: '68', correct: true},
                {text: '17', correct: false},
                {text: '102', correct: false}
            ]
        },
        {
            question: '5.5% mokesčių nuo metinės 55000€ algos?',
            answers: [
                {text: '3025', correct: true},
                {text: '17', correct: false},
                {text: '5', correct: false}
            ]
        },
        {
            question: '85.73€ kainavusios vakarienės kaina su 20% arbatpinigių?',
            answers: [
                {text: '102.88', correct: true},
                {text: '17', correct: false},
                {text: '5', correct: false}
            ]
        },
        {
            question: 'Kelnių kaina 90€. Kiek jos kainuos su 45% nuolaida?',
            answers: [
                {text: '54', correct: true},
                {text: '17', correct: false},
                {text: '5', correct: false}
            ]
        },
        {
            question: 'Galutinė 15€ kainuojančio megztinio kaina su 20% nuolaida',
            answers: [
                {text: '12', correct: true},
                {text: '17', correct: false},
                {text: '5', correct: false}
            ]
        },
        {
            question: 'Pavalgėte už 230.11€, kokia bus 20% arbatpinigių suma?',
            answers: [
                {text: '46.02', correct: true},
                {text: '17', correct: false},
                {text: '5', correct: false}
            ]
        },
        {
            question: '7% pardavimo mokestis už 15000€ kainuojantį automobilį',
            answers: [
                {text: '1050', correct: true},
                {text: '17', correct: false},
                {text: '5', correct: false}
            ]
        },
        {
            question: '50€ vertės siurblio kaina su 8% antkainiu',
            answers: [
                {text: '54', correct: true},
                {text: '17', correct: false},
                {text: '5', correct: false}
            ]
        },
        {
            question: '6€ kainuojančio tušinuko kaina su 40% nuolaida',
            answers: [
                {text: '3.6', correct: true},
                {text: '17', correct: false},
                {text: '5', correct: false}
            ]
        },
        {
            question: 'Galutinė 800€ kainuojančio kompiuterio kaina su 6% mokesčių',
            answers: [
                {text: '848', correct: true},
                {text: '17', correct: false},
                {text: '5', correct: false}
            ]
        },
        {
            question: '40€ kainuojančios suknelės kaina su 30% nuolaida',
            answers: [
                {text: '28', correct: true},
                {text: '17', correct: false},
                {text: '5', correct: false}
            ]
        },
        {
            question: '20% arbatpinigiai, papietavus už 10€',
            answers: [
                {text: '2', correct: true},
                {text: '17', correct: false},
                {text: '5', correct: false}
            ]
        },
        {
            question: 'Galutinė 70.42€ kainavusios vakarienės kaina su 20% arbatpinigių',
            answers: [
                {text: '84.50', correct: true},
                {text: '17', correct: false},
                {text: '5', correct: false}
            ]
        },
        {
            question: '6% mokesčiųnuo metinės 72000€ algos',
            answers: [
                {text: '4320', correct: true},
                {text: '17', correct: false},
                {text: '5', correct: false}
            ]
        },
        {
            question: '5.5% antkainis 100€ kainuojančiai kėdei',
            answers: [
                {text: '5.5', correct: true},
                {text: '17', correct: false},
                {text: '5', correct: false}
            ]
        },
        {
            question: '5% mokestis už 1200€ kainuojantį televizorių',
            answers: [
                {text: '60', correct: true},
                {text: '17', correct: false},
                {text: '5', correct: false}
            ]
        },
        {
            question: 'Galutinė 50€ kainavusių marškinėlių kaina su 40% nuolaida',
            answers: [
                {text: '30', correct: true},
                {text: '17', correct: false},
                {text: '5', correct: false}
            ]
        },
        {
            question: '20% arbatpinigiai, pavalgius už €111',
            answers: [
                {text: '22.20', correct: true},
                {text: '17', correct: false},
                {text: '5', correct: false}
            ]
        },
        {
            question: 'Spintos kaina su 30% nuolaida yra 365.4€. Kokia jos originali kaina?',
            answers: [
                {text: '522', correct: true},
                {text: '300', correct: false},
                {text: '156.6', correct: false}
            ]
        }
    ]

    return (

        <View style={styles.container}>
            <Text>
            Quiz
            </Text>
            <div class="container">
                <div id="question-container" class="hide">
                    <div id="question">Question</div>
                    <div id="answer-buttons" class="btn-grid">
                    <button class="btn">Answer1</button>
                    <button class="btn">Answer2</button>
                    <button class="btn">Answer3</button>
                    <button class="btn">Answer4</button>
                    </div>
                </div>
                <div class="controls">
                    <button id="start-btn" class="start-btn btn">Start</button>
                    <button id="start-btn" class="start-btn btn">Next</button>
                </div>
            </div>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    questions: {
        fontSize: 20,
        textAlign: 'justify',
        paddingBottom: 8
    },
    holder: {
        paddingTop: 16,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    inputCorrect: {
        backgroundColor: 'green'
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        width: 50,
        height: 50,
        textAlign: 'center',
        fontSize: 25
    },
    body: {
        padding: 0,
        margin: 0,
        display: 'flex',
        width: 100,
        height: 100,
        justifyContext: 'center',
        alingItems: 'center',
        backgroundColor: 'Blue'
    },
    bodyCorrect: {

    },
    box: {
        boxSizing: 'border-box',
        fontFamily: 'Gotham ROunded'
    },
    question: {
        width: 800,
        maxWidth: 80,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10
    },
    btnGrid: {
        display: 'grid',
        gridTemplateCollums: withRepeat(2, 'auto'),
        gap: 10,
        margin: 20
    },
    btn: {
        backgroundColor: 'white'
    }
});



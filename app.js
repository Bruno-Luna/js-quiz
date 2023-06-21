const buttonSend = document.querySelector('.btnSend')
const buttonAgain = document.querySelector('.btnAgain')
const viewScore = document.querySelector('.score')
const form = document.querySelector('.quiz-form')
const paragraph = document.querySelectorAll('p')
const correctAsk = ['C', 'B', 'A', 'C', 'B']

const getValueQuestion = () => {
    const valueQuestionsChecked = {
        questionOne: Array.from(document.getElementsByName('inputQuestion1')).find(r => r.checked).value,
        questionTwo: Array.from(document.getElementsByName('inputQuestion2')).find(r => r.checked).value,
        questionThree: Array.from(document.getElementsByName('inputQuestion3')).find(r => r.checked).value,
        questionFour: Array.from(document.getElementsByName('inputQuestion4')).find(r => r.checked).value,
        questionFive: Array.from(document.getElementsByName('inputQuestion5')).find(r => r.checked).value
    }

    return valueQuestionsChecked
}


const verifyQuestions = () => {
            let valueQuestions = getValueQuestion()
            let score = 0

            if (valueQuestions.questionOne === correctAsk[0]) {
                score += 25
            } 
            if (valueQuestions.questionTwo === correctAsk[1]) {
                score += 25
            }
            if (valueQuestions.questionThree === correctAsk[2]) {
                score += 25
            } 
            if (valueQuestions.questionFour === correctAsk[3]) {
                score += 25
            }
            if (valueQuestions.questionFive === correctAsk[4]) {
                score += 25
            }
            
            viewScore.textContent = `Total de pontos: ${score}`
            viewScore.style.fontWeight = 600

            buttonSend.style.display = 'none'
            buttonAgain.classList.toggle('btnAgain')
    }

    buttonSend.addEventListener('click', event => {
        event.preventDefault()
        verifyQuestions()
    })
 
    buttonAgain.addEventListener('click', () => {})
export default function (data) {
    const score = ref(0)
    const currentQuestionIndex = ref(0)
    const currentAnswer = ref(null)
    const isFinished = ref(false)
    const startChrono = ref(Date.now())

    const nextQuestion = () => {
        if (currentQuestionIndex.value < data.questions.length - 1)  {
            checkAnswer()
            currentQuestionIndex.value++
            startChrono.value = Date.now()    
            currentAnswer.value = null  
        } else {
            isFinished.value = true
            console.log('Quizz terminé')
        }
    }

    
    const resetQuizz = () => {
        score.value = 0
        currentQuestionIndex.value = 0
        currentAnswer.value = null
        isFinished.value = false
    }

    // Bonus
    
    const checkAnswer = () => {
        const time = (Date.now() - startChrono.value) / 1000
        if (currentAnswer.value === data.questions[currentQuestionIndex.value].answer) {
            if (time <= 1) {
                score.value += 5
            } else if (time <= 5) {
                score.value += 5 - time
            } else if (time > 5){
                score.value += 1
            }
        }
    }

    const roundScore = () => {
        score.value = Math.round(score.value * 1000) / 1000
    }


    return {
        data,
        score,
        currentQuestionIndex,
        currentAnswer,
        nextQuestion,
        isFinished,
        resetQuizz,
        roundScore
    }
}
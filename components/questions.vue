<script setup>
    const quizz= inject('quizz');
</script>

<template>
    <div>
        <Progression />
        <h1> {{ quizz.data.title }} </h1>
        <h2>Score : {{ quizz.score }}</h2>
        
        <div>
            <h2>Question :</h2>
            <h3> {{ quizz.data.questions[quizz.currentQuestionIndex.value].question }}</h3>      
        </div>
        <form @submit.prevent="quizz.nextQuestion">
            <Options />
            <button type="submit">Suivant</button>
        </form>
    </div>
</template>

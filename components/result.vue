<script setup>
    const quizz = inject('quizz');

</script>

<template>
    
    <div>
        <h2>Score Final: {{ quizz.score }}</h2>
        <div>
            <h3>Les réponses sont : </h3>
            <div v-for="question in quizz.data.questions">
                <p>{{ question.question }}</p>
                <p>La réponse était : <b>{{ question.answer }}</b></p>
            </div>
        </div>
        <div>
            <NuxtLink to="/">Autre quizz</NuxtLink>
            <button @click="quizz.resetQuizz">Recommencer</button>
        </div>
    </div>
</template>
<script setup>
    const quizz = inject('quizz');
    quizz.roundScore()
</script>

<template>
    <div class="p-8 bg-gradient-to-r from-gray-700 to-gray-900 min-h-screen text-white">
        <Progression />
        <h1 class="text-5xl font-extrabold mb-8"> {{ quizz.data.title }} </h1>
        <h2 class="text-3xl mb-8">Score : {{ quizz.score }}</h2>
        
        <div class="bg-white p-8 rounded-xl shadow-2xl text-gray-900 mb-10">
            <h2 class="text-3xl font-extrabold mb-6">Question :</h2>
            <h3 class="text-2xl">{{ quizz.data.questions[quizz.currentQuestionIndex.value].question }}</h3>      
        </div>
        <form @submit.prevent="quizz.nextQuestion" class="space-y-8">
            <Options />
            <button type="submit" class="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700">Suivant</button>
        </form>
    </div>
</template>
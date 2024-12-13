<script setup>
    const quizz= inject('quizz');
</script>

<template>
    <div class="p-6 bg-gray-100 min-h-screen">
        <Progression />
        <h1 class="text-3xl font-bold mb-4"> {{ quizz.data.title }} </h1>
        <h2 class="text-xl mb-4">Score : {{ quizz.score }}</h2>
        
        <div class="bg-white p-4 rounded-lg shadow-md mb-6">
            <h2 class="text-2xl font-semibold mb-2">Question :</h2>
            <h3 class="text-lg">{{ quizz.data.questions[quizz.currentQuestionIndex.value].question }}</h3>      
        </div>
        <form @submit.prevent="quizz.nextQuestion" class="space-y-4">
            <Options />
            <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Suivant</button>
        </form>
    </div>
</template>

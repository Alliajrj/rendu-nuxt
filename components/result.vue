<script setup>
    const quizz = inject('quizz');

</script>

<template>  
    <div class="p-6 bg-gray-100 min-h-screen">
        <h2 class="text-2xl font-bold mb-4">Score Final: {{ quizz.score }}</h2>
        <div class="bg-white p-4 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-2">Les réponses sont :</h3>
            <div v-for="question in quizz.data.questions" :key="question" class="mb-4">
                <p class="text-lg">{{ question.question }}</p>
                <p class="text-gray-700">La réponse était : <b>{{ question.answer }}</b></p>
            </div>
        </div>
        <div class="mt-6">
            <NuxtLink to="/" class="text-blue-500 hover:underline">Autre quizz</NuxtLink>
        </div>
        <div class="mt-6">
            <button @click="quizz.resetQuizz" class="text-blue-500 hover:underline">Recommencer</button>
        </div>
    </div>
</template>
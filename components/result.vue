<script setup>
    const quizz = inject('quizz');
</script>

<template>  
    <div class="p-8 bg-gradient-to-r from-gray-700 to-gray-900 min-h-screen text-white">
        <h2 class="text-4xl font-extrabold mb-8">Score Final: {{ quizz.score }}</h2>
        <Answer />
        <div class="mt-10">
            <NuxtLink to="/" class="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700">Autre quizz</NuxtLink>
        </div>
        <div class="mt-10">
            <button @click="quizz.resetQuizz()" class="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700">Recommencer</button>
        </div>
    </div>
</template>
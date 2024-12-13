<script setup>
    const quizz = inject('quizz');

</script>

<template>  
    <div class="p-6 bg-gray-100 min-h-screen">
        <h2 class="text-2xl font-bold mb-4">Score Final: {{ quizz.score }}</h2>
        <Answer />
        <div class="mt-6">
            <NuxtLink to="/" class="text-blue-500 hover:underline">Autre quizz</NuxtLink>
        </div>
        <div class="mt-6">
            <button @click="quizz.resetQuizz()" class="text-blue-500 hover:underline">Recommencer</button>
        </div>
    </div>
</template>
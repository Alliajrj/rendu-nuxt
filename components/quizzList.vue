<script setup>
    const dataQuizs = await queryContent('quizz').find();
    const data = useQuizs(dataQuizs);
    provide('data', data);
</script>

<template>
    <div class="p-8 bg-gradient-to-r from-gray-700 to-gray-900 min-h-screen text-white">
        <h1 class="text-5xl font-extrabold mb-10">Liste de quizz</h1>
        <div v-for="quizz in data.quizs" :key="quizz" class="bg-white p-8 rounded-xl shadow-2xl text-gray-900 mb-8">
            <h2 class="text-3xl font-extrabold mb-6">{{ quizz.title }}</h2>
            <p class="text-gray-800 mb-6">Nombre de question : {{ quizz.questions.length }}</p>
            <NuxtLink 
                :to="`/${quizz._path.split('/').pop()}`"
                class="text-blue-600 hover:underline">
                Commencer le quizz
            </NuxtLink>
        </div>
    </div>
</template>

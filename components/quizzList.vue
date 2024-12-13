<script setup>
    const data = await useQuizs();
    provide('data', data);
    
</script>


<template>
   <div class="p-6 bg-gray-100 min-h-screen">
        <h1 class="text-3xl font-bold mb-6">Ma liste de quizz</h1>
        <div v-for="quizz in data.quizzs" :key="quizz" class="bg-white p-4 rounded-lg shadow-md mb-4">
            <h2 class="text-2xl font-semibold mb-2">{{ quizz.title }}</h2>
            <p class="text-gray-700 mb-2">Nombre de question : {{ quizz.questions.length }}</p>
            <NuxtLink 
                :to="`/${quizz._path.split('/').pop()}`"
                class="text-blue-500 hover:underline">
                En avant pour le super quizz
            </NuxtLink>
        </div>
    </div>
</template>

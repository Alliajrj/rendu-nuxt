<script setup>
    const data = await useQuizs();
    provide('data', data);
    
</script>


<template>
    <div>
        <h1>Ma liste de quizz</h1>
        <div v-for="quizz in data.quizzs"  :key="quizz" >
            <h2> {{ quizz.title }}</h2>
            <p>Nombre de question : {{ quizz.questions.length }}</p>
            <NuxtLink 
                :to="`/${quizz._path.split('/').pop()}`">
                En avant pour le super quizz     
            </NuxtLink>
        </div>
    </div>
</template>

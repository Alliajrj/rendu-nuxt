<script setup>
    const quizz = inject('quizz');
</script>

<template>
    <div class="bg-gradient-to-r from-green-400 to-blue-500 p-8 rounded-xl shadow-2xl text-white">
        <h3 class="text-3xl font-extrabold mb-6">Les réponses sont :</h3>
        <div v-for="question in quizz.data.questions" :key="question" class="mb-8">
            <p class="text-2xl">{{ question.question }}</p>
            <p class="text-yellow-300">La réponse était : <b>{{ question.answer }}</b></p>
        </div>
    </div>
</template>
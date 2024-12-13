<script setup>
    const quizz = inject('quizz');
</script>

<template>
    <div class="bg-gradient-to-r from-yellow-400 to-red-500 p-6 rounded-xl shadow-2xl text-white mb-8">
        <p class="text-2xl font-extrabold">Question {{ quizz.currentQuestionIndex.value + 1 }} / {{ quizz.data.questions.length }}</p>
    </div>
</template>
<script setup>
    const quizz = inject('quizz');
</script>

<template>
    <div>
        <p>Question {{ quizz.currentQuestionIndex.value + 1 }} / {{ quizz.data.questions.length }}</p>
    </div>
</template>
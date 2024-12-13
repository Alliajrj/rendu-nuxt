<script setup>
    const quizz = inject('quizz');
</script>

<template>
    <div class="mb-4">
        <p class="text-lg font-medium">Question {{ quizz.currentQuestionIndex.value + 1 }} / {{ quizz.data.questions.length }}</p>
    </div>
</template>
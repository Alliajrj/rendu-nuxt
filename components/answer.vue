<script setup>
    const quizz = inject('quizz');
</script>

<template>
    <div class="bg-white p-4 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-2">Les réponses sont :</h3>
            <div v-for="question in quizz.data.questions" :key="question" class="mb-4">
                <p class="text-lg">{{ question.question }}</p>
                <p class="text-gray-700">La réponse était : <b>{{ question.answer }}</b></p>
            </div>
        </div>
</template>

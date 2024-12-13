<script setup>
    const quizz = inject('quizz');
</script>

<template>
    <div class="bg-gradient-to-r from-purple-400 to-pink-500 p-8 rounded-xl shadow-2xl text-white">
        <h2 class="text-3xl font-extrabold mb-6">Réponse :</h2>
        <div v-for="option in quizz.data.questions[quizz.currentQuestionIndex.value].options" :key="option" class="mb-6">
            <input type="radio" 
                name="quizz-option" 
                :value="option" 
                v-model="quizz.currentAnswer.value"
                required
                class="mr-4"
            >
            <label :for="option" class="text-2xl">{{ option }}</label>
        </div>
    </div>
</template>
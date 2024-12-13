<script setup>
    const quizz = inject('quizz');
</script>

<template>
     <div>
        <h2 class="text-xl font-semibold mb-2">Réponse :</h2>
        <div v-for="option in quizz.data.questions[quizz.currentQuestionIndex.value].options" :key="option" class="mb-2">
            <input type="radio" 
                name="quizz-option" 
                :value="option" 
                v-model="quizz.currentAnswer.value"
                required
                class="mr-2"
            >
            <label :for="option" class="text-lg">{{ option }}</label>
        </div>
    </div>
</template>
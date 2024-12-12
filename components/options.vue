<script setup>
    const quizz = inject('quizz');
</script>

<template>
    <div>
      <h2>Réponse :</h2>
        <div v-for="option in quizz.data.questions[quizz.currentQuestionIndex.value].options" :key="option">
            <input type="radio" 
            name="quizz-option" 
            :value="option" 
            v-model="quizz.currentAnswer.value"
            required
            >
            <label :for="option">{{ option }}</label>
        </div>
    </div>
</template>
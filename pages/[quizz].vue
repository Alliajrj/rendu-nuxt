<script setup>
    const { params } = useRoute();
    const data = await queryContent(`quizz/${params.quizz}`).findOne();

    const quizz = useQuizz(data);
    provide('quizz', quizz);

</script>


<template>
    <NuxtLayout name="header">
        <div>
            <Questions v-if="quizz.isFinished.value == false "/>
            <Result v-if="quizz.isFinished.value == true"/>
        </div>
    </NuxtLayout>
</template>


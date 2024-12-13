<template>
   <NuxtLayout name="header">
    <div class="prose">
      <h1>404!</h1>
      <p>Oula c'est la tuile !</p>
      <NuxtLink to="/">Retour lobby</NuxtLink>
    </div>
  </NuxtLayout>
</template>

<script setup>
  defineProps(['error']);
</script>

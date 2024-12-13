<template>
   <NuxtLayout name="header">
    <div class="prose">
      <h1>404</h1>
      <p>Erreur</p>
      <NuxtLink to="/">Retour lobby</NuxtLink>
    </div>
  </NuxtLayout>
</template>

<script setup>
  defineProps(['error']);
</script>

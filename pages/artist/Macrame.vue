<script setup lang="ts">
definePageMeta({
  layout: 'landing'
})
</script>

<template>
  <div class="main-container">
    macrame
    <NuxtLink to="/artist">
      back
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.main-container {
  background: black;
  height: 100dvh;
  color: $a-text-dark;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  font-size: 50px;

  a {
    font-size: 30px;
    color: $a-sun;
  }
}
</style>
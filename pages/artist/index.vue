<script setup lang="ts">
definePageMeta({
  layout: 'landing'
})
</script>

<template>
  <div class="artist-container">
    <div class="maintenance">
      this will soon have content
      <NuxtLink to="/">
        back
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.artist-container {
  background: black;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;

  .maintenance {
    color: white;
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    a {
      color: $a-sun;
      margin-top: 2rem;
      font-size: 30px;
      text-decoration: none;
    }
  }
}
</style>
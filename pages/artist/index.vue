<script setup lang="ts">
definePageMeta({
  layout: 'landing'
})
</script>

<template>
  <div class="artist-container">
    <NuxtLink to="/artist/macrame" class="third macrame">
      macrame
    </NuxtLink>
    <NuxtLink to="/artist/audio" class="third audio">
      audio
    </NuxtLink>
    <NuxtLink to="/artist/visual" class="third visual">
      visual
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.artist-container {
  background: black;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $text-dark;

  .third {
    height: 100dvh;
    width: 33.3%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 50%;
    font-size: 40px;
    transition: 0.4s ease-in-out;
    background: black;
    text-decoration: none;

    &:hover {
      background: $a-secondary;
      cursor: pointer;
      opacity: 100;
    }

    &:visited {
      color: $a-sun;
    }
  }
}
</style>
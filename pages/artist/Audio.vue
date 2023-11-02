<script setup lang="ts">
definePageMeta({
  layout: 'artist'
})
</script>

<template>
  <div class="main-container">
    audio
    <div class="soundcloud">
      <iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/491524944&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    </div>
    <NuxtLink to="/artist">
      back
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.main-container {
  background: black;
  color: $a-text-dark;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  font-size: 50px;
  padding-top: 5rem;

  .soundcloud {
    width: 20rem;

    @media (min-width: 1024px){
      width: 30rem;
    }
  }

  a {
    font-size: 30px;
    color: $a-sun;
  }
}
</style>
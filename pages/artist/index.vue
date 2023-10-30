<script setup lang="ts">
definePageMeta({
  layout: 'landing'
})
</script>

<template>
  <div>
    <NuxtLink to="/" class="main-link">
      <img
          id="moonwitch-logo-sm"
          src="/moonwitch2.png"
          alt="logo of moonwitch"
      />
    </NuxtLink>
    <div class="artist-container">
      <NuxtLink to="/artist/macrame" class="third">
        <div class="text">
          macrame
        </div>
        <div class="soundwaves">
          <img src="/strings.png" alt="strings" class="macrame"/>
        </div>
      </NuxtLink>
      <NuxtLink to="/artist/audio" class="third">
        <div class="text">
          audio
        </div>
        <div class="soundwaves">
          <img src="/lines.png" alt="lines" class="audio"/>
        </div>
      </NuxtLink>
      <NuxtLink to="/artist/visual" class="third">
        <div class="text">
          visual
        </div>
        <div class="soundwaves">
          <img src="/visual.png" alt="visual" class="visual"/>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-link img{
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 5%;
  z-index: 3;
}
.artist-container {
  background: black;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $text-dark;

  @media(max-width: 1023px) {
    flex-direction: column;
  }

  .third {
    height: 100dvh;
    width: 33.3%;
    display: flex;
    //justify-content: center;
    align-items: center;
    opacity: 50%;
    font-size: 40px;
    transition: 0.4s ease-in-out;
    background: black;
    text-decoration: none;
    overflow: hidden;
    position: relative;

    @media(max-width: 1023px) {
      flex-direction: column;
      width: 100%;
    }

    .text {
      z-index: 2;
      text-align: center;
      width: 100%;
    }

    .soundwaves{
      z-index: 1;
      opacity: 50%;
      position: absolute;
      top: -20rem;
      left: 50%;
      transform: translateX(-50%) rotate(90deg);

      img {
        opacity: 0;
        filter: invert(47%) sepia(0%) saturate(91%) hue-rotate(178deg) brightness(102%) contrast(101%);
        transition: 0.2s ease-in-out;
        width: 650%;
      }
    }

    &:hover {
      background: $a-secondary;
      cursor: pointer;
      opacity: 100;

      img {
        opacity: 50%;
      }
    }

    &:visited {
      color: $text-dark;
    }
  }
}
</style>
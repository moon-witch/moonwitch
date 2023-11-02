<script setup lang="ts">
const route = ref('')
const path = computed(() => {
  console.log(useRoute().fullPath)
  return route.value = useRoute().fullPath
})
</script>

<template>
  <div class="viewport" ref="viewport">
    <div class="moonwitch-container" v-if="path != '/artist' && path != '/artist/'">
      <div class="logo-container">
        <NuxtLink to="/">
          <img
              class="moonwitch-logo-sm"
              src="/moonwitch2.png"
              alt="logo of moonwitch"
          />
        </NuxtLink>
        <ArtistNav class="artist-nav"/>
      </div>
    </div>
    <slot />
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.viewport {
  width: 100vw;
  min-height: 100dvh;

  .moonwitch-container {
    width: 100%;
  }

  .logo-container {
    position: fixed;
    width: 100dvw;
    height: 3.5rem;
    z-index: 5;
    transition: all 0.2s ease-out;
    display: flex;
    justify-content: center;
    align-items: center;
    background: $bg-dark;

    @media (min-width: 710px) {
      height: 7rem;
    }

    &:hover {
      a .moonwitch-logo-sm {
        top: 1.5rem;
        left: 5rem;
        transform: none;
      }

      .artist-nav {
        opacity: 100%;
        transition: 0.4s ease-in-out;
      }
    }

    .artist-nav {
      opacity: 0;
    }

    a {
      width: 20dvw;
      display: flex;
      justify-content: center;
      align-items: center;

      @media(min-width: 1024px) {
        justify-content: flex-start;
      }

      .moonwitch-logo-sm {
        position: absolute;
        top: 0.5rem;
        width: 14%;
        left: 50%;
        transform: translateX(-50%);
        transition: 0.2s ease-in-out;

        @media (min-width: 710px) {
          width: 12%;
        }

        @media (min-width: 1024px) {
          width: 60px;
        }
      }
    }
  }
}
</style>
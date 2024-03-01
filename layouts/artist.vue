<script setup lang="ts">
import {onClickOutside} from "@vueuse/core";

const route = ref('')
const path = computed(() => {
  return route.value = useRoute().fullPath
})

const navOpen = ref(false)
const nav = ref(null)

onClickOutside(nav, () => navOpen.value = false)

watch(path, () => {
  navOpen.value = false
})
</script>

<template>
  <div class="viewport" ref="viewport">
    <div class="nav-toggle" :class="{ open: navOpen }" v-if="path != '/artist' && path != '/artist/'">
      <img src="/moon.png" @click="navOpen = !navOpen" alt="moon"/>
    </div>
    <div ref="nav" class="moonwitch-container" :class="{ open: navOpen }" v-if="path != '/artist' && path != '/artist/'">
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
  width: 100dvw;
  min-height: 100dvh;
  background-color: $a-primary;

  .nav-toggle {
    display: none;
  }

  @media (max-width: 1023px) {
    .nav-toggle {
      display: block;
      position: absolute;
      top: 0.5rem;
      left: 50%;
      transform: translateX(-50%);
      z-index: 10;
      width: 3rem;
      height: 3rem;
      transition: 0.2s ease-in-out;

      img {
        width: 3rem;
        height: 3rem;
      }
    }

    .open {
      &.nav-toggle {
        display: none;
      }

      &.moonwitch-container {
        transform: translateY(0);
        opacity: 100%;
      }
    }

    .moonwitch-container {
      transform: translateY(-10rem);
      opacity: 0;
      transition: 0.3s ease-in-out;
    }
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

    @media (min-width: 1024px) {
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
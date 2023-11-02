<script setup lang="ts">
import DevNav from "~/components/DevNav.vue";

let currentPath = useRoute();

const viewport = ref(null);
const isLogoHidden = ref(false);
let prevScrollPos = ref(0);

const handleScroll = () => {
  const currentScrollPos = window.scrollY;

  if (currentScrollPos > prevScrollPos.value) {
    isLogoHidden.value = true;
  } else {
    isLogoHidden.value = false;
  }

  prevScrollPos.value = currentScrollPos;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="viewport" ref="viewport">
    <div class="moonwitch-container">
        <div class="logo-container" :class="{ hide: isLogoHidden }">
          <NuxtLink to="/">
            <img
              class="moonwitch-logo-sm"
              src="/moonwitch2.png"
              alt="logo of moonwitch"
            />
          </NuxtLink>
          <DevNav />
        </div>
    </div>
    <slot />
    <MoonwitchGlitch v-if="currentPath.path != '/'" />
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.viewport {
  position: absolute;
  width: 100vw;
  min-height: 100dvh;
  background: $bg-dark;

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

    &.hide {
      transform: translateY(-64px);

      @media (min-width: 710px) {
        transform: translateY(-90px)
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

        @media (min-width: 710px) {
          width: 12%;
        }

        @media (min-width: 1024px) {
          width: 60px;
          top: 1.5rem;
          left: 5rem;
          transform: none;
        }
      }
    }
  }
}
</style>

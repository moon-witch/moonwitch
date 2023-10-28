<script setup lang="ts">
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
  <div id="viewport" ref="viewport">
    <div id="moonwitch-container">
      <div id="logo-container">
        <img
          v-if="currentPath.path === '/dev'"
          id="moonwitch-logo"
          src="/moonwitch2.png"
          alt="logo of moonwitch"
        />
        <div v-else id="smallLogoContainer" :class="{ hide: isLogoHidden }">
          <NuxtLink to="/">
            <img
              id="moonwitch-logo-sm"
              src="/moonwitch2.png"
              alt="logo of moonwitch"
            />
          </NuxtLink>
          <Nav />
        </div>
      </div>
      <h1 v-if="currentPath.path === '/dev'" id="moonwitch-name" class="header">
        moonwitch
        <div id="tagline">creative web developer</div>
      </h1>
    </div>
    <slot />
    <MoonwitchGlitch v-if="currentPath.path != '/'" />
    <Footer />
  </div>
</template>

<style scoped lang="scss">
#viewport {
  position: absolute;
  width: 100vw;
  min-height: 100dvh;
  background: $bg-dark;
}

.header {
  font-family: $font-header, serif;
  font-size: calc($text-lg * 2.5);
  font-weight: 500;
}

#moonwitch-container {
  width: 100%;
}

#moonwitch-name {
  text-align: center;
  color: $bg-dark;
  padding: $spacing-sm;
  margin: 1.5rem;
  background: $primary;
  border-radius: 26px;
}

#tagline {
  font-size: calc($text-sm * 2);
  font-weight: 400;
  color: $bg-dark;
  line-height: 30px;
  margin: 9px 0 0 0;

  @media (min-width: 1300px) {
    font-size: calc($text-sm * 2);
  }
}

#logo-container {
  background: $primary;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
}

#moonwitch-logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;

  @media (min-width: 710px) {
    width: 20%;
  }

  @media (min-width: 1024px) {
    width: 7%;
  }
}

#smallLogoContainer {
  position: fixed;
  background: transparent;
  width: 100dvw;
  z-index: 5;
  transition: all 0.2s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;

  &.hide {
    transform: translateY(-100px);
  }

  a {
    width: 20dvw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  #moonwitch-logo-sm {
    position: absolute;
    left: 2rem;
    top: 1rem;
    width: 23%;

    @media (min-width: 710px) {
      width: 12%;
    }

    @media (min-width: 1024px) {
      width: 60px;
    }
  }
}
</style>

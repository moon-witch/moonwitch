<script setup lang="ts">
let currentPath = useRoute();
</script>

<template>
  <div id="viewport">
    <Nav />
    <div id="moonwitch-container">
      <div id="logo-container">
        <img
          v-if="currentPath.path === '/'"
          id="moonwitch-logo"
          src="/moonwitch2.png"
          alt="logo of moonwitch"
        />
        <div v-else id="smallLogoContainer">
          <NuxtLink to="/">
            <img
            id="moonwitch-logo-sm"
            src="/moonwitch2.png"
            alt="logo of moonwitch"
          />
          </NuxtLink>
        </div>
      </div>
      <h1 v-if="currentPath.path === '/'" id="moonwitch-name" class="font-alt">
        moonwitch
        <div id="tagline">creative web developer</div>
      </h1>
    </div>
    <slot />
    <MoonwitchGlitch v-if="currentPath.path != '/'"/>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
#viewport {
  position: absolute;
  width: 100vw;
  min-height: 100vh;
  background: $bg-dark;
}

#moonwitch-container {
  width: 100%;
}

#moonwitch-name {
  text-align: center;
  color: $bg-dark;
  padding: $spacing-sm;
  margin-top: 1rem;
  font-size: $text-lg;
  font-family: "Sono";
  font-weight: 400;
  background: $primary;

  @media (min-width: 1300px) {
    font-size: 2.5rem;
  }
}

#tagline {
  font-size: $text-sm;
  color: $bg-dark;
  line-height: 30px;
  margin: 9px 0 0 0;

  @media (min-width: 1300px) {
    font-size: 1.5rem;
  }
}

#logo-container {
  background: $primary;
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
  background: $bg-bright;
  width: 100vw;
  height: 95px;
  z-index: 5;
  box-shadow: 0 0 3px 3px $bg-dark;

  @media (min-width: 1024px) {
    height: 60px;
  }

  #moonwitch-logo-sm {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    margin: auto;
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

<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
</script>

<template>
  <div>
    <NuxtLayout >
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  font-family: "Sono", sans-serif;
}

.font-alt {
  font-family: "Mynerve", cursive;
}

.font-splash {
  font-family: "Splash", cursive;
}
</style>

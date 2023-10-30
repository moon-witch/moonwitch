<script setup lang="ts">
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollToPlugin} from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
</script>

<template>
  <div>
    <NuxtLayout>
        <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  max-width: 1920px;
  font-family: $font-text, serif;
  background-color: black;
}

/* width */
::-webkit-scrollbar {
  width: 0.5rem;
}

/* Track */
::-webkit-scrollbar-track {
  background: $primary;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: $secondary;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: $secondary;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>

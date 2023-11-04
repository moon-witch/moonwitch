<script setup lang="ts">
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
const cookieState = useState('cookies', (): boolean | null => null)

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function acceptCookies() {
  cookieState.value = true
}

function declineCookies() {
  cookieState.value = false;
}
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
      <CookieBanner @accepted="acceptCookies" @declined="declineCookies" :class="{hide: cookieState != null}"/>
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

.hide {
  display: none;
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

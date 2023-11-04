<script setup lang="ts">
import {onClickOutside} from "@vueuse/core";

const emit = defineEmits(['accepted', 'declined'])

const banner = ref(null)
const outsideClicked = ref<any>(false);

onClickOutside(banner, () => {
  outsideClicked.value = true;

  function changeClickValue() {
    outsideClicked.value = false
  }
  outsideClicked.value = setTimeout(changeClickValue, 1000)
})
</script>

<template>
  <div class="cookie-container">
    <div ref="banner" class="banner" :class="{outsideClicked: outsideClicked}">
      this website uses cookies to display some of its content.
      <div class="content">
        Affected content: Soundcloud Embed
      </div>
      <div class="buttons">
        <button class="button" @click="emit('accepted')">accept</button>
        <button class="button" @click="emit('declined')">decline</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cookie-container {
  height: 100dvh;
  width: 100dvw;
  background: rgba(128, 128, 128, 0.1);
  position: absolute;
  top: 0;
  z-index: 50;

  .banner {
    position: absolute;
    bottom:0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    z-index: 100 !important;
    font-size: 15px;
    text-align: center;
    color: $secondary;
    background: black;
    padding: 1rem;
    border-radius: 5px;

    @media (min-width: 710px) {
      width: 50%;
      font-size: 20px;
    }

    @media (min-width: 1024px) {
      width: 25%;
      font-size: 25px;
    }

    .content {
      font-size: 12px;
      margin-top: 0.3rem;

      @media (min-width: 710px) {
        font-size: 15px;
      }
    }

    &.outsideClicked {
      animation: bounce 1s;
    }

    .buttons .button {
      margin: 1rem;
      padding: 0 1rem;
      font-size: 15px;
      background: transparent;
      border: none;
      color: $a-sun;

      @media (min-width: 710px) {
        font-size: 20px;
      }

      &:hover {
        color: $text-dark;
        cursor: pointer;
      }
    }
  }
}

@keyframes bounce {
  0% {
    bottom: 0.5rem;
  }
  50% {
    bottom: 2rem;
  }
  100% {
    bottom: 0.5rem;
  }
}
</style>
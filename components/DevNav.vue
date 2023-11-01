<script setup lang="ts">
import IconAbout from'~icons/prime/id-card'
import IconProjects from'~icons/prime/book'
import IconTools from'~icons/prime/wrench'
import IconContact from'~icons/prime/comment'
import {useWindowSize} from "@vueuse/core";

const route = ref('')
const path = computed(() => {
  return route.value = useRoute().fullPath
})

const windowWidth = computed(() => {
  const { width, height } = useWindowSize()
  console.log(width.value)
  return width.value
})
</script>

<template>
  <div class="dev-nav">
    <ul :class="{ isHome: path === '/dev/'}">
      <li>
        <NuxtLink class="link bio" to="/dev/bio">
          <div v-if="windowWidth > 800">
            about
          </div>
          <div v-else >
            <icon-about class="icon"/>
          </div>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink class="link projects" to="/dev/projects">
          <div v-if="windowWidth > 800">
            projects
          </div>
          <div v-else >
            <icon-projects class="icon"/>
          </div>
        </NuxtLink
        >
      </li>
      <li>
        <NuxtLink class="link tools" to="/dev/tools">
          <div v-if="windowWidth > 800">
            tools
          </div>
          <div v-else >
            <icon-tools class="icon"/>
          </div>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink class="link contact" to="/dev/contact">
          <div v-if="windowWidth > 800">
            contact
          </div>
          <div v-else >
            <icon-contact class="icon"/>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
* {
  font-family: $a-font-header;
}

.dev-nav {
  position: fixed;
  z-index: 5;
  box-shadow: 0 3px 3px 0 $bg-dark;
  top: 3rem;
  width: 100dvw;
  background: $bg-dark;

  @media (min-width: 710px) {
    top: 6rem;
  }

  @media (min-width: 1024px) {
    top: 0;
    width: 80dvw;
  }

  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 1rem;
    color: $text-dark;
    transition: 0.2s ease-in-out;

    &.isHome {
      flex-direction: column;
      gap: 2rem;

      @media (min-width: 1024px) {
        flex-direction: row;
      }

      li a {
        @media (min-width: 710px) {
          font-size: 60px;
        }
      }
    }

    li {
      list-style: none;
      margin: 0.5rem auto;
      font-family: "Splash", cursive;

      @media (min-width: 1024px) {
        margin: 1rem 3rem;
      }

      a {
        color: $primary;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 30px;

        @media (min-width: 710px) {
          font-size: 50px;
        }

        @media (min-width: 1400px) {
          font-size: 50px;
        }

        &:hover {
          letter-spacing: 0.1rem;
        }
      }
    }

    .router-link-exact-active {
      transition: 0.7s ease-in-out;
      color: $secondary;
    }
  }
}
</style>
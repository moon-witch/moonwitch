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

const { width, height } = useWindowSize()
</script>

<template>
  <div class="dev-nav">
    <ul :class="{ isHome: path === '/dev/'}">
      <li>
        <NuxtLink class="link bio" to="/dev/bio">
          <div v-if="path === '/dev/' && width < 1024">
            about
          </div>
          <div v-else >
            <icon-about class="icon"/>
          </div>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink class="link projects" to="/dev/projects">
          <div v-if="path === '/dev/' && width < 1024">
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
          <div v-if="path === '/dev/' && width < 1024">
            tools
          </div>
          <div v-else >
            <icon-tools class="icon"/>
          </div>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink class="link contact" to="/dev/contact">
          <div v-if="path === '/dev/' && width < 1024">
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
  transition: 0.2s ease-in-out;
  font-family: $a-font-header;
}

.dev-nav {
  position: fixed;
  z-index: 5;
  box-shadow: 0 3px 3px 0 $bg-dark;
  top: 3rem;
  width: 100dvw;
  background: $bg-dark;

  @media (min-width: 1024px) {
    width: 80dvw;
  }

  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 1rem;

    &.isHome {
      flex-direction: column;
    }

    @media (min-width: 1024px) {
      flex-direction: row;
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

        @media (min-width: 1400px) {
          font-size: 2rem;
        }

        &:hover {
          letter-spacing: 0.1rem;
        }
      }
    }

    .router-link-exact-active {
      color: $secondary;
    }
  }
}
</style>
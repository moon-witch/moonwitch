<script setup lang="ts">
</script>

<template>
  <div class="artist-nav">
    <ul>
      <li>
        <NuxtLink class="link" to="/artist/macrame">macrame</NuxtLink>
      </li>
      <li>
        <NuxtLink class="link" to="/artist/audio">audio</NuxtLink>
      </li>
      <li>
        <NuxtLink class="link" to="/artist/visual">visual</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
* {
  font-family: $a-font-header;
}

.artist-nav {
  position: fixed;
  z-index: 5;
  box-shadow: 0 3px 3px 0 $bg-dark;
  top: 4rem;
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
        letter-spacing: 0.005rem;
        transition: 0.2s ease-in-out;

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
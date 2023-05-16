<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
let isExpanded = ref(false);

const toggleNav = () => {
  isExpanded.value = !isExpanded.value;
};

const closeNav = () => {
  isExpanded.value = false;
};

router.afterEach(() => {
  setTimeout(closeNav, 150);
});
</script>

<template>
  <div>
    <div id="toggle-switch" :class="{ moved: isExpanded }" @click="toggleNav">
      <img
        src="/triangle.png"
        :class="{ rotated: isExpanded }"
        id="toggle-img"
      />
    </div>
    <div id="overlay" :class="{ exists: isExpanded }" @click="toggleNav"/>
    <div :class="{ expanded: isExpanded }" class="container">
      <ul>
        <li><RouterLink class="link" to="/">landing</RouterLink></li>
        <li><RouterLink class="link" to="/bio">bio</RouterLink></li>
        <li><RouterLink class="link" to="/projects">projects</RouterLink></li>
        <li><RouterLink class="link" to="/tools">tools</RouterLink></li>
        <li><RouterLink class="link" to="/contact">contact</RouterLink></li>
      </ul>
      <div id="menu-footer">
        <hr id="footer-border" />
        <div class="footer-text">made by moonwitch</div>
        <div class="footer-text">2023</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
* {
  transition: 0.2s ease-in-out;
}

.container {
  position: fixed;
  left: -55vw;
  width: 50vw;
  height: 100vh;
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: $primary;
  overflow-x: hidden;
  z-index: 998;

  @media (min-width: 710px) {
    width: 30%;
  }
}

#overlay {
  position: fixed;
  left: -100vw;
  height: 100vh;
  width: 100vw;
  background: rgba($color: $bg-dark, $alpha: 0.75);
  transition: 0s;
  opacity: 0;
  z-index: 997;
}

ul {
  margin-top: calc($spacing-xl * 4);
  padding-bottom: $spacing-lg;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;

  @media (min-width: 710px) {
    margin-top: 1.5rem;
  }

  @media (min-width: 740px) {
    margin-top: 30vh;
  }

  li {
    list-style: none;
    margin-top: $spacing-lg;
    text-align: center;
    margin-left: -2.5rem;

    @media (min-width: 710px) {
      margin-top: calc($spacing-lg *0.75);
    }

    @media (min-width: 740px) {
      margin-bottom: calc($spacing-lg *0.75);
  }

    .link {
      text-decoration: none;
      color: $bg-dark;
    }
  }
}

.router-link-exact-active {
  background: $bg-dark;
  border-radius: $btn-rounded;
  padding: calc($btn-horiz * 0.5) calc($btn-vert * 2) calc($btn-horiz * 0.5)
    calc($btn-vert * 2);

  &.link {
    color: $primary;
  }
}

#toggle-switch {
  position: fixed;
  top: 45%;
  left: -9%;
  z-index: 999;
  opacity: 50%;
  padding: 0.4rem 0rem 0rem 0.5rem;
  margin: 0.5rem;
  background: $primary;
  border-radius: 0 30px 30px 0;

  @media (min-width: 710px) {
    left: -3%;
  }

  #toggle-img {
    width: 3rem;
    transform: rotate(90deg)
  }
}

.expanded {
  left: 0;
  opacity: 100;
}

.rotated {
  transform: rotate(-90deg) !important;
}

.moved {
  left: 40% !important;
  padding: 0.8rem 0.7rem 0.5rem 0.5rem !important;
  border-radius: 30px !important;
  opacity: 100% !important;

  @media (min-width: 710px) {
    left: 25% !important;
  }
}

.exists {
  left: 0  !important;
  opacity: 100 !important;
}

#menu-footer {
  display: flex;
  flex-direction: column;
  align-items: center;

  #footer-border {
    border-color: $bg-dark;
    width: 50%;
  }

  .footer-text {
    margin: $spacing-sm;
    text-align: center;
    color: $bg-dark;
  }
}
</style>

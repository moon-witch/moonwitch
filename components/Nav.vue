<script setup lang="ts">
const router = useRouter();
const path = useRoute();
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
  <div id="mobileNavContainer">
    <div id="toggle-switch" :class="{ moved: isExpanded }" @click="toggleNav">
      <img
        src="/triangle.png"
        :class="{ rotated: isExpanded }"
        id="toggle-img"
        alt="nav toggle"
      />
    </div>
    <div id="overlay" :class="{ exists: isExpanded }" @click="toggleNav" />
    <div :class="{ expanded: isExpanded }" class="container">
      <ul>
        <li><NuxtLink class="link" to="/">landing</NuxtLink></li>
        <li><NuxtLink class="link" to="/bio">profile</NuxtLink></li>
        <li><NuxtLink class="link" to="/projects">projects</NuxtLink></li>
        <li><NuxtLink class="link" to="/tools">tools</NuxtLink></li>
        <li><NuxtLink class="link" to="/contact">contact</NuxtLink></li>
      </ul>
      <div id="menu-footer">
        <hr id="footer-border" />
        <div class="footer-text">made by moonwitch</div>
        <div class="footer-text">2023</div>
        <div class="link-container">
          <a
            class="link-logo"
            href="https://github.com/moon-witch"
            target="_blank"
            rel="noopener"
          >
            <img id="github" src="/github-mark-white.png" alt="github" />
          </a>
          <a
            class="link-logo"
            href="https://de.linkedin.com/in/joshua-langenbach-873a19252/en"
            target="_blank"
            rel="noopener"
          >
            <img id="linkedin" src="/In-White-26.png" alt="linkedin" />
          </a>
        </div>
      </div>
    </div>
  </div>

  <div id="desktopNavContainer">
    <div v-if="path.path === '/'" id="homePageNav">
      <ul>
        <li><NuxtLink class="link bio" to="/bio">profile</NuxtLink></li>
        <li>
          <NuxtLink class="link projects" to="/projects">projects</NuxtLink>
        </li>
        <li><NuxtLink class="link tools" to="/tools">tools</NuxtLink></li>
        <li><NuxtLink class="link contact" to="/contact">contact</NuxtLink></li>
      </ul>
    </div>
    <div v-else id="notHomePageNav">
      <ul>
        <li><NuxtLink class="link landing center" to="/">landing</NuxtLink></li>
        <li><NuxtLink class="link bio center" to="/bio">profile</NuxtLink></li>
        <li>
          <NuxtLink class="link projects center" to="/projects"
            >projects</NuxtLink
          >
        </li>
        <li>
          <NuxtLink class="link tools center" to="/tools">tools</NuxtLink>
        </li>
        <li>
          <NuxtLink class="link contact center" to="/contact">contact</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
* {
  transition: 0.2s ease-in-out;
}

#mobileNavContainer {
  @media (min-width: 1024px) and (min-height: 768px) {
    display: none;
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
      font-size: calc($text-lg * 0.9);

      @media (min-width: 710px) {
        margin-top: calc($spacing-lg * 0.75);
      }

      @media (min-width: 740px) {
        margin-bottom: calc($spacing-lg * 0.75);
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
      transform: rotate(90deg);
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
    left: 0 !important;
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

    .link-container {
      display: flex;
      width: 50vw;
      margin: 1rem 0;
      justify-content: space-evenly;

      #github {
        width: 2rem;
        filter: brightness(0) saturate(100%) invert(14%) sepia(8%)
          saturate(1026%) hue-rotate(76deg) brightness(94%) contrast(94%);
      }

      #linkedin {
        width: 2rem;
        filter: brightness(0) saturate(100%) invert(14%) sepia(8%)
          saturate(1026%) hue-rotate(76deg) brightness(94%) contrast(94%);
      }
    }
  }
}

#desktopNavContainer {
  position: fixed;
  z-index: 5;
  box-shadow: 0 0 9px 3px $bg-dark;

  @media (max-width: 1023px) {
    display: none;
  }

  @media (max-height: 767px) {
    display: none;
  }

  ul {
    li {
      list-style: none;
    }
  }

  #homePageNav {
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      margin: 40vh 0 0 0;
      li {
        padding: 5rem 5rem;
        text-align: center;
        width: 30vw;
        font-family: "Splash", cursive;
        a {
          color: $primary;
          text-decoration: none;
          text-transform: uppercase;
          font-size: 1.5rem;
          cursor: url("moon.png");

          @media (min-width: 1400px) {
            font-size: 3rem;
          }

          &.bio {
            margin-right: 17rem;

            @media (min-width: 1300px) {
              margin-right: 7rem;
              margin-left: -30rem;
            }
          }

          &.tools {
            margin-right: 17rem;

            @media (min-width: 1300px) {
              margin-right: 7rem;
              margin-left: -11rem;
            }
          }

          &.projects {
            padding-left: 7rem;

            @media (min-width: 1300px) {
              padding-left: 7rem;
              margin-right: -22rem;
            }
          }

          &.contact {
            padding-left: 7rem;

            @media (min-width: 1300px) {
              padding-left: 7rem;
              margin-right: -7rem;
            }
          }

          &:hover {
            letter-spacing: 1rem;
          }
        }
      }
    }
  }

  #notHomePageNav {
    margin: 60px 0 0 0;
    width: 100vw;
    background: $bg-dark;
    ul {
      display: flex;
      justify-content: space-evenly;
      margin: 0 1rem;
      li {
        margin: 1rem 1rem;
        font-family: "Splash", cursive;

        @media (min-width: 1300px) {
          margin: 1rem 3rem;
        }
        a {
          padding: 0.5rem 1rem;
          color: $primary;
          text-decoration: none;
          text-transform: uppercase;
          font-size: 1.5rem;
          cursor: url("moon-cursor.png"), pointer;

          @media (min-width: 1400px) {
            font-size: 2rem;
          }

          &:hover {
            letter-spacing: 0.5rem;
          }
        }
      }
    }

    .router-link-exact-active {
      color: $secondary;
    }
  }
}
</style>

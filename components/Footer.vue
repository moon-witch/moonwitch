<template>
  <div id="footer">
    <div class="links">
      <div class="container">
        <a
            class="link-logo"
            href="https://github.com/moon-witch"
            target="_blank"
            rel="noopener"
        >
          <img id="github" src="/github-mark-white.png" alt="github" />
        </a>
        <div class="legal-name third">moonwitch © 2023</div>
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
    <div class="copyright">
      <NuxtLink to="/imprint" class="legal-link third">imprint</NuxtLink>
      <NuxtLink to="/disclaimer" class="legal-link third">disclaimer</NuxtLink>
    </div>
    </div>
</template>

<style scoped lang="scss">
#footer {
  color: $a-text-dark;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  width: 100vw;
  font-size: 25px;
  margin-top: 3rem;

  .copyright {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0.75rem 0;

    .legal-link {
      font-size: 12px;
      color: $text-dark;
      text-decoration: none;

      @media (min-width: 710px) {
        font-size: 25px;
      }

      &:hover {
        cursor: pointer;
      }

      &:visited {
        color: $text-dark;
      }
    }

    .third {
      width: 33.3%;
      text-align: center;
    }
  }

  .links {
    display: flex;
    justify-content: center;
  }
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: $font-header, serif;
  gap: 2rem;
  
  @media (min-width: 740px) {
    padding: 0 2rem 0 2rem;
  }

  .legal-name {
    font-size: 19px;

    @media (min-width: 710px) {
      font-size: 35px;
    }
  }
}

#github {
  width: 1.5rem;
  filter: brightness(0) saturate(100%) invert(48%) sepia(0%) saturate(8%) hue-rotate(152deg) brightness(98%) contrast(81%);

  @media (min-width: 710px) {
    width: 2.5rem;
  }
}

#linkedin {
  width: 1.5rem;
  filter: brightness(0) saturate(100%) invert(48%) sepia(0%) saturate(8%) hue-rotate(152deg) brightness(98%) contrast(81%);

  @media (min-width: 710px) {
    width: 2.5rem;
  }
}

.link-text {
  display: none;

  @media (min-width: 740px) {
    display: block;
  }
}

.link-logo {
 margin: 0 0.5rem 0 0.5rem;
  padding: 0 0.25rem 0 0.25rem;
  border-radius: 100px;

  :hover {
    transition: 0.2s;
    transform: scale(1.2);
    cursor: crosshair;
  }
}
</style>

<script setup lang="ts">
</script>

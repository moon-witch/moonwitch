<template>
  <div id="footer">
    <div class="links">
      <div class="container">
        <NuxtLink to="/imprint" class="legal-link third">imprint</NuxtLink>
        <a
            class="link-logo"
            href="https://github.com/moon-witch"
            target="_blank"
            rel="noopener"
        >
          <img id="github" src="/github-mark-white.png" alt="github" />
        </a>
        <div class="legal-name third">moonwitch © 2023-2024</div>
        <a
            class="link-logo"
            href="https://de.linkedin.com/in/joshua-langenbach-873a19252/en"
            target="_blank"
            rel="noopener"
        >
          <img id="linkedin" src="/In-White-26.png" alt="linkedin" />
        </a>
        <NuxtLink to="/disclaimer" class="legal-link third">disclaimer</NuxtLink>
      </div>
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
  position: absolute;
  bottom: 0.25rem;

  .legal-link {
    font-size: 16px;
    margin: 0 1rem;
    color: $text-dark;
    text-decoration: none;

    @media (min-width: 710px) {
      font-size: 25px;
      margin: 0 4rem;
    }

    &:hover {
      cursor: pointer;
    }

    &:visited {
      color: $text-dark;
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
  gap: .5rem;
  
  @media (min-width: 740px) {
    padding: 0 2rem 0 2rem;
    gap: 2rem;
  }

  .legal-name {
    font-size: 14px;
    width: fit-content;
    white-space: nowrap;

    @media (min-width: 710px) {
      font-size: 30px;
    }
  }
}

#github {
  width: 1.5rem;
  filter: brightness(0) saturate(100%) invert(48%) sepia(0%) saturate(8%) hue-rotate(152deg) brightness(98%) contrast(81%);
}

#linkedin {
  width: 1.5rem;
  filter: brightness(0) saturate(100%) invert(48%) sepia(0%) saturate(8%) hue-rotate(152deg) brightness(98%) contrast(81%);
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

<template>
  <div id="footer">
    <div class="copyright">
      <div class="container text-line">moonwitch © 2023</div>
    </div>
    <div class="links">
      <div class="container">
        <span class="link-text">built with:</span>
        <a
            id="nuxt"
            class="link-logo"
            href="https://nuxt.com"
            target="_blank"
            rel="noopener"
        >
          <img id="nuxt" src="/icon-black.svg" alt="nuxt" />
        </a>
        <a
            class="link-logo"
            href="https://greensock.com/gsap/"
            target="_blank"
            rel="noopener"
        >
          <img
              id="gsap"
              src="/greensock-gsap-icon-seeklogo.com.svg"
              alt="gsap"
          />
        </a>
      </div>
      <div class="container">
        <span class="link-text">find me on:</span>
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
  position: absolute;
  bottom: 0;

  @media (max-width: 1023px) {
    display: none;
  }

  .copyright {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
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
  
  @media (min-width: 740px) {
    padding: 0 2rem 0 2rem;
  }
}

#nuxt {
  width: 2rem;
  filter: brightness(0) saturate(100%) invert(48%) sepia(0%) saturate(8%) hue-rotate(152deg) brightness(98%) contrast(81%);
}

#gsap {
  width: 2rem;
  filter: brightness(0) saturate(100%) invert(48%) sepia(0%) saturate(8%) hue-rotate(152deg) brightness(98%) contrast(81%);
}

#github {
  width: 2rem;
  filter: brightness(0) saturate(100%) invert(48%) sepia(0%) saturate(8%) hue-rotate(152deg) brightness(98%) contrast(81%);
}

#linkedin {
  width: 2rem;
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

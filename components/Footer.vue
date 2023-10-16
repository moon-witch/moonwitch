<template>
  <div id="footer">
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
    <div class="container text-line">moonwitch © 2023</div>
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
</template>

<style scoped lang="scss">
#footer {
  position: fixed;
  left: 0;
  bottom: 0;
  background: $bg-bright;
  color: $bg-dark;
  display: flex;
  justify-content: space-between;
  height: 3rem;
  width: 100vw;
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
  filter: brightness(0) saturate(100%) invert(14%) sepia(8%) saturate(1026%) hue-rotate(76deg) brightness(94%) contrast(94%);
}

#gsap {
  width: 2rem;
  filter: brightness(0) saturate(100%) invert(14%) sepia(8%) saturate(1026%) hue-rotate(76deg) brightness(94%) contrast(94%);
}

#github {
  width: 2rem;
  filter: brightness(0) saturate(100%) invert(14%) sepia(8%) saturate(1026%) hue-rotate(76deg) brightness(94%) contrast(94%);
}

#linkedin {
  width: 2rem;
  filter: brightness(0) saturate(100%) invert(14%) sepia(8%) saturate(1026%) hue-rotate(76deg) brightness(94%) contrast(94%);
}

.text-line {
  text-align: center;
  font-size: $text-sm;
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

<script setup lang="ts"></script>

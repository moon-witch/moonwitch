<script setup lang="ts">
useHead({
  link: [{ rel: "canonical", href: "https://moonwitch.art/" }],
});

const tools = {
  frameworks: [
    {
      name: "vue",
      text: "great DX for building interactive websites and experiences. supports every other tool i like to use.",
      link: "https://vuejs.org",
      alt: "vue website",
    },
    {
      name: "nuxt",
      text: "for static sites, built with vue DX.",
      link: "https://nuxt.com",
      alt: "nuxt website",
    },
    {
      name: "flutter",
      text: "for cross-platform mobile apps",
      link: "https://flutter.dev",
      alt: "flutter website",
    },
  ],
  libraries: [
    {
      name: "gsap",
      text: "simplifies my code whenever i want to build complex animations.",
      link: "https://greensock.com/gsap/",
      alt: "gsap website",
    },
    {
      name: "tailwindcss",
      text: "sometimes i want simple styles and fast MVPs.",
      link: "https://tailwindcss.com",
      alt: "tailwind css website",
    },
    {
      name: "three js",
      text: "whenever i want to create 3d objects or animations with webgl to simplify the webgl workflow. also to import blender models to the browser and manipulate them further.",
      link: "https://threejs.org",
      alt: "threejs website",
    },
  ],
  software: [
    {
      name: "blender",
      text: "to create complex and quality 3d models and particles.",
      link: "https://www.blender.org",
      alt: "blender website",
    },
    {
      name: "adobe illustrator",
      text: "for the creation of custom svgs.",
      link: "https://www.adobe.com/products/illustrator.html",
      alt: "adobe illustrator website",
    },
    {
      name: "fl studio",
      text: "here i create custom soundeffects and music.",
      link: "https://www.image-line.com/fl-studio/",
      alt: "fl studio website",
    },
  ],
};
</script>

<template>
  <div id="mainContainer">

    <div id="first" class="subHeader">frameworks</div>
    <div class="container">
      <div v-for="tool in tools.frameworks" class="toolContainer">
        <div class="toolTitle">
          <a :href="tool.link" target="_blank" :alt="tool.alt" rel="noopener">{{
            tool.name
          }}</a>
        </div>
        <div class="toolText">{{ tool.text }}</div>
      </div>
    </div>

    <div class="subHeader">libraries</div>
    <div class="container">
      <div v-for="tool in tools.libraries" class="toolContainer">
        <div class="toolTitle">
          <a :href="tool.link" target="_blank" :alt="tool.alt" rel="noopener">{{
            tool.name
          }}</a>
        </div>
        <div class="toolText">{{ tool.text }}</div>
      </div>
    </div>

    <div class="subHeader">software</div>
    <div class="container">
      <div v-for="tool in tools.software" class="toolContainer">
        <div class="toolTitle">
          <a :href="tool.link" target="_blank" :alt="tool.alt" rel="noopener">{{
            tool.name
          }}</a>
        </div>
        <div class="toolText">{{ tool.text }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  @media (min-width: 740px) {
    display: flex;
    justify-content: space-between;
  }
}

#mainContainer {
  margin: 7rem 0 4rem 0;
  user-select: none;

  @media (min-width: 1300px) {
    margin: 7rem 11rem;
  }

  #first {
    margin-top: 12rem;
  }

  .subHeader {
    margin: 3rem 0 1rem 0;
    font-size: 1.2rem;
    text-align: center;
    color: $secondary;

    @media (min-width: 1024px) {
      font-size: 1.5rem;
    }
  }

  .toolContainer {
    background: $secondary;
    margin: 2rem 1rem 0 1rem;
    padding: 1rem;

    @media (min-width: 740px) {
      width: 30vw;
    }

    .toolTitle {
      text-align: center;
      font-size: 1.5rem;
      margin: 2rem 0 2rem 0;

      a {
        color: $bg-dark;
      }
    }

    .toolText {
      text-align: center;
    }
  }
}
</style>

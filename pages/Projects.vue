<script setup lang="ts">
useHead({
  link: [{rel: "canonical", href: "https://moonwitch.art/"}],
});

const projects = [
  {
    name: "portfolio",
    img: "/moonwitch2.png",
    alt: "this portfolio",
    text1: "this portfolio. 100% built with pure scss, gsap and nuxt.",
    text2: "simple design. purposeful animations. geometrical shapes.",
    tools: ["vue", "gsap", "scss"],
    link: 'https://moonwitch.art',
    code: "https://github.com/moon-witch/moonwitch",
    codeAlt: "portfolio git repo",
  },
  {
    name: "scooty - e-scooter rental",
    img: "/scootylogo.png",
    alt: "a website to rent e-scooters",
    text1: "built with vue, supabase and openStreetMaps",
    text2: "includes renting, time tracking and admin functionality",
    tools: ["vue", "supabase", "openStreetMaps"],
    link: 'https://scooty.vercel.app',
    code: "https://github.com/moon-witch/scooty",
    codeAlt: "scooty - e-scooter rental git repo",
  },
];
</script>

<template>
  <div class="notice">
    click the logos to check out the live websites
  </div>
  <div id="container">
    <div v-for="project in projects" id="projectContainer">
      <div id="cardContainer">
        <div id="imgContainer">
          <a :href="project.link" target="_blank">
            <img :src="project.img" :alt="project.alt"/>
          </a>
        </div>
        <div id="infoContainer">
          <div id="name">{{ project.name }}</div>
          <div id="text1">
            {{ project.text1 }}
          </div>
          <div id="text2">
            {{ project.text2 }}
          </div>
        </div>
        <div id="techContainer">
          <div id="text">
            <div id="tools">
              <div v-for="tool in project.tools">{{ tool }}</div>
            </div>
            <div id="code">
              <a
                  :href="project.code"
                  target="_blank"
                  :alt="project.codeAlt"
                  rel="noopener"
              >code</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.notice {
  display: flex;
  justify-content: center;
  margin-top: 12rem;
}
#container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1rem 0;
  user-select: none;

  @media (min-width: 1300px) {
    margin: 1rem 0 6rem 0;
    padding: 0 11rem;
  }
}

#cardContainer {
  height: 20rem;
  margin: 1rem;
  position: relative;
  border: 3px dashed $secondary;

  @media (min-width: 740px) {
    width: 80vw;
  }

  @media (min-width: 1300px) {
    width: 30vw;
    margin: 2rem 3rem;
  }

  #imgContainer {
    position: relative;
    height: 8rem;
    background: $secondary;

    img {
      position: absolute;
      height: 8rem;
      right: 0;
      left: 0;
      margin: 0 auto;
    }
  }

  #infoContainer {
    position: relative;
    height: 10rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    #name {
      text-align: center;
      margin: 1rem 0 -1rem 0;
      color: $secondary;
      font-size: 1.2rem;
    }

    #text1 {
      margin: 0 0 0 0.5rem;
      color: $secondary;

      @media (min-width: 1300px) {
        margin: 0.5rem 0 -1rem 2rem;
      }
    }

    #text2 {
      text-align: end;
      margin: 0 0 1rem 0;
      color: $secondary;

      @media (min-width: 1300px) {
        margin: 0.5rem 1rem 1rem 0;
      }
    }
  }

  #techContainer {
    height: 2rem;
    width: 100%;
    position: absolute;
    background: $secondary;
    bottom: 0;

    #text {
      display: flex;
      justify-content: space-between;
      margin: 0 1rem 0 1rem;

      #tools {
        display: flex;
        margin: 0.3rem 0.5rem 0.3rem 0;

        div {
          padding: 0 0.5rem 0 0.5rem;
          margin: 0 0.5rem 0 0.5rem;
          border: 1px solid $bg-dark;
        }
      }

      #code {
        display: flex;
        font-size: 1.3rem;
        margin: 0.25rem 0 0 0;

        a {
          color: $bg-dark;
        }
      }
    }
  }
}
</style>

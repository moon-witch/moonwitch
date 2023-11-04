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
  <div class="project-container">
    <div class="notice">
      click the logos to check out the live websites
    </div>
    <div class="container">
      <div v-for="project in projects" class="projectContainer">
        <div class="cardContainer">
          <div class="imgContainer">
            <a :href="project.link" target="_blank">
              <img :src="project.img" :alt="project.alt"/>
            </a>
          </div>
          <div class="infoContainer">
            <div class="name">{{ project.name }}</div>
            <div class="text1">
              {{ project.text1 }}
            </div>
            <div class="text2">
              {{ project.text2 }}
            </div>
          </div>
          <div class="techContainer">
            <div class="text">
              <div class="tools">
                <div v-for="tool in project.tools" class="tool">{{ tool }}</div>
              </div>
              <div class="code">
                <a
                    :href="project.code"
                    target="_blank"
                    :alt="project.codeAlt"
                    rel="noopener"
                >code</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-container {
  margin: 9rem 0 3rem 0;
  overflow-x: hidden;
}
.notice {
  display: flex;
  justify-content: center;
  margin: 2rem 5rem;
  text-align: center;
  color: $text-dark;
  font-weight: bold;
}
.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  user-select: none;
  gap: 2rem;

  @media (min-width: 1300px) {
    margin: 1rem 0 6rem 0;
    padding: 0 11rem;
  }
}

.cardContainer {
  height: 23rem;
  margin: 1rem;
  position: relative;

  @media (min-width: 740px) {
    width: 80vw;
  }

  @media (min-width: 1300px) {
    width: 30vw;
    margin: 2rem 3rem;
  }

  .imgContainer {
    position: relative;
    height: 8rem;
    background: $secondary;

    img {
      position: absolute;
      height: 8rem;
      right: 0;
      left: 0;
      margin: 0 auto;
      background: black;
      border-radius: 0 0 50px 50px;
      padding: 1rem;
    }
  }

  .infoContainer {
    position: relative;
    height: 12rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    .name {
      text-align: center;
      margin: 2rem 0 -1rem 0;
      color: $secondary;
      font-size: 1.2rem;
      font-weight: bold;
    }

    .text1 {
      margin: 0 0 0 0.5rem;
      color: $text-dark;

      @media (min-width: 1300px) {
        margin: 0.5rem 0 -1rem 2rem;
      }
    }

    .text2 {
      text-align: end;
      margin: 0 0 1rem 0;
      color: $text-dark;

      @media (min-width: 1300px) {
        margin: 0.5rem 1rem 1rem 0;
      }
    }
  }

  .techContainer {
    height: fit-content;
    width: 100%;
    position: absolute;
    background: $secondary;
    bottom: 0;

    .text {
      display: flex;
      justify-content: space-between;
      margin: 0 1rem 0 1rem;

      .tools {
        display: flex;
        flex-wrap: wrap;
        margin: 0.3rem 0.5rem 0.3rem 0;

        .tool {
          padding: 0.1rem 0.2rem;
        }
      }

      .code {
        display: flex;
        align-items: center;
        font-size: 1.3rem;

        a {
          color: $bg-dark;
        }
      }
    }
  }
}
</style>

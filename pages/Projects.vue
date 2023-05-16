<script setup lang="ts"></script>

<template>
  <div id="projectContainer">
    <div id="title">projects</div>
    <div id="cardContainer">
      <div id="imgContainer">
        <img src="/moonwitch2.png" alt="this portfolio" />
      </div>
      <div id="infoContainer">
        <div id="text1">
          this portfolio. 100% built with pure scss, gsap and nuxt.
        </div>
        <div id="text2">
          simple design. purposeful animations. geometrical shapes.
        </div>
      </div>
      <div id="techContainer">
        <div id="text">
          <div id="tools">
            <div>vue</div>
            <div>gsap</div>
            <div>scss</div>
          </div>
          <div id="code">
            <a
              href="https://github.com/moon-witch/moonwitch"
              target="_blank"
              alt="portfolio git repo"
              rel="noopener"
              >code</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#projectContainer {
  margin: 0 0 7rem 0;
}

#title {
  margin: 7rem 0 0 0;
  text-align: center;
  font-size: 1.5rem;
}

#cardContainer {
  height: 20rem;
  margin: 2rem 1rem 0 1rem;
  position: relative;
  border: 3px dashed $secondary;

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
    margin: 1rem;
    position: absolute;
    height: 10rem;
    width: 93%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    #text1 {
      margin: 1rem 0 0 0;
    }

    #text2 {
      text-align: end;
      margin: 1rem 0 4rem 0;
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
        justify-content: space-between;
        margin: 0.3rem 0.5rem 0.3rem 0;

        div {
          padding: 0 0.5rem 0 0.5rem;
          margin: 0 0.5rem 0 0.5rem;
          border: 1px solid $bg-dark;
        }
      }

      #code {
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

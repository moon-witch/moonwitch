<script setup lang="ts">
useHead({
  link: [{ rel: "canonical", href: "https://moonwitch.art/" }],
});
</script>

<template>
  <div id="bioContainer">
    <div id="headContainer">
      <img src="/profilepicsmol.jpg" id="imageOfMe" alt="image of moonwitch" />
      <span id="nameTag">JOSHUA LANGENBACH</span>
      <div id="backgroundElement"></div>
    </div>

    <div id="bodyContainer">
      <div id="slogan1">
        I enjoy working creatively and exploring new possibilities.
      </div>
      <div id="slogan2">
        Every project is unique, every element placed with purpose.
      </div>
      <h1 id="slogan3">Consciously designed to bring joy.</h1>
    </div>

    <div id="skillContainer">
      <div id="skillsHead">I create your website for</div>
      <ul>
        <li>your art</li>
        <li>your non-profit</li>
        <li>your portfolio</li>
        <li>your business</li>
        <li>your online shop</li>
        <li class="long">
          ...and anything else you'd like to see as a website.
        </li>
      </ul>
      <div id="contact"><NuxtLink to="/contact">contact me</NuxtLink></div>
    </div>

    <div id="interestTopic">
      <div id="interestContainer">
        <div id="interestsHead">Personally, I am very interested in</div>
        <ul>
          <li>responsible use of technology</li>
          <li>because the more we create, the more we have to understand</li>
          <li>freedom of speech</li>
          <li>
            because every voice must be heard, so all beings can coexist
            peacefully
          </li>
          <li>climate activism</li>
          <li>
            because mother nature has suffered enough and the least we can do is
            help her to recover
          </li>
        </ul>
      </div>

      <div id="topicsContainer">
        <div id="topicsHead">My favorite topics to chat about are</div>
        <ul>
          <li>
            artifical intelligence
            <img
              src="/pentagram.png"
              alt="image depicting the interconnectedness of neurons"
            />
          </li>
          <li>
            <img
              src="/sol.svg"
              alt="stylized image of a beautiful sun"
            />consciousness
          </li>
          <li>
            spirituality<img
              src="/fibonacci.png"
              alt="stylized image of the fibonacci sequence"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#bioContainer {
  margin: 7rem 0.5rem 5rem 0.5rem;
  padding: 1rem;
  overflow-x: hidden;
  user-select: none;

  @media (min-width: 710px) {
    margin: 7rem 3rem 5rem 3rem;
  }
}

#headContainer {
  position: relative;
  margin: auto;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 710px) {
    padding: 0 5rem 0 5rem;
  }

  @media (min-width: 1300px) {
    padding: 0 38rem;
    margin: 3rem 0 0 0;
  }

  @media (min-width: 3000px) {
    padding: 0 68rem;
    margin: 3rem 0 0 0;
  }

  #imageOfMe {
    height: 8rem;
    border-radius: 100px;
    margin: 1rem;
    z-index: 2;
    box-shadow: 0 0 6px 6px $bg-dark;

    @media (min-width: 1300px) {
      height: 11rem;
    }
  }

  #nameTag {
    font-size: 1.5rem;
    z-index: 2;

    @media (min-width: 1300px) {
      font-size: 2rem;
    }
  }

  #backgroundElement {
    position: absolute;
    height: 75px;
    background: $primary;
    top: 27%;
    left: -4%;
    z-index: 1;

    @media (min-height: 400px) {
      width: 95vw;
    }

    @media (min-width: 710px) {
      width: 100vw;
      left: -11%;
    }

    @media (min-width: 1300px) {
      width: 60vw;
      left: 0;
      right: 0;
      margin: auto;
      height: 90px;
    }
  }
}

#bodyContainer {
  margin-top: 1rem;
  background: $secondary;
  padding: 1rem 0 1rem 0;

  @media (min-width: 1300px) {
    padding: 1rem;
    margin: 5rem 22rem;
  }

  #slogan1 {
    margin: 2rem;
    font-size: 1.1rem;
  }

  #slogan2 {
    text-align: end;
    margin: 2rem;
    font-size: 1.1rem;
  }

  #slogan3 {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 400;
  }
}

#skillContainer {
  background: $secondary;
  margin: 3rem 0 0 0;
  padding: 1rem 0 1rem 0;

  @media (min-width: 1300px) {
    padding: 1rem 5rem;
    margin: 5rem 22rem;
  }

  #skillsHead {
    font-size: 1.2rem;
    text-align: center;
  }

  ul {
    list-style: none;

    li {
      margin: 0.5rem 0 0.2rem 0;
      line-height: 1.6rem;
      padding: 0.5rem 2rem 0.5rem 2rem;
    }

    li:not(.long) {
      line-height: 1.6rem;
      border: 1px solid $bg-dark;
      border-radius: 50px;
      width: 100%;
      padding: 0.5rem 2rem 0.5rem 2rem;

      @media (min-width: 740px) {
        margin: 0.5rem 0 0.5rem 16rem;
      }

      @media (min-width: 1300px) {
        margin: 0.5rem 0 0.5rem 22rem;
      }
    }

    li:nth-of-type(even):not(.long) {
      margin-left: 3rem;
      width: 100%;

      @media (min-width: 740px) {
        margin: 0.5rem 0 0.5rem 8rem;
      }

      @media (min-width: 1300px) {
        margin: 0.5rem 0 0.5rem 11rem;
      }
    }

    .long {
      text-align: center;
    }
  }

  #contact {
    transition: 0.2s ease;
    text-align: center;
    font-size: 1.1rem;
    background: $bg-dark;
    padding: 0.2rem 0 0.2rem 0;

    a {
      text-decoration: none;
      color: $secondary;
    }

    &:hover {
      transition: 0.2s ease;
      letter-spacing: 0.1rem;
    }
  }
}

#interestTopic {
  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    gap: 5rem;
  }
}

#interestContainer {
  background: $secondary;
  margin: 3rem 0 0 0;
  padding: 1rem 0 1rem 0;

  @media (min-width: 1024px) {
    padding: 1rem 5rem;
    width: 30vw;
  }

  #interestsHead {
    font-size: 1.2rem;
    margin: 0 1rem 0 1rem;
    text-align: center;
  }

  ul {
    list-style: none;

    li:nth-of-type(odd) {
      text-align: start;
      font-size: 1.1rem;
      margin-left: -1rem;
      padding: 1rem 0 1rem 0;
    }

    li:nth-of-type(even) {
      text-align: end;
      margin: 0 1.5rem 0 0.5rem;
      font-style: italic;
    }
  }
}

#topicsContainer {
  background: $secondary;
  margin: 3rem 0 0 0;
  padding: 1rem 0 1rem 0;

  @media (min-width: 1024px) {
    padding: 1rem 5rem;
    width: 30vw;
  }

  #topicsHead {
    font-size: 1.2rem;
    margin: 0 1rem 0 1rem;
    text-align: center;
  }

  ul {
    list-style: none;

    @media (min-width: 1024px) {
      margin: 4rem 0 0 0;
    }

    li {
      display: flex;
      justify-content: center;
      font-size: 0.8rem;
      text-align: center;
      line-height: 3rem;

      @media (min-width: 1400px) {
        font-size: 1.5rem;
        line-height: 5rem;
      }

      img {
        width: 2rem;
        height: 2rem;
        margin: 0.5rem 1rem 0 1rem;

        @media (min-width: 1400px) {
          width: 3rem;
          height: 3rem;
        }
      }
    }
  }
}
</style>

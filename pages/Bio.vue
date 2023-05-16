<script setup lang="ts"></script>

<template>
  <div id="bioContainer">
    <div id="headContainer">
      <img src="/profilepic.jpg" id="imageOfMe" alt="image of moonwitch" />
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
      <div id="slogan3">Consciously designed to bring joy.</div>
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
      <div id="contact">Contact me</div>
    </div>

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
          artifical intelligence <img src="/pentagram.png" />
        </li>
        <li><img src="/sol.svg" />consciousness</li>
        <li>spirituality<img src="/fibonacci.png" /></li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
#bioContainer {
  display: absolute;
  margin: 7rem 0.5rem 5rem 0.5rem;
  padding: 1rem;

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

  #imageOfMe {
    height: 8rem;
    border-radius: 100px;
    margin: 1rem;
    z-index: 2;
    box-shadow: 0 0 6px 6px $bg-dark;
  }

  #nameTag {
    font-size: 1.5rem;
    z-index: 2;
  }

  #backgroundElement {
    position: absolute;
    height: 75px;
    background: $primary;
    top: 27%;
    left:-4%;
    z-index: 1;

    @media (min-height: 400px) {
      width: 95vw;
    }

    @media (min-width: 710px) {
      width: 100vw;
      left: -11%;
    }
  }
}

#bodyContainer {
  margin-top: 1rem;
  background: $secondary;
  padding: 1rem 0 1rem 0;

  #slogan1 {
    margin-left: 1rem;
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
  }
}

#skillContainer {
  background: $secondary;
  margin: 3rem 0 0 0;
  padding: 1rem 0 1rem 0;

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
    }

    li:nth-of-type(even):not(.long) {
      margin-left: 3rem;
      width: 100%;
    }
  }

  #contact {
    text-align: center;
    font-size: 1.1rem;
    background: $primary;
    padding: 0.2rem 0 0.2rem 0;
  }
}

#interestContainer {
  background: $secondary;
  margin: 3rem 0 0 0;
  padding: 1rem 0 1rem 0;

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

  #topicsHead {
    font-size: 1.2rem;
    margin: 0 1rem 0 1rem;
    text-align: center;
  }

  ul {
    list-style: none;

    li {
      display: flex;
      justify-content: center;
      font-size: 1rem;
      text-align: center;
      margin-left: -2rem;
      line-height: 4rem;

      img {
        width: 3rem;
        height: 3rem;
        margin: 0.5rem 1rem 0 1rem;
      }
    }
  }
}
</style>
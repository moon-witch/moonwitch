<script setup lang="ts">
import {onMounted, ref} from "vue";

useHead({
  link: [{ rel: "canonical", href: "https://moonwitch.art/" }],
});

/*onMounted(() => {
  if (window.emailjs) {
    window.emailjs.init({
      publicKey: "CqY99CYQd8rD5pC2F",
      throttle: 2000
    })
  }
})*/

const error = ref(false);
const success = ref(false);
const loading = ref(false);
const form = ref({
  name: "",
  mail: "",
  subject: "",
  message: "",
});

async function submit(form: Object) {
  console.log(form);
}
</script>

<template>
  <div class="mainContainer">
    <div class="mainText">
      <div class="first">you can contact me through LinkedIn or just drop me a mail.</div>
      <div>
        make sure to include as much info as possible about your desired
        project.
      </div>
      <div>i'm looking forward to hear from you!</div>
    </div>
    <div class="linkContainer">
      <a
        class="liLogo"
        href="https://de.linkedin.com/in/joshua-langenbach-873a19252/en"
        target="_blank"
        rel="noopener"
        ><img class="linkedin" src="/In-White-26.png" alt="linkedin" />
      </a>
      <div class="mail">joshua_develops@proton.me</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.mainContainer {
  margin: 14rem 1rem 3rem 1rem;

  @media (min-width: 710px) {
    margin: 28rem 1rem 4rem 1rem;
  }

  @media (min-width: 1400px) {
    margin: 22rem 1rem 4rem 1rem;
  }

  .title {
    text-align: center;
    font-size: 1.5rem;
  }

  .mainText {
    text-align: center;
    margin: 2rem 0 0 0;
    user-select: none;
    color: $text-dark;
    font-weight: bold;

    .first {
      margin-bottom: 2rem;
      font-size: 1.5rem;
    }

    @media (min-width: 710px) {
      margin: 5rem 0 0 0;
    }

    div {
      margin: 1rem 0 0 0;
      font-size: 1.2rem;
    }
  }

  .linkContainer {
    margin: 1rem 1rem 0 1rem;
    padding: 1rem 0 1rem 1rem;
    font-size: 1.1rem;
    font-weight: bold;
    background: $secondary;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;

    @media (min-width: 710px) {
      margin: 3rem 0 9rem 0;
    }

    @media (min-width: 740px) {
      margin: 3rem 1rem 9rem 1rem;
      padding: 1rem 0 1rem 9rem;
    }

    @media (min-width: 1400px) {
      margin: 3rem 35rem;
      padding: 1rem 3rem;
    }

    @media (min-width: 2000px) {
      margin: 3rem 60rem;
    }
    @media (min-width: 3000px) {
      margin: 3rem 80rem;
    }

    a {
      width: fit-content;
      filter: invert(29%) sepia(0%) saturate(6133%) hue-rotate(343deg) brightness(34%) contrast(90%);

      img:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>

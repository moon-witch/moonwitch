<script setup lang="ts">
import { ref } from "vue";

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
  <div id="mainContainer">
    <div id="mainText">
      <div>you can contact me through LinkedIn or just drop me a mail.</div>
      <div>
        make sure to include as much info as possible about your desired
        project.
      </div>
      <div>i'm looking forward to hear from you!</div>
    </div>
    <div id="linkContainer">
      <a
        id="liLogo"
        href="https://de.linkedin.com/in/joshua-langenbach-873a19252/en"
        target="_blank"
        rel="noopener"
        ><img
          id="linkedin"
          src="/In-White-26.png"
          alt="linkedin"
        />
      </a>
      <div id="mail">joshua_develops@proton.me</div>
    </div>
    <div id="subText">
      alternatively you can use the form below to send me a mail.
    </div>
    <form @submit.prevent="submit(form)">
      <div id="nameContainer">
        <input
          id="contactName"
          v-model="form.name"
          name="contactName"
          type="text"
          required
        />
        <label for="contactName">name</label>
      </div>

      <div id="mailContainer">
        <input
          id="contactMail"
          v-model="form.mail"
          name="contactMail"
          type="email"
          required
        />
        <label for="contactMail">mail</label>
      </div>

      <div id="subjectContainer">
        <input
          id="contactSubject"
          v-model="form.subject"
          name="contactSubject"
          type="text"
          required
        />
        <label for="contactSubject">subject</label>
      </div>

      <div id="messageContainer">
        <textarea
          id="contactMessage"
          v-model="form.message"
          name="contactMessage"
          type="text"
          required
        />
        <label for="contactMessage">your message</label>
      </div>
      <div v-if="error" class="feedback"></div>
      <div v-if="success" class="feedback"></div>
      <button type="submit" id="submit">
        <template v-if="loading"></template>
        <template v-if="!loading">submit</template>
      </button>
    </form>
  </div>
</template>

<style scoped lang="scss">
#mainContainer {
  margin: 11rem 1rem 4rem 1rem;

  #title {
    text-align: center;
    font-size: 1.5rem;
  }

  #mainText {
    text-align: center;
    margin: 2rem 0 0 0;

    @media (min-width: 710px) {
      margin: 5rem 0 0 0;
    }

    div {
      margin: 1rem 0 0 0;
      font-size: 1.2rem;
    }
  }

  #linkContainer {
    margin: 1rem 1rem 0 1rem;
    padding: 1rem 0 1rem 1rem;
    font-size: 1.1rem;
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

    @media (min-width: 1300px) {
      margin: 3rem 44rem;
      padding: 1rem 3rem;
    }
  }

  #subText {
    margin: 2rem 1rem 0 1rem;
    font-size: 1.2rem;
    text-align: center;
  }

  form {
    text-align: center;
    margin: 1rem 1rem 0 1rem;
    padding: 0.5rem 0 0.5rem 0;
    font-size: 1.1rem;
    background: $secondary;

    @media (min-width: 1300px) {
      margin: 3rem 33rem;
    }

    #nameContainer {
      margin: 2rem 0 2rem 0;
      position: relative;

      input {
        padding: 0.2rem;
        border: none;
        background: $bg-dark;
        font-family: "Sono";
        font-size: 1.1rem;

        @media (min-width: 710px) {
          width: 30rem;
        }
      }

      label {
        position: absolute;
        left: 23%;
        top: -1.5rem;
      }

      input:focus {
        background: $primary;
      }

      input:valid + label {
        color: $primary;
      }
    }

    #mailContainer {
      margin: 2rem 0 2rem 0;
      position: relative;

      input {
        padding: 0.2rem;
        border: none;
        background: $bg-dark;
        font-family: "Sono";
        font-size: 1.1rem;

        @media (min-width: 710px) {
          width: 30rem;
        }
      }

      label {
        position: absolute;
        left: 23%;
        top: -1.5rem;
      }

      input:focus {
        background: $primary;
      }

      input:valid + label {
        color: $primary;
      }
    }

    #subjectContainer {
      margin: 2rem 0 2rem 0;
      position: relative;

      input {
        padding: 0.2rem;
        border: none;
        background: $bg-dark;
        font-family: "Sono";
        font-size: 1.1rem;

        @media (min-width: 710px) {
          width: 30rem;
        }
      }

      label {
        position: absolute;
        left: 23%;
        top: -1.5rem;
      }

      input:focus {
        background: $primary;
      }

      input:valid + label {
        color: $primary;
      }
    }

    #messageContainer {
      margin: 4rem 0 2rem 0;
      position: relative;

      textarea {
        padding: 0.2rem;
        margin: 0 0 3rem 0;
        height: 10rem;
        width: 16rem;
        border: none;
        background: $bg-dark;
        font-family: "Sono";
        font-size: 1.1rem;

        @media (min-width: 710px) {
          width: 35rem;
        }

        @media (min-width: 1300px) {
          width: 40rem;
        }
      }

      label {
        position: absolute;
        left: 15%;
        top: -1.5rem;
      }

      textarea:focus {
        background: $primary;
      }

      textarea:valid + label {
        color: $primary;
      }
    }

    .feedback {
      margin: 1rem 0 1rem 0;
    }

    button {
      width: 100%;
      height: 2.5rem;
      background: $primary;
      border: none;
      padding: 0.5rem;
      margin: -1rem;
      font-size: 1.1rem;
      font-family: "Sono";
      transition: 0.2s ease;

      &:hover {
        transition: 0.2s ease;
        letter-spacing: 0.1rem;
        cursor: crosshair;
      }
    }
  }
}
</style>

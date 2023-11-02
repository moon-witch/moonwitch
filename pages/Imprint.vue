<script setup lang="ts">

</script>

<template>
  <div class="imprint-container">
    <div class="header">imprint</div>
    <div class="legal">
      <div>This website is owned by</div>
      <div>Joshua Langenbach</div>
      <div class="email"><span class="mail">e-mail: </span> joshua_develops@proton.me</div>
      <div class="inquiry">For any inquiries about content of the website please contact me directly through my e-mail.</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.imprint-container {
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $text-dark;
  flex-direction: column;
  gap: 6rem;

  .header {
    font-size: 30px;
    font-weight: bold;

    @media (min-width: 1024px) {
      font-size: 50px;
    }
  }

  .legal {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: 1024px) {
      font-size: 30px;
    }

    .email {
      margin-top: 0.5rem;

      .mail {
        font-weight: bold;
      }
    }

    .inquiry {
      text-align: center;
      margin-top: 2rem;
      padding: 1rem;
    }
  }
}
</style>
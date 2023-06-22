<script setup lang="ts"></script>

<template>
  <div class="wrap">
    <div id="moon" />
    <div id="name" data-text="moonwitch">moonwitch</div>
  </div>
</template>

<style scoped lang="scss">
.wrap {
  position: fixed;
  bottom: 5rem;
  right: 2rem;
  height: 3rem;
  width: 7rem;
  border-radius: 30px;
  background: $bg-dark;
  user-select: none;

  @media (max-width: 1300px) {
    display: none;
  }
}

@mixin glitchCopy {
  content: attr(data-text);
  position: absolute;
}

#moon {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 9px 6px 0 3px $primary;
}

#name {
  position: relative;
  top: 27%;
  left: 6%;
  font-size: 1rem;
  color: $secondary;
  animation: glitch 1s infinite linear alternate-reverse;

  &::before {
    @include glitchCopy;
    left: 2px;
    text-shadow: -2px 0 $primary;
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim 5s infinite linear alternate-reverse;
  }

  &::after {
    @include glitchCopy;
    left: -2px;
    text-shadow: -2px 0 $primary, 2px 2px $primary;
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim2 5s infinite linear alternate-reverse;
  }
}

@keyframes glitch-anim {
  $steps: 20;
  @for $i from 0 to $steps {
    #{percentage($i*(calc(1/$steps)))} {
      clip: rect(random(100) + px, 9999px, random(100) + px, 0);
      transform: skew((calc(random(100) / 100)) + deg);
    }
  }
}

@keyframes glitch-anim2 {
  $steps: 20;
  @for $i from 0 to $steps {
    #{percentage($i*(calc(1/$steps)))} {
      clip: rect(random(100) + px, 9999px, random(100) + px, 0);
      transform: skew((calc(random(100) / 100)) + deg);
    }
  }
}

@keyframes glitch-skew {
  $steps: 10;
  @for $i from 0 to $steps {
    #{percentage($i*(calc(1/$steps)))} {
      transform: skew((calc(random(100) / 100)) + deg);
    }
  }
}
</style>

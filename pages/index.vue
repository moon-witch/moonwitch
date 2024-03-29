<script setup lang="ts">
import gsap from "gsap";
import { onMounted, ref } from "vue";
import IconAngleLeft from'~icons/prime/angle-left'
import IconAngleRight from'~icons/prime/angle-right'
import type { Container } from 'tsparticles-engine'

useHead({
  link: [{ rel: "canonical", href: "https://moonwitch.art/" }]
});

definePageMeta({
  layout: 'landing'
})

const artist = ref()
const developer = ref()

const sol = ref<SVGSVGElement | null>(null);

onMounted(() => {
  animatePaths();
});

function animatePaths(): void {
  const paths = sol.value?.querySelectorAll("path");

  if (paths) {
    gsap.set(paths, { strokeDasharray: 1000 });

    paths.forEach((path: SVGPathElement, index: number) => {
      if (index % 2 != 0) {
        gsap.to(path, {
          strokeDasharray: path.getTotalLength(),
          strokeDashoffset: path.getTotalLength(),
          stagger: {
            each: 10,
            from: "center",
            grid: "auto",
            ease: "power2.inOut",
          },
          duration: 9,
          ease: "power1.out",
          yoyo: true,
          repeat: -1,
          delay: -5.5
        });
      }
    });
  }
}

const options = {
  fullScreen: {
    enable: true,
    zIndex: -1
  },
  particles: {
    color: {
      value: "#000"
    },
    links: {
      color: "#000",
      enable: true
    },
    move: {
      enable: true
    },
    number: {
      value: 100
    }
  }
}
</script>

<template>
  <div>
    <NuxtParticles
        id="tsparticles"
        :options="options"
    >
    </NuxtParticles>
    <div class="landing-container">
      <div class="link-container third">
        <NuxtLink to="artist/">
          <div class="link-box" ref="artist">
            <icon-angle-left class="icon" />
            <div class="text">
              the artist
            </div>
          </div>
        </NuxtLink>
      </div>
      <div class="banner-container third">
        <div class="sol-container">
          <svg
              id="Layer_1"
              class="sol"
              ref="sol"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 433.76 429.14"
          >
            <circle class="cls-1" cx="216.26" cy="214.08" r="103.5" />
            <ellipse class="cls-2" cx="216.26" cy="313.58" rx="25.5" ry="4" />
            <ellipse class="cls-2" cx="216.26" cy="114.58" rx="25.5" ry="4" />
            <path
                class="cls-3"
                d="M333.45,319.86"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-3"
                d="M337.6,321.5a124.7,124.7,0,0,1-79.93,0"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-3"
                d="M257.49,512.5a124.7,124.7,0,0,1,79.93,0"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-3"
                d="M350.62,328.07c-46.58,18.37-88.53-3.63-106,0"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-4"
                d="M361.42,335.49c-51.85,24.12-112.09-11.75-127.57,0"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-3"
                d="M372,345c-66.15,25.76-132.77-11.69-148.65,0"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-1"
                d="M379.93,354.23c-71.44,29.25-142.38-11.83-164.59,0"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-3"
                d="M387.12,365c-83,33.28-164.71-20.56-179,0"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-4"
                d="M393.28,377.37c-76.8,26.85-163.89-17.17-191.28,0"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-3"
                d="M396.51,386.29c-82.53,31.27-157.07-21.32-197.74,0"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-3"
                d="M398.15,392.25c-94.11,31.53-181-14.83-201,0"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-1"
                d="M400.26,403.49c-82,37.47-183.09-17-205.25,0"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-3"
                d="M401.14,417c-87.31,25-188.07-19.47-207,0"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-3"
                d="M401.14,426.68c-91.17,23.95-194.5-23.58-206.13,0"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-4"
                d="M398.64,439.68c-74.95,20.89-169.91-26.15-202,0"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-3"
                d="M396.14,448.85c-75.25,27.59-152.6-29.78-197.37,0"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-3"
                d="M392.18,459.19c-63,26.7-149-30.46-189.08,0"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-1"
                d="M386.47,470.13c-74.54,14.1-150.25-30.72-177.67,0"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-3"
                d="M382.51,476.24c-72.13,13.73-142.65-25.49-169.75,0"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-3"
                d="M376.34,484.22c-82.48,15.28-87.89-23.34-157.4,0"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-4"
                d="M368.71,492.24c-67.22,8.49-97.51-23.7-142.14,0"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-3"
                d="M360.43,499.27c-19.06,6.54-72.86-15.47-125.59,0"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-3"
                d="M355.67,503.22c-24.66,5.65-61.19-8.6-115.27.53"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-1"
                d="M282.18,297.36c-17.72-25.44,9.72-76.22-8.58-93.72"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-1"
                d="M295.77,295.44c-17.06-18.22,11.57-56.13-6.27-68.51"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-1"
                d="M309.59,296.69C293,283.87,322.53,255.6,305,247"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-1"
                d="M322.81,298.16c-16.1-7.75,14.24-27-2.93-32"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-1"
                d="M370.41,321c6.8-30.24,62.8-44.28,63.34-69.6"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-1"
                d="M381,329.74c1.93-24.88,49.22-29.36,46.31-50.88"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-1"
                d="M389.41,340.78c-1.73-20.87,39.06-18.19,33.56-36.87"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-1"
                d="M397.25,351.53c-5.15-17.12,29.53-7.73,21.61-23.74"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-1"
                d="M196.72,348c-30.67-4.51-48.86-59.3-74.15-57.95"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-1"
                d="M204.64,336.78c-25-.06-33-46.88-54.21-42.37"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-1"
                d="M215,327.57C194.33,330.85,194,290,175.73,296.86"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-1"
                d="M225.14,318.94c-16.68,6.42-9.91-28.86-25.29-19.76"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-1"
                d="M420.65,399.55c25.54-17.57,76.16,10.17,93.76-8"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-1"
                d="M422.49,413.16c18.32-17,56.07,11.88,68.55-5.89"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-1"
                d="M421.16,427c12.91-16.49,41,13.18,49.68-4.26"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-1"
                d="M419.62,440.18c7.84-16.06,26.91,14.39,32-2.74"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-1"
                d="M175.79,438.05c-25.38,17.8-76.25-9.5-93.69,8.86"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-1"
                d="M173.83,424.47c-18.16,17.11-56.16-11.4-68.49,6.47"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-1"
                d="M175,410.64c-12.77,16.61-41.13-12.82-49.64,4.7"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-1"
                d="M176.47,397.42c-7.7,16.12-27-14.16-31.95,3"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-1"
                d="M396.73,491.47c30.16,7.19,43.46,63.36,68.77,64.24"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-1"
                d="M387.86,501.94c24.86,2.25,28.72,49.6,50.28,47"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-1"
                d="M376.71,510.2c20.9-1.45,17.69,39.29,36.44,34"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-1"
                d="M365.87,517.9c17.18-4.92,7.34,29.63,23.45,21.92"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-1"
                d="M224,520c-7.85,30-64.3,42-65.73,67.34"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-1"
                d="M213.7,510.85c-2.8,24.8-50.22,27.62-48.06,49.23"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-1"
                d="M205.68,499.52c1,20.92-39.67,16.82-34.83,35.68"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-1"
                d="M198.22,488.51c4.55,17.28-29.78,6.69-22.42,23"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-1"
                d="M319.87,537.9c18.46,24.9-7.49,76.47,11.32,93.42"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-1"
                d="M306.34,540.21c17.58,17.71-9.92,56.45,8.28,68.3"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-1"
                d="M292.49,539.36c16.93,12.33-11.74,41.46,6,49.5"
                transform="translate(-81.38 -202.92)"
            />
            <path
                class="cls-1"
                d="M279.23,538.28c16.32,7.28-13.44,27.41,3.86,31.87"
                transform="translate(-81.38 -202.92)"
            />
          </svg>
        </div>
        <div class="moonwitch-header">
          moonwitch
        </div>
      </div>
      <div class="link-container third">
        <NuxtLink to="dev/">
          <div class="link-box" ref="developer">
            <div class="text">
              the dev
            </div>
            <icon-angle-right class="icon" />
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#tsparticles {
  display: block;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.landing-container {
  height: 100dvh;
  overflow: hidden;
  background: $a-primary-transparent;
  display: flex;

  .third {
    width: 33.33333%;
    color: $a-text-dark;
    font-size: 23px;


    @media (min-width: 710px) {
      font-size: 40px;
    }

    @media (min-width: 1024px) {
      font-size: 50px;
    }
  }

  .icon {
    font-size: 26px;
    color: $text-dark;

    @media (min-width: 710px) {
      font-size: 50px;
    }

    @media (min-width: 1024px) {
      font-size: 65px;
    }
  }

  .banner-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  .link-container {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in-out;
    border-radius: 5px;

    a {
      color: $text-dark;
      text-decoration: none;
      margin-left: 0.5rem;
    }

    .text {
      white-space: nowrap;
    }

    &:hover {
        background: $a-secondary;

      .link-box {
        gap: 1rem;
        color: white;
      }
    }

    .link-box {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100dvh;
      gap: 0;
      transition: 0.2s ease-in-out;
    }
  }

  .moonwitch-header {
    color: $a-text-dark;
    font-size: 35px;
    margin-top: 15rem;
    letter-spacing: 0.2rem;
    text-align: center;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateX(-50%) translateY(-40%);

    @media (min-width: 710px) {
      font-size: 40px;
      margin-top: 15rem;
    }

    @media (min-width: 1440px) {
      position: static ;
      transform: none;
      font-size: 80px;
      margin-top: 2rem;
    }
  }

  .sol-container {
    text-align: center;
    margin-bottom: 25rem;

    @media (min-width: 1440px) {
      margin: 0;
    }

    .sol {
      width: 8rem;
      transform: rotateX(180deg) rotate(-90deg);

      @media (min-width: 710px) {
        width: 15rem;
      }

      @media (min-width: 1440px) {
        width: 25rem;
      }

      .cls-1,
      .cls-3,
      .cls-4 {
        fill: none;
      }

      .cls-1,
      .cls-2,
      .cls-3,
      .cls-4 {
        stroke: $a-sun;
        stroke-miterlimit: 10;
      }

      .cls-1 {
        stroke-width: 2px;
      }

      .cls-2 {
        fill: transparent;
      }

      .cls-4 {
        stroke-width: 0.75px;
      }
    }
  }
}
</style>

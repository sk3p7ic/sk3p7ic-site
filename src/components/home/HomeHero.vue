<template>
  <div
    class="h-screen flex items-center hero-img"
    :class="{ 'justify-center text-center': props.centered }"
    :style="{
      'background-position-y':
        windowWidth > 768 ? imgScrollOffset + 'px' : '0px',
    }"
  >
    <div class="w-full lg:w-1/2 flex flex-col gap-2 px-2 mx-2 lg:mx-8">
      <div
        class="flex flex-col gap-8 px-4 py-8 xl:px-4 lg:py-24 bg-gray-900 text-gray-100 rounded-lg bg-opacity-80"
      >
        <h1 class="font-inter text-6xl lg:text-7xl xl:text-8xl font-bold">
          You need a website that&apos;s
          <span class="text-fuchsia-600">impactful</span>.
        </h1>
        <h3 class="font-inter text-2xl lg:text-6xl">
          Let me help you with that.
        </h3>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
        <button
          @click="contactScroll()"
          class="p-4 bg-cyan-400 font-inter font-semibold text-xl text-center rounded-lg hover:bg-cyan-300 transition-all bg-opacity-90 hover:opacity-100 cursor-pointer"
        >
          Contact Me
        </button>
        <a
          href="/projects"
          class="p-4 bg-cyan-100 font-inter font-semibold text-xl text-center rounded-lg hover:bg-cyan-300 transition-all bg-opacity-75 hover:opacity-100 cursor-pointer"
        >
          View My Work
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onDeactivated, onMounted, ref } from "@vue/runtime-core";

const props = defineProps({ centered: Boolean });

const windowWidth = ref(window.innerWidth);
const imgScrollOffset = ref(0);

const handleResize = (e) => {
  windowWidth.value = window.innerWidth;
};

const handleScroll = (e) => {
  imgScrollOffset.value = window.top.scrollY * -0.25;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleResize);
});

onDeactivated(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", handleResize);
});

const contactScroll = () => {
  document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
};
</script>

<style scoped>
.hero-img {
  --background-url: url("../../assets/hero-bg-portrait.jpg");
  background-image: var(--background-url);
  background-attachment: scroll;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
}

@media (min-width: 768px) {
  .hero-img {
    background-attachment: fixed;
  }
}

@media (min-width: 1024px) {
  .hero-img {
    --background-url: url("../../assets/hero-bg-landscape.jpg");
  }
}
</style>

<template>
  <div class="h-screen flex items-center hero-img">
    <!-- Background image courtesy of: https://unsplash.com/photos/J6AVrCvRki0?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink -->
    <div class="w-full lg:w-1/2 flex flex-col gap-2 px-2 mx-2 lg:mx-8">
      <div
        class="flex flex-col gap-8 px-4 py-8 xl:px-4 lg:py-24 bg-gray-900 text-gray-100 rounded-lg"
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
        <a
          class="p-4 bg-cyan-400 font-inter font-semibold text-xl text-center rounded-lg"
        >
          Contact Me
        </a>
        <a
          class="p-4 border bg-cyan-50 border-cyan-400 text-cyan-800 font-inter font-semibold text-xl text-center rounded-lg"
        >
          View My Work
        </a>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.hero-img {
  --background-url: url("../../assets/hero-bg-landscape.jpg");
  background-image: var(--background-url);
  background-repeat: no-repeat;
  background-size: cover;
}

@media (min-width: 768px) {
  .hero-img {
    --background-url: url("../../assets/hero-bg-landscape.jpg");
  }
}
</style>

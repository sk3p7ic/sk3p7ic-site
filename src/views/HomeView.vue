<template>
  <div class="bg-gray-100 text-gray-800">
    <HomeHero centered />
    <TechnologyDividerSection />
    <Services />

    <div
      class="flex flex-col gap-6 px-4 py-8 border-t-2 border-t-gray-800 text-center shadow-inner"
    >
      <h1 class="font-inter font-extrabold text-5xl">Like what you see?</h1>
      <a
        href="/contact"
        class="mx-auto py-4 px-8 font-inter font-bold text-lg bg-cyan-300 hover:bg-cyan-400 rounded-xl transition-all cursor-pointer"
        >Reach Out and Contact Me</a
      >
    </div>
  </div>
  <SiteFooter />
</template>

<script setup>
import HomeHero from "../components/home/HomeHero.vue";
import TechnologyDividerSection from "../components/home/TechnologyDividerSection.vue";
import Services from "../components/home/Services.vue";
import SiteFooter from "../components/SiteFooter.vue";
</script>

<style></style>

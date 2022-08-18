<template>
  <div class="bg-gray-100 text-gray-800">
    <HomeHero centered />
    <TechnologyDividerSection />
    <Services />

    <div
      id="contact"
      class="flex flex-col gap-6 px-4 py-8 border-t-2 border-t-gray-800 shadow-inner items-center"
    >
      <h1 class="font-inter font-extrabold text-5xl">Like what you see?</h1>
      <contact />
    </div>
  </div>
  <site-footer />
</template>

<script setup>
import HomeHero from "../components/home/HomeHero.vue";
import TechnologyDividerSection from "../components/home/TechnologyDividerSection.vue";
import Services from "../components/home/Services.vue";
import SiteFooter from "../components/SiteFooter.vue";
import Contact from "../components/home/Contact.vue";
</script>

<style></style>

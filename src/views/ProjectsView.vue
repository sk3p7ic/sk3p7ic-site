<template>
  <div class="bg-gray-100 text-gray-800 pt-24 md:pt-48 px-4 md:px-8 lg:px-36">
    <h1 class="font-inter font-extrabold text-8xl">
      See what I&apos;ve been up to.
    </h1>
    <div class="my-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
      <template v-for="(project, index) in ProjectList" :key="index">
        <project-card :info="project" />
      </template>
    </div>
  </div>
  <site-footer />
</template>

<script setup>
import SiteFooter from "../components/SiteFooter.vue";

import ProjectList from "../assets/projects/projects.json";
import ProjectCard from "../components/projects/ProjectCard.vue";
</script>

<style></style>

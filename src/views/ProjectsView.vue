<template>
  <div
    class="bg-gray-100 text-gray-800 pt-24 md:pt-48 px-4 md:px-8 xl:px-36 flex flex-col"
  >
    <h1
      class="pb-3 font-inter font-extrabold text-6xl lg:text-8xl border-b-2 border-b-gray-800"
    >
      See what I&apos;ve been up to.
    </h1>
    <div class="my-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
      <template v-for="(project, index) in projects" :key="index">
        <project-card :info="project" />
      </template>
    </div>
  </div>
  <site-footer />
</template>

<script setup>
import SiteFooter from "../components/SiteFooter.vue";

import ProjectCard from "../components/projects/ProjectCard.vue";
import { ref } from "@vue/reactivity";

const projects = ref([]);

const getProjects = async () => {
  const rawProjects = await fetch(
    "https://sk3p7ic-backend.herokuapp.com/api/projects"
  );
  const projectData = Object.values(await rawProjects.json());
  projects.value = projectData;
};

getProjects();
</script>

<style></style>

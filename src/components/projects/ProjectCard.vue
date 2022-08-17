<template>
  <div class="flex-grow flex flex-col bg-gray-200 rounded-md">
    <div class="relative w-full h-auto">
      <img
        :src="getImgSrc()"
        alt="Project screenshot / render"
        class="rounded-t-md"
      />
      <div class="absolute bottom-2 right-2 flex flex-row gap-2">
        <template
          v-for="({ url, tooltip }, index) in getGithubLinks()"
          :key="index"
        >
          <a :href="url" class="relative bg-gray-900 p-1 rounded-full group">
            <GithubIcon class="fill-cyan-500" />
            <div
              class="absolute left-1/2 -translate-x-1/2 bottom-3 items-center hidden mb-6 group-hover:flex flex-col"
            >
              <span
                class="relative z-10 p-2 text-xs leading-none text-gray-100 whitespace-no-wrap bg-gray-900 shadow-lg"
                >{{ tooltip }}</span
              >
              <div class="w-3 h-3 -mt-2 rotate-45 bg-gray-900"></div>
            </div>
          </a>
        </template>
      </div>
    </div>
    <div class="flex-grow flex flex-col px-4 py-2 gap-2">
      <div class="flex flex-row justify-between items-center">
        <h1 class="font-inter font-bold text-2xl">{{ info.title }}</h1>
        <p class="w-min h-min px-2 bg-cyan-400 capitalize rounded-full">
          {{ info.type }}
        </p>
      </div>
      <div class="flex flex-row flex-wrap gap-2">
        <template
          v-for="([techFullName, techName], index) in info.techs"
          :key="index"
        >
          <tech-chip :techName="techName">{{ techFullName }}</tech-chip>
        </template>
      </div>
      <p class="flex-grow">{{ info.description }}</p>
      <a
        v-if="deployedLink"
        :href="deployedLink.url"
        target="_blank"
        rel="noreferrer noopener"
        class="p-2 bg-cyan-400 text-center font-inter font-bold text-xl border-2 border-cyan-800 hover:bg-cyan-600 hover:text-gray-50 cursor-pointer rounded-md transition-all"
        >View Project</a
      >
    </div>
  </div>
</template>

<script setup>
import TechChip from "./techChips/TechChip.vue";
import { GithubIcon } from "vue3-simple-icons";
const props = defineProps({ info: Object });
const info = props.info;
const deployedLink = info.links.find(({ type }) => type === "deployed");

const getImgSrc = () => {
  return `https://sk3p7ic-backend.herokuapp.com/${info.headerImgSrc}`;
};

const getGithubLinks = () => {
  return info.links.filter(({ type }) => type === "github-repo");
};
</script>

<style></style>

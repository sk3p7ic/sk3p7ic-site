<template>
  <div class="flex flex-col">
    <div class="relative w-full h-48">
      <img :src="info.headerImgSrc" />
    </div>
    <h1>{{ info.title }}</h1>
    <div>
      <template
        v-for="([techFullName, techName], index) in info.techs"
        :key="index"
      >
        <tech-chip :techName="techName">{{ techFullName }}</tech-chip>
      </template>
    </div>
  </div>
</template>

<script setup>
import TechChip from "./techChips/TechChip.vue";
defineProps({ info: Object });
</script>

<style></style>

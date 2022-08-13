<script setup>
import { RouterView } from "vue-router";
import MainNavbar from "./components/MainNavbar.vue";
</script>

<template>
  <div class="w-screen h-screen flex flex-col">
    <MainNavbar />
    <RouterView
      class="flex-grow-1 max-h-screen overflow-auto bg-gray-100 text-gray-800"
    />
  </div>
</template>

<style scoped></style>

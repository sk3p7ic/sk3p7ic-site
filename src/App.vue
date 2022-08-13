<script setup>
import { RouterView } from "vue-router";
import MainNavbar from "./components/MainNavbar.vue";
</script>

<template>
  <div class="w-screen h-screen flex flex-col">
    <MainNavbar />
    <RouterView class="flex-grow-1 max-h-screen overflow-auto" />
  </div>
</template>

<style scoped></style>

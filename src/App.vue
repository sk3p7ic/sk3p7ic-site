<script setup>
import { RouterView } from "vue-router";
import MainNavbar from "./components/MainNavbar.vue";
</script>

<template>
  <div class="w-screen h-screen flex flex-col">
    <MainNavbar />
    <RouterView />
  </div>
</template>

<style scoped></style>

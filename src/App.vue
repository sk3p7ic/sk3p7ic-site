<script setup>
import { RouterView } from "vue-router";
import MainNavbar from "./components/MainNavbar.vue";
</script>

<template>
  <div class="font-nunito">
    <MainNavbar />
    <RouterView />
  </div>
</template>

<style scoped></style>

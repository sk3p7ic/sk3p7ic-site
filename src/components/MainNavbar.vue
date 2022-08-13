<template>
  <nav class="w-screen px-72 py-2 font-inter">
    <div class="flex flex-row justify-between items-center">
      <h1 class="text-3xl font-extrabold">sk3p7ic</h1>
      <ul class="flex flex-row gap-4">
        <li v-for="(page, index) of pages" :key="index">
          <a
            :href="page.href"
            :class="{ active: page.name === $route.name }"
            class="text-lg"
            >{{ page.title }}</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const pages = ref([
  { href: "/", name: "home", title: "Home" },
  { href: "/projects", name: "projects", title: "Projects" },
  { href: "/about", name: "about", title: "About" },
  { href: "/contact", name: "contact", title: "Contact" },
]);
</script>

<style scoped>
.active {
  @apply underline;
}
</style>

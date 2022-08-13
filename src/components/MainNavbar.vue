<template>
  <nav
    class="w-screen px-4 lg:px-24 xl:px-72 py-2 lg:py-4 font-inter bg-gray-800 text-gray-100"
  >
    <div class="flex flex-row justify-between items-center">
      <h1 class="text-3xl font-extrabold text-fuchsia-400">sk3p7ic</h1>
      <ul class="hidden md:flex flex-row gap-4">
        <template v-for="(page, index) of pages" :key="index">
          <li
            :class="{ active: page.name === $route.name }"
            class="px-3 py-1 rounded-lg transition-colors"
          >
            <a
              :href="page.href"
              :class="{ 'hover:text-fuchsia-400': page.name !== $route.name }"
              class="text-lg transition-colors"
              >{{ page.title }}</a
            >
          </li>
        </template>
      </ul>
      <Popover class="block md:hidden">
        <PopoverButton
          class="p-1 rounded-md text-fuchsia-400 border border-fuchsia-300 focus:text-cyan-400"
        >
          <MenuIcon class="w-8 h-8" />
        </PopoverButton>
        <PopoverPanel
          class="absolute left-0 top-14 w-screen z-10 p-4 bg-gray-900"
        >
          <template v-for="(page, index) of pages" :key="index">
            <a
              :class="{ active: page.name === $route.name }"
              class="block my-2 px-3 py-1 rounded-lg transition-colors"
            >
              <span
                :href="page.href"
                :class="{
                  'hover:text-fuchsia-400': page.name !== $route.name,
                }"
                class="text-lg transition-colors"
                >{{ page.title }}</span
              >
            </a>
          </template>
        </PopoverPanel>
      </Popover>
    </div>
  </nav>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { MenuIcon } from "@heroicons/vue/outline";
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
  @apply bg-cyan-400 text-gray-800 hover:bg-cyan-500;
}
</style>

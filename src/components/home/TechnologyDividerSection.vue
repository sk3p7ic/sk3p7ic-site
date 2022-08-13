<template>
  <div class="w-full bg-gray-900 text-gray-100 py-8">
    <h2 class="px-2 pb-8 font-inter font-bold text-3xl text-center">
      Experienced in the industry standards.
    </h2>
    <div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 align-center"
    >
      <div
        v-for="(tech, index) of techs"
        :key="index"
        class="flex flex-col items-center gap-2"
      >
        <component :is="tech.icon" class="fill-gray-100 w-14 h-14" />
        <p>{{ tech.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import {
  AngularIcon,
  FlutterIcon,
  MongodbIcon,
  NodedotjsIcon,
  ReactIcon,
  VuedotjsIcon,
} from "vue3-simple-icons";

const techs = ref([
  { icon: ReactIcon, name: "React" },
  { icon: AngularIcon, name: "Angular" },
  { icon: VuedotjsIcon, name: "Vue" },
  { icon: NodedotjsIcon, name: "Node.js" },
  { icon: MongodbIcon, name: "MongoDB" },
  { icon: FlutterIcon, name: "Flutter" },
]);
</script>

<style></style>

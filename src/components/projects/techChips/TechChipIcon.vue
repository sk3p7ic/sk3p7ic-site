<template>
  <component :is="icon" class="w-6 h-6 rounded-full p-1 bg-fuchsia-300" />
</template>

<script setup>
import { CodeIcon } from "@heroicons/vue/outline";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import {
  AngularIcon,
  BootstrapIcon,
  MongodbIcon,
  NodedotjsIcon,
  ReactIcon,
  TailwindcssIcon,
  TypescriptIcon,
} from "vue3-simple-icons";

const props = defineProps({ techName: String });

const icon = ref(CodeIcon);

const matchTech = () => {
  switch (props.techName) {
    case "angular":
      icon.value = AngularIcon;
      break;
    case "boostrap":
      icon.value = BootstrapIcon;
      break;
    case "mongodb":
      icon.value = MongodbIcon;
      break;
    case "node":
      icon.value = NodedotjsIcon;
      break;
    case "react":
      icon.value = ReactIcon;
      break;
    case "tailwind":
      icon.value = TailwindcssIcon;
      break;
    case "typescript":
      icon.value = TypescriptIcon;
      break;
    default:
      icon.value = CodeIcon;
      break;
  }
};

onMounted(() => {
  matchTech();
});
</script>

<style></style>

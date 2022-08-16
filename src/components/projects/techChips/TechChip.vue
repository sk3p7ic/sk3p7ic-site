<template>
  <div
    class="pr-2 rounded-full bg-fuchsia-400 flex flex-row items-center gap-2"
  >
    <tech-chip-icon :tech-name="techName" />
    <slot></slot>
  </div>
</template>

<script setup>
import TechChipIcon from "./TechChipIcon.vue";
defineProps({ techName: String });
</script>

<style></style>

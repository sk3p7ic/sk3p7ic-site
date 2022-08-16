<template>
  <div>
    <tech-chip-icon :tech-name="techName" />
    <slot></slot>
  </div>
</template>

<script setup>
import TechChipIcon from "./TechChipIcon.vue";
defineProps({ techName: String });
</script>

<style></style>

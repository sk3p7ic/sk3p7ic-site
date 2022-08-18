<template>
  <button class="relative group" @click="onClick()" @mouseleave="onLeave()">
    <clipboard-copy-icon class="w-6 h-6" />
    <div
      class="absolute left-1/2 -translate-x-1/2 bottom-3 items-center hidden mb-6 group-hover:flex flex-col"
    >
      <span
        class="relative w-max z-10 p-2 text-xs leading-none text-gray-100 whitespace-no-wrap bg-gray-900 shadow-lg"
        >{{ tooltipText }}</span
      >
      <div class="w-3 h-3 -mt-2 rotate-45 bg-gray-900"></div>
    </div>
  </button>
</template>

<script setup>
import { ClipboardCopyIcon } from "@heroicons/vue/outline";
import { ref } from "@vue/reactivity";

const props = defineProps({ copyValue: String, tooltipText: String });

const tooltipText = ref(props.tooltipText ?? "Copy");

const onClick = async () => {
  await navigator.clipboard.writeText(props.copyValue);
  tooltipText.value = "Copied!";
};

const onLeave = () => {
  tooltipText.value = props.tooltipText ?? "Copy";
};
</script>

<style></style>

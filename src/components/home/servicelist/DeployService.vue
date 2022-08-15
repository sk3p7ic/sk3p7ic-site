<template>
  <div id="service-deploy" class="relative mt-4 px-4 pt-16">
    <div
      class="absolute top-0 left-4 w-14 h-14 rounded-full bg-gray-900 text-fuchsia-400 font-telex text-xl text-center flex justify-center items-center"
    >
      <span>3</span>
    </div>
    <div class="flex flex-col lg:flex-row gap-2 lg:gap-4">
      <CloudIcon class="w-48 h-48 fill-cyan-400" />
      <div class="px-6 lg:p-4">
        <h1 class="font-inter font-bold text-3xl">Deploy</h1>
        <h3 class="font-inter text-lg border-b-2 border-b-gray-800 mb-2">
          Have an idea in your head that you&apos;re wanting turned into
          something you can show others?
        </h3>
        <ul class="list-disc pl-6">
          <li>Reach out to me and I can help work with you to do just that.</li>
          <li>
            I&apos;ll help design your website or other project in Figma, to
            include versions for both mobile and desktop.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CloudIcon } from "@heroicons/vue/outline";
</script>

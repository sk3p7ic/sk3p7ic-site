<template>
  <div id="service-develop" class="relative mt-4 px-4 pt-16">
    <div
      class="absolute top-0 left-4 lg:left-auto lg:right-4 w-14 h-14 rounded-full bg-gray-900 text-fuchsia-400 font-telex text-xl text-center flex justify-center items-center"
    >
      <span>2</span>
    </div>
    <div class="flex flex-col lg:flex-row gap-2 lg:gap-4 lg:justify-end">
      <DesktopComputerIcon class="block lg:hidden w-48 h-48 fill-cyan-400" />
      <div class="px-6 lg:p-4">
        <h1 class="font-inter font-bold text-3xl">Develop</h1>
        <h3 class="font-inter text-lg border-b-2 border-b-gray-800 mb-2">
          Do you already have a design made and need someone to build it?<br />
          Are you looking to turn an idea into a built product?
        </h3>
        <ul class="list-disc pl-6">
          <li>
            I can work with pre-made designs or help design something new and
            build it for you.
          </li>
          <li>
            I&apos;ll work with you to build out your product just the way you
            like. That&apos;s the way it should be.
          </li>
          <li>
            I can assist with building out your frontend (what others see), as
            well the backend of your website, such as a database, if the project
            requires.
          </li>
        </ul>
      </div>
      <DesktopComputerIcon class="hidden lg:block w-48 h-48 fill-cyan-400" />
    </div>
  </div>
</template>

<script setup>
import { DesktopComputerIcon } from "@heroicons/vue/outline";
</script>

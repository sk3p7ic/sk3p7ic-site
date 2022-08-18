<template>
  <div
    id="services"
    class="p-4 xl:px-24 xl:py-8 bg-gradient-to-br from-cyan-400 to-fuchsia-400 via-blue-500"
  >
    <h1 class="font-inter font-bold text-3xl text-center">
      Need help building your dream?
    </h1>
    <div
      class="py-4 xl:py-8 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-12 xl:gap-24"
    >
      <a
        @click="scrollTo('#service-design')"
        class="group p-4 flex flex-col items-center bg-gray-200 hover:bg-gray-50 border-4 border-gray-800 rounded-xl transition-all cursor-pointer"
      >
        <TemplateIcon
          class="w-1/4 xl:w-1/5 group-hover:w-1/4 fill-cyan-400 transition-all"
        />
        <h2
          class="font-inter font-extrabold text-2xl group-hover:scale-110 group-hover:text-fuchsia-600 transition-all"
        >
          Design
        </h2>
        <p class="text-center text-lg">
          Collaborate with me an allow me to help design your website or other
          products.
        </p>
      </a>
      <a
        @click="scrollTo('#service-develop')"
        class="group p-4 flex flex-col items-center bg-gray-200 hover:bg-gray-50 border-4 border-gray-800 rounded-xl transition-all cursor-pointer"
      >
        <DesktopComputerIcon
          class="w-1/4 xl:w-1/5 group-hover:w-1/4 fill-cyan-400 transition-all"
        />
        <h2
          class="font-inter font-extrabold text-2xl group-hover:scale-110 group-hover:text-fuchsia-600 transition-all"
        >
          Develop
        </h2>
        <p class="text-center text-lg">
          Allow me to take either a render / design of a website or an idea and
          turn it into reality.
        </p>
      </a>
      <a
        @click="scrollTo('#service-deploy')"
        class="group p-4 flex flex-col items-center bg-gray-200 hover:bg-gray-50 border-4 border-gray-800 rounded-xl transition-all cursor-pointer"
      >
        <CloudIcon
          class="w-1/4 xl:w-1/5 group-hover:w-1/4 fill-cyan-400 transition-all"
        />
        <h2
          class="font-inter font-extrabold text-2xl group-hover:scale-110 group-hover:text-fuchsia-600 transition-all"
        >
          Deploy
        </h2>
        <p class="text-center text-lg">
          Let me assist you with deploying your product online so that others
          may see your awesome product.
        </p>
      </a>
    </div>
  </div>
  <div class="py-8 md:px-8 xl:px-48">
    <DesignService />
    <DevelopService />
    <DeployService />
  </div>
</template>

<script setup>
import {
  TemplateIcon,
  DesktopComputerIcon,
  CloudIcon,
} from "@heroicons/vue/outline";
import DesignService from "./servicelist/DesignService.vue";
import DevelopService from "./servicelist/DevelopService.vue";
import DeployService from "./servicelist/DeployService.vue";

const scrollTo = (elemId) => {
  document.querySelector(elemId).scrollIntoView({ behavior: "smooth" });
};
</script>

<style></style>

<template>
  <div class="flex flex-col gap-4 w-fit">
    <h2 class="font-inter font-bold text-3xl">Contact Me.</h2>
    <ul class="flex flex-col gap-2">
      <li>
        <a href="mailto:joshuaibrom@gmail.com" class="icon">
          <mail-icon class="w-8 h-8"
        /></a>
        <a class="link-content" href="mailto:joshuaibrom@gmail.com">
          <strong>Email:</strong>
          <span class="flex-grow">joshuaibrom@gmail.com</span>
        </a>
        <tooltip-button
          copy-value="joshuaibrom@gmail.com"
          tooltip-text="Copy Email Address"
        />
      </li>
      <li v-for="(social, index) in socials" :key="index">
        <a
          :href="social.link"
          target="_blank"
          rel="noreferrer noopener"
          class="icon"
        >
          <component :is="social.icon" class="w-8 h-8 p-1 fill-gray-900" />
        </a>
        <a
          class="link-content"
          :href="social.link"
          target="_blank"
          rel="noreferrer noopener"
        >
          <strong>{{ social.site }}:</strong>
          <span>
            {{ social.username }}
          </span>
        </a>
        <a :href="social.link" target="_blank" rel="noreferrer noopener"
          ><external-link-icon class="w-6 h-6"
        /></a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { MailIcon, ExternalLinkIcon } from "@heroicons/vue/outline";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "vue3-simple-icons";
import TooltipButton from "../TooltipButton.vue";

const socials = [
  {
    icon: GithubIcon,
    site: "Github",
    username: "@sk3p7ic",
    link: "https://github.com/sk3p7ic/",
  },
  {
    icon: LinkedinIcon,
    site: "LinkedIn",
    username: "@Joshua-Ibrom",
    link: "https://www.linkedin.com/in/joshua-ibrom",
  },
  {
    icon: TwitterIcon,
    site: "Twitter",
    username: "@FizzedMr",
    link: "https://twitter.com/fizzedmr",
  },
];
</script>

<style scoped>
li {
  @apply text-lg flex flex-row items-center gap-2 border-2 border-gray-900 rounded-xl p-2 transition-all;
}

li:hover {
  @apply bg-gradient-to-r from-fuchsia-400 to-purple-400 scale-110;
}

.link-content {
  @apply flex-grow grid grid-cols-1 md:grid-cols-2;
}
</style>

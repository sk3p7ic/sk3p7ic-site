<template>
  <div class="w-full bg-gray-900 text-gray-100 py-8">
    <h2 class="px-2 pb-8 font-inter font-bold text-3xl text-center">
      Experienced in the industry standards.
    </h2>
    <div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-10 align-center"
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
import {
  AngularIcon,
  BootstrapIcon,
  FigmaIcon,
  FirebaseIcon,
  FlutterIcon,
  GitIcon,
  LinuxIcon,
  MongodbIcon,
  NodedotjsIcon,
  ReactIcon,
  TailwindcssIcon,
  VuedotjsIcon,
} from "vue3-simple-icons";

const techs = [
  { icon: ReactIcon, name: "React" },
  { icon: AngularIcon, name: "Angular" },
  { icon: VuedotjsIcon, name: "Vue" },
  { icon: NodedotjsIcon, name: "Node.js" },
  { icon: MongodbIcon, name: "MongoDB" },
  { icon: FlutterIcon, name: "Flutter" },
  { icon: TailwindcssIcon, name: "Tailwind CSS" },
  { icon: BootstrapIcon, name: "Bootstrap" },
  { icon: FirebaseIcon, name: "Firebase" },
  { icon: LinuxIcon, name: "Linux" },
  { icon: GitIcon, name: "Git" },
  { icon: FigmaIcon, name: "Figma" },
];
</script>

<style></style>

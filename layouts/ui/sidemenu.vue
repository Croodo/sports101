<script setup>
import { categories } from "~/assets/json/categories";
import accordion from "~/components/features/accordion.vue";
components: {
  accordion;
}
</script>
<template>
  <div class="h-screen overflow-y-auto px-8">
    <div class="h-fit flex items-center font-semibold text-2xl mb-7">
      <img src="/ic/android-chrome-192x192.png" class="w-full -ml-8" />
    </div>
    <div class="text-lg text-zinc-400">
      <div class="text-zinc-900 dark:text-zinc-200 py-4 font-semibold">
        केटेगरीस
      </div>
      <div v-for="(cat, index) in categories" :key="index" class="py-4">
        <accordion :cat="cat"></accordion>
      </div>
    </div>
    <div class="md:mt-6 mb-24 lg:mb-0">
      <div class="text-zinc-900 dark:text-zinc-200 py-4 font-semibold">
        सप्पोर्टस
      </div>

      <ul class="flex flex-col gap-2 my-6 text-lg">
        <li class="hover:text-zinc-700">
          <NuxtLink to="/about">About Us</NuxtLink>
        </li>
        <li class="hover:text-zinc-700">
          <NuxtLink to="/privay">Privacy Policy</NuxtLink>
        </li>
        <li class="hover:text-zinc-700">
          <NuxtLink to="/terms">Terms Of Services</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
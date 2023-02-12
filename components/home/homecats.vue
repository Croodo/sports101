<script setup>
import moment from "moment/min/moment-with-locales";
moment.locale("hi");
const nums = {
  "०": 0,
  "१": 1,
  "२": 2,
  "३": 3,
  "४": 4,
  "५": 5,
  "६": 6,
  "७": 7,
  "८": 8,
  "९": 9,
};
function rep(str) {
  return moment(str)
    .fromNow()
    .replace(/./g, (d) => {
      return Object.keys(nums).some((n) => n === d) ? nums[d] : d;
    });
}
const { category } = defineProps({
  category: {},
});
const uri = "/api/blog/home/maincategory/" + category;
const { data: list } = await useFetch(uri);
</script>
<template>
  <div class="my-7">
    <h2 class="text-xl font-bold mb-6 text-teal-500">{{ list.category }}</h2>
    <ul class="sidelist grid gap-5">
      <li v-for="(data, index) in list.posts" :key="index" class="relative">
        <div class="flex items-center flex-row-reverse justify-between">
          <NuxtLink
            :to="`/${data.maincategoryurl}/${data.seourl}`"
            class="w-[30%] ml-6"
            ><img :src="data.heroimg" class="rounded"
          /></NuxtLink>
          <div class="w-[70%]">
            <span class="text-zinc-400 pb-1 inline-block">
              {{ rep(data.date) }}
            </span>
            <NuxtLink
              :to="`/${data.maincategoryurl}/${data.seourl}`"
              class="text-lg font-semibold line-clamp-2"
              >{{ data.headline }}</NuxtLink
            >
            <p class="text-base text-zinc-500 my-2 line-clamp-2">
              {{ data.headline }}
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div></div>
</template>
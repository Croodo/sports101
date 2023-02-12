<script setup>
import IconGooglenews from "~~/components/icons/IconGooglenews.vue";
import { categories } from "~~/assets/json/categories";
components: {
  IconGooglenews;
}
const route = useRoute();

const openMenu = useState("menu", () => true);
watch(route, () => {
  openMenu.value = true;
});
</script>
<template>
  <div
    class="h-16 flex items-center border-b border-zinc-100 dark:border-black"
  >
    <!-- Header Top -->
    <div class="w-[90%] m-auto flex justify-between relative z-50">
      <div class="font-semibold text-2xl">
        <div>
          <NuxtLink to="/"
            >Sports
            <span class="font-black text-teal-500 text-2xl italic"
              >101</span
            ></NuxtLink
          >
        </div>
      </div>
      <div class="">
        <ul class="flex items-center gap-3 text-zinc-500">
          <li
            class="
              border border-zinc-600
              rounded-full
              px-3
              py-1.5
              text-zinc-900
              flex
              items-center
              text-xs
              font-medium
              hover:bg-slate-800 hover:text-white
              dark:text-zinc-100
            "
          >
            <IconGooglenews
              class="mr-2"
              :height="20"
              :width="20"
            ></IconGooglenews>
            Follow Us
          </li>
          <li>
            <Icon name="lucide:facebook" size="22"></Icon>
          </li>
          <li>
            <Icon name="lucide:twitter" size="22"></Icon>
          </li>
          <li><Icon name="lucide:instagram" size="22"></Icon></li>
        </ul>
      </div>
    </div>
  </div>
  <!-- Header menu -->
  <div
    class="h-9 lg:h-12 flex items-center mb-5 lg:mb-8 relative overflow-hidden"
  >
    <div
      class="
        absolute
        top-0
        -left-6
        h-9
        lg:h-12
        w-[22%]
        bg-white
        dark:bg-zinc-900
        -skew-x-12
        z-10
      "
    ></div>
    <div
      class="
        absolute
        top-0
        -right-6
        h-9
        lg:h-12
        w-[22%]
        bg-white
        dark:bg-zinc-900
        -skew-x-12
        z-10
      "
    ></div>
    <div
      class="w-[90%] m-auto flex justify-between items-center relative italic"
    >
      <div @click="openMenu = !openMenu" class="mr-5">
        <span v-if="openMenu == true">
          <Icon
            name="material-symbols:menu-open"
            size="auto"
            class="relative z-20 transition-all w-7 h-7 lg:w-9 lg:h-9"
          ></Icon
        ></span>
        <span v-else>
          <Icon
            name="material-symbols:close"
            size="auto"
            class="relative z-20 transition-all w-7 h-7 lg:w-9 lg:h-9"
          ></Icon
        ></span>
      </div>
      <div class="overflow-x-auto">
        <ul
          class="
            flex
            gap-6
            uppercase
            font-medium
            text-sm
            md:text-base
            lg:text-xl
          "
        >
          <li v-for="(cat, index) in categories" :key="index" class="">
            <NuxtLink :to="`/${cat.url}`">{{ cat.name }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <Icon
          name="mingcute:search-line"
          size="auto"
          class="relative z-20 w-6 h-6 lg:w-7 lg:h-7"
        ></Icon>
      </div>
    </div>
  </div>
</template>
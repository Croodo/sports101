<script setup>
const { cat } = defineProps({
  cat: {},
});
const show = ref(false);
</script>
<template>
  <div
    class=""
    :class="{
      'text-teal-500 dark:text-white  bg-teal-50 dark:bg-zinc-800 rounded-lg px-3 py-1 -mx-3 -my-1':
        show,
      ' ': !show,
    }"
  >
    <div
      v-if="Object.keys(cat.subcategories).length > 0"
      class="w-full block"
      @click="show = !show"
    >
      <Icon :name="`${cat.icon}`" class="mr-4" size="28"></Icon>
      {{ cat.name }}
      <Icon
        name="ion:chevron-down"
        size="25"
        class="float-right mt-1"
        :class="{
          ' rotate-180': show,
          ' ': !show,
        }"
      ></Icon>
    </div>
    <NuxtLink
      v-else
      :to="`/${cat.url}`"
      class="block w-full hover:text-zinc-700"
      ><Icon :name="`${cat.icon}`" class="mr-4" size="28"></Icon>
      {{ cat.name }}
    </NuxtLink>
  </div>
  <Transition>
    <div v-if="show">
      <div
        class="
          ml-4
          mt-6
          flex flex-col
          gap-6
          border-l-2 border-zinc-200
          dark:border-zinc-700
        "
      >
        <div
          v-for="(subcat, index) in cat.subcategories"
          :key="index"
          class="pl-8 hover:text-zinc-700"
        >
          <NuxtLink :to="`/${subcat.url}`">{{ subcat.name }}</NuxtLink>
        </div>
      </div>
    </div></Transition
  >
</template>
<style>
</style>
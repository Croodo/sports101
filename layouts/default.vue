<script setup>
import mainFooter from "./ui/mainFooter.vue";
import MainHeader from "./ui/mainHeader.vue";
import sidemenu from "./ui/sidemenu.vue";
components: {
  MainHeader, mainFooter, sidemenu;
}
const route = useRoute();
const openMenu = useState("menu", () => true);
watch(route, () => {
  openMenu.value = true;
});
</script>
<template>
  <div class="flex">
    <div
      class="
        md:h-[100vh]
        z-40
        flex
        justify-between
        md:items-center
        fixed
        transition-all
      "
    >
      <!-- <span><Icon name="uil:windows" size="26" /></span> -->
      <div
        class="
          border-r border-slate-200
          dark:border-black
          relative
          h-[100vh]
          bg-white
          dark:bg-zinc-900
          w-[260px]
          overflow-y-auto
        "
        :class="{
          ' hidden': openMenu,
          ' visible   overflow-x-hidden': !openMenu,
        }"
      >
        <div>
          <sidemenu></sidemenu>
        </div>
      </div>

      <!-- <div class="flex flex-col space-y-3">
        <Icon name="mdi:twitter" size="20" class="text-blue-300" />
        <Icon name="mdi:facebook" size="20" class="text-sky-300" />
        <Icon name="mdi:instagram" size="20" class="text-pink-300" />
      </div> -->
    </div>

    <div
      class="transition-all grow relative"
      :class="{
        'lg:ml-[0px]': openMenu,
        ' ml-[280px] lg:ml-[260px] overflow-hidden': !openMenu,
      }"
    >
      <div v-if="!openMenu">
        <div
          class="absolute top-0 right-0 bottom-0 left-0"
          @click="openMenu = !openMenu"
        ></div>
      </div>
      <main-header></main-header>

      <div class="w-[90%] m-auto"><slot /></div>
      <main-footer></main-footer>
    </div>
  </div>
</template>
<script setup>
</script>
<template>
  <div class="w-[90%] m-auto">
    <div
      class="
        lg:flex
        py-10
        border-y border-zinc-200
        dark:border-zinc-800
        lg:justify-between
      "
    >
      <div class="">
        <div class="font-semibold text-4xl">
          Sports
          <span class="font-black text-teal-500 text-4xl italic">101</span>
        </div>
        <p class="my-7 max-w-96">
          विराट कोहली महाकाव्य के रूप में तीसरे एकदिवसीय बनाम श्रीलंका से भारत
          के खिलाड़ी की रेटिंग मेन इन ब्लू को व्यापक सफेदी
        </p>
        <ul
          class="
            block
            lg:flex
            gap-6
            font-medium
            space-y-3
            lg:space-y-0
            my-6
            lg:my-0
          "
        >
          <li><NuxtLink to="/about">About Us</NuxtLink></li>
          <li><NuxtLink to="/privacy">Privacy Policy</NuxtLink></li>
          <li><NuxtLink to="/terms">Terms Of Services</NuxtLink></li>
        </ul>
      </div>
      <!-- <div>
        <p class="font-medium my-4">Get the app</p>
        <div
          class="border border-zinc-800 rounded-lg flex px-2 py-1 items-center"
        >
          <Icon name="ion:logo-google-playstore" size="22" class="mr-2" />
          <div class="flex flex-col">
            <span class="text-[10px]">GET IT ON</span>
            <span class="-mt-1 font-semibold">Google Play</span>
          </div>
        </div>
      </div> -->
    </div>
    <div class="flex h-20 m-auto items-center justify-between">
      <div class="text-zinc-600">© 2023 Sports9 All Right Reserved</div>
      <div class="flex gap-4">
        <ul class="flex items-center gap-5 text-zinc-800 dark:text-zinc-100">
          <li>
            <Icon name="mdi:facebook-box" size="22"></Icon>
          </li>
          <li>
            <Icon name="lucide:twitter" size="22"></Icon>
          </li>
          <li><Icon name="lucide:instagram" size="22"></Icon></li>
        </ul>
      </div>
    </div>
  </div>
</template>
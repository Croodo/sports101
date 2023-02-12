<script setup>
const url = ref(null);
let res = useState("res", () => null);
async function fetchPost() {
  let uri = url.value.replace("https://www.sportskeeda.com/", "");

  $fetch("https://ai1.wowoomen.com/sportskeeda/" + uri, {
    method: "GET",
  }).then((response) => {
    if (response.success) {
      res.value = "Post Added!";
    } else if (!response.success) {
      res.value = "Data Already Exist!";
    } else {
      res.value = "Something Wrong Fetch Other Post!";
    }
    // res.value = response;
  });
}
</script>
<template>
  <div class="flex justify-center h-[60vh]">
    <div class="w-[70%] m-auto mt-28">
      <form class="my-6 relative flex gap-6" v-on:submit.prevent>
        <input
          type="text"
          class="
            lg:prose-2xl
            block
            w-full
            rounded-none rounded-r-md
            border-gray-300
            focus:border-none
          "
          @keyup.enter="submit"
          v-model="url"
        />
        <button
          @click="fetchPost"
          class="
            w-fit
            px-6
            py-2
            text-lg
            bg-teal-500
            rounded-md
            text-white
            font-medium
            hover:bg-teal-700
          "
        >
          Fetch
        </button>
      </form>

      <div v-if="res === null && url !== null">Wait</div>
      <div v-else-if="res !== null && url !== null">{{ res }}</div>
    </div>
  </div>
</template>
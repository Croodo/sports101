<script setup>
// import totalcount from "~~/components/test/totalcount.vue";
definePageMeta({
  layout: false,
});

const { category, subcategory, slug } = useRoute().params;
const route = useRoute();
const uri2 = "/api/blog/post/" + slug;
const { data: post } = await useFetch(uri2);
let body = post.value.body
  .replace(/\n?<p/g, "\n<p")
  .replace(/\n?<h2/g, "\n<h2")
  .replace(/\n?<h3/g, "\n<h3")
  .replace(/\n?<div/g, "\n<div");
function addReview() {
  $fetch("/api/blog/post/update", {
    method: "post",
    body: {
      seourl: post.value.seourl,
      title: post.value.title,
      headline: post.value.headline,
      shortdesc: post.value.shortdesc,
      body: body,
    },
  });
}

// let allcats = ref();
// function fetchCats() {
//   $fetch(`/api/blog/categories/sub`, {
//     method: "GET",
//   }).then((response) => {
//     return (allcats.value = response.categories);
//   });
// }
let deleteRes = ref();
function deletePost() {
  $fetch(deleteuri, {
    method: "DELETE",
  }).then((response) => {
    return (deleteRes.value = "Post Deleted");
  });
}
const indexuri =
  "https://www.wowoomen.com/" + category + "/" + subcategory + "/" + slug;
let indexRes = ref();
function indexing() {
  $fetch(`https://blogapi.appzype.com/quickindex?url=${indexuri}`, {
    method: "GET",
  }).then((response) => {
    return (indexRes.value = response);
  });
}

const textareaRef = ref(null);

watch(textareaRef, (el) => {
  el.style.height = "auto";
  el.style.height = el.scrollHeight + "px";
});
useHead({
  meta: [
    {
      name: "robots",
      content: `noindex`,
    },
  ],
});
</script>
<template>
  <div class="ml-11 w-full">
    <div class="flex-col-1 lg:flex gap-7">
      <div class="w-full lg:w-[65%] pt-10">
        <div class="mb-6">
          <NuxtLink :to="`/${category}/${slug}`">
            <Icon name="material-symbols:arrow-back" size="22" class="mr-1" />
            Back To Post</NuxtLink
          >
        </div>
        <form
          class="relative"
          @submit="addReview"
          :action="`https://www.wowoomen.com/${category}/${slug}`"
          method="post"
          id="editForm"
        >
          <div class="">
            <div class="text-5xl h-full overflow-auto">
              <textarea
                ref="textareaRef"
                class="
                  text-2xl
                  lg:text-5xl
                  font-extrabold
                  break-words
                  block
                  w-full
                  border-transparent
                  focus:border-transparent focus:ring-0
                  pb-6
                "
                placeholder="Title is Empty"
                v-model="post.title"
              ></textarea>
            </div>
            <div class="text-5xl h-full overflow-auto">
              <textarea
                ref="textareaRef"
                class="
                  lg:prose-2xl
                  block
                  w-full
                  border-transparent
                  focus:border-transparent focus:ring-0
                  font-bold
                "
                placeholder="Hedline is Empty"
                v-model="post.headline"
              ></textarea>
            </div>
            <div class="text-5xl h-full overflow-auto">
              <textarea
                ref="textareaRef"
                class="
                  lg:prose-xl
                  block
                  w-full
                  border-transparent
                  focus:border-transparent focus:ring-0
                "
                placeholder="Description is Empty"
                v-model="post.shortdesc"
              ></textarea>
            </div>

            <div class="h-full overflow-auto">
              <textarea
                ref="textareaRef"
                class="
                  lg:prose-lg
                  w-full
                  border-transparent
                  focus:border-transparent focus:ring-0
                  sm:text-sm
                "
                v-model="body"
              ></textarea>
            </div>
          </div>
        </form>
      </div>
      <div
        class="
          lg:px-7 lg:border-l
          w-full
          lg:w-[28%] lg:fixed lg:top-0 lg:right-0 lg:bottom-0
        "
      >
        <div class="flex gap-2 mt-6">
          <div>
            <!-- bbb -->
            <button
              class="
                inline-flex
                justify-center
                rounded-sm
                text-white
                border border-transparent
                bg-sky-500
                hover:bg-sky-600
                py-2
                px-3
                text-sm
                font-medium
              "
              type="submit"
              form="editForm"
              value="Update"
            >
              Save
            </button>
          </div>
          <div>
            <button
              class="
                inline-flex
                justify-center
                rounded-sm
                text-white
                border border-transparent
                bg-blue-300
                hover:bg-blue-400
                py-2
                px-3
                text-sm
                font-medium
              "
              @click="indexing"
            >
              Send Index Req
            </button>
          </div>
          <div>
            <button
              @click="deletePost"
              class="
                inline-flex
                justify-center
                rounded-sm
                text-white
                border border-transparent
                bg-red-300
                hover:bg-red-400
                py-2
                px-3
                text-sm
                font-medium
              "
            >
              Delete
            </button>
          </div>
        </div>

        <div class="bg-slate-50 p-3 mt-6">
          <p class="my-5 break-words transition-all">{{ indexRes }}</p>
          <p class="my-5 break-words transition-all">{{ deleteRes }}</p>
        </div>
        <!-- <button @click="fetchCats">fetchcats</button> -->
        <!-- <select class="form-select px-4 py-3 rounded-full" v-model="scat">
        <optgroup v-for="(data, index) in allcats" :key="index">
          <option v-for="(cat, i) in data" :key="i" v-bind:value="cat">
            {{ cat.name }}
          </option>
        </optgroup>
      </select> -->
      </div>
    </div>
  </div>
</template>
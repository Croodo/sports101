<script setup>
import "lazysizes";
import moment from "moment/min/moment-with-locales";

// import "moment/min/locales";
import Related from "~/components/slug/related.vue";

components: {
  Related;
}
moment.locale("en");

const { category, slug } = useRoute().params;
const route = useRoute();
const uri = "/api/blog/post/" + slug;
// const { data: post } = await useFetch(uri);
const { pending, data: post } = await useLazyAsyncData("post", () =>
  $fetch(uri)
);

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
}
const title = post.value.title;

useHead({
  title,
});
//extra
const wpm = 225;
const words = post.value.body.trim().split(/\s+/).length;
const readtime = Math.ceil(words / wpm);

const pubDate = moment(post.value.date).format("Do MMMM YYYY");
</script>
<template>
  <div class="loading-container m-auto flex-grow w-full" v-if="pending">
    <div class="loading animate-pulse">
      <span></span><span></span><span></span>
    </div>
  </div>
  <div v-else class="pageContent">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-14">
      <div>
        <ul
          class="
            font-medium
            text-base
            md:text-xl
            lg:text-lg
            flex
            text-teal-500
            gap-3
            breadcumb
            relative
          "
        >
          <li>
            <nuxt-link :to="`/`"> SE</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="`/${post.maincategoryurl}`">
              {{ post.maincategory }}</nuxt-link
            >
          </li>
        </ul>
        <h1
          class="
            heading
            text-lg
            leading-7
            lg:leading-[65px]
            md:text-4xl
            lg:text-6xl
            font-black
            lg:font-bold
            mt-3
            lg:mt-5
            mb-2
          "
        >
          {{ post.headline }}
        </h1>

        <!-- Author -->
        <div class="py-2 lg:mt-7">
          <div class="flex items-center">
            <img
              src="https://static.wowoomen.com/assets/images/author/ritika-sen.webp"
              class="rounded-full h-10 w-10 mr-3 ring-1 ring-teal-500 p-0.5"
            />
            <div class="flex flex-col">
              <span class="font-medium text-base md:text-lg">
                <em>by:</em> {{ post.author.name }}</span
              >
              <p class="text-zinc-400 flex gap-3 text-sm">
                <span>{{ pubDate }} </span> -
                <span class=""> {{ readtime }}min read</span>
              </p>
            </div>
          </div>
        </div>
        <!-- Author end-->
      </div>
      <div>
        <img
          :src="`${post.heroimg}`"
          :alt="`${post.title}`"
          class="rounded-xl lg:rounded-3xl"
        />
      </div>
    </div>
    <div class="lg:flex my-5 lg:my-12">
      <div class="w-full lg:w-[50%] text-xl leading-10 article">
        <div class="social flex justify-between mb-5 items-center">
          <span class="text-zinc-600 text-base">आर्टिकल को शेयर करे</span>
          <ul class="flex space-x-3 justify-end text-zinc-600 items-center">
            <li class="hover:scale-125">
              <a
                :href="`https://www.facebook.com/sharer/sharer.php?u=https://www.wowoomen.com${route.path}`"
                target="blank"
                title="Facebook"
              >
                <Icon name="ion:social-facebook" size="20"
              /></a>
            </li>
            <li class="hover:scale-125">
              <a
                :href="`http://www.twitter.com/share?url=https://www.wowoomen.com${route.path}`"
                target="blank"
                title="Twitter"
              >
                <Icon name="ion:social-twitter" size="20"
              /></a>
            </li>
            <li class="hover:scale-125">
              <a
                :href="`whatsapp://send?text=https://www.wowoomen.com${route.path}`"
                title="Whatsapp"
                ><Icon name="ion:social-whatsapp" size="20"
              /></a>
            </li>
          </ul>
        </div>
        <div
          class="
            prose prose-zinc
            dark:prose-invert
            lg:prose-xl
            md:prose-lg
            first-letter:text-5xl
            lg:first-letter:text-6xl
            first-letter:mr-3 first-letter:float-left
          "
          v-html="post.body"
        ></div>
        <p
          class="text-sm italic text-right text-slate-500 mt-4"
          v-if="post.imgcredit != ``"
        >
          <span>Image Credit -</span>
          <span class="" v-html="post.imgcredit"></span>
        </p>
        <!-- <div
          class="
            animateView
            flex
            gap-4
            mt-7
            border-t border-slate-200
            pt-6
            font-semibold
            italic
          "
        >
          FOLLOW US ON:
          <a
            :href="`https://news.google.com/publications/CAAqBwgKML73xgsw8ZLeAw?hl=en-IN&gl=IN&ceid=IN%3Aen`"
            target="blank"
            title="WoWoomen on Google News"
            class="
              text-sm
              font-medium
              py-1
              px-3
              rounded-full
              border border-slate-300
              flex
              items-center
              justify-center
              hover:bg-slate-900 hover:text-white hover:scale-105
            "
          >
            <IconsGooglenews
              :width="24"
              :height="24"
              class="inline mr-2"
            ></IconsGooglenews>
            Google News
          </a>
        </div> -->
      </div>
      <div
        class="
          w-full
          mt-8
          lg:mt-8 lg:w-[33%]
          rounded-3xl
          h-fit
          lg:ml-20 lg:sticky lg:top-12
        "
      >
        <div>
          <Related :id="post._id" :maincat="post.maincategoryurl"></Related>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.breadcumb li:nth-child(1) {
  @apply list-none;
}
.breadcumb li {
  @apply list-disc list-inside;
}
</style>
<script setup>
import hometop from "~~/components/home/hometop.vue";
import homecats from "~~/components/home/homecats.vue";
import sidemenu from "~/layouts/ui/sidemenu.vue";

components: {
  hometop, homecats, sidemenu;
}
const title =
  "स्पोर्ट्स न्यूज़, लाइव स्कोर, एक्सपर्ट ओपिनियन, गेमिंग न्यूज़ और इवेंट्स";
const description =
  "स्पोर्ट्स न्यूज़, लाइव स्कोर, एक्सपर्ट ओपिनियन, गेमिंग न्यूज़, टिप्स और इवेंट्स की जानकारी हिंदी में।";
useHead({
  title,
  meta: [
    {
      name: "description",
      content: description,
    },
    {
      name: "robots",
      content: `index, follow`,
    },
  ],
});
</script>
<template>
  <div>
    <hometop category="latest" title="लेटेस्ट"></hometop>
    <div class="grid lg:grid-cols-2 gap-14">
      <div><homecats category="cricket"></homecats></div>
      <div><homecats category="esports"></homecats></div>
    </div>
    <hometop category="esports" title="गेमिंग"></hometop>
  </div>
</template>
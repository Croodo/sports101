const categories = {
  cricket: {
    name: "क्रिकेट",
    url: "cricket",
    title: "क्रिकेट न्यूज़, लाइव अपडेट्स, हाइलाइट्स हिंदी में",
    description:
      "डेली क्रिकेट स्कोर, क्रिकेट न्यूज़, लाइव अपडेट्स और हाइलाइट्स हिंदी में प्राप्त करें।",
    icon: "emojione-monotone:cricket-game",
    subcategories: {},
  },

  esports: {
    name: "गेमिंग",
    url: "esports",
    title: "गेमिंग न्यूज़, टिप्स, गेमिंग इवेंट और अपडेट्स",
    description:
      "गेमिंग न्यूज़, टिप्स, गेमिंग इवेंट और अपडेट्स की जानकारी हिंदी में प्राप्त करें।",
    icon: "material-symbols:sports-esports-outline-rounded",

    subcategories: {
      "free-fire": {
        name: "फ्री फायर",
        url: "free-fire",
        maincaturl: "esports",
        title: "फ्री फायर फ्री डायमंड रिडीम कोड, फ्री स्किन्स, और टिप्स",
        description:
          "फ्री फायर फ्री डायमंड रिडीम कोड, फ्री स्किन्स, टिप्स और फ्री फायर इवेंट की जानकारी हिंदी में प्राप्त करें।",
      },
      pubg: {
        name: "PUBG",
        url: "pubg",
        maincaturl: "esports",
        title: "PUBG न्यूज़, उपदटेस, और इवेंट्स",
        description:
          "PUBG न्यूज़, उपदटेस, और इवेंट्स की जानकारी हिंदी में प्राप्त करें।",
      },
      bgmi: {
        name: "BGMI",
        url: "bgmi",
        maincaturl: "esports",
        title: "BGMI न्यूज़, उपदटेस, और इवेंट्स",
        description:
          "BGMI न्यूज़, उपदटेस, और इवेंट्स की जानकारी हिंदी में प्राप्त करें।",
      },
      minecraft: {
        name: "माइनक्राफ्ट",
        url: "minecraft",
        maincaturl: "esports",
        title: "माइनक्राफ्ट न्यूज़ और अपडेट्स",
        description:
          "माइनक्राफ्ट न्यूज़, अपडेट्स, वीडियोस, टिप्स और इवेंट की जानकारी हिंदी में प्राप्त करें।",
      },
    },
  },
  football: {
    name: "फुटबॉल",
    url: "football",
    title: "फुटबॉल न्यूज़, लाइव अपडेट्स, हाइलाइट्स हिंदी में",
    description:
      "डेली फुटबॉल स्कोर, फुटबॉल न्यूज़, लाइव अपडेट्स और हाइलाइट्स हिंदी में प्राप्त करें।",
    icon: "maki:soccer",
    subcategories: {},
  },

  tennis: {
    name: "टेनिस",
    url: "tennis",
    title: "टेनिस न्यूज़, लाइव अपडेट्स, हाइलाइट्स हिंदी में",
    description:
      "डेली टेनिस स्कोर, टेनिस न्यूज़, लाइव अपडेट्स और हाइलाइट्स हिंदी में प्राप्त करें।",
    icon: "gg:tennis",
    subcategories: {},
  },

  mma: {
    name: "MMA",
    url: "mma",
    title: "MMA न्यूज़, हाइलाइट्स हिंदी में",
    description: "MMA न्यूज़ और हाइलाइट्स हिंदी में प्राप्त करें।",
    icon: "fluent-emoji-high-contrast:martial-arts-uniform",
    subcategories: {},
  },
  hockey: {
    name: "हॉकी",
    url: "hockey",
    title: "हॉकी न्यूज़, लाइव अपडेट्स, हाइलाइट्स हिंदी में",
    description:
      "डेली हॉकी स्कोर, हॉकी न्यूज़, लाइव अपडेट्स और हाइलाइट्स हिंदी में प्राप्त करें।",
    icon: "fluent:sport-hockey-24-regular",
    subcategories: {},
  },
};

const subcates = {
  "free-fire": {
    name: "फ्री फायर",
    url: "free-fire",
    maincaturl: "esports",
    title: "फ्री फायर फ्री डायमंड रिडीम कोड, फ्री स्किन्स, और टिप्स",
    description:
      "फ्री फायर फ्री डायमंड रिडीम कोड, फ्री स्किन्स, टिप्स और फ्री फायर इवेंट की जानकारी हिंदी में प्राप्त करें।",
  },
};
export { categories, subcates };

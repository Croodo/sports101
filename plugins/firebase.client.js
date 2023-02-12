import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: "AIzaSyD3orOzM6y_7EFDCrO3H2o4dB1FW1ngtfs",
    authDomain: "sportsapp-nuxt.firebaseapp.com",
    projectId: "sportsapp-nuxt",
    storageBucket: "sportsapp-nuxt.appspot.com",
    messagingSenderId: "637520664617",
    appId: "1:637520664617:web:0f0964bd371cb318166438",
  };

  const app = initializeApp(firebaseConfig);

  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const firestore = getFirestore(app);
});

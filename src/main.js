import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueApexCharts from 'vue3-apexcharts';
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';
import { createPinia } from 'pinia';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import "./assets/tailwind.css";
import "./assets/animate.css";
import "./assets/sass/css/windzo.css";


const firebaseConfig = {
  apiKey: "AIzaSyByY6dik1H-_8b88pLbTXOp3mSiQajxVPE",
  authDomain: "bookrite.firebaseapp.com",
  databaseURL: "https://bookrite-default-rtdb.firebaseio.com",
  projectId: "bookrite",
  storageBucket: "bookrite.appspot.com",
  messagingSenderId: "785534236212",
  appId: "1:785534236212:web:b1496e0a39868ea4e3fc61"
};

const firebaseApp = initializeApp(firebaseConfig);
console.log('Firebase app initialized:', firebaseApp);

const db = getFirestore(firebaseApp);
console.log('Firebase app initialized:', firebaseApp);

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.provide('firestore', db);
app.use(VueApexCharts);
app.use(PerfectScrollbar);
app.mount('#app');

export { db };



// resources/app.js

require('./bootstrap');

import { createApp } from 'vue';
import salesconnection from './components/SalesConnection.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';
import PrimeVue from 'primevue/config';
import ButtonClick from "primevue/button";

const app = createApp({
    components: {
        HelloVue,About,ButtonClick,Home,salesconnection
    }
}).use(PrimeVue)
    
app.component('ButtonClick', ButtonClick);
app.mount('#app');
app.mount('#home');
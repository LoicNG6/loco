require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import router from './router/index.js';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css';
import '../css/app.scss';
import axios from "axios";


Vue.prototype.$axios = axios;

Vue.use(VueRouter);
Vue.use(Vuetify);

const app = new Vue({
    el: '#app',
    router: router,
    vuetify: new Vuetify(),
    components: {
        "app": App,
    },
    icons: 'mdi',

});

app.$mount()
require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import router from './router/index.js';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'

Vue.use(VueRouter);
Vue.use(Vuetify);

const app = new Vue({
    el: '#app',
    router: router,
    vuetify: new Vuetify(),
    components: {
        "home": App,
    },
});

app.$mount()
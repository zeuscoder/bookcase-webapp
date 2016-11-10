// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import router from './router';
import store from './store/store';

Vue.use(VueRouter);

new Vue(Vue.util.extend({ router, store }, App)).$mount('#app');

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import axios from 'axios';
import store from 'store';
import App from './App';

import router from './router.js';

import './common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.prototype.axios = axios;

/* eslint-disable no-new */

let app = Vue.extend(App);
// router.start(app, '#app');

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(app)
});

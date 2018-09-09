// Promise polyfill for webpack2+: https://stackoverflow.com/questions/38960490/how-can-i-polyfill-promise-with-webpack
require('es6-promise').polyfill();
import 'normalize.css';
import 'babel-polyfill';
import Vue from 'vue';
import VueMaterial from 'vue-material'
import Router from 'vue-router';
import VueMobx from 'vue-mobx';
import {isObservable, observable, toJS} from 'mobx';
import moment from 'moment';
import sprintf from 'sprintf';
import App from './general/app/app.vue';
import 'vue-material/dist/vue-material.min.css';

import {mixins as lem} from "./utils/mixins";

Vue.filter('truncateNumber', (numb: number, digits = 0) => {
  return Math.floor(numb * Math.pow(10, digits)) / Math.pow(10, digits);
});
Vue.filter('fromSatoshi', (numb: number) => {
  return numb / 1e8;
});

Vue.filter('decimalZeroPad', (numb: number, howMany: number) => {
  return sprintf.sprintf(`%.0${howMany}f`, numb);
})
Vue.filter('timestampRelative', (timestamp: number) => {
  return moment.utc(new Date(Date.UTC(2016, 4, 24, 17, 0, 0, 0))).add(timestamp, 'seconds')
    .fromNow();
});
Vue.mixin({
  data: () => ({lem})
});
Vue.use(VueMaterial)
Vue.use(VueMobx, {
  toJS,
  isObservable,
  observable
});

const env = process.env.NODE_ENV || 'development';

if (env !== 'development') {
  Vue.config.devtools = false;
  Vue.config.productionTip = false;
}


Vue.use(Router);

// dynamic import for on-demand loaded chunk
const Home = (r: any) => require.ensure([], () => r(require('./components/home/home.vue')), 'home');
const Faqs = (r: any) => require.ensure([], () => r(require('./components/faqs/faqs.vue')), 'faqs');
// const Compose = (r: any) => require.ensure([], () => r(require('./components/compose/compose.vue')), 'compose');



const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {path: '', component: Home},
        {path: '/faqs', component: Faqs},
      ],
    },
  ],
});


const app = new Vue({
  router,
  template: `<router-view></router-view>`

});

app.$mount('#app');

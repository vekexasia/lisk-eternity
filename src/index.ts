// Promise polyfill for webpack2+: https://stackoverflow.com/questions/38960490/how-can-i-polyfill-promise-with-webpack
require('es6-promise').polyfill();
import 'normalize.css';
import 'babel-polyfill';
import Vue from 'vue';
import VueMaterial from 'vue-material'
import Router from 'vue-router';
import VueMobx from 'vue-mobx';
import { observable, isObservable, toJS } from 'mobx';
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css';

import { mixins as lem } from "./utils/mixins";

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
const App = (r: any) => require.ensure([], () => r(require('./general/app/index.vue')), 'app1');
const Info = (r: any) => require.ensure([], () => r(require('@components/info/index.vue')), 'info');

const Outer = { template: '<router-view></router-view>' };

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Outer,
            children: [
                { path: '', component: App },
                { path: 'info', component: Info },
            ],
        },
    ],
});


const app = new Vue({
    router,
    ...Outer,
});

app.$mount('#app');

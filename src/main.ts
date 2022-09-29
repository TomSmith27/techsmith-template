import Vue from 'vue'
import App from './App.vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import routes from '~pages'
import VueRouter from "vue-router";
const pinia = createPinia()

const router = new VueRouter({
  routes // short for `routes: routes`
})
Vue.use(VueRouter)
Vue.use(PiniaVuePlugin)
new Vue({
  pinia,
  router,
  render: (h) => h(App),
}).$mount('#app')
